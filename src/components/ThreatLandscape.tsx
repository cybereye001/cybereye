import { AlertTriangle, TrendingUp, DollarSign, Clock, Target, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import AnimatedNumber from "./AnimatedNumber";

const ThreatLandscape = () => {
  const threats = [
    {
      icon: TrendingUp,
      stat: "68%",
      title: "Increase in Insider Threats",
      description: "Organizations report significant rise in data exfiltration by employees in the past year.",
    },
    {
      icon: DollarSign,
      stat: "$4.45M",
      title: "Average Breach Cost",
      description: "The global average cost of a data breach reached an all-time high in 2023.",
    },
    {
      icon: Clock,
      stat: "277",
      title: "Days to Detect",
      description: "Organizations take nearly 9 months to identify and contain a data breach.",
    },
    {
      icon: Target,
      stat: "83%",
      title: "Organizations Attacked",
      description: "Percentage of companies that experienced multiple data breaches in a single year.",
    },
    {
      icon: Users,
      stat: "74%",
      title: "Human Factor Involved",
      description: "Majority of breaches involve human element including social engineering and errors.",
    },
    {
      icon: AlertTriangle,
      stat: "40%",
      title: "Undetected Leaks",
      description: "Data leaks that go undetected by traditional rule-based DLP systems.",
    },
  ];

  const cyberEyePromises = [
    {
      stat: "99.9%",
      title: "Data Leak Prevention",
      description: "Our AI-powered system can reduce data leak risks by detecting threats before they happen.",
    },
    {
      stat: "<24 Hrs",
      title: "Full Investigation",
      description: "If a breach occurs, identify who did it, how they did it, and what method was used within 1 day.",
    },
    {
      stat: "100%",
      title: "Activity Tracking",
      description: "Complete visibility into keystrokes, clipboard, file transfers, and network activities.",
    },
    {
      stat: "<50ms",
      title: "Real-Time Detection",
      description: "Instant threat detection and response time to stop data exfiltration in progress.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 mb-6">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Critical Security Landscape</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-destructive">Threat</span> Is Real
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Data breaches and insider threats are escalating at an alarming rate. Traditional security tools
            struggle to keep pace with sophisticated attack methods.
          </p>
        </AnimatedSection>

        {/* Threats - 2x3 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
          {threats.map((threat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-destructive/30 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-4 gap-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                      <threat.icon className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                    </div>
                    <span className="text-2xl md:text-3xl font-black text-destructive">
                      <AnimatedNumber value={threat.stat} />
                    </span>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{threat.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">{threat.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CyberEye Solution Section */}
        <AnimatedSection className="text-center mt-16 md:mt-24 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">CyberEye Solution</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What <span className="text-primary">CyberEye</span> Can Do
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
            Unlike traditional systems that take months to detect breaches, CyberEye provides instant detection
            and complete investigation capabilities.
          </p>
        </AnimatedSection>

        {/* CyberEye Promises - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {cyberEyePromises.map((promise, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300 text-center h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <span className="text-2xl md:text-4xl font-black text-primary block mb-2 md:mb-3">
                    <AnimatedNumber value={promise.stat} />
                  </span>
                  <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{promise.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">{promise.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatLandscape;
