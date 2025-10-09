import { Globe, Instagram, MessageCircle, BarChart3, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const approaches = [
  {
    icon: Globe,
    title: 'Build Online Presence',
    points: [
      'Create free boutique website on Google Sites with catalog, reviews, and contact form',
      'Set up and optimize Google Business Profile (GBP) for local search visibility'
    ]
  },
  {
    icon: Instagram,
    title: 'Design Creative Content',
    points: [
      'Use Canva + free stock photos for catalog posts, flyers, and Instagram stories',
      'Create Reels/YouTube Shorts with CapCut/InShot for styling tips and new arrivals'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Engage on Social Media',
    points: [
      'Manage Instagram & Facebook using Meta Business Suite with 3-4 posts + 2 reels per week',
      'Use keyword tools for trending hashtags and topics'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Customer Communication',
    points: [
      'Setup WhatsApp Business catalogs and auto-replies',
      'Use HubSpot CRM to track leads and send Mailchimp newsletters'
    ]
  },
  {
    icon: BarChart3,
    title: 'Measure & Report Impact',
    points: [
      'Track website visitors & conversions via Google Analytics (GA4)',
      'Monitor keyword performance using Google Search Console',
      'Present results with Looker Studio dashboards'
    ]
  },
  {
    icon: Target,
    title: 'Deliver Results with Proof',
    points: [
      'Provide social media calendar + content plan',
      'Maintain GBP with fresh posts & reviews',
      'Show measurable growth in pitch deck: Problem → Strategy → Results'
    ]
  }
];

export function Approach() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              <span className="neon-text-cyan tracking-wider">ABOUT_</span>
              <span className="neon-text-magenta tracking-wider">NEXTGEN</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="text-primary font-mono">&gt;</span> At NextGen Insights, we are a future-ready marketing consultancy helping brands build strong digital identities, boost visibility, and drive measurable growth.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              From website and analytics setup to creative content, social media management, and B2B scaling strategies, we combine data-driven insights with creative execution.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-primary tracking-wide">MISSION:</strong> Empower businesses—boutique or enterprise—to thrive in the digital age with smart, sustainable, and impactful marketing solutions.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/30 rounded-sm blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative neon-border-purple rounded-sm overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTk5Mjk0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Analytics"
                className="w-full h-[400px] object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl mb-4 text-center tracking-wider">
            <span className="neon-text-purple">BOUTIQUE_</span>
            <span className="neon-text-cyan">PROTOCOL</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            <span className="text-primary font-mono">&gt;</span> A comprehensive, step-by-step approach to transform your boutique business into a digital powerhouse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="space-y-4 p-6 rounded-sm bg-card/50 backdrop-blur-sm neon-border-cyan cyber-card hover:scale-105 transition-all">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 neon-border-cyan rounded-sm flex items-center justify-center group">
                  <div className="absolute inset-0 bg-primary/20 blur-lg"></div>
                  <approach.icon className="w-6 h-6 text-primary relative z-10" />
                </div>
                <h4 className="tracking-wide text-primary">{approach.title.toUpperCase()}</h4>
              </div>
              <ul className="space-y-3">
                {approach.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0 animate-pulse-glow"></div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
