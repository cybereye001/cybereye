import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Search, 
  FileSearch, 
  Lock, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Zap,
  Server,
  FileCheck,
  HeadphonesIcon
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Data Leak Prevention (DLP)",
      description: "Real-time monitoring and blocking of unauthorized data transfers across all endpoints.",
      features: [
        "Real-time content inspection",
        "Endpoint protection",
        "Cloud DLP integration",
        "Policy enforcement"
      ],
      highlight: true
    },
    {
      icon: Eye,
      title: "Endpoint Detection & Response (EDR)",
      description: "Advanced endpoint monitoring with real-time threat behavior analysis and automated response.",
      features: [
        "Real-time endpoint monitoring",
        "Threat behavior analysis",
        "Automated response actions",
        "Forensic investigation tools"
      ],
      highlight: false
    },
    {
      icon: Server,
      title: "SIEM Solutions",
      description: "Centralized security information and event management for comprehensive threat visibility.",
      features: [
        "Centralized log management",
        "Real-time threat correlation",
        "Compliance reporting",
        "Custom alerting rules"
      ],
      highlight: true
    },
    {
      icon: AlertTriangle,
      title: "Cloud Security (CSPM)",
      description: "Secure your multi-cloud environment with posture management and misconfiguration detection.",
      features: [
        "Multi-cloud visibility",
        "Misconfiguration detection",
        "Compliance automation",
        "Risk prioritization"
      ],
      highlight: false
    },
    {
      icon: Lock,
      title: "Identity & Access Management",
      description: "Comprehensive IAM solutions including SSO, MFA, and privileged access management.",
      features: [
        "Single Sign-On (SSO)",
        "Multi-factor authentication",
        "Privileged access management",
        "Identity governance"
      ],
      highlight: false
    },
    {
      icon: FileSearch,
      title: "VAPT Services",
      description: "Vulnerability Assessment and Penetration Testing to identify security weaknesses.",
      features: [
        "Automated vulnerability scanning",
        "Manual penetration testing",
        "Web application security",
        "Network security assessment"
      ],
      highlight: false
    },
    {
      icon: Users,
      title: "Security Awareness Training",
      description: "Educate your employees to recognize and prevent cyber threats with engaging training.",
      features: [
        "Phishing simulation",
        "Interactive training modules",
        "Compliance training",
        "Progress tracking & reporting"
      ],
      highlight: false
    },
    {
      icon: Clock,
      title: "Incident Response & Forensics",
      description: "24/7 incident response team with digital forensics and post-incident analysis.",
      features: [
        "24/7 incident response",
        "Digital forensics investigation",
        "Malware analysis",
        "Post-incident reporting"
      ],
      highlight: true
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Cutting-edge machine learning for faster, smarter threat detection"
    },
    {
      icon: Server,
      title: "Scalable",
      description: "Solutions that grow with your organization's needs"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Expert assistance available around the clock"
    },
    {
      icon: Lock,
      title: "Enterprise-Grade",
      description: "Security solutions trusted by leading organizations"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Enterprise-Grade <span className="text-gradient">Security Solutions</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Comprehensive cybersecurity services to protect your organization from evolving 
                  threats. From prevention to response, we've got you covered.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Services</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  End-to-end cybersecurity solutions tailored to your business needs
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`bg-card border rounded-xl p-5 md:p-6 h-full transition-all duration-300 hover:border-primary/50 ${
                    service.highlight ? "border-primary/30 shadow-lg shadow-primary/5" : "border-border"
                  }`}>
                    {service.highlight && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                        Popular
                      </span>
                    )}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${
                      service.highlight ? "bg-primary/20" : "bg-primary/10"
                    }`}>
                      <service.icon className={`w-6 h-6 md:w-7 md:h-7 ${
                        service.highlight ? "text-primary" : "text-primary"
                      }`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-success shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose CyberEye</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Trusted by organizations for our expertise and commitment to security
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">How We Work</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  A streamlined approach to securing your organization
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Assessment", description: "We analyze your current security posture and identify gaps" },
                { step: "02", title: "Strategy", description: "Custom security roadmap tailored to your needs" },
                { step: "03", title: "Implementation", description: "Deploy solutions with minimal disruption" },
                { step: "04", title: "Monitoring", description: "Continuous protection and improvement" }
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl md:text-3xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  Ready to Secure Your Organization?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
                  Get a free security assessment and learn how CyberEye can protect your business 
                  from evolving cyber threats.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center">
                  <Link to="/demo">
                    <Button variant="hero" size="lg" className="w-full text-sm md:text-base">
                      Get Free Assessment
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg" className="w-full text-sm md:text-base">
                      Contact Sales
                    </Button>
                  </Link>
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

export default Services;
