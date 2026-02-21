'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, BookOpen, UserCheck, Globe, Scale, Landmark, Award, ShieldAlert } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const highlights = [
  { icon: Shield, title: "100% University-only hosting", description: "Strictly limited to academic institutions to preserve research ownership." },
  { icon: Scale, title: "Non-commercial model", description: "A system focused on academic value and research integrity rather than private profit." },
  { icon: BookOpen, title: "Transparent, ethical publishing", description: "Supporting international ethics standards and peer-review transparency." },
  { icon: UserCheck, title: "ScholarJMS Powered", description: "Utilizing industry-grade ScholarJMS for professional journal management." },
  { icon: Globe, title: "Global Research Visibility", description: "Maximized dissemination and visibility through strategic indexing support." }
];

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold font-headline italic mb-6" data-aos="fade-up">The Academic Haven</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto italic font-medium" data-aos="fade-up" data-aos-delay="100">
              Technical Journals: Reclaiming research ownership for Universities and Academic Institutions globally.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-primary font-headline italic">A Dedicated Academic Mission</h2>
                <div className="mt-2 w-16 h-1 bg-accent"></div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Technical Journals was founded to provide a secure and ethical sanctuary for university-owned research journals. We believe that academic research should be managed by the institutions that produce it, ensuring full ownership and long-term integrity.
              </p>
              <div className="bg-slate-50 p-8 rounded-funky border-l-4 border-accent shadow-lg">
                <p className="text-lg text-primary font-bold italic leading-relaxed">
                  "Our platform is powered by industry-grade ScholarJMS systems, ensuring that institutional intellectual property is preserved, archived, and disseminated with the highest standards of quality."
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2"><Landmark className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">Institutional Branding</span></div>
                <div className="flex items-center gap-2"><ShieldAlert className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">Ethical Standards</span></div>
                <div className="flex items-center gap-2"><Award className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">Global Indexing</span></div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-funky overflow-hidden shadow-2xl group" data-aos="fade-left">
              <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&w=1080&q=80" alt="University Research" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary font-headline">Key Pillars of Excellence</h2>
            <div className="mt-4 w-12 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {highlights.map((item, i) => (
              <Card key={i} className="rounded-funky border-none shadow-xl text-center bg-slate-50 group hover:bg-white hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardContent className="p-10 flex flex-col items-center">
                  <div className="h-16 w-16 bg-white rounded-funky flex items-center justify-center mb-6 shadow-xl group-hover:bg-accent transition-colors duration-500">
                    <item.icon className="h-8 w-8 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-4 leading-tight font-headline italic">{item.title}</h3>
                  <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest leading-relaxed">{item.description}</p>
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