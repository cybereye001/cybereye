import { Building2, Landmark, Heart, GraduationCap, Factory, ShoppingCart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const UseCases = () => {
  const industries = [
    {
      icon: Landmark,
      name: "Financial Services",
      description: "Protect customer financial data, prevent insider trading leaks, and ensure regulatory compliance.",
      threats: ["Customer PII leaks", "Trading data theft", "Financial fraud"],
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Secure patient records, monitor access to sensitive health information, and maintain HIPAA compliance.",
      threats: ["PHI data breaches", "Medical identity theft", "Unauthorized access"],
    },
    {
      icon: Building2,
      name: "Technology",
      description: "Guard intellectual property, source code, and proprietary algorithms from exfiltration.",
      threats: ["IP theft", "Source code leaks", "Trade secrets exposure"],
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Protect trade secrets, manufacturing processes, and supply chain information.",
      threats: ["Design theft", "Process leaks", "Supplier data breaches"],
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Safeguard student records, research data, and institutional information.",
      threats: ["Student data exposure", "Research theft", "Exam leaks"],
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-Commerce",
      description: "Protect customer data, payment information, and inventory systems.",
      threats: ["Credit card theft", "Customer data leaks", "Pricing strategy leaks"],
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted Across <span className="text-gradient">Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CyberEye adapts to the unique security challenges of every industry, 
            providing tailored protection for your specific data risks.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group h-full bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground/60 mb-2">Key Threats Protected:</div>
                  <div className="flex flex-wrap gap-2">
                    {industry.threats.map((threat, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-destructive/10 text-destructive/80 border border-destructive/20"
                      >
                        {threat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
