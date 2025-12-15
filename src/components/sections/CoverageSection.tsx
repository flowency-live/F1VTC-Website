import Image from "next/image";

const regions = [
  "Oxfordshire",
  "Northamptonshire",
  "Buckinghamshire",
  "Bedfordshire",
  "Warwickshire",
  "South Midlands",
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-24 border-t border-border bg-card relative overflow-hidden">
      {/* Background image - subtle */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
          alt="Airport at night"
          fill
          className="object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Motorsport Valley & Beyond
          </h2>

          <p className="text-foreground text-lg mb-8">
            We operate across Motorsport Valley and the surrounding regions.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {regions.map((region, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-foreground text-sm border border-border"
              >
                {region}
              </span>
            ))}
          </div>

          <p className="text-muted-foreground">
            Our service extends nationally for UK travel and internationally via
            airport transfers supporting the global racing calendar.
          </p>
        </div>
      </div>
    </section>
  );
}
