import { Shield, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ComplianceSection = () => {
  const standards = [
    {
      name: "CERT-In",
      fullName: "CERT-In Directions 2022",
      description: "6-hour incident reporting & log retention as mandated in India",
    },
    {
      name: "IT Act 2000",
      fullName: "Information Technology Act",
      description: "India's primary cyber law for electronic governance & security",
    },
    {
      name: "DPDPA 2023",
      fullName: "Digital Personal Data Protection Act",
      description: "India's comprehensive data privacy regulation",
    },
    {
      name: "ISO 27001",
      fullName: "Information Security Management",
      description: "Information security management, audited for Indian enterprises",
    },
    {
      name: "RBI",
      fullName: "RBI Cyber Security Framework",
      description: "Security controls for Indian banks, NBFCs & fintechs",
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
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            CyberEye helps your organization maintain compliance with major security and privacy regulations
            through automated monitoring and reporting.
          </p>
        </AnimatedSection>

        {/* Side by side on all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {/* Standards Grid */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Supported Compliance Standards</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="group bg-card/50 backdrop-blur border border-border/50 rounded-lg md:rounded-xl p-3 md:p-4 hover:border-primary/30 transition-all"
                >
                  <div className="text-lg md:text-2xl font-black text-primary mb-1">{standard.name}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2 hidden sm:block">
                    {standard.fullName}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground/80 hidden md:block">
                    {standard.description}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Capabilities */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Compliance Capabilities</h3>
            <div className="bg-card/50 backdrop-blur border border-border/50 rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 gap-3 md:gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-success" />
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 md:mt-6 bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-lg md:rounded-xl p-4 md:p-6">
              <h4 className="font-bold mb-2 text-sm md:text-base">Continuous Compliance Monitoring</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
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
