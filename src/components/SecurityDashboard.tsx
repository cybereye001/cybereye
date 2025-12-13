import { Monitor, Shield, Activity, AlertCircle, Users, FileWarning } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useState, useRef } from "react";

const SecurityDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const mockAlerts = [
    { type: "critical", message: "Unusual file transfer detected - Marketing Dept", time: "2 min ago" },
    { type: "warning", message: "Multiple login attempts from new location", time: "5 min ago" },
    { type: "info", message: "Large clipboard data copied - Sales Team", time: "12 min ago" },
  ];

  const metrics = [
    { label: "Active Endpoints", value: "2,847", icon: Monitor },
    { label: "Threats Blocked", value: "156", icon: Shield },
    { label: "Risk Score", value: "Low", icon: Activity },
    { label: "Active Users", value: "1,234", icon: Users },
  ];

  const threatCategories = [
    { label: "Data Exfiltration", value: 45 },
    { label: "Unauthorized Access", value: 30 },
    { label: "Policy Violations", value: 25 },
  ];

  const activityData = [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95];

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Centralized <span className="text-gradient">Command Center</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Monitor your entire organization's security posture from a single, intuitive dashboard.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto">
            {/* Dashboard Preview */}
            <div className="relative bg-card/30 backdrop-blur border border-border rounded-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-secondary/50 border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">CyberEye Dashboard v3.2</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs text-success">Live</span>
                </div>
              </div>

              <div className="p-6 grid lg:grid-cols-3 gap-6">
                {/* Metrics */}
                <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {metrics.map((metric, index) => (
                    <div key={index} className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                      <metric.icon className="w-5 h-5 text-primary mb-2" />
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Activity Graph with Animation */}
                <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Activity</span>
                    <span className="text-xs text-muted-foreground">Last 24h</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {activityData.map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-primary/30 rounded-t transition-all duration-1000 ease-out"
                        style={{ 
                          height: isVisible ? `${height}%` : '0%',
                          transitionDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-xs text-muted-foreground">Peak: </span>
                    <span className="text-xs font-medium text-primary">95%</span>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="lg:col-span-2 bg-secondary/30 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Recent Security Alerts</span>
                  </div>
                  <div className="space-y-3">
                    {mockAlerts.map((alert, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          alert.type === 'critical' ? 'bg-destructive' : 
                          alert.type === 'warning' ? 'bg-yellow-500' : 'bg-primary'
                        }`} />
                        <span className="flex-1 text-muted-foreground">{alert.message}</span>
                        <span className="text-xs text-muted-foreground/60">{alert.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Threat Categories with Animated Progress Bars */}
                <div className="bg-secondary/30 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <FileWarning className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Threat Categories</span>
                  </div>
                  <div className="space-y-2">
                    {threatCategories.map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${item.value}%` : '0%',
                              transitionDelay: `${i * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SecurityDashboard;
