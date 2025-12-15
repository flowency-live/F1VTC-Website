import Image from "next/image";

const services = [
  "Executive and VIP transfers",
  "Race event and test-week logistics",
  "Airport transfers for global travel",
  "Driver-by-the-hour availability",
  "Corporate and team accounts",
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              What We Provide
            </h2>
            <p className="text-foreground mb-8">
              Every journey is managed with precise timings, live monitoring and
              clear communication.
            </p>

            {/* Image for services */}
            <div className="relative h-[200px] overflow-hidden border border-border mb-8">
              <Image
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1000&q=80"
                alt="Race circuit at night"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
            </div>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4 border-b border-border group"
              >
                <div className="w-1 h-6 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-foreground group-hover:text-heading transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
