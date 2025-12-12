import { Keyboard, Brain, AlertCircle, Shield, UserCheck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Keyboard,
      title: "Keylog Monitoring",
      description: "Captures keystrokes, clipboard, file transfers, and network logs across all endpoints",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Builds behavioral baselines and analyzes activities for anomalies in real-time",
      color: "primary",
    },
    {
      icon: AlertCircle,
      title: "Threat Detection",
      description: "Identifies suspicious activities even with unknown attack patterns",
      color: "warning",
    },
    {
      icon: Shield,
      title: "Instant Response",
      description: "Blocks operations, locks PC, and sends alerts to admin dashboard immediately",
      color: "destructive",
    },
    {
      icon: UserCheck,
      title: "Review & Explain",
      description: "Employees can provide explanations; AI and admins review the case",
      color: "primary",
    },
    {
      icon: CheckCircle,
      title: "Adaptive Learning",
      description: "System learns from feedback and adapts to new threats automatically",
      color: "success",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary border-primary/30";
      case "warning":
        return "bg-warning/20 text-warning border-warning/30";
      case "destructive":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "success":
        return "bg-success/20 text-success border-success/30";
      default:
        return "bg-primary/20 text-primary border-primary/30";
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">CyberEye</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Intelligent workflow that detects, blocks, and learns from every threat
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300" />
              <div className="relative p-6">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-background border border-primary/50 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </div>

                <div className={`w-14 h-14 rounded-xl ${getColorClasses(step.color)} border flex items-center justify-center mb-4`}>
                  <step.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>

                {/* Connection Line */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Flow Diagram Illustration */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h4 className="text-lg font-semibold text-center mb-8 text-muted-foreground">Decision Flow</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">No Threat → Continue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-warning" />
                <span className="text-sm text-muted-foreground">Suspicious → Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Critical → Block</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
