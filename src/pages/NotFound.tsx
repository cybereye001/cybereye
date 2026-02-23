import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Home, ArrowLeft, Mail } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import logo from "@/assets/logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="text-center max-w-lg">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <img 
              src={logo} 
              alt="CyberEye Logo" 
              className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center font-cyber font-bold text-2xl tracking-wider">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span>
              <span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-1">EYE</span>
            </div>
          </Link>

          {/* 404 Display */}
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[180px] font-bold leading-none text-gradient opacity-20">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="w-16 h-16 md:w-24 md:h-24 text-primary animate-pulse" />
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, your data is still secure with CyberEye.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="hero" size="lg" className="w-full sm:w-auto gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto gap-2">
                <Mail className="w-4 h-4" />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Company Attribution */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-xs text-muted-foreground/70">
              © 2025 CyberEye Security (OPC) Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
