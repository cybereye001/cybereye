import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-2 md:px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(200_92%_45%)] flex items-center justify-center glow">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              CyberEye
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="hero" size="sm">
                Get Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout - All links visible without hamburger */}
        <div className="md:hidden">
          {/* Top row with logo */}
          <div className="flex items-center justify-between h-12 border-b border-border/50">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-[hsl(200_92%_45%)] flex items-center justify-center">
                <Eye className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">
                CyberEye
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2">
                  Login
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="hero" size="sm" className="text-xs h-7 px-2">
                  Demo
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Bottom row with nav links - always visible */}
          <div className="flex items-center justify-between h-10 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-xs whitespace-nowrap px-3 py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;