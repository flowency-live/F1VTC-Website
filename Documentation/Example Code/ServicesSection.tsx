const services = [
  "Executive and VIP transfers",
  "Race event and test-week logistics",
  "Airport transfers for global travel",
  "Driver-by-the-hour availability",
  "Corporate and team accounts",
];

const ServicesSection = () => {
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
            <p className="text-foreground">
              Every journey is managed with precise timings, live monitoring and clear communication.
            </p>
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
};

export default ServicesSection;
