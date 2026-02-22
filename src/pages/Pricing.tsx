import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

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
        <Check className="w-4 h-4 md:w-5 md:h-5 text-success mx-auto" />
      ) : (
        <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-foreground text-xs md:text-base">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <SEOHead
        title="Pricing Plans | CyberEye Security DLP Software"
        description="Compare CyberEye Security pricing plans for AI-powered data leak prevention. Choose Starter, Business, or Enterprise plan with a 14-day free trial."
        keywords="CyberEye, cyber eye, CyberEye Security, cyber eye security, DLP pricing, cybersecurity pricing, data leak prevention plans, enterprise security pricing"
        pathname="/pricing"
        breadcrumbLabel="Pricing"
      />
      <BackgroundEffects />
      <Navbar />
      <Breadcrumbs currentLabel="Pricing" />
      <main className="relative z-10 pt-4">
        <PricingSection />

        {/* Comparison Table */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Compare <span className="text-gradient">CyberEye</span> Plans
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  Detailed feature comparison across all CyberEye DLP plans
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="max-w-5xl mx-auto">
                <table className="w-full text-xs md:text-base">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 md:py-4 px-2 md:px-4 text-foreground font-semibold">Feature</th>
                      <th className="text-center py-3 md:py-4 px-2 md:px-4 text-foreground font-semibold">Starter</th>
                      <th className="text-center py-3 md:py-4 px-2 md:px-4 text-foreground font-semibold">Business</th>
                      <th className="text-center py-3 md:py-4 px-2 md:px-4 text-foreground font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-card/50 transition-colors">
                        <td className="py-3 md:py-4 px-2 md:px-4 text-muted-foreground">{row.feature}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center">{renderValue(row.starter)}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center">{renderValue(row.business)}</td>
                        <td className="py-3 md:py-4 px-2 md:px-4 text-center">{renderValue(row.enterprise)}</td>
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
