
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, BookOpen, UserCheck, Globe, Scale } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  { icon: Shield, title: "100% University-only hosting", description: "Strictly limited to academic institutions." },
  { icon: Scale, title: "Non-commercial model", description: "Focused on academic value rather than profit." },
  { icon: BookOpen, title: "Transparent, ethical publishing", description: "Supporting international ethics standards." },
  { icon: UserCheck, title: "ScholarJMS Powered", description: "Industry-grade systems for reliability." },
  { icon: Globe, title: "Global Research Visibility", description: "Maximized dissemination through indexing support." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">About Technical Journals</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-primary font-headline">A Dedicated Academic Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Technical Journals was founded to provide a secure and ethical haven for university-owned research journals. We understand that academic research should be managed by academic institutions, not commercial middlemen.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our platform is powered by industry-grade ScholarJMS systems and secure servers, ensuring that your university's intellectual property is preserved and disseminated with the highest standards of quality.
              </p>
            </div>
            <div className="relative aspect-video rounded-funky overflow-hidden shadow-2xl" data-aos="fade-left">
              <Image src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.1.0&auto=format&fit=crop&w=1080&q=80" alt="University" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {highlights.map((item, i) => (
              <Card key={i} className="rounded-funky border-none shadow-lg text-center bg-secondary" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-3 leading-tight">{item.title}</h3>
                  <p className="text-xs text-foreground/70">{item.description}</p>
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
