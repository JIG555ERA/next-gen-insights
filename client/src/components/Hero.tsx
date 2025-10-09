import { ArrowRight, TrendingUp, Target, Zap, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 neon-border-cyan bg-card/50 backdrop-blur-sm rounded-sm mb-6">
              <Terminal className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm tracking-wider">FUTURE_READY.EXE</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6 tracking-tight">
              Build Strong <span className="neon-text-cyan">Digital Identities</span> & Drive <span className="neon-text-magenta">Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <span className="text-primary font-mono">&gt;</span> At NextGen Insights, we combine data-driven insights with creative execution to help brands—boutique or enterprise—thrive in the digital age with smart, sustainable, and impactful marketing solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact} className="neon-border-cyan bg-primary/20 hover:bg-primary/40 backdrop-blur-sm group">
                <span className="tracking-wider">INITIALIZE</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="neon-border-magenta backdrop-blur-sm">
                <span className="tracking-wider">EXPLORE_SERVICES</span>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t neon-border-cyan">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary group-hover:animate-pulse-glow" />
                  <span className="text-2xl neon-text-cyan">100%</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">DATA_DRIVEN</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-secondary group-hover:animate-pulse-glow" />
                  <span className="text-2xl neon-text-magenta">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">SUPPORT</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent group-hover:animate-pulse-glow" />
                  <span className="text-2xl neon-text-purple">FAST</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">DEPLOYMENT</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-sm transform rotate-3 blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative neon-border-cyan rounded-sm overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzYwMDA1MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital Marketing Strategy"
                className="w-full h-[400px] object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
