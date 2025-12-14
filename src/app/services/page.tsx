import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services | F1 Valley Transfers",
  description: "Executive transfers, airport services, race event logistics, driver-by-the-hour, and corporate accounts for Motorsport Valley.",
};

const services = [
  {
    title: "Executive Transfers",
    description: "Point-to-point transfers for teams, executives and VIPs. Pre-planned or on-demand availability.",
    features: ["Door-to-door service", "Flight tracking", "Meet and greet", "Flexible scheduling"],
  },
  {
    title: "Airport Transfers",
    description: "Reliable connections between Motorsport Valley and all major UK airports.",
    features: ["Heathrow, Luton, Birmingham", "Private aviation terminals", "Flight monitoring", "No waiting charges for delays"],
  },
  {
    title: "Race Event Logistics",
    description: "Transfers aligned to race weekends, test sessions and factory visits.",
    features: ["Circuit access knowledge", "Multi-stop itineraries", "Team coordination", "24/7 availability during events"],
  },
  {
    title: "Driver by the Hour",
    description: "Flexible chauffeur availability for meetings, site visits and extended travel days.",
    features: ["Minimum 4-hour booking", "On-call availability", "Multi-destination routes", "Discreet, professional service"],
  },
  {
    title: "Corporate Accounts",
    description: "Streamlined booking and billing for teams, sponsors and businesses with regular travel needs.",
    features: ["Dedicated account management", "Consolidated invoicing", "Priority booking", "Usage reporting"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
              Professional Chauffeur Services
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              Every service is designed around the demands of motorsport operations and executive travel.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 items-start py-12 border-b border-border last:border-0"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-foreground">{service.description}</p>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 border-t border-border bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Book?</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Get a quote for your transfer requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote">
                <Button variant="hero" size="xl">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
