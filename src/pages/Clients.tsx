import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Heart, Landmark, ShoppingCart, Factory, GraduationCap, Plane, Server } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/components/Navbar";

const Clients = () => {
  const industries = [
    {
      icon: Landmark,
      name: "Banking & Finance",
      description: "Protecting sensitive financial data, customer information, and transaction records from unauthorized access.",
      challenges: ["PCI DSS compliance", "Transaction security", "Customer data protection"]
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Securing patient records, medical data, and ensuring HIPAA compliance across healthcare organizations.",
      challenges: ["HIPAA compliance", "Patient privacy", "Electronic health records"]
    },
    {
      icon: Building2,
      name: "Enterprise & IT",
      description: "Safeguarding intellectual property, source code, and confidential business strategies.",
      challenges: ["IP protection", "Source code security", "M&A confidentiality"]
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Protecting trade secrets, manufacturing processes, and supply chain data.",
      challenges: ["Trade secrets", "Design documents", "Supply chain data"]
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-commerce",
      description: "Securing customer databases, payment information, and inventory systems.",
      challenges: ["Customer data", "Payment security", "Inventory protection"]
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Protecting student records, research data, and institutional information.",
      challenges: ["Student privacy", "Research protection", "FERPA compliance"]
    },
    {
      icon: Landmark,
      name: "Government",
      description: "Securing classified information, citizen data, and critical infrastructure.",
      challenges: ["Data classification", "Citizen privacy", "Regulatory compliance"]
    },
    {
      icon: Plane,
      name: "Logistics & Transport",
      description: "Protecting shipment data, customer information, and operational systems.",
      challenges: ["Shipment tracking", "Customer data", "Fleet security"]
    }
  ];

  const technologyPartners = [
    { name: "Microsoft Azure", category: "Cloud Platform" },
    { name: "Amazon Web Services", category: "Cloud Platform" },
    { name: "Google Cloud", category: "Cloud Platform" },
    { name: "Splunk", category: "SIEM Integration" },
    { name: "Okta", category: "Identity Management" },
    { name: "ServiceNow", category: "ITSM" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <SEOHead
        title="Industries We Protect | CyberEye Security Solutions"
        description="Discover how CyberEye Security protects banking, healthcare, IT, government, and enterprise organizations with AI-powered data leak prevention solutions."
        keywords="CyberEye, cyber eye, CyberEye Security, cyber eye security, industries, banking security, healthcare DLP, enterprise cybersecurity, government security"
        pathname="/clients"
        breadcrumbLabel="Industries"
      />
      <BackgroundEffects />
      <Navbar />
      <Breadcrumbs currentLabel="Industries" />
      <main className="relative z-10 pt-4">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium inline-flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Industries We Serve
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Built for <span className="text-gradient">Every Industry</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  CyberEye is designed to meet the unique security challenges of diverse industries, 
                  from healthcare to finance and beyond.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Key Challenges:</p>
                      <div className="flex flex-wrap gap-1">
                        {industry.challenges.map((challenge, i) => (
                          <span key={i} className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            {challenge}
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

        {/* Technology Partners */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium inline-flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Technology Partners
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mt-6 mb-4">
                  Seamless <span className="text-gradient">Integrations</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  CyberEye integrates with leading technology platforms to provide comprehensive security coverage.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {technologyPartners.map((partner, index) => (
                <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-muted flex items-center justify-center text-lg font-bold text-primary">
                      {partner.name.charAt(0)}
                    </div>
                    <div className="font-medium text-foreground text-sm">{partner.name}</div>
                    <div className="text-xs text-muted-foreground">{partner.category}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Future Clients Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Ready to Become Our <span className="text-gradient">Partner</span>?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  Join organizations that trust CyberEye for their data security needs. 
                  We're actively looking for partners across all industries.
                </p>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">14</div>
                      <div className="text-muted-foreground text-sm">Days Free Trial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-muted-foreground text-sm">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">100%</div>
                      <div className="text-muted-foreground text-sm">Satisfaction Guaranteed</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/demo">
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                        Talk to Sales
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
