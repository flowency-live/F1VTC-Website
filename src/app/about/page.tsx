import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | F1 Valley Transfers",
  description: "Learn about F1 Valley Transfers - professional chauffeur services for Motorsport Valley and the global race calendar.",
};

const values = [
  {
    title: "Precision",
    description: "Every journey is planned and executed with motorsport-level attention to timing and detail.",
  },
  {
    title: "Discretion",
    description: "Professional, low-profile service. No branding on vehicles when requested. Complete confidentiality.",
  },
  {
    title: "Reliability",
    description: "24/7 availability during race weeks. Proactive communication. Fixed quotes with no hidden charges.",
  },
  {
    title: "Professionalism",
    description: "Licensed operators, vetted drivers, executive vehicles maintained to the highest standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
              Built for Motorsport Valley
            </h1>
            <p className="text-lg text-foreground max-w-2xl">
              F1ValleyTransfers was established to serve the unique transport requirements of the UK motorsport industry and its global operations.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our Approach
              </h2>
              <div className="space-y-6 text-foreground">
                <p>
                  Operating from the heart of Motorsport Valley, we understand the pace and precision that motorsport teams, sponsors and executives demand.
                </p>
                <p>
                  Our service is built around reliability, discretion and operational flexibility. Whether supporting a race weekend, connecting airports to factories, or providing executive transport for commercial partners, we deliver consistent, professional service.
                </p>
                <p>
                  We work with teams, sponsors, corporate clients and VIP guests who require transport that operates to the same standards they expect from their own operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 border-b border-border bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Licensing & Standards
              </h2>
              <div className="space-y-4 text-foreground">
                <p>
                  F1ValleyTransfers is a fully licensed UK private hire operator. All vehicles are licensed for hire and reward, fully insured, and maintained to executive standards.
                </p>
                <p>
                  Our drivers are professionally vetted, licensed, and trained in executive chauffeur service standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Work With Us</h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              If you require professional transport aligned to motorsport operations, get in touch.
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
