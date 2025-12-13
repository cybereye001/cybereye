import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, LogOut, Users, Clock, CheckCircle, XCircle, Loader2, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { format } from "date-fns";

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

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<DemoRequest[]>([]);
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
    await fetchRequests();
  };

  const fetchRequests = async () => {
    setLoading(true);
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

  const updateStatus = async (id: string, status: string) => {
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
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
              <p className="text-xs text-muted-foreground">Demo Requests Dashboard</p>
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
                <p className="text-xs text-muted-foreground">Total Requests</p>
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
                  {requests.filter(r => r.status === "pending").length}
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
                  {requests.filter(r => r.status === "contacted").length}
                </p>
                <p className="text-xs text-muted-foreground">Contacted</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {requests.filter(r => r.status === "closed").length}
                </p>
                <p className="text-xs text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Demo Requests</h2>
          <Button onClick={fetchRequests} variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Requests Table */}
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
                            onClick={() => updateStatus(request.id, "contacted")}
                          >
                            <CheckCircle className="w-3 h-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="h-7 px-2 text-xs"
                            onClick={() => updateStatus(request.id, "closed")}
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
      </main>
    </div>
  );
};

export default Admin;