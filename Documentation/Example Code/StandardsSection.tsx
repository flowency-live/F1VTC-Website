const standards = [
  "Licensed UK private hire operator",
  "Fully insured for hire and reward",
  "Professional, vetted drivers",
  "Executive vehicles maintained to a high standard",
  "Discreet service, no branding on request",
];

const StandardsSection = () => {
  return (
    <section id="standards" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Standards
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Professional by Design
            </h2>
            <p className="text-muted-foreground">
              We focus on reliability, discretion and consistency.
            </p>
          </div>
          
          <div className="grid gap-4">
            {standards.map((standard, index) => (
              <div 
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 bg-primary mt-2.5 flex-shrink-0" />
                <span className="text-foreground">
                  {standard}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
