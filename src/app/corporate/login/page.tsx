'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";

export default function CorporateLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // TODO: Integrate with backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmailSent(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold mb-3">Corporate Portal</h1>
              <p className="text-muted-foreground">
                Sign in to access your corporate account
              </p>
            </div>

            {emailSent ? (
              <div className="bg-card border border-border p-8 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-3">Check Your Email</h2>
                <p className="text-foreground mb-4">
                  We have sent a sign-in link to <strong>{email}</strong>
                </p>
                <p className="text-muted-foreground text-sm">
                  Click the link in your email to access your account. The link expires in 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {error && (
                  <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Sign-in Link'}
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-6">
                  We use passwordless authentication for security.
                </p>
              </form>
            )}

            <div className="text-center mt-8">
              <p className="text-muted-foreground text-sm">
                Need a corporate account?{' '}
                <Link href="/contact" className="text-primary hover:text-primary/80">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
