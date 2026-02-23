import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, MessageSquare, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("contact_messages")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || null,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

    if (error) {
      console.error("Error submitting contact message:", error);
      toast.error("Failed to send message. Please try again.");
      setLoading(false);
      return;
    }

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "CyberEye Support",
      value: "official@cybereye.co.in",
      link: "mailto:official@cybereye.co.in",
    },
    {
      icon: MapPin,
      title: "Registered Office",
      value: "M. No. 60, Ramnagar, Satara – 415015",
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
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <SEOHead
        title="Contact CyberEye Security | Cyber Protection Experts India"
        description="Get in touch with CyberEye Security for data leak prevention solutions. Email official@cybereye.co.in. We respond within 24 hours."
        keywords="CyberEye, cyber eye, CyberEye Security, cyber eye security, contact CyberEye, cybersecurity support, DLP support India"
        pathname="/contact"
        breadcrumbLabel="Contact"
      />
      <BackgroundEffects />
      <Navbar />
      <Breadcrumbs currentLabel="Contact" />
      <main className="relative z-10 pt-4">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  Contact CyberEye
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mt-6 mb-6">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-base md:text-xl text-muted-foreground">
                  Have questions about CyberEye? We'd love to hear from you. 
                  Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <a
                    href={info.link}
                    className="block bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary/50 transition-all duration-300 group h-full"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">{info.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm">{info.value}</p>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="bg-card border border-border rounded-xl md:rounded-2xl p-6 md:p-12">
                  <h2 className="text-xl md:text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                          disabled={loading}
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
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                          disabled={loading}
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
                          disabled={loading}
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
                        className="bg-muted border-border min-h-[120px] md:min-h-[150px]"
                        required
                        disabled={loading}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
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
