import { Building2, Landmark, Heart, GraduationCap, Factory, ShoppingCart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const UseCases = () => {
  const industries = [
    {
      icon: Landmark,
      name: "Financial Services",
      description: "Protect customer financial data, prevent insider trading leaks, and ensure regulatory compliance.",
      threats: ["Customer PII leaks", "Trading data theft", "Financial fraud"]
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Secure patient records, monitor access to sensitive health information, and maintain HIPAA compliance.",
      threats: ["PHI data breaches", "Medical identity theft", "Unauthorized access"]
    },
    {
      icon: Building2,
      name: "Technology",
      description: "Guard intellectual property, source code, and proprietary algorithms from exfiltration.",
      threats: ["IP theft", "Source code leaks", "Trade secrets exposure"]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Protect trade secrets, manufacturing processes, and supply chain information.",
      threats: ["Design theft", "Process leaks", "Supplier data breaches"]
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Safeguard student records, research data, and institutional information.",
      threats: ["Student data exposure", "Research theft", "Exam leaks"]
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-Commerce",
      description: "Protect customer data, payment information, and inventory systems.",
      threats: ["Credit card theft", "Customer data leaks", "Pricing strategy leaks"]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Industries We Serve
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
              Protection Across <span className="text-gradient">Every Industry</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              CyberEye adapts to your industry's unique security requirements
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-4 md:p-6 h-full hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                  {industry.name}
                </h3>
                
                <p className="text-muted-foreground text-xs md:text-sm mb-4 hidden md:block">
                  {industry.description}
                </p>
                
                <div className="space-y-1">
                  {industry.threats.slice(0, 2).map((threat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="truncate">{threat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
