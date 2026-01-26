import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedSection from "@/components/AnimatedSection";
const Terms = () => {
  return <div className="min-h-screen bg-background relative">
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
                  Terms of <span className="text-gradient">Service</span>
                </h1>
                <p className="text-muted-foreground mb-4">Last updated: December 2025</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using CyberEye's services (a product of CyberEye Technologies (OPC) Pvt. Ltd.), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Permission is granted to temporarily use CyberEye's software for personal or commercial purposes in accordance with your subscription plan. This license does not include the right to modify, copy, distribute, or reverse engineer any portion of the software.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Collection and Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      CyberEye collects and processes data as described in our Privacy Policy. By using our services, you consent to such processing and warrant that all data provided by you is accurate. We implement industry-standard security measures to protect your data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Service Availability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      While we strive to maintain 99.9% uptime, CyberEye does not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      CyberEye shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount you paid for the service in the past 12 months.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For questions about these Terms of Service, please contact CyberEye Technologies (OPC) Pvt. Ltd. at{" "}
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
    </div>;
};
export default Terms;