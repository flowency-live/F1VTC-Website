import Image from "next/image";

const standards = [
  "Licensed UK private hire operator",
  "Fully insured for hire and reward",
  "Professional, vetted drivers",
  "Executive vehicles maintained to a high standard",
  "Discreet service, no branding on request",
];

export default function StandardsSection() {
  return (
    <section id="standards" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Standards
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Professional by Design
            </h2>
            <p className="text-foreground mb-8">
              We focus on reliability, discretion and consistency.
            </p>

            <div className="space-y-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{standard}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image - steering wheel / professional driving */}
          <div className="relative h-[350px] overflow-hidden border border-border">
            <Image
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1000&q=80"
              alt="Professional driver"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
