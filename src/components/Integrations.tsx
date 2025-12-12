import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Integrations = () => {
  const integrations = [
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Google Workspace", category: "Productivity" },
    { name: "Slack", category: "Communication" },
    { name: "Splunk", category: "SIEM" },
    { name: "Microsoft Sentinel", category: "SIEM" },
    { name: "Okta", category: "Identity" },
    { name: "Azure AD", category: "Identity" },
    { name: "CrowdStrike", category: "Endpoint" },
    { name: "AWS", category: "Cloud" },
    { name: "Salesforce", category: "CRM" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "Jira", category: "Project" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Integrations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              Works With Your <span className="text-gradient">Existing Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Seamlessly integrate with 100+ enterprise tools and platforms
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-xl p-4 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-muted flex items-center justify-center text-xl font-bold text-primary">
                  {integration.name.charAt(0)}
                </div>
                <div className="font-semibold text-foreground text-sm">{integration.name}</div>
                <div className="text-xs text-muted-foreground">{integration.category}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Don't see your tool?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Request an integration
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Integrations;
