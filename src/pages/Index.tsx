import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import ThreatLandscape from "@/components/ThreatLandscape";
import Features from "@/components/Features";
import SecurityDashboard from "@/components/SecurityDashboard";
import UseCases from "@/components/UseCases";
import ComplianceSection from "@/components/ComplianceSection";
import Integrations from "@/components/Integrations";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
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
        <ProblemSolution />
        <ThreatLandscape />
        <Features />
        <SecurityDashboard />
        <Integrations />
        <UseCases />
        <ComplianceSection />
        <Testimonials />
        <PricingSection />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
