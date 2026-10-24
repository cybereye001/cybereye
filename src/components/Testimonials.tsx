import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh M.",
      role: "CISO",
      company: "Private Bank, Mumbai",
      content: "CyberEye has completely transformed our security posture. The AI-powered detection caught threats that our previous tools missed for months. Absolutely essential for any enterprise.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "IT Director",
      company: "NBFC, Pune",
      content: "The behavioral analysis is incredible. It learned our employees' patterns within weeks and started flagging anomalies we never would have caught. ROI was visible within the first quarter.",
      rating: 5
    },
    {
      name: "Dr. Anil K.",
      role: "Head of IT",
      company: "Hospital Chain, Bengaluru",
      content: "Data protection compliance was always a challenge until we deployed CyberEye. The comprehensive monitoring and detailed audit logs made our last compliance audit a breeze.",
      rating: 5
    },
    {
      name: "Vikram R.",
      role: "CTO",
      company: "SaaS Startup, Hyderabad",
      content: "We evaluated 15 DLP solutions before choosing CyberEye. The adaptive AI that learns and evolves was the game-changer. Traditional rule-based systems can't compete.",
      rating: 5
    },
    {
      name: "Neha G.",
      role: "VP Technology",
      company: "Retail Group, Delhi NCR",
      content: "After a near-miss data breach, we implemented CyberEye across all our stores. The centralized dashboard and real-time alerts give us peace of mind we never had before.",
      rating: 5
    },
    {
      name: "Arjun P.",
      role: "Head of IT",
      company: "Law Firm, Chennai",
      content: "Client confidentiality is everything in legal. CyberEye's intelligent monitoring protects sensitive case files while respecting client privilege. Brilliant solution.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
              Trusted by <span className="text-gradient">Security Leaders</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              See what industry professionals say about CyberEye
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-xl p-6 h-full flex flex-col hover:border-primary/50 transition-all"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground text-sm md:text-base flex-grow mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
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

export default Testimonials;
