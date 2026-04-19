'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Compass, BookOpen, Database, ShieldCheck } from 'lucide-react';
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
    bio: "An expert in digital preservation and scholarly workflows. Sarah ensures that the Technical Journals platform balances high performance with international indexing standards and rigorous security.",
    specialties: ["Platform Architecture", "Indexing Compliance", "Metadata Standards"]
  },
  {
    name: "Michael Rossi",
    role: "Director of Operations",
    bio: "Michael oversees all hosting operations, ensuring that institutional journals maintain 99.9% uptime while adhering to strict publication ethics and international technical protocols.",
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
        <section className="bg-primary text-white pt-32 pb-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4 italic" data-aos="fade-up">Our Expert Team</h1>
            <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto italic font-medium leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Meet the visionary technologists and dedicated specialists powering the future of academic publishing.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-16 lg:px-32 py-12 md:py-20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-primary font-headline italic">Executive Leadership</h2>
            <div className="mt-2 w-12 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {leadership.map((member, i) => (
              <Card key={i} className="rounded-funky border-none shadow-xl bg-slate-50 overflow-hidden group hover:bg-white transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="h-40 bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Users className="h-12 w-12 text-primary/40 group-hover:text-accent transition-colors" />
                </div>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-primary font-headline mb-1">{member.name}</h3>
                  <p className="text-accent font-black text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-foreground/70 text-xs leading-relaxed mb-6 italic">"{member.bio}"</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map(spec => (
                      <Badge key={spec} variant="secondary" className="bg-white text-[8px] uppercase font-bold text-primary/60 border border-primary/10">{spec}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-primary font-headline italic">Specialized Leads</h2>
            <div className="mt-2 w-12 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((expert, i) => (
              <Card key={i} className="rounded-funky border-none shadow-lg text-center p-6 md:p-8 bg-slate-50 hover:-translate-y-1 transition-transform duration-500" data-aos="fade-up" data-aos-delay={i * 50}>
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md text-accent">
                  <expert.icon className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-primary text-base mb-1">{expert.name}</h4>
                <p className="text-[9px] text-foreground/50 font-black uppercase tracking-tighter">{expert.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}