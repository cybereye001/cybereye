import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedNumber from "./AnimatedNumber";
import VideoPlayerModal from "./VideoPlayerModal";
const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle grid pattern - no blue effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)/0.2) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)/0.2) 1px, transparent 1px)`,
      backgroundSize: "50px 50px"
    }} />

      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight animate-slide-up">
            Protect Your Data with{" "}
            <span className="text-gradient">Intelligent</span> Threat Detection
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="font-cyber font-bold tracking-wider bg-gradient-to-b from-white to-gray-400 bg-clip-text text-[#a4c4f4]">CyberEye Security (OPC) Pvt. Ltd.</span> presents <span className="font-cyber font-bold tracking-wider"><span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span><span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-1">EYE</span></span>, a centralized AI-powered system that monitors, detects, and prevents data leaks in real time while adapting to emerging threats before damage occurs.
          </p>

          {/* CTA Buttons - 2x2 on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center mb-16 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Button asChild variant="hero" size="lg" className="group text-sm sm:text-base">
              <Link to="/demo">
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="group text-sm sm:text-base animated-border-glow" onClick={() => setIsVideoOpen(true)}>
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Capabilities - 2x2 grid on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            {[{
            value: "99.9%",
            label: "Leak Prevention Rate"
          }, {
            value: "<50ms",
            label: "Detection Speed"
          }, {
            value: "<24 Hrs",
            label: "Full Investigation"
          }, {
            value: "100%",
            label: "Activity Tracking"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-border/30 rounded-xl rotate-12 animate-float hidden lg:block" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-border/30 rounded-full animate-float hidden lg:block" style={{
      animationDelay: "1s"
    }} />

      {/* Video Player Modal */}
      <VideoPlayerModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl="https://oqijsfmowjdiqbnzailq.supabase.co/storage/v1/object/public/videos/demo.mp4" />
    </section>;
};
export default HeroSection;