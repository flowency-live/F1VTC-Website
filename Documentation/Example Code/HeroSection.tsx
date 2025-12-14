import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Steel Blue accent line */}
      <div className="absolute top-16 left-0 w-1 h-32 bg-primary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Private Hire Chauffeur Services
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Executive Transfers for<br />
            <span className="text-foreground">Motorsport Valley</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground max-w-2xl mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discreet, professional chauffeur services supporting teams, sponsors and executives across the UK and the global race calendar.
          </p>
          
          <p className="text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            From factory to terminal. From circuit to city.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="xl">
              Get a Quote
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Dispatch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
