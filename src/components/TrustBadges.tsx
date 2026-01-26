import { Shield, Lock, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Certified"
    },
    {
      icon: Lock,
      title: "ISO 27001",
      description: "Compliant"
    },
    {
      icon: Award,
      title: "GDPR",
      description: "Ready"
    },
    {
      icon: CheckCircle,
      title: "HIPAA",
      description: "Compliant"
    }
  ];

  return (
    <section className="py-8 border-y border-border/50 bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <badge.icon className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold text-sm">{badge.title}</p>
                  <p className="text-xs">{badge.description}</p>
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