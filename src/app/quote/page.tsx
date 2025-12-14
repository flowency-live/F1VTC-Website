'use client';

import { useState } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";

type JourneyType = 'one-way' | 'return';
type VehicleType = 'executive' | 'mpv';

interface QuoteFormData {
  journeyType: JourneyType;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  returnDate: string;
  returnTime: string;
  passengers: number;
  luggage: number;
  vehicleType: VehicleType;
  name: string;
  email: string;
  phone: string;
  company: string;
  notes: string;
}

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    journeyType: 'one-way',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    returnDate: '',
    returnTime: '',
    passengers: 1,
    luggage: 1,
    vehicleType: 'executive',
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  const updateForm = (updates: Partial<QuoteFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const canProceedStep1 = formData.pickup && formData.destination && formData.date && formData.time;
  const canProceedStep2 = formData.vehicleType;
  const canSubmit = formData.name && formData.email && formData.phone;

  if (submitted) {
    return (
      <>
        <Header />
        <main className="pt-16 min-h-screen">
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">Quote Request Received</h1>
                <p className="text-foreground mb-6">
                  Thank you for your enquiry. Our team will review your requirements and send you a quote within 2 hours during business hours.
                </p>
                <p className="text-muted-foreground text-sm">
                  For urgent bookings, please contact our dispatch team directly.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Book a Transfer
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Get a Quote
            </h1>
            <p className="text-foreground">
              Complete the form below and we will send you a fixed price quote.
            </p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-6 border-b border-border bg-card">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      step >= s
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {s}
                  </div>
                  <span className={`hidden sm:block text-sm ${step >= s ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {s === 1 ? 'Journey' : s === 2 ? 'Vehicle' : 'Details'}
                  </span>
                  {s < 3 && <div className="w-8 h-px bg-border" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Journey Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Journey Details</h2>

                    {/* Journey Type */}
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => updateForm({ journeyType: 'one-way' })}
                        className={`flex-1 py-3 px-4 border ${
                          formData.journeyType === 'one-way'
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border text-muted-foreground'
                        }`}
                      >
                        One Way
                      </button>
                      <button
                        type="button"
                        onClick={() => updateForm({ journeyType: 'return' })}
                        className={`flex-1 py-3 px-4 border ${
                          formData.journeyType === 'return'
                            ? 'border-primary bg-primary/10 text-foreground'
                            : 'border-border text-muted-foreground'
                        }`}
                      >
                        Return
                      </button>
                    </div>

                    {/* Pickup */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Pickup Location *
                      </label>
                      <input
                        type="text"
                        value={formData.pickup}
                        onChange={(e) => updateForm({ pickup: e.target.value })}
                        placeholder="Enter address, airport or postcode"
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Destination */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Destination *
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => updateForm({ destination: e.target.value })}
                        placeholder="Enter address, airport or postcode"
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Date & Time */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => updateForm({ date: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Time *
                        </label>
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => updateForm({ time: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    {/* Return Date & Time */}
                    {formData.journeyType === 'return' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Return Date *
                          </label>
                          <input
                            type="date"
                            value={formData.returnDate}
                            onChange={(e) => updateForm({ returnDate: e.target.value })}
                            className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Return Time *
                          </label>
                          <input
                            type="time"
                            value={formData.returnTime}
                            onChange={(e) => updateForm({ returnTime: e.target.value })}
                            className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                    )}

                    {/* Passengers & Luggage */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Passengers
                        </label>
                        <select
                          value={formData.passengers}
                          onChange={(e) => updateForm({ passengers: parseInt(e.target.value) })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {[1, 2, 3, 4, 5, 6].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Luggage Items
                        </label>
                        <select
                          value={formData.luggage}
                          onChange={(e) => updateForm({ luggage: parseInt(e.target.value) })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {[0, 1, 2, 3, 4, 5, 6].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        type="button"
                        variant="hero"
                        size="xl"
                        disabled={!canProceedStep1}
                        onClick={() => setStep(2)}
                        className="w-full"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Vehicle Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Select Vehicle</h2>

                    <div className="space-y-4">
                      <button
                        type="button"
                        onClick={() => updateForm({ vehicleType: 'executive' })}
                        className={`w-full p-6 border text-left ${
                          formData.vehicleType === 'executive'
                            ? 'border-primary bg-primary/10'
                            : 'border-border'
                        }`}
                      >
                        <h3 className="text-lg font-semibold mb-2">Executive Saloon</h3>
                        <p className="text-muted-foreground text-sm">
                          Premium executive vehicle. Up to 3 passengers.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => updateForm({ vehicleType: 'mpv' })}
                        className={`w-full p-6 border text-left ${
                          formData.vehicleType === 'mpv'
                            ? 'border-primary bg-primary/10'
                            : 'border-border'
                        }`}
                      >
                        <h3 className="text-lg font-semibold mb-2">Executive MPV</h3>
                        <p className="text-muted-foreground text-sm">
                          Spacious vehicle for groups. Up to 6 passengers.
                        </p>
                      </button>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <Button
                        type="button"
                        variant="heroOutline"
                        size="xl"
                        onClick={() => setStep(1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        variant="hero"
                        size="xl"
                        disabled={!canProceedStep2}
                        onClick={() => setStep(3)}
                        className="flex-1"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-6">Your Details</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => updateForm({ name: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateForm({ email: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateForm({ phone: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateForm({ company: e.target.value })}
                          className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => updateForm({ notes: e.target.value })}
                        rows={4}
                        placeholder="Flight numbers, special requirements, etc."
                        className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <div className="flex gap-4 pt-6">
                      <Button
                        type="button"
                        variant="heroOutline"
                        size="xl"
                        onClick={() => setStep(2)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        disabled={!canSubmit || isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Quote'}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
