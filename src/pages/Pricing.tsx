import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const comparison = [
    { feature: "Endpoints", starter: "Up to 50", business: "Up to 500", enterprise: "Unlimited" },
    { feature: "Keystroke Monitoring", starter: true, business: true, enterprise: true },
    { feature: "File Transfer Detection", starter: true, business: true, enterprise: true },
    { feature: "Behavioral Analysis", starter: false, business: true, enterprise: true },
    { feature: "AI Threat Detection", starter: false, business: true, enterprise: true },
    { feature: "Real-time Blocking", starter: false, business: true, enterprise: true },
    { feature: "Log Retention", starter: "7 days", business: "90 days", enterprise: "Unlimited" },
    { feature: "SIEM Integration", starter: false, business: true, enterprise: true },
    { feature: "Custom Policies", starter: false, business: true, enterprise: true },
    { feature: "On-premise Option", starter: false, business: false, enterprise: true },
    { feature: "Dedicated Manager", starter: false, business: false, enterprise: true },
    { feature: "SLA Guarantee", starter: false, business: false, enterprise: true },
  ];

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-success mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10 pt-16">
        <PricingSection />

        {/* Comparison Table */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Compare <span className="text-gradient">Plans</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Detailed feature comparison across all plans
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="max-w-5xl mx-auto overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Starter</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Business</th>
                      <th className="text-center py-4 px-4 text-foreground font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                        <td className="py-4 px-4 text-muted-foreground">{row.feature}</td>
                        <td className="py-4 px-4 text-center">{renderValue(row.starter)}</td>
                        <td className="py-4 px-4 text-center">{renderValue(row.business)}</td>
                        <td className="py-4 px-4 text-center">{renderValue(row.enterprise)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
