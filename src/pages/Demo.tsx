import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, ArrowRight, Check, Building, Users, Shield, Loader2 } from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.employees) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("demo_requests")
      .insert({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || null,
        message: `Employees: ${formData.employees}`
      });

    if (error) {
      console.error("Error submitting demo request:", error);
      toast.error("Failed to submit request. Please try again.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSubmitted(true);
    toast.success("Demo request submitted successfully!");
  };

  const benefits = [
    "14-day free trial with full access",
    "No credit card required",
    "Dedicated onboarding specialist",
    "Custom demo for your use case",
    "Integration support included",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <BackgroundEffects />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your demo request has been submitted successfully. Our team will contact you within 24 hours.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Side - Info */}
          <AnimatedSection>
            <div>
              <Link to="/" className="inline-flex items-center gap-2 group mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(200_92%_45%)] flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  CyberEye
                </span>
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Start Your <span className="text-gradient">Free Trial</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the power of AI-driven data leak prevention. Get full access to all features for 14 days, completely free.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-success" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <Building className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Companies</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">1M+</div>
                  <div className="text-xs text-muted-foreground">Endpoints</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Form */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Request Your Demo
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form and we'll be in touch within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="bg-muted border-border"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="bg-muted border-border"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
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

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Company Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted border-border"
                    required
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted border-border"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-3 py-2 bg-muted border border-border rounded-md text-foreground"
                    required
                    disabled={loading}
                  >
                    <option value="">Select...</option>
                    <option value="1-50">1-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Demo;