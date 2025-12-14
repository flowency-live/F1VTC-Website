import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Coverage | F1 Valley Transfers",
  description: "Operating across Motorsport Valley - Oxfordshire, Northamptonshire, Buckinghamshire and beyond. Airport transfers to all major UK airports.",
};

const regions = [
  { name: "Oxfordshire", locations: ["Oxford", "Banbury", "Enstone", "Grove", "Bicester"] },
  { name: "Northamptonshire", locations: ["Silverstone", "Towcester", "Northampton", "Brackley"] },
  { name: "Buckinghamshire", locations: ["Milton Keynes", "Aylesbury", "High Wycombe"] },
  { name: "Bedfordshire", locations: ["Bedford", "Luton", "Cranfield"] },
  { name: "Warwickshire", locations: ["Gaydon", "Warwick", "Stratford-upon-Avon"] },
];

const airports = [
  { name: "London Heathrow", code: "LHR" },
  { name: "London Luton", code: "LTN" },
  { name: "Birmingham", code: "BHX" },
  { name: "London Stansted", code: "STN" },
  { name: "London Gatwick", code: "LGW" },
  { name: "Farnborough", code: "FAB" },
  { name: "Oxford Kidlington", code: "OXF" },
  { name: "Cranfield", code: "- " },
  { name: "London City", code: "LCY" },
];

const circuits = [
  "Silverstone Circuit",
  "Donington Park",
  "Brands Hatch",
  "Thruxton",
  "Bedford Autodrome",
];

export default function CoveragePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Coverage
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
              Motorsport Valley & Beyond
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              Operating across the UK motorsport cluster and connecting to airports worldwide via major UK terminals.
            </p>
          </div>
        </section>

        {/* Regions */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">
              Core Regions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, index) => (
                <div key={index} className="bg-card border border-border p-6">
                  <h3 className="text-lg font-semibold mb-4">{region.name}</h3>
                  <div className="space-y-2">
                    {region.locations.map((location, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-foreground text-sm">{location}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Airports */}
        <section className="py-24 border-b border-border bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Airport Connections
            </h2>
            <p className="text-foreground mb-12 max-w-2xl">
              Direct transfers to all major UK airports including commercial terminals and private aviation facilities.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {airports.map((airport, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-4 border border-border bg-background"
                >
                  <span className="text-foreground">{airport.name}</span>
                  <span className="text-muted-foreground text-sm">{airport.code}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Circuits */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Circuit Transfers
            </h2>
            <p className="text-foreground mb-12 max-w-2xl">
              Race event and test day logistics for UK circuits.
            </p>
            <div className="flex flex-wrap gap-3">
              {circuits.map((circuit, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-foreground text-sm border border-border"
                >
                  {circuit}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Plan Your Transfer</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Get a quote for transfers anywhere within our coverage area.
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
