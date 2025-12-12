import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

const PricingSection = () => {
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

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-4">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your organization. All plans include a 14-day free trial.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`relative bg-card border rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border hover:border-primary/50"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                      <Zap className="w-4 h-4" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.name === "Enterprise" ? "/contact" : "/demo"}>
                  <Button
                    variant={plan.popular ? "hero" : "heroOutline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
