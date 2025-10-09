import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-wider">
            <span className="neon-text-cyan">INITIALIZE_</span>
            <span className="neon-text-magenta">CONNECTION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary font-mono">&gt;</span> Ready to transform your digital presence? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 neon-text-purple tracking-wide">LET'S_TALK</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a boutique brand or an enterprise looking to scale, we're here to help you achieve your digital marketing goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-sm neon-border-cyan bg-card/30 backdrop-blur-sm">
                <div className="relative w-12 h-12 neon-border-cyan rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 bg-primary/20 blur-lg"></div>
                  <Mail className="w-6 h-6 text-primary relative z-10" />
                </div>
                <div>
                  <h4 className="mb-1 tracking-wide text-primary">EMAIL_US</h4>
                  <p className="text-sm text-muted-foreground">contact@nextgeninsights.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm neon-border-magenta bg-card/30 backdrop-blur-sm">
                <div className="relative w-12 h-12 neon-border-magenta rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 bg-secondary/20 blur-lg"></div>
                  <Phone className="w-6 h-6 text-secondary relative z-10" />
                </div>
                <div>
                  <h4 className="mb-1 tracking-wide text-secondary">CALL_US</h4>
                  <p className="text-sm text-muted-foreground">+91 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm neon-border-purple bg-card/30 backdrop-blur-sm">
                <div className="relative w-12 h-12 neon-border-purple rounded-sm flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 bg-accent/20 blur-lg"></div>
                  <MapPin className="w-6 h-6 text-accent relative z-10" />
                </div>
                <div>
                  <h4 className="mb-1 tracking-wide text-accent">LOCATION</h4>
                  <p className="text-sm text-muted-foreground">Serving clients globally</p>
                </div>
              </div>
            </div>
          </div>

          <div className="neon-border-cyan rounded-sm bg-card/50 backdrop-blur-sm p-8 cyber-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 tracking-wide text-primary">NAME_</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="neon-border-cyan bg-card/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 tracking-wide text-primary">EMAIL_</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="neon-border-cyan bg-card/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 tracking-wide text-primary">COMPANY_</label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="neon-border-cyan bg-card/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 tracking-wide text-primary">MESSAGE_</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="neon-border-cyan bg-card/50 backdrop-blur-sm"
                />
              </div>

              <Button type="submit" className="w-full neon-border-cyan bg-primary/20 hover:bg-primary/40 backdrop-blur-sm tracking-wider">
                TRANSMIT_MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
