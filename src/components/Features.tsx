import { Eye, Activity, Shield, Zap, Users, Cloud } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedNumber from "./AnimatedNumber";

const Features = () => {
  const features = [
    {
      icon: Eye,
      stat: "24/7",
      title: "Real-Time Monitoring",
      description: "Monitor keystrokes, clipboard, file transfers, and network activity across all endpoints.",
    },
    {
      icon: Activity,
      stat: "AI",
      title: "Behavior Analysis",
      description: "AI builds dynamic baselines for each user and detects deviations from normal work patterns.",
    },
    {
      icon: Shield,
      stat: "<1s",
      title: "Instant Threat Response",
      description: "Automatically blocks suspicious operations, locks workstations, and triggers immediate alerts.",
    },
    {
      icon: Zap,
      stat: "0-Day",
      title: "Zero-Day Detection",
      description: "Detect unknown threats through behavior analysis, not just signature matching.",
    },
    {
      icon: Users,
      stat: "360°",
      title: "Employee Workflow",
      description: "Allow employees to explain flagged activities; AI and admins review and decide.",
    },
    {
      icon: Cloud,
      stat: "1",
      title: "Centralized Dashboard",
      description: "Single pane of glass for managing all endpoints, policies, and security incidents.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-success/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-success/30 bg-success/5 mb-6">
            <Shield className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-success">Features</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Everything you need to protect your organization's sensitive data with intelligent AI-powered
            threat detection and prevention.
          </p>
        </AnimatedSection>

        {/* 2x3 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-success/30 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-4 gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-success" />
                    </div>
                    <span className="font-black text-success text-base md:text-lg">
                      <AnimatedNumber value={feature.stat} />
                    </span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
