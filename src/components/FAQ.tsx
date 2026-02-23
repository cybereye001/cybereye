import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does CyberEye's AI differ from traditional DLP solutions?",
      answer: "Traditional DLP tools rely on static rules and signatures that can only detect known patterns. CyberEye uses advanced machine learning to build behavioral baselines for each user, enabling it to detect anomalies and new attack patterns that have never been seen before. This means zero-day threats and novel data exfiltration techniques are caught in real-time, not after the damage is done."
    },
    {
      question: "How long does it take to deploy CyberEye?",
      answer: "CyberEye can be deployed across your entire organization within hours, not weeks. Our lightweight agents install silently on endpoints, and the AI begins learning behavioral patterns immediately. Most organizations see the system reaching full detection capability within 2-4 weeks as it builds comprehensive user baselines."
    },
    {
      question: "Will CyberEye slow down employee computers?",
      answer: "No. Our agent is designed to be extremely lightweight, using less than 1% CPU and minimal memory. It operates silently in the background without any noticeable impact on system performance. Employees won't even know it's there unless a threat is detected."
    },
    {
      question: "How does CyberEye handle false positives?",
      answer: "CyberEye's adaptive AI significantly reduces false positives compared to rule-based systems. When a suspicious activity is flagged, employees can provide explanations through a simple interface. The AI and admin review these cases, and the system learns from this feedback to improve accuracy over time."
    },
    {
      question: "Is CyberEye compliant with privacy regulations?",
      answer: "Yes, CyberEye is designed with privacy-by-design principles. It supports GDPR, DPDPA 2023, IT Act 2000, ISO 27001, and other compliance frameworks. You have full control over what data is collected and monitored, and all data is encrypted both in transit and at rest. Detailed audit logs support compliance reporting."
    },
    {
      question: "Can CyberEye integrate with our existing security stack?",
      answer: "Absolutely. CyberEye integrates seamlessly with popular SIEM solutions, identity providers, endpoint protection platforms, and cloud services. Our REST API allows custom integrations, and we provide pre-built connectors for tools like Splunk, Microsoft Sentinel, Okta, and many more."
    },
    {
      question: "What happens when a threat is detected?",
      answer: "When CyberEye detects a high-risk action, it can automatically block the operation, lock the workstation, display an explanation prompt to the employee, and send instant alerts with full evidence to the admin dashboard. Response actions are configurable based on threat severity and your organization's policies."
    },
    {
      question: "How does pricing work?",
      answer: "CyberEye offers flexible pricing based on the number of endpoints protected. We offer Starter, Business, and Enterprise tiers to match organizations of all sizes. All plans include a 14-day free trial with full functionality. Contact our sales team for a custom quote tailored to your needs."
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about CyberEye
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                className="mb-4"
                initial={false}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full bg-card border border-border rounded-xl p-5 text-left flex items-center justify-between gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <span className="font-semibold text-foreground">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-muted-foreground" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
