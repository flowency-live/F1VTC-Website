const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-heading font-semibold tracking-tight">
              F1ValleyTransfers
            </span>
            <p className="text-muted-foreground text-sm mt-1">
              Executive transfers for Motorsport Valley
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#coverage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Coverage
            </a>
            <a href="#standards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Standards
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            Licensed UK Private Hire Operator
          </p>
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} F1ValleyTransfers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
