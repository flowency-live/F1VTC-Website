import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fleet | F1 Valley Transfers",
  description: "Executive saloons and luxury MPVs maintained to the highest standards. Professional, discreet transport for Motorsport Valley.",
};

const vehicleCategories = [
  {
    name: "Executive Saloon",
    description: "Premium executive vehicles for individual and small group travel.",
    features: [
      "Up to 3 passengers",
      "Climate control",
      "Leather interior",
      "USB charging",
      "Wi-Fi available",
      "Complimentary water",
    ],
    suitable: "Ideal for airport transfers, factory visits, and executive travel.",
  },
  {
    name: "Executive MPV",
    description: "Spacious vehicles for groups and equipment transport.",
    features: [
      "Up to 6 passengers",
      "Extended luggage capacity",
      "Climate control",
      "Leather interior",
      "USB charging",
      "Wi-Fi available",
    ],
    suitable: "Ideal for team transport, equipment-light travel, and group transfers.",
  },
];

const standards = [
  "All vehicles fully licensed for private hire",
  "Comprehensive insurance for hire and reward",
  "Regular professional maintenance",
  "Deep cleaned between bookings",
  "Discreet, unmarked vehicles available on request",
  "Real-time GPS tracking for dispatch coordination",
];

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Fleet
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
              Executive Vehicles
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              A modern fleet of executive saloons and luxury MPVs, selected for comfort, space and reliability.
            </p>
          </div>
        </section>

        {/* Vehicle Categories */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="space-y-16">
              {vehicleCategories.map((category, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {category.name}
                    </h2>
                    <p className="text-foreground mb-6">{category.description}</p>
                    <p className="text-muted-foreground">{category.suitable}</p>
                  </div>
                  <div className="bg-card border border-border p-8">
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                      Features
                    </h3>
                    <div className="space-y-3">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="py-24 border-b border-border bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">
              Vehicle Standards
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-foreground">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Book Your Transfer</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Select the right vehicle for your requirements when you request a quote.
            </p>
            <Link href="/quote">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
