import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <Navbar />
      
      <main className="relative z-10 pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto">
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  Legal
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6">
                  Privacy <span className="text-gradient">Policy</span>
                </h1>
                <p className="text-muted-foreground mb-4">Last updated: December 2024</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      ONKAR DIGITAL SERVICES LLP collects information you provide directly to us, such as when you create an account, request a demo, or contact us for support. This may include your name, email address, company name, and phone number.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement industry-standard security measures to protect your data. All data is encrypted both in transit and at rest. We regularly audit our systems and conduct penetration testing.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your information for as long as your account is active or as needed to provide you services. We will also retain and use your information as necessary to comply with legal obligations.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting us directly at privacy@cybereye.com.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have questions about this Privacy Policy, please contact ONKAR DIGITAL SERVICES LLP at{" "}
                      <a href="mailto:cybereye.help@gmail.com" className="text-primary hover:underline">
                        cybereye.help@gmail.com
                      </a>
                    </p>
                  </section>
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

export default Privacy;
