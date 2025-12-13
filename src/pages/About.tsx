import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Award, Globe, Zap } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedNumber from "@/components/AnimatedNumber";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We believe every organization deserves enterprise-grade security, regardless of size.",
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you protect what matters most.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of AI and machine learning to stay ahead of threats.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we build and deliver.",
    },
  ];

  const team = [
    {
      name: "Alex Kumar",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      name: "Michael Ross",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      name: "Emily Zhang",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  About Us
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Protecting the Digital <span className="text-gradient">Future</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                  CyberEye was founded with a simple mission: to make advanced data leak prevention accessible
                  to every organization. We believe that AI-powered security should be the norm, not the exception.
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
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Our Story</h2>
                <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    In 2019, our founders witnessed firsthand how a major corporation suffered a devastating
                    data breach due to an insider threat.
                  </p>
                  <p className="hidden md:block">
                    This experience sparked the idea for CyberEye. What if security systems could learn and
                    adapt like the attackers do?
                  </p>
                  <p className="hidden md:block">
                    Today, CyberEye protects organizations worldwide, from startups to Fortune 500 companies.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                {/* Stats - 2x2 grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="100+" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Countries</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="500+" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Clients</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="50M+" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Threats Blocked</div>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 text-center">
                    <Award className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2 md:mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      <AnimatedNumber value="99.9%" />
                    </div>
                    <div className="text-muted-foreground text-xs md:text-sm">Accuracy</div>
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
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 h-full hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                      <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-base hidden sm:block">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team - 2x2 grid on mobile */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Leadership Team</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Meet the people behind CyberEye
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="text-center group">
                    <div className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 mb-3 md:mb-4 group-hover:border-primary transition-colors">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{member.role}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

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
    </div>
  );
};

export default About;
