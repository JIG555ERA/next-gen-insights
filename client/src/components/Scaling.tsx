import { FileText, Truck, Search, ShoppingCart, Handshake, CreditCard, Users, TrendingUp, Rocket } from 'lucide-react';

const strategies = [
  {
    icon: FileText,
    title: 'UDYAM_REG',
    description: 'Register under MSME to access government benefits, loans, and tax incentives for sustainable growth.',
    color: 'neon-border-cyan'
  },
  {
    icon: Truck,
    title: 'FAST_DELIVERY',
    description: 'Collaborate with Delhivery, Shiprocket, Dunzo to reduce delivery times and boost customer satisfaction.',
    color: 'neon-border-magenta'
  },
  {
    icon: Search,
    title: 'SEO_BOOST',
    description: 'Implement on-page SEO, local SEO, and schema markup to improve organic visibility and rankings.',
    color: 'neon-border-purple'
  },
  {
    icon: ShoppingCart,
    title: 'E_COMMERCE',
    description: 'List products on Amazon, Flipkart, Myntra, and Meesho for exponential reach and sales growth.',
    color: 'neon-border-cyan'
  },
  {
    icon: Handshake,
    title: 'B2B_NETWORK',
    description: 'Partner with wholesalers, fabric suppliers, and corporate clients for bulk orders and steady revenue.',
    color: 'neon-border-magenta'
  },
  {
    icon: CreditCard,
    title: 'AUTO_PAYMENT',
    description: 'Integrate Razorpay and Zoho Books for seamless digital payments and accounting for B2B transactions.',
    color: 'neon-border-purple'
  },
  {
    icon: Users,
    title: 'PARTNERSHIPS',
    description: 'Attend exhibitions, trade fairs, and local events to secure valuable B2B tie-ups and collaborations.',
    color: 'neon-border-cyan'
  },
  {
    icon: TrendingUp,
    title: 'GROWTH_TRACK',
    description: 'Continuous monitoring and optimization based on data insights to scale your business effectively.',
    color: 'neon-border-magenta'
  }
];

export function Scaling() {
  return (
    <section id="scaling" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-primary animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl tracking-wider">
              <span className="neon-text-cyan">SCALING_</span>
              <span className="neon-text-magenta">MATRIX</span>
            </h2>
            <Rocket className="w-8 h-8 text-secondary animate-pulse-glow" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-mono">&gt;</span> Transform your business from individual operations to B2B growth with our comprehensive scaling strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy, index) => (
            <div key={index} className={`p-6 rounded-sm ${strategy.color} bg-card/50 backdrop-blur-sm cyber-card hover:scale-105 transition-all group`}>
              <div className={`relative w-14 h-14 ${strategy.color} rounded-sm flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                <div className="absolute inset-0 bg-primary/20 blur-lg"></div>
                <strategy.icon className="w-7 h-7 text-primary relative z-10" />
              </div>
              <h4 className="mb-3 tracking-wider text-primary">{strategy.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
