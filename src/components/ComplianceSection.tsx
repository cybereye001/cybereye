import { Shield, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ComplianceSection = () => {
  const standards = [
    {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      description: "Full compliance with EU data protection requirements",
    },
    {
      name: "HIPAA",
      fullName: "Health Insurance Portability Act",
      description: "Protected health information security controls",
    },
    {
      name: "SOC 2",
      fullName: "Service Organization Control",
      description: "Trust service criteria for security & availability",
    },
    {
      name: "ISO 27001",
      fullName: "Information Security Management",
      description: "International standard for information security",
    },
    {
      name: "PCI DSS",
      fullName: "Payment Card Industry Standard",
      description: "Cardholder data protection compliance",
    },
    {
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      description: "Consumer privacy rights protection",
    },
  ];

  const capabilities = [
    "Automated compliance reporting",
    "Audit trail with complete logging",
    "Data classification & labeling",
    "Access control enforcement",
    "Incident response workflows",
    "Policy violation alerts",
    "Regulatory change tracking",
    "Evidence collection & export",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Enterprise Compliance</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet <span className="text-gradient">Regulatory Requirements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CyberEye helps your organization maintain compliance with major security 
            and privacy regulations through automated monitoring and reporting.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Standards Grid */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-xl font-bold mb-6">Supported Compliance Standards</h3>
            <div className="grid grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div 
                  key={index}
                  className="group bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all"
                >
                  <div className="text-2xl font-black text-primary mb-1">{standard.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">{standard.fullName}</div>
                  <div className="text-sm text-muted-foreground/80">{standard.description}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Capabilities */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-xl font-bold mb-6">Compliance Capabilities</h3>
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-xl p-6">
              <h4 className="font-bold mb-2">Continuous Compliance Monitoring</h4>
              <p className="text-sm text-muted-foreground">
                CyberEye's AI continuously monitors your systems against compliance requirements, 
                automatically flagging potential violations and generating audit-ready reports.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
