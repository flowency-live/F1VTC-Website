import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | F1 Valley Transfers",
  description: "Terms and conditions for F1 Valley Transfers private hire chauffeur services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Legal
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold mb-8">
                Terms & Conditions
              </h1>

              <div className="prose prose-invert max-w-none space-y-8 text-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">1. Service Agreement</h2>
                  <p>
                    By booking a transfer with F1ValleyTransfers, you agree to these terms and conditions. Our services are provided as a licensed private hire operator in accordance with UK regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">2. Bookings</h2>
                  <p>
                    All bookings are subject to availability and confirmation. Quotes provided are valid for 7 days unless otherwise stated. Confirmed bookings constitute a binding agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">3. Pricing</h2>
                  <p>
                    Prices are quoted in GBP and include VAT where applicable. Additional charges may apply for waiting time exceeding included allowances, toll roads, parking fees, and out-of-hours services as specified in your quote.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">4. Cancellation Policy</h2>
                  <p>
                    Cancellations made more than 24 hours before the scheduled pickup time will receive a full refund. Cancellations within 24 hours may be subject to a cancellation fee. No-shows will be charged in full.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">5. Passenger Responsibilities</h2>
                  <p>
                    Passengers must be ready at the agreed pickup location and time. Seatbelts must be worn at all times. Smoking and consumption of alcohol in vehicles is prohibited. Passengers are responsible for any damage caused to vehicles.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">6. Liability</h2>
                  <p>
                    F1ValleyTransfers maintains comprehensive insurance coverage. Our liability is limited to the extent permitted by law. We are not liable for delays caused by traffic, weather, or circumstances beyond our control.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">7. Data Protection</h2>
                  <p>
                    Personal data is processed in accordance with our Privacy Policy and applicable data protection legislation. Booking information is retained for legal and operational purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">8. Governing Law</h2>
                  <p>
                    These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
                  </p>
                </section>

                <p className="text-muted-foreground text-sm pt-8 border-t border-border">
                  Last updated: December 2024
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
