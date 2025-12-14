'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for demonstration
const mockBookings = [
  { id: '1', date: '2024-12-20', pickup: 'Heathrow T5', destination: 'Silverstone', status: 'confirmed', vehicle: 'Executive' },
  { id: '2', date: '2024-12-22', pickup: 'Brackley', destination: 'Luton Airport', status: 'pending', vehicle: 'MPV' },
];

export default function CorporateDashboardPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'team'>('upcoming');

  // Mock user data
  const user = {
    name: 'John Smith',
    company: 'Demo Racing Team',
    role: 'admin',
  };

  const handleLogout = () => {
    // TODO: Implement logout
    window.location.href = '/corporate/login';
  };

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
            <button
              onClick={handleLogout}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <div className="container mx-auto px-6 py-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">Welcome back, {user.name.split(' ')[0]}</h1>
            <p className="text-muted-foreground">Manage your bookings and team members</p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link href="/corporate/quote" className="block p-6 bg-card border border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">New Booking</h3>
              <p className="text-muted-foreground text-sm">Request a transfer quote</p>
            </Link>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2">Upcoming</h3>
              <p className="text-3xl font-semibold text-primary">{mockBookings.filter(b => b.status === 'confirmed').length}</p>
              <p className="text-muted-foreground text-sm">Confirmed transfers</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-lg font-semibold mb-2">Pending</h3>
              <p className="text-3xl font-semibold text-foreground">{mockBookings.filter(b => b.status === 'pending').length}</p>
              <p className="text-muted-foreground text-sm">Awaiting confirmation</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8">
              {(['upcoming', 'history', 'team'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'upcoming' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Upcoming Transfers</h2>
              {mockBookings.length > 0 ? (
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="p-6 bg-card border border-border flex flex-wrap gap-6 items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{booking.date}</p>
                        <p className="font-medium">{booking.pickup} to {booking.destination}</p>
                        <p className="text-sm text-muted-foreground">{booking.vehicle}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 text-xs font-medium uppercase ${
                          booking.status === 'confirmed'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-muted-foreground'
                        }`}>
                          {booking.status}
                        </span>
                        <Button variant="heroOutline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card border border-border">
                  <p className="text-muted-foreground mb-4">No upcoming transfers</p>
                  <Link href="/corporate/quote">
                    <Button variant="hero">Book a Transfer</Button>
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Booking History</h2>
              <div className="text-center py-12 bg-card border border-border">
                <p className="text-muted-foreground">No past bookings to display</p>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Team Members</h2>
                <Button variant="hero" size="sm">Add Member</Button>
              </div>
              <div className="bg-card border border-border">
                <div className="p-6 border-b border-border flex items-center justify-between">
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">you@company.com</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium uppercase bg-primary/10 text-primary">
                    Admin
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
