import { Globe, BarChart3, Palette, Database, Mail, TrendingUp, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Globe,
    title: 'Free Website + Analytics Setup',
    description: 'Professional Google Sites setup with GA4 integration for tracking and insights.',
    features: ['Google Sites', 'GA4 Analytics', 'Custom Catalog', 'Contact Forms'],
    color: 'neon-border-cyan'
  },
  {
    icon: BarChart3,
    title: 'Localized GBP Boost',
    description: 'Optimize your Google Business Profile for local search visibility and reviews.',
    features: ['GBP Optimization', 'Review Management', 'Local SEO', 'NAP Consistency'],
    color: 'neon-border-magenta'
  },
  {
    icon: Palette,
    title: 'Creative Social Content',
    description: 'Engaging posts, reels, and stories designed to captivate your audience.',
    features: ['Canva Designs', 'Instagram Reels', 'YouTube Shorts', 'Content Calendar'],
    color: 'neon-border-purple'
  },
  {
    icon: Database,
    title: 'Lead Tracking + Nurture',
    description: 'Track and nurture leads with CRM and email marketing automation.',
    features: ['HubSpot CRM', 'Mailchimp', 'Lead Scoring', 'Automated Workflows'],
    color: 'neon-border-cyan'
  },
  {
    icon: Mail,
    title: 'Social Media Management',
    description: 'Complete social media management with scheduling and engagement.',
    features: ['Meta Business Suite', '3-4 Posts/Week', '2 Reels/Week', 'Community Management'],
    color: 'neon-border-magenta'
  },
  {
    icon: TrendingUp,
    title: 'Reporting & Analytics',
    description: 'Comprehensive dashboards showing measurable growth and ROI.',
    features: ['Looker Studio', 'Custom Reports', 'Performance Metrics', 'Monthly Reviews'],
    color: 'neon-border-purple'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="neon-text-cyan tracking-wider">SERVICE_</span>
            <span className="neon-text-magenta tracking-wider">MODULES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-mono">&gt;</span> Comprehensive digital marketing solutions designed to boost your online presence and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`cyber-card bg-card/50 backdrop-blur-sm ${service.color} hover:scale-105 transition-all group`}>
              <CardHeader>
                <div className={`w-14 h-14 ${service.color} rounded-sm flex items-center justify-center mb-4 group-hover:animate-pulse-glow relative`}>
                  <div className="absolute inset-0 bg-primary/20 blur-lg"></div>
                  <service.icon className="w-7 h-7 text-primary relative z-10" />
                </div>
                <CardTitle className="tracking-wide">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground/80">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm group/item">
                      <ChevronRight className="w-4 h-4 text-primary group-hover/item:translate-x-1 transition-transform" />
                      <span className="tracking-wide">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
