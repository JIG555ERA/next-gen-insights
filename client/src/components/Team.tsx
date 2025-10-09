import { User } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const teamMembers = [
  { name: 'Jigar Veera' },
  { name: 'Akdas Ansari' },
  { name: 'Ayaan Khan' },
  { name: 'Ayush Gudhka' },
  { name: 'Eesha Singh' },
  { name: 'Sujay Jalui' }
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of marketing professionals committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h4 className="mb-1">{member.name}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
