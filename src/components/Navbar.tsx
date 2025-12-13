import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(200_92%_45%)] flex items-center justify-center glow">
              <Eye className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              CyberEye
            </span>
          </Link>

          {/* Desktop nav - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
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

          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu - horizontal scrolling nav */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border animate-fade-in">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm whitespace-nowrap px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" size="sm" className="whitespace-nowrap text-sm">
                  Login
                </Button>
              </Link>
              <Link to="/demo" onClick={() => setIsOpen(false)}>
                <Button variant="hero" size="sm" className="whitespace-nowrap text-sm">
                  Get Demo
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
