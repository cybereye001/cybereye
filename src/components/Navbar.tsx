import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const location = useLocation();
  const navLinks = [{
    name: "Features",
    href: "/#features"
  }, {
    name: "Pricing",
    href: "/pricing"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (href: string) => {
    // On home page, Features should be active by default
    if (href === "/#features" && location.pathname === "/") {
      return true;
    }
    if (href.startsWith("/#")) {
      return false; // Already handled above
    }
    return location.pathname === href;
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5">
      <div className="container mx-auto px-2 md:px-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="CyberEye Logo" className="h-12 w-auto object-contain transition-all duration-300" fetchPriority="high" loading="eager" decoding="async" width={48} height={48} />
            <div className="flex flex-col">
              <div className="flex items-center font-cyber font-bold text-xl tracking-wider">
                <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span>
                <span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-1">EYE</span>
              </div>
              <span className="text-[9px] leading-tight text-[#98a7bd]">Developed by CyberEye Security (OPC) Pvt. Ltd.</span>
            </div>
          </Link>

          <div className="flex items-center gap-1 bg-muted/30 rounded-full px-2 py-1.5 border border-border/50">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isActive(link.href) ? "text-primary-foreground bg-primary shadow-lg shadow-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                {link.name}
              </Link>)}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted/50">
                Login
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="hero" size="sm" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                Get Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Layout - All links visible without hamburger */}
        <div className="md:hidden">
          {/* Top row with logo */}
          <div className="flex items-center justify-between h-12 border-b border-primary/10">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="CyberEye Logo" className="h-9 w-auto object-contain" fetchPriority="high" loading="eager" decoding="async" width={36} height={36} />
              <div className="flex flex-col">
                <div className="flex items-center font-cyber font-bold text-sm tracking-wider">
                  <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span>
                  <span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-0.5">EYE</span>
                </div>
                <span className="text-[7px] leading-tight text-[#98a7bd]">Developed by CyberEye Security (OPC) Pvt. Ltd.</span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-xs h-7 px-2 text-muted-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="hero" size="sm" className="text-xs h-7 px-2 shadow-md shadow-primary/30">
                  Demo
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Bottom row with nav links - always visible */}
          <div className="flex items-center gap-1 h-10 bg-muted/20 overflow-x-auto scrollbar-hide px-2">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`relative font-medium text-xs whitespace-nowrap px-2 py-1.5 rounded-full transition-all duration-300 ${isActive(link.href) ? "text-primary-foreground bg-primary shadow-md shadow-primary/30" : "text-muted-foreground hover:text-primary"}`}>
                {link.name}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;