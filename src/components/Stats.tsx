import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const Stats = () => {
  const stats = [
    { value: "99.9%", label: "Threat Detection Rate", description: "Industry-leading accuracy" },
    { value: "<50ms", label: "Detection Speed", description: "Real-time protection" },
    { value: "<1s", label: "Response Time", description: "Real-time protection" },
    { value: "24/7", label: "Monitoring", description: "Always vigilant" },
    { value: "50M+", label: "Threats Blocked", description: "And counting" },
    { value: "99.9%", label: "Leak Prevention Rate", description: "Industry-leading accuracy" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Trusted by Industry Leaders
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              Numbers That <span className="text-gradient">Speak</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from real organizations protecting their most valuable assets
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
