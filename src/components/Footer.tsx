import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const links = {
    product: [{
      name: "Features",
      href: "/#features"
    }, {
      name: "Use Cases",
      href: "/#use-cases"
    }, {
      name: "Pricing",
      href: "/pricing"
    }, {
      name: "Documentation",
      href: "#"
    }],
    company: [{
      name: "About Us",
      href: "/about"
    }, {
      name: "Careers",
      href: "/about"
    }, {
      name: "Blog",
      href: "/about"
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
                className="w-12 h-12 rounded-xl object-cover group-hover:scale-105 transition-transform shadow-lg shadow-primary/30"
              />
              <div className="flex items-center font-cyber font-bold text-2xl tracking-wider">
                <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">CYBER</span>
                <span className="bg-gradient-to-b from-cyan-400 to-cyan-600 bg-clip-text text-transparent ml-1">EYE</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">Developed & Powered by ONKAR DIGITAL SERVICES LLP - AI-powered data leak prevention system protecting enterprises from insider threats and data breaches worldwide.</p>
            
          </div>

          {/* Links */}
          

          

          <div>
            <h4 className="font-semibold mb-6 text-foreground">Legal</h4>
            <ul className="space-y-4">
              {links.legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* ONKAR DIGITAL SERVICES LLP Branding */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border rounded-2xl px-8 py-4 mb-4 text-primary-foreground border-secondary bg-[#020202]">
              <p className="text-lg md:text-xl font-bold text-primary text-center">
                ONKAR DIGITAL SERVICES LLP
              </p>
              <p className="text-xs md:text-sm text-muted-foreground text-center mt-1">
                Innovating Digital Security Solutions
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>Official Website of ONKAR DIGITAL SERVICES LLP</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">© 2025 ONKAR DIGITAL SERVICES LLP. All rights reserved.</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                CyberEye is a registered product of <span className="text-primary font-semibold">ONKAR DIGITAL SERVICES LLP</span>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1 text-xs text-muted-foreground/70">
              <p>Email: cybereye.help@gmail.com</p>
              <p>Phone: +91 9172573489</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;