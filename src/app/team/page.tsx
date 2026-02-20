
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const team = [
  { name: "Dr. Arvind Kumar", role: "Chief Academic Officer", bio: "Former Dean with 25+ years in academic publishing." },
  { name: "Sarah Jenkins", role: "Technical Director", bio: "ScholarJMS core architect and system security expert." },
  { name: "Rajesh Sharma", role: "University Relations", bio: "Facilitating institutional partnerships across Asia." },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Meet Our Team</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
              Our experts are dedicated to revolutionizing university publishing standards through technical excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="rounded-funky overflow-hidden border-none shadow-lg text-center bg-secondary" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardContent className="p-8">
                  <div className="h-24 w-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
