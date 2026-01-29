import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Heart, Zap, Globe, Shield, Code, Search, TrendingUp, Coffee, Laptop, GraduationCap, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import JobApplicationModal from "@/components/JobApplicationModal";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<{ title: string; department: string } | null>(null);
  const benefits = [{
    icon: Laptop,
    title: "Remote First",
    description: "Work from anywhere in the world with flexible hours"
  }, {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and family"
  }, {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences"
  }, {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Unlimited PTO and mental health days"
  }];
  const values = [{
    icon: Shield,
    title: "Security First",
    description: "We protect organizations from evolving cyber threats"
  }, {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with AI and machine learning"
  }, {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results"
  }, {
    icon: TrendingUp,
    title: "Growth",
    description: "Continuous learning and career advancement"
  }];
  const openings = [{
    title: "Senior Security Engineer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    description: "Build and maintain our AI-powered threat detection systems"
  }, {
    title: "AI/ML Research Scientist",
    department: "Research",
    location: "Remote (India)",
    type: "Full-time",
    description: "Develop cutting-edge machine learning models for security"
  }, {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote (India)",
    type: "Full-time",
    description: "Create intuitive interfaces for our security dashboard"
  }, {
    title: "Security Analyst",
    department: "Security Operations",
    location: "Remote (India)",
    type: "Full-time",
    description: "Monitor, analyze, and respond to security threats"
  }, {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote (India)",
    type: "Full-time",
    description: "Build and scale our cloud infrastructure"
  }, {
    title: "Technical Sales Executive",
    department: "Sales",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Drive enterprise sales and build client relationships"
  }];
  return <div className="min-h-screen bg-background relative overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  Join Our Team
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Build the Future of <span className="text-gradient">Cybersecurity</span>
                </h1>
                
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  At CyberEye Security (OPC) Pvt. Ltd., we believe in empowering our team to do their best work
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 h-full hover:border-primary/50 transition-colors text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{value.description}</p>
                  </div>
                </AnimatedSection>)}
            </div>
          </div>
        </section>


        {/* Open Positions */}
        <section className="py-16 md:py-24 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Open Positions</h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                  Find your next opportunity at CyberEye Technologies
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto space-y-4">
              {openings.map((job, index) => <AnimatedSection key={index} delay={index * 0.05}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {job.department}
                          </span>
                          <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">{job.description}</p>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Button 
                        variant="heroOutline" 
                        size="sm" 
                        className="shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        onClick={() => setSelectedJob({ title: job.title, department: job.department })}
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>)}
            </div>

            <JobApplicationModal
              isOpen={!!selectedJob}
              onClose={() => setSelectedJob(null)}
              jobTitle={selectedJob?.title || ""}
              department={selectedJob?.department || ""}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                  Don't See the Right Role?
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
                  We're always looking for talented individuals. Send us your resume and we'll 
                  keep you in mind for future opportunities.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center">
                  <a href="mailto:cybereye.help@gmail.com?subject=Career Inquiry">
                    <Button variant="hero" size="lg" className="w-full text-sm md:text-base">
                      Send Your Resume
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="heroOutline" size="lg" className="w-full text-sm md:text-base">
                      Contact Us
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
export default Careers;