import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import AnimatedNumber from "./AnimatedNumber";

const PricingSection = () => {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter",
      price: "$15",
      period: "per endpoint/month",
      description: "Perfect for small teams getting started with DLP",
      features: [
        "Up to 50 endpoints",
        "Basic keystroke monitoring",
        "File transfer detection",
        "Email alerts",
        "7-day log retention",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "$35",
      period: "per endpoint/month",
      description: "Advanced protection for growing organizations",
      features: [
        "Up to 500 endpoints",
        "Full behavioral analysis",
        "AI-powered threat detection",
        "Real-time blocking",
        "90-day log retention",
        "SIEM integration",
        "Priority support",
        "Custom policies",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited endpoints",
        "Advanced AI models",
        "Custom integrations",
        "Unlimited retention",
        "Dedicated success manager",
        "24/7 phone support",
        "On-premise option",
        "SLA guarantee",
        "Compliance reporting",
      ],
      popular: false,
    },
  ];

  const toggleExpand = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              CyberEye DLP Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              <span className="text-gradient">CyberEye</span> DLP Plans
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Choose the CyberEye Data Leak Prevention plan that fits your organization. All plans include a 14-day free trial.
            </p>
            <p className="text-muted-foreground/70 text-sm mt-2">
              Looking for other IT services? <Link to="/services" className="text-primary hover:underline">View all our services →</Link>
            </p>
          </div>
        </AnimatedSection>

        {/* Starter & Business side by side, Enterprise below center */}
        <div className="max-w-6xl mx-auto">
          {/* Starter and Business - 2 columns */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 mb-3 md:mb-8">
            {plans.slice(0, 2).map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`relative bg-card border rounded-xl md:rounded-2xl p-4 md:p-8 h-full flex flex-col ${
                    plan.popular
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border hover:border-primary/50"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                      <span className="px-2 md:px-4 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full flex items-center gap-1">
                        <Zap className="w-3 h-3 md:w-4 md:h-4" /> Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-4 md:mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm hidden sm:block">{plan.description}</p>
                  </div>

                  <div className="mb-4 md:mb-6">
                    <span className="text-2xl md:text-4xl font-bold text-foreground">
                      <AnimatedNumber value={plan.price} />
                    </span>
                    <span className="text-muted-foreground text-xs md:text-base ml-1 md:ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                    {plan.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 md:gap-3 text-muted-foreground text-xs md:text-base">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="hidden sm:inline">{feature}</span>
                        <span className="sm:hidden">{feature.split(" ").slice(0, 3).join(" ")}</span>
                      </li>
                    ))}
                    
                    {/* Expandable features */}
                    <AnimatePresence>
                      {expandedPlan === plan.name && plan.features.length > 4 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {plan.features.slice(4).map((feature, i) => (
                            <li key={i + 4} className="flex items-center gap-2 md:gap-3 text-muted-foreground text-xs md:text-base mt-2 md:mt-3">
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                              <span className="hidden sm:inline">{feature}</span>
                              <span className="sm:hidden">{feature.split(" ").slice(0, 3).join(" ")}</span>
                            </li>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {plan.features.length > 4 && (
                      <li>
                        <button 
                          onClick={() => toggleExpand(plan.name)}
                          className="text-primary hover:text-primary/80 text-xs md:text-sm flex items-center gap-1 transition-colors cursor-pointer mt-1"
                        >
                          {expandedPlan === plan.name ? (
                            <>
                              <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                              +{plan.features.length - 4} more features
                            </>
                          )}
                        </button>
                      </li>
                    )}
                  </ul>

                  <Link to={plan.name === "Enterprise" ? "/contact" : "/demo"}>
                    <Button
                      variant={plan.popular ? "hero" : "heroOutline"}
                      className="w-full text-xs md:text-base"
                      size="default"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Enterprise - centered below */}
          <div className="max-w-md mx-auto">
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-card border border-border hover:border-primary/50 rounded-xl md:rounded-2xl p-4 md:p-8 transition-all duration-300"
              >
                <div className="mb-4 md:mb-6 text-center">
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1 md:mb-2">{plans[2].name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{plans[2].description}</p>
                </div>

                <div className="mb-4 md:mb-6 text-center">
                  <span className="text-2xl md:text-4xl font-bold text-foreground">{plans[2].price}</span>
                  <span className="text-muted-foreground text-xs md:text-base ml-1 md:ml-2">{plans[2].period}</span>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {plans[2].features.slice(0, 5).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-muted-foreground text-xs md:text-base">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  
                  {/* Expandable features for Enterprise */}
                  <AnimatePresence>
                    {expandedPlan === "Enterprise" && plans[2].features.length > 5 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {plans[2].features.slice(5).map((feature, i) => (
                          <li key={i + 5} className="flex items-center gap-2 md:gap-3 text-muted-foreground text-xs md:text-base mt-2 md:mt-3">
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {plans[2].features.length > 5 && (
                    <li>
                      <button 
                        onClick={() => toggleExpand("Enterprise")}
                        className="text-primary hover:text-primary/80 text-xs md:text-sm flex items-center gap-1 transition-colors cursor-pointer mt-1"
                      >
                        {expandedPlan === "Enterprise" ? (
                          <>
                            <ChevronUp className="w-3 h-3 md:w-4 md:h-4" />
                            Show less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            +{plans[2].features.length - 5} more features
                          </>
                        )}
                      </button>
                    </li>
                  )}
                </ul>

                <Link to="/contact">
                  <Button variant="heroOutline" className="w-full text-xs md:text-base" size="default">
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;