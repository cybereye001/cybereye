import { Monitor, Shield, Activity, AlertCircle, Users, FileWarning } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useEffect, useState, useRef } from "react";

const SecurityDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, {
      threshold: 0.2
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const mockAlerts = [
    {
      type: "critical",
      message: "Unusual file transfer detected - Marketing Dept",
      time: "2 min ago"
    },
    {
      type: "warning",
      message: "Multiple login attempts from new location",
      time: "5 min ago"
    },
    {
      type: "info",
      message: "Large clipboard data copied - Sales Team",
      time: "12 min ago"
    }
  ];

  const metrics = [
    { label: "Active Endpoints", value: "2,847", icon: Monitor },
    { label: "Threats Blocked", value: "156", icon: Shield },
    { label: "Risk Score", value: "Low", icon: Activity },
    { label: "Active Users", value: "1,234", icon: Users }
  ];

  const threatCategories = [
    { label: "Data Exfiltration", value: 45 },
    { label: "Unauthorized Access", value: 30 },
    { label: "Policy Violations", value: 25 }
  ];

  const activityData = [40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Live Dashboard
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
              Real-Time <span className="text-gradient">Security Insights</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Monitor your organization's security posture with our comprehensive dashboard
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-6xl mx-auto">
            {/* Mock Dashboard */}
            <div className="bg-card border border-border rounded-2xl p-4 md:p-6 shadow-xl">
              {/* Metrics Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <metric.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{metric.label}</span>
                    </div>
                    <p className="text-lg md:text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Alerts Panel */}
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Recent Alerts</h3>
                  </div>
                  <div className="space-y-3">
                    {mockAlerts.map((alert, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          alert.type === "critical" ? "bg-destructive" :
                          alert.type === "warning" ? "bg-yellow-500" : "bg-primary"
                        }`} />
                        <div className="flex-grow min-w-0">
                          <p className="text-sm text-foreground truncate">{alert.message}</p>
                          <p className="text-xs text-muted-foreground">{alert.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Chart */}
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">Activity Overview</h3>
                  </div>
                  <div className="flex items-end gap-1 h-32">
                    {activityData.map((value, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-primary/20 rounded-t transition-all duration-500"
                        style={{
                          height: isVisible ? `${value}%` : "0%",
                          transitionDelay: `${index * 50}ms`
                        }}
                      >
                        <div 
                          className="w-full bg-primary rounded-t transition-all duration-500"
                          style={{
                            height: isVisible ? `${value * 0.7}%` : "0%",
                            transitionDelay: `${index * 50 + 200}ms`
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>12 AM</span>
                    <span>6 AM</span>
                    <span>12 PM</span>
                    <span>6 PM</span>
                  </div>
                </div>
              </div>

              {/* Threat Categories */}
              <div className="mt-6 bg-muted/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-4">
                  <FileWarning className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Threat Categories</h3>
                </div>
                <div className="space-y-3">
                  {threatCategories.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span className="text-muted-foreground">{category.label}</span>
                        <span className="text-foreground font-medium">{category.value}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{
                            width: isVisible ? `${category.value}%` : "0%",
                            transitionDelay: `${index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
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
