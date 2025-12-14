const FleetSection = () => {
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
              A modern fleet of executive saloons and luxury MPVs, selected for comfort, space and reliability.
            </p>
            <p className="text-muted-foreground">
              Suitable for individuals, small groups and equipment-light travel.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[16/10] bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-[1px] bg-border mx-auto mb-4" />
                <p className="text-muted-foreground text-sm uppercase tracking-widest">
                  Executive Fleet
                </p>
                <div className="w-16 h-[1px] bg-border mx-auto mt-4" />
              </div>
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 border-r border-b border-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
