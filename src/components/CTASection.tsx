import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dark sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card with border glow */}
          <div className="relative bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16">
            {/* Border glow effect */}
            <div className="absolute -inset-px bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-sm opacity-50" />
            
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Protecting Today</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to <span className="text-gradient">Secure</span> Your Organization?
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join 500+ enterprises already using CyberEye to prevent data leaks and protect 
                their most valuable assets. Start your free trial today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero" size="xl" className="group">
                  Start 14-Day Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Talk to Sales
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  No credit card required
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;