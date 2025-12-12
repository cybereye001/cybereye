import { 
  Eye, 
  Activity, 
  Shield, 
  Bell, 
  BarChart3, 
  Lock,
  Zap,
  Users,
  Cloud
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Monitor keystrokes, clipboard, file transfers, and network activity across all endpoints simultaneously.",
    },
    {
      icon: Activity,
      title: "Behavior Analysis",
      description: "AI builds dynamic baselines for each user and detects deviations from normal work patterns.",
    },
    {
      icon: Shield,
      title: "Instant Threat Response",
      description: "Automatically blocks suspicious operations, locks workstations, and triggers immediate alerts.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Context-aware notifications with detailed logs and evidence for admin review.",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Reports",
      description: "Generate detailed security reports with risk scores, incident timelines, and trend analysis.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Granular permission management with role-based access and multi-factor authentication.",
    },
    {
      icon: Zap,
      title: "Zero-Day Protection",
      description: "Detect unknown threats through behavior analysis, not just signature matching.",
    },
    {
      icon: Users,
      title: "Employee Workflow",
      description: "Allow employees to explain flagged activities; AI and admins review and decide.",
    },
    {
      icon: Cloud,
      title: "Centralized Dashboard",
      description: "Single pane of glass for managing all endpoints, policies, and security incidents.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to protect your organization's sensitive data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
