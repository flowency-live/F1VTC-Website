import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CoverageSection from "@/components/sections/CoverageSection";
import StandardsSection from "@/components/sections/StandardsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FleetSection from "@/components/sections/FleetSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
