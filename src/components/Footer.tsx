import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const links = {
    product: [{
      name: "Features",
      href: "/#features"
    }, {
      name: "Services",
      href: "/services"
    }, {
      name: "Pricing",
      href: "/pricing"
    }, {
      name: "Blog",
      href: "/blog"
    }],
    company: [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Careers",
      href: "/careers"
    }, {
      name: "Contact",
      href: "/contact"
    }],
    legal: [{
      name: "Privacy Policy",
      href: "/privacy"
    }, {
      name: "Terms of Service",
      href: "/terms"
    }, {
      name: "Security",
      href: "/#features"
    }, {
      name: "Compliance",
      href: "/#compliance"
    }]
  };
  return <footer className="py-20 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="CyberEye Logo" 
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
                decoding="async"
              />
              <div className="flex items-center font-cyber font-bold text-2xl tracking-wider">
                <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span>
                <span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-1">EYE</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              AI-powered data leak prevention system protecting enterprises from insider threats and data breaches. Built in India, for Indian businesses.
            </p>
            <div className="text-sm text-muted-foreground/80 space-y-1">
              <p className="font-medium text-foreground">Registered Office:</p>
              <p>CyberEye Security (OPC) Private Limited</p>
              <p>M. No. 60, Ramnagar, Satara – Satara, Ramnagar– 415015</p>
              <p>District: Satara, Maharashtra India</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Product</h4>
            <ul className="space-y-4">
              {links.product.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-4">
              {links.company.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map(link => (
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

        {/* CyberEye Technologies Branding */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="text-center">
                <p className="text-lg md:text-xl font-bold text-foreground">
                  CyberEye Security (OPC) Private Limited
                </p>
              <p className="text-sm text-muted-foreground mt-1">
                Innovating Digital Security Solutions
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Official Website of CyberEye</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">© 2026 CyberEye Security (OPC) Private Limited. All rights reserved.</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                CyberEye is a registered product of <span className="text-primary font-semibold">CyberEye Security (OPC) Private Limited</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/company/cybereye-security" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/cybereye-security" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:official@cybereye.co.in" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;