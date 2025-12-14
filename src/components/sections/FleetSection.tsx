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

          <div className="bg-card border border-border p-12 flex items-center justify-center min-h-[300px]">
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Executive Fleet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
