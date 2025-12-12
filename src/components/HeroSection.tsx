import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle grid pattern - no blue effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)/0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Data Protection</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-slide-up">
            Protect Your Data with{" "}
            <span className="text-gradient">Intelligent</span>{" "}
            Threat Detection
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            CyberEye is a centralized AI-powered system that monitors, detects, and prevents 
            data leaks in real-time — adapting to new threats before damage is done.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "99.9%", label: "Detection Rate" },
              { value: "<50ms", label: "Response Time" },
              { value: "500+", label: "Enterprises Protected" },
              { value: "0", label: "Data Breaches" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-border/30 rounded-xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-border/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HeroSection;