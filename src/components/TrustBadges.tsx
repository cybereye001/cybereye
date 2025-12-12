import { Shield, Lock, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TrustBadges = () => {
  const badges = [
    { icon: Shield, title: "SOC 2 Type II", description: "Certified" },
    { icon: Lock, title: "ISO 27001", description: "Compliant" },
    { icon: Award, title: "GDPR", description: "Ready" },
    { icon: CheckCircle, title: "HIPAA", description: "Compliant" },
  ];

  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{badge.title}</div>
                  <div className="text-sm text-muted-foreground">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustBadges;
