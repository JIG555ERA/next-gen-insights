import { Instagram, Linkedin, Twitter, Mail, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card/50 backdrop-blur-md border-t neon-border-cyan py-12 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 neon-border-cyan rounded-sm flex items-center justify-center group">
                <Zap className="w-5 h-5 text-primary animate-pulse-glow" />
              </div>
              <span className="neon-text-cyan tracking-wide">NEXTGEN</span>
            </div>
            <p className="text-sm text-muted-foreground tracking-wide">
              FUTURE_READY <span className="text-secondary">|</span> MARKETING
            </p>
          </div>

          <div>
            <h4 className="mb-4 tracking-wider text-primary">SERVICES_</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Website Setup</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">GBP Optimization</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Content Creation</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Lead Tracking</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 tracking-wider text-primary">COMPANY_</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Our Team</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Workflow</li>
              <li className="hover:text-primary transition-colors cursor-pointer tracking-wide">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 tracking-wider text-primary">CONNECT_</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 neon-border-cyan rounded-sm flex items-center justify-center hover:bg-primary/20 transition-all group">
                <Instagram className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
              </a>
              <a href="#" className="w-10 h-10 neon-border-magenta rounded-sm flex items-center justify-center hover:bg-secondary/20 transition-all group">
                <Linkedin className="w-5 h-5 text-secondary group-hover:animate-pulse-glow" />
              </a>
              <a href="#" className="w-10 h-10 neon-border-purple rounded-sm flex items-center justify-center hover:bg-accent/20 transition-all group">
                <Twitter className="w-5 h-5 text-accent group-hover:animate-pulse-glow" />
              </a>
              <a href="#" className="w-10 h-10 neon-border-cyan rounded-sm flex items-center justify-center hover:bg-primary/20 transition-all group">
                <Mail className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t neon-border-cyan pt-8 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">&copy;</span> 2025 NEXTGEN_INSIGHTS <span className="text-secondary">|</span> ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
