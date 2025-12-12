import { AlertTriangle, TrendingUp, DollarSign, Clock, Target, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

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
      stat: "277 Days",
      title: "Average Detection Time",
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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Data breaches and insider threats are escalating at an alarming rate. Traditional security tools 
            struggle to keep pace with sophisticated attack methods. Here's what organizations face today.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {threats.map((threat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-destructive/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                      <threat.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-3xl font-black text-destructive">{threat.stat}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{threat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{threat.description}</p>
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
