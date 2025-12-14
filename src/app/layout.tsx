import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "F1 Valley Transfers | Executive Chauffeur Services for Motorsport Valley",
  description: "Discreet, professional chauffeur services supporting teams, sponsors and executives across Motorsport Valley and the global race calendar. From factory to terminal. From circuit to city.",
  keywords: "motorsport valley transfers, silverstone chauffeur, f1 team transfers, executive transfers, airport transfers heathrow silverstone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
