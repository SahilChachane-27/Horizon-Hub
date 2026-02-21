'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Hammer, Building, Users, Award, MapPin, HardHat, Compass } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const highlights = [
  { icon: Shield, title: "Uncompromising Quality", description: "Adhering to the highest construction standards and using premium materials." },
  { icon: Hammer, title: "Expert Craftsmanship", description: "Meticulous attention to detail in every residential and commercial project." },
  { icon: Building, title: "Urban Innovation", description: "Creating sustainable landmarks that define modern city skylines." },
  { icon: Users, title: "Client Focused", description: "Building long-term relationships through transparency and integrity." },
  { icon: Award, title: "25+ Years Experience", description: "A legacy of construction excellence established in 1998." }
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
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6" data-aos="fade-up">About Horizon Group</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto italic font-medium" data-aos="fade-up" data-aos-delay="100">
              Building the future with excellence in residential construction, commercial developments, and real estate innovation.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-3xl font-bold text-primary font-headline">A Legacy of Excellence</h2>
                <div className="mt-2 w-16 h-1 bg-accent"></div>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded in 1998, Horizon Group has established itself as a premier real estate development and construction firm with a portfolio of landmark projects across the country. Our integrated approach combines innovative design, sustainable practices, and meticulous craftsmanship.
              </p>
              <div className="bg-slate-50 p-8 rounded-funky border-l-4 border-accent shadow-lg">
                <p className="text-lg text-primary font-bold italic leading-relaxed">
                  "Our mission is to create enduring spaces that enrich lives and communities through innovative design, sustainable construction, and an unwavering commitment to quality."
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">National Presence</span></div>
                <div className="flex items-center gap-2"><HardHat className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">Safety First</span></div>
                <div className="flex items-center gap-2"><Compass className="h-5 w-5 text-accent" /><span className="text-xs font-black uppercase tracking-widest text-primary/60">Visionary Design</span></div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-funky overflow-hidden shadow-2xl group" data-aos="fade-left">
              <Image src="https://images.unsplash.com/photo-1503387762-592dee58c460?ixlib=rb-4.1.0&auto=format&fit=crop&w=1080&q=80" alt="Construction Site Planning" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>

          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-primary font-headline">Our Core Pillars</h2>
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
