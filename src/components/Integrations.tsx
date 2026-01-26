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
    { name: "Jira", category: "Project" }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Integrations
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
              Seamless <span className="text-gradient">Integration</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              CyberEye integrates with your existing tools and workflows
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-card border border-border rounded-xl p-3 md:p-4 text-center hover:border-primary/50 transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold text-sm md:text-base">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground truncate">
                    {integration.name}
                  </p>
                  <p className="text-xs text-muted-foreground hidden md:block">
                    {integration.category}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                And many more... Custom integrations available for Enterprise plans
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Integrations;
