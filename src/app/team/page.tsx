'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, HardHat, Compass, Building, Ruler, Pencil, BookOpen, Database, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const leadership = [
  {
    name: "Robert Henderson",
    role: "CEO & Founder",
    bio: "With over 30 years in academic technology management, Robert has led Technical Journals from a specialized startup to a global leader in university-exclusive journal hosting and digital archiving.",
    specialties: ["Strategic Planning", "Academic Partnerships", "Institutional Sovereignty"]
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "An expert in digital preservation and scholarly workflows. Sarah ensures that the Technical Journals platform balances performance with international indexing standards and security.",
    specialties: ["Platform Architecture", "Indexing Compliance", "Metadata Standards"]
  },
  {
    name: "Michael Rossi",
    role: "Director of Operations",
    bio: "Michael oversees all hosting operations, ensuring that institutional journals maintain 99.9% uptime while adhering to strict publication ethics and technical protocols.",
    specialties: ["Hosting Operations", "Support Systems", "Quality Assurance"]
  }
];

const experts = [
  { icon: BookOpen, name: "David Miller", role: "Editorial Workflow Lead" },
  { icon: Database, name: "Jessica Lane", role: "Indexing Strategist" },
  { icon: ShieldCheck, name: "Tom Wilson", role: "Security & Ethics Compliance" },
  { icon: Compass, name: "Elena Martinez", role: "Institutional Growth Specialist" }
];

export default function TeamPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white pt-32 pb-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6" data-aos="fade-up">Our Expert Team</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto italic font-medium" data-aos="fade-up" data-aos-delay="100">
              Meet the visionary technologists, skilled engineers, and dedicated specialists powering the future of academic publishing.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary font-headline italic">Executive Leadership</h2>
            <div className="mt-4 w-12 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {leadership.map((member, i) => (
              <Card key={i} className="rounded-funky border-none shadow-xl bg-slate-50 overflow-hidden group hover:bg-white transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="h-48 bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Users className="h-16 w-16 text-primary/40 group-hover:text-accent transition-colors" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary font-headline mb-2">{member.name}</h3>
                  <p className="text-accent font-black text-xs uppercase tracking-widest mb-6">{member.role}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-8 italic">"{member.bio}"</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map(spec => (
                      <Badge key={spec} variant="secondary" className="bg-white text-[9px] uppercase font-bold text-primary/60 border border-primary/10">{spec}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary font-headline italic">Specialized Leads</h2>
            <div className="mt-4 w-12 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, i) => (
              <Card key={i} className="rounded-funky border-none shadow-lg text-center p-8 bg-slate-50 hover:-translate-y-2 transition-transform duration-500" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-accent">
                  <expert.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-primary text-lg mb-1">{expert.name}</h4>
                <p className="text-xs text-foreground/50 font-black uppercase tracking-tighter">{expert.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
