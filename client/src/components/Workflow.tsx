import { Search, Settings, Palette, Rocket, MessageSquare, PieChart, Play } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'AUDIT',
    description: 'Check GBP, social media, and competitors via Ubersuggest to understand your current position.',
    color: 'neon-border-cyan',
    glowColor: 'text-primary'
  },
  {
    icon: Settings,
    title: 'SETUP',
    description: 'GA4, GSC, catalog uploads integrated as a customized admin dashboard deployed on Vercel (MERN Stack).',
    color: 'neon-border-purple',
    glowColor: 'text-accent'
  },
  {
    icon: Palette,
    title: 'CREATE',
    description: 'Design engaging Canva posts, reels, and flyers that resonate with your audience.',
    color: 'neon-border-magenta',
    glowColor: 'text-secondary'
  },
  {
    icon: Rocket,
    title: 'DEPLOY',
    description: 'Launch via Meta Business Suite with Instagram and WhatsApp catalog integration.',
    color: 'neon-border-cyan',
    glowColor: 'text-primary'
  },
  {
    icon: MessageSquare,
    title: 'ENGAGE',
    description: 'Manage reviews, replies, and lead nurturing through HubSpot + Mailchimp.',
    color: 'neon-border-purple',
    glowColor: 'text-accent'
  },
  {
    icon: PieChart,
    title: 'REPORT',
    description: 'Present results through Looker Studio dashboards with actionable insights.',
    color: 'neon-border-magenta',
    glowColor: 'text-secondary'
  }
];

export function Workflow() {
  return (
    <section id="workflow" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Play className="w-8 h-8 text-primary animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl tracking-wider">
              <span className="neon-text-cyan">EXECUTION_</span>
              <span className="neon-text-magenta">PROTOCOL</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-mono">&gt;</span> A systematic approach to transform your digital presence from audit to reporting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className={`flex items-start gap-4 p-6 rounded-sm bg-card/50 backdrop-blur-sm ${step.color} cyber-card hover:scale-105 transition-all`}>
                <div className={`relative w-14 h-14 ${step.color} rounded-sm flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow`}>
                  <div className="absolute inset-0 bg-primary/20 blur-lg"></div>
                  <step.icon className={`w-7 h-7 ${step.glowColor} relative z-10`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-muted-foreground font-mono">[PHASE_{String(index + 1).padStart(2, '0')}]</span>
                  </div>
                  <h3 className={`mb-3 tracking-wider ${step.glowColor}`}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
