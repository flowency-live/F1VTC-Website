import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Book with Confidence
          </h2>
          <p className="text-muted-foreground mb-10">
            If you require professional transfers aligned to the pace and
            precision of motorsport operations, speak to our dispatch team.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/quote">
              <Button variant="hero" size="xl">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Dispatch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
