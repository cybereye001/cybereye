import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, LogOut, Users, Clock, CheckCircle, XCircle, Loader2, RefreshCw, Briefcase, Download, Mail, Search, MessageSquare } from "lucide-react";
import logo from "@/assets/logo.png";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<{ title: string; content: string } | null>(null);
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
    await Promise.all([fetchRequests(), fetchApplications(), fetchContactMessages()]);
  };

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("demo_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
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
      toast.error("Failed to load job applications");
    } else {
      setApplications(data || []);
    }
  };

  const fetchContactMessages = async () => {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load contact messages");
    } else {
      setContactMessages(data || []);
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

  const updateContactStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
      return;
    }

    toast.success(`Status updated to ${status}`);
    fetchContactMessages();
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
    await Promise.all([fetchRequests(), fetchApplications(), fetchContactMessages()]);
    setLoading(false);
  };

  const parseEmployees = (message: string | null) => {
    if (!message) return "-";
    const match = message.match(/Employees:\s*(.+)/i);
    return match ? match[1] : message;
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

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.company || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredApplications = applications.filter(a =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    a.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContactMessages = contactMessages.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CyberEye Logo" className="h-10 w-auto object-contain" />
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
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
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{contactMessages.length}</p>
                <p className="text-xs text-muted-foreground">Contact Messages</p>
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
                  {requests.filter(r => r.status === "pending").length + applications.filter(a => a.status === "pending").length + contactMessages.filter(c => c.status === "unread").length}
                </p>
                <p className="text-xs text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {requests.filter(r => r.status === "contacted").length + applications.filter(a => a.status === "reviewed" || a.status === "hired").length + contactMessages.filter(c => c.status === "replied").length}
                </p>
                <p className="text-xs text-muted-foreground">Processed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="demos" className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <TabsList>
              <TabsTrigger value="demos">Demo Requests</TabsTrigger>
              <TabsTrigger value="applications">Job Applications</TabsTrigger>
              <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 w-48 h-9 bg-muted border-border"
                />
              </div>
              <Button onClick={refreshAll} variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Demo Requests Tab */}
          <TabsContent value="demos">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {filteredRequests.length === 0 ? (
                <div className="p-8 text-center">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No demo requests found</p>
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
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">Employees</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Date</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredRequests.map((request) => (
                        <tr key={request.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground font-medium">{request.name}</td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            <a href={`mailto:${request.email}`} className="text-primary hover:underline">{request.email}</a>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{request.company || "-"}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">{request.phone || "-"}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">
                            <span className="px-2 py-1 rounded bg-muted text-xs">{parseEmployees(request.message)}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === "pending" ? "bg-yellow-500/10 text-yellow-500" :
                              request.status === "contacted" ? "bg-green-500/10 text-green-500" :
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
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => updateDemoStatus(request.id, "contacted")} title="Mark Contacted">
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => updateDemoStatus(request.id, "closed")} title="Close">
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
              {filteredApplications.length === 0 ? (
                <div className="p-8 text-center">
                  <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No job applications found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Phone</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Position</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">Department</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden lg:table-cell">Message</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Resume</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Date</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApplications.map((app) => (
                        <tr key={app.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground font-medium">{app.name}</td>
                          <td className="px-4 py-3 text-sm">
                            <a href={`mailto:${app.email}`} className="text-primary hover:underline">{app.email}</a>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.phone || "-"}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.position}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">{app.department}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden lg:table-cell">
                            <span
                              className="line-clamp-2 max-w-[200px] cursor-pointer hover:text-foreground transition-colors"
                              onClick={() => app.message && setSelectedMessage({ title: `Cover Letter - ${app.name}`, content: app.message })}
                              title={app.message ? "Click to read full message" : ""}
                            >
                              {app.message || "-"}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {app.resume_url ? (
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => downloadResume(app.resume_url!, app.name)}>
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
                              app.status === "hired" ? "bg-green-500/10 text-green-500" :
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
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => updateApplicationStatus(app.id, "reviewed")} title="Mark as Reviewed">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-green-500" onClick={() => updateApplicationStatus(app.id, "hired")} title="Mark as Hired">
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-destructive" onClick={() => updateApplicationStatus(app.id, "rejected")} title="Reject">
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

          {/* Contact Messages Tab */}
          <TabsContent value="contacts">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {filteredContactMessages.length === 0 ? (
                <div className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No contact messages found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Company</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Subject</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Message</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hidden md:table-cell">Date</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContactMessages.map((msg) => (
                        <tr key={msg.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                          <td className="px-4 py-3 text-sm text-foreground font-medium">{msg.name}</td>
                          <td className="px-4 py-3 text-sm">
                            <a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{msg.company || "-"}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{msg.subject}</td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                            <span
                              className="line-clamp-2 max-w-[200px] cursor-pointer hover:text-foreground transition-colors"
                              onClick={() => setSelectedMessage({ title: `Message from ${msg.name}`, content: msg.message })}
                              title="Click to read full message"
                            >
                              {msg.message}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              msg.status === "unread" ? "bg-yellow-500/10 text-yellow-500" :
                              msg.status === "read" ? "bg-primary/10 text-primary" :
                              msg.status === "replied" ? "bg-green-500/10 text-green-500" :
                              "bg-muted text-muted-foreground"
                            }`}>
                              {msg.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">
                            {format(new Date(msg.created_at), "MMM dd, yyyy")}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => updateContactStatus(msg.id, "read")} title="Mark as Read">
                                <Eye className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs text-green-500" onClick={() => updateContactStatus(msg.id, "replied")} title="Mark as Replied">
                                <CheckCircle className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" onClick={() => updateContactStatus(msg.id, "closed")} title="Close">
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

    <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">{selectedMessage?.title}</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed max-h-[60vh] overflow-y-auto">
          {selectedMessage?.content}
        </p>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Admin;
