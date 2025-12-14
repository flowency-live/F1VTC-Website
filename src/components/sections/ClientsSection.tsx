const clientTypes = [
  { title: "Motorsport teams and technical staff" },
  { title: "Sponsors and commercial partners" },
  { title: "Corporate executives" },
  { title: "VIP guests and stakeholders" },
];

export default function ClientsSection() {
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Who We Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Typical Clients
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {clientTypes.map((client, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground">{client.title}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground">
            Long-term accounts and repeat scheduling are available.
          </p>
        </div>
      </div>
    </section>
  );
}
