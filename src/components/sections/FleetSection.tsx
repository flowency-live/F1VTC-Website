import Image from "next/image";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Fleet
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Executive Vehicles
            </h2>
            <p className="text-foreground mb-4">
              A modern fleet of executive saloons and luxury MPVs, selected for
              comfort, space and reliability.
            </p>
            <p className="text-muted-foreground">
              Suitable for individuals, small groups and equipment-light travel.
            </p>
          </div>

          <div className="relative h-[400px] overflow-hidden border border-border">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury car interior"
              fill
              className="object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
