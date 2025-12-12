import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import TrustBadges from "@/components/TrustBadges";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TrustBadges />
        <Stats />
        <ProblemSolution />
        <Features />
        <Integrations />
        <Testimonials />
        <PricingSection />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
