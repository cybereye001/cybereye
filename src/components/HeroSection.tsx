import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Play, ShieldCheck, Zap, Search, Activity } from "lucide-react";

const HeroSection = () => {
  const capabilities = [
    { icon: ShieldCheck, value: "99.9%", label: "Leak Prevention", color: "from-emerald-500 to-emerald-600" },
    { icon: Zap, value: "<50ms", label: "Detection Speed", color: "from-amber-500 to-orange-500" },
    { icon: Search, value: "<24h", label: "Full Investigation", color: "from-blue-500 to-cyan-500" },
    { icon: Activity, value: "100%", label: "Activity Tracking", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle grid pattern - no blue effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)/0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.2) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
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

          {/* Capability Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {capabilities.map((cap, index) => (
              <div 
                key={index} 
                className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                    <cap.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${cap.color} bg-clip-text text-transparent mb-1`}>
                    {cap.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-muted-foreground font-medium">{cap.label}</div>
                </div>
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