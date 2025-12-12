import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@cybereye.com",
      link: "mailto:contact@cybereye.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Security Blvd, San Francisco, CA",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      value: "Available 24/7",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        {/* Hero */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  Contact Us
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <a
                    href={info.link}
                    className="block bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-muted border-border"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-muted border-border"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Company Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-muted border-border"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="bg-muted border-border"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-muted border-border min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
