import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services", label: "Services" },
    { href: "/coverage", label: "Coverage" },
    { href: "/fleet", label: "Fleet" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/quote", label: "Get a Quote" },
  ],
  legal: [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-heading font-semibold tracking-tight text-lg">
              F1ValleyTransfers
            </span>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs">
              Executive transfers for Motorsport Valley and the global race calendar.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-4">Company</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-heading mb-4">Legal</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            Licensed UK Private Hire Operator
          </p>
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} F1ValleyTransfers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
