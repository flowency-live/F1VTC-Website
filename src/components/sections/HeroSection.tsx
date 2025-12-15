import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-light-trails.png"
          alt="Motorway light trails at night"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/80" />
        {/* Gradient fade to solid at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Steel Blue accent line */}
      <div className="absolute top-16 left-0 w-1 h-32 bg-primary z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Private Hire Chauffeur Services
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Executive Transfers for
            <br />
            <span className="text-foreground">Motorsport Valley</span>
          </h1>

          <p
            className="text-lg md:text-xl text-foreground max-w-2xl mb-4 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Discreet, professional chauffeur services supporting teams, sponsors
            and executives across the UK and the global race calendar.
          </p>

          <p
            className="text-muted-foreground mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            From factory to terminal. From circuit to city.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Link href="/quote">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Dispatch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
