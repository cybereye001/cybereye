import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Award, Globe, Zap } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedNumber from "@/components/AnimatedNumber";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
const About = () => {
  const values = [{
    icon: Shield,
    title: "Security First",
    description: "We believe every organization deserves enterprise-grade security, regardless of size."
  }, {
    icon: Users,
    title: "Customer Success",
    description: "Your success is our success. We're committed to helping you protect what matters most."
  }, {
    icon: Target,
    title: "Innovation",
    description: "We continuously push the boundaries of AI and machine learning to stay ahead of threats."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we build and deliver."
  }];
  const team = [{
    name: "Alex Kumar",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  }, {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  }, {
    name: "Michael Ross",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  }, {
    name: "Emily Zhang",
    role: "Head of AI Research",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }];
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <SEOHead
        title="About CyberEye Security | AI Based DLP Company India"
        description="Learn about CyberEye Security (OPC) Pvt. Ltd., an Indian cybersecurity company building AI-powered data leak prevention solutions to protect enterprises from insider threats."
        keywords="CyberEye, cyber eye, CyberEye Security, cyber eye security, about CyberEye, DLP company India, cybersecurity company, AI security company"
        pathname="/about"
        breadcrumbLabel="About Us"
      />
      <BackgroundEffects />
      <Navbar />
      <Breadcrumbs currentLabel="About Us" />
      <main className="relative z-10 pt-4">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Innovating for a <span className="text-gradient">Secure Digital Future</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">CyberEye Security (OPC) Pvt. Ltd.</span> is a technology company 
                  dedicated to building cutting-edge cybersecurity solutions. CyberEye, our flagship product, represents 
                  our commitment to making advanced AI-powered data leak prevention accessible to every organization.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Story - Side by side on mobile */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-16 items-start max-w-6xl mx-auto">
              <AnimatedSection>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  About <span className="text-primary">CyberEye Security</span>
                </h2>
                <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">CyberEye Security (OPC) Pvt. Ltd.</span> is a registered One Person Company 
                    in India, specializing in innovative digital solutions and enterprise-grade cybersecurity products.
                  </p>
                  <p className="hidden md:block">
                    Founded with a vision to make advanced security accessible to all organizations, we developed 
                    CyberEye as our flagship AI-powered data leak prevention system that protects businesses worldwide.
                  </p>
                  <p className="hidden md:block">
                    Our team of experts combines deep technical expertise with a passion for protecting businesses 
                    from evolving cyber threats. We are committed to continuous innovation and excellence.
                  </p>
                  <div className="pt-3 border-t border-border/50 mt-4 hidden md:block">
                    <p className="text-xs text-muted-foreground/70">
                      <strong className="text-foreground">Contact:</strong> cybereye.help@gmail.com | +91 9172573489
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      <strong className="text-foreground">Website:</strong> www.cybereye.co.in
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                {/* Stats - 2x2 grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="99.9%" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Leak Prevention Rate</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="<50ms" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Detection Speed</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="<24 Hrs" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Full Investigation</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="100%" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Activity Tracking</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values - 2x2 grid on mobile */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-base hidden sm:block">{value.description}</p>
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>

        {/* Team - 2x2 grid on mobile */}
        

        {/* CTA - 2x2 buttons on mobile */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  Ready to Join the <span className="text-gradient">CyberEye</span> Family?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
                  Start protecting your organization today with our 14-day free trial.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center">
                  <Link to="/demo">
                    <Button variant="hero" size="lg" className="w-full text-sm md:text-base">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg" className="w-full text-sm md:text-base">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;