import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-heading font-semibold tracking-tight text-lg">
            F1ValleyTransfers
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-foreground hover:text-heading transition-colors">
            Services
          </a>
          <a href="#coverage" className="text-sm text-foreground hover:text-heading transition-colors">
            Coverage
          </a>
          <a href="#standards" className="text-sm text-foreground hover:text-heading transition-colors">
            Standards
          </a>
          <a href="#fleet" className="text-sm text-foreground hover:text-heading transition-colors">
            Fleet
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="heroOutline" size="sm" className="hidden sm:flex">
            Contact
          </Button>
          <Button variant="hero" size="sm">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
