import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TechnicalSection from "@/components/TechnicalSection";
import ExecutionSection from "@/components/ExecutionSection";
import ResultsSection from "@/components/ResultsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TechnicalSection />
      <ExecutionSection />
      <ResultsSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
