import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import ThreatLandscape from "@/components/ThreatLandscape";
import Features from "@/components/Features";
import SecurityDashboard from "@/components/SecurityDashboard";
import UseCases from "@/components/UseCases";
import ComplianceSection from "@/components/ComplianceSection";
import PricingSection from "@/components/PricingSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import VideoUploader from "@/components/VideoUploader";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSolution />
        <ThreatLandscape />
        <Features />
        <SecurityDashboard />
        <UseCases />
        <ComplianceSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
      {/* Temporary uploader - remove after uploading video */}
      <VideoUploader />
    </main>
  );
};

export default Index;
