import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import StandardsSection from "@/components/StandardsSection";
import ClientsSection from "@/components/ClientsSection";
import FleetSection from "@/components/FleetSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <CoverageSection />
        <StandardsSection />
        <ClientsSection />
        <FleetSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
