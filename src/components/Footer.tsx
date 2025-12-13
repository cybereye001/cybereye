import { Link } from "react-router-dom";
import { Eye, Linkedin, Twitter, Github, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Use Cases", href: "/#use-cases" },
      { name: "Pricing", href: "/pricing" },
      { name: "Documentation", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/about" },
      { name: "Blog", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/#features" },
      { name: "Compliance", href: "/#compliance" },
    ],
  };

  return (
    <footer className="py-20 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">CyberEye</span>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              AI-powered data leak prevention system protecting enterprises from insider threats and data breaches worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:contact@cybereye.com" className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Product</h4>
            <ul className="space-y-4">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 CyberEye. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              A product by <span className="text-primary font-medium">ONKAR DIGITAL SERVICES LLP</span>
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Protecting enterprises worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;