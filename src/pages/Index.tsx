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
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <SEOHead
        title="AI Powered Data Leak Prevention Software | CyberEye Security"
        description="CyberEye Security offers AI-powered data leak prevention (DLP) software to monitor, detect, and block insider threats in real-time."
        keywords="CyberEye, cyber eye, CyberEye Security, cyber eye security, data leak prevention, DLP, cybersecurity, AI security, insider threat, enterprise security, endpoint monitoring"
        pathname="/"
      />
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
    </main>
  );
};

export default Index;
