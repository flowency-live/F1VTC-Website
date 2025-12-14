import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | F1 Valley Transfers",
  description: "Privacy policy for F1 Valley Transfers - how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
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
                Privacy Policy
              </h1>

              <div className="prose prose-invert max-w-none space-y-8 text-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">1. Introduction</h2>
                  <p>
                    F1ValleyTransfers is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">2. Information We Collect</h2>
                  <p>We collect information you provide when booking transfers, including:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name and contact details</li>
                    <li>Pickup and destination addresses</li>
                    <li>Flight or travel information</li>
                    <li>Payment information</li>
                    <li>Corporate account details where applicable</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">3. How We Use Your Information</h2>
                  <p>Your information is used to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide and coordinate your transfers</li>
                    <li>Process payments</li>
                    <li>Communicate about your bookings</li>
                    <li>Improve our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">4. Data Sharing</h2>
                  <p>
                    We may share your information with drivers assigned to your booking and payment processors. We do not sell your personal data to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">6. Data Retention</h2>
                  <p>
                    We retain booking data for 7 years for legal and accounting purposes. Contact information for marketing purposes is retained until you unsubscribe.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">7. Your Rights</h2>
                  <p>Under UK GDPR, you have the right to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing</li>
                    <li>Data portability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">8. Contact</h2>
                  <p>
                    For privacy-related enquiries or to exercise your rights, please contact us via our contact form.
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
