'use client';

import { useState } from "react";
import Link from "next/link";
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
  passenger: string;
  notes: string;
}

export default function CorporateQuotePage() {
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
    passenger: '',
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

  // Mock user data
  const user = {
    name: 'John Smith',
    company: 'Demo Racing Team',
  };

  const handleLogout = () => {
    window.location.href = '/corporate/login';
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-heading font-semibold tracking-tight text-lg">
                F1ValleyTransfers
              </Link>
              <span className="hidden sm:inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
                Corporate Portal
              </span>
            </div>
            <button onClick={handleLogout} className="text-sm text-muted-foreground hover:text-foreground">
              Sign out
            </button>
          </div>
        </header>

        <main className="pt-16">
          <div className="container mx-auto px-6 py-24">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-semibold mb-4">Booking Request Submitted</h1>
              <p className="text-foreground mb-8">
                Your booking request has been received. You will receive confirmation within 2 hours during business hours.
              </p>
              <Link href="/corporate/dashboard">
                <Button variant="hero" size="xl">
                  Return to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-heading font-semibold tracking-tight text-lg">
              F1ValleyTransfers
            </Link>
            <span className="hidden sm:inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider">
              Corporate Portal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.company}</p>
            </div>
            <button onClick={handleLogout} className="text-sm text-muted-foreground hover:text-foreground">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <Link href="/corporate/dashboard" className="text-primary text-sm hover:text-primary/80 mb-4 inline-block">
                &larr; Back to Dashboard
              </Link>
              <h1 className="text-3xl font-semibold mb-2">New Booking</h1>
              <p className="text-muted-foreground">Request a transfer for your team</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
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

              {/* Locations */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickup}
                    onChange={(e) => updateForm({ pickup: e.target.value })}
                    placeholder="Enter address, airport or postcode"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => updateForm({ destination: e.target.value })}
                    placeholder="Enter address, airport or postcode"
                    className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => updateForm({ date: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Time *</label>
                  <input
                    type="time"
                    required
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
                    <label className="block text-sm font-medium text-foreground mb-2">Return Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.returnDate}
                      onChange={(e) => updateForm({ returnDate: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Return Time *</label>
                    <input
                      type="time"
                      required
                      value={formData.returnTime}
                      onChange={(e) => updateForm({ returnTime: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              )}

              {/* Vehicle Selection */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-foreground">Vehicle Type *</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => updateForm({ vehicleType: 'executive' })}
                    className={`p-4 border text-left ${
                      formData.vehicleType === 'executive'
                        ? 'border-primary bg-primary/10'
                        : 'border-border'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">Executive</h3>
                    <p className="text-muted-foreground text-sm">Up to 3 passengers</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateForm({ vehicleType: 'mpv' })}
                    className={`p-4 border text-left ${
                      formData.vehicleType === 'mpv'
                        ? 'border-primary bg-primary/10'
                        : 'border-border'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">MPV</h3>
                    <p className="text-muted-foreground text-sm">Up to 6 passengers</p>
                  </button>
                </div>
              </div>

              {/* Passenger Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Lead Passenger Name
                </label>
                <input
                  type="text"
                  value={formData.passenger}
                  onChange={(e) => updateForm({ passenger: e.target.value })}
                  placeholder="Name of person travelling"
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Notes */}
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

              <Button
                type="submit"
                variant="hero"
                size="xl"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
