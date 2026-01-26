import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, LogOut, Users, Clock, CheckCircle, XCircle, Loader2, RefreshCw, Briefcase, Download } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
}

interface JobApplication {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  position: string;
  department: string;
  message: string | null;
  resume_url: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthAndAdmin();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAuthAndAdmin = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/login");
      return;
    }

    // Check if user is admin
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id);

    const hasAdminRole = roles?.some(r => r.role === "admin");
    
    if (!hasAdminRole) {
      toast.error("You don't have admin access");
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    setIsAdmin(true);
    await Promise.all([fetchRequests(), fetchApplications()]);
  };

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching requests:", error);
      toast.error("Failed to load demo requests");
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching applications:", error);
      toast.error("Failed to load job applications");
    } else {
      setApplications(data || []);
    }
  };

  const updateDemoStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("demo_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
      return;
    }

    toast.success(`Status updated to ${status}`);
    fetchRequests();
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("job_applications")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
      return;
    }

    toast.success(`Status updated to ${status}`);
    fetchApplications();
  };

  const downloadResume = async (resumeUrl: string, applicantName: string) => {
    const { data, error } = await supabase.storage
      .from("resumes")
      .createSignedUrl(resumeUrl, 60);

    if (error || !data) {
      toast.error("Failed to download resume");
      return;
    }

    window.open(data.signedUrl, "_blank");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const refreshAll = async () => {
    setLoading(true);
    await Promise.all([fetchRequests(), fetchApplications()]);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You don't have admin privileges.</p>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(200_92%_45%)] flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CyberEye Admin</h1>
              <p className="text-xs text-muted-foreground">Management Dashboard</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{requests.length}</p>
                <p className="text-xs text-muted-foreground">Demo Requests</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{applications.length}</p>
                <p className="text-xs text-muted-foreground">Job Applications</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {requests.filter(r => r.status === "pending").length + applications.filter(a => a.status === "pending").length}
                </p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {requests.filter(r => r.status === "contacted").length + applications.filter(a => a.status === "reviewed" || a.status === "hired").length}
                </p>
                <p className="text-xs text-muted-foreground">Processed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="demos" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="demos">Demo Requests</TabsTrigger>
              <TabsTrigger value="applications">Job Applications</TabsTrigger>
            </TabsList>
            <Button onClick={refreshAll} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Demo Requests Tab */}
          <TabsContent value="demos">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {requests.length === 0 ? (
                <div className="p-8 text-center">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No demo requests yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Company</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">Phone</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Date</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((request) => (
                        <tr key={request.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground">{request.name}</td>
                          <td className="px-4 py-3 text-sm text-foreground">{request.email}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{request.company || "-"}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">{request.phone || "-"}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === "pending" ? "bg-yellow-500/10 text-yellow-500" :
                              request.status === "contacted" ? "bg-success/10 text-success" :
                              "bg-muted text-muted-foreground"
                            }`}>
                              {request.status || "pending"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                            {format(new Date(request.created_at), "MMM dd, yyyy")}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs"
                                onClick={() => updateDemoStatus(request.id, "contacted")}
                              >
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs"
                                onClick={() => updateDemoStatus(request.id, "closed")}
                              >
                                <XCircle className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Job Applications Tab */}
          <TabsContent value="applications">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {applications.length === 0 ? (
                <div className="p-8 text-center">
                  <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No job applications yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Position</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">Department</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Resume</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Date</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map((app) => (
                        <tr key={app.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground">{app.name}</td>
                          <td className="px-4 py-3 text-sm text-foreground">{app.email}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.position}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">{app.department}</td>
                          <td className="px-4 py-3">
                            {app.resume_url ? (
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs"
                                onClick={() => downloadResume(app.resume_url!, app.name)}
                              >
                                <Download className="w-3 h-3 mr-1" />
                                Download
                              </Button>
                            ) : (
                              <span className="text-xs text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              app.status === "pending" ? "bg-yellow-500/10 text-yellow-500" :
                              app.status === "reviewed" ? "bg-primary/10 text-primary" :
                              app.status === "interviewed" ? "bg-purple-500/10 text-purple-500" :
                              app.status === "hired" ? "bg-success/10 text-success" :
                              app.status === "rejected" ? "bg-destructive/10 text-destructive" :
                              "bg-muted text-muted-foreground"
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                            {format(new Date(app.created_at), "MMM dd, yyyy")}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs"
                                onClick={() => updateApplicationStatus(app.id, "reviewed")}
                                title="Mark as Reviewed"
                              >
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs text-success"
                                onClick={() => updateApplicationStatus(app.id, "hired")}
                                title="Mark as Hired"
                              >
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost" 
                                className="h-7 px-2 text-xs text-destructive"
                                onClick={() => updateApplicationStatus(app.id, "rejected")}
                                title="Mark as Rejected"
                              >
                                <XCircle className="w-3 h-3" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;