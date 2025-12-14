import { Metadata } from "next";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | F1 Valley Transfers",
  description: "Cookie policy for F1 Valley Transfers - information about how we use cookies on our website.",
};

export default function CookiesPage() {
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
                Cookie Policy
              </h1>

              <div className="prose prose-invert max-w-none space-y-8 text-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">What Are Cookies</h2>
                  <p>
                    Cookies are small text files stored on your device when you visit a website. They help websites function properly and provide information to site owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">How We Use Cookies</h2>
                  <p>We use cookies to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Remember your preferences</li>
                    <li>Keep you signed in to your account</li>
                    <li>Understand how you use our website</li>
                    <li>Improve our services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">Types of Cookies We Use</h2>

                  <h3 className="text-lg font-medium text-heading mt-6 mb-2">Essential Cookies</h3>
                  <p>
                    Required for the website to function. These cannot be disabled. They include session cookies for login and security purposes.
                  </p>

                  <h3 className="text-lg font-medium text-heading mt-6 mb-2">Functional Cookies</h3>
                  <p>
                    Remember your preferences such as language settings and form data to improve your experience.
                  </p>

                  <h3 className="text-lg font-medium text-heading mt-6 mb-2">Analytics Cookies</h3>
                  <p>
                    Help us understand how visitors use our website. This information is used to improve our site and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">Managing Cookies</h2>
                  <p>
                    You can control cookies through your browser settings. Disabling certain cookies may affect website functionality. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block all or third-party cookies</li>
                    <li>Accept cookies from specific sites</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">Third-Party Cookies</h2>
                  <p>
                    Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties may include payment processors and analytics providers.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-heading mb-4">Updates to This Policy</h2>
                  <p>
                    We may update this cookie policy periodically. Changes will be posted on this page with an updated revision date.
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
