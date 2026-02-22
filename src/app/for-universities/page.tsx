'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Users, CheckCircle, ArrowRight, Zap, ShieldCheck, Globe, Database } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const reasons = [
  { icon: TrendingUp, text: "Enhances research output and institutional impact" },
  { icon: Award, text: "Supports NAAC/NBA/NIRF ranking improvements" },
  { icon: Users, text: "Dedicated platform for faculty & student publications" },
  { icon: CheckCircle, text: "Strengthens global visibility & institutional brand" }
];

const steps = [
  { num: "01", title: "University Approval", desc: "Obtain necessary administrative authorizations for the institutional journal." },
  { num: "02", title: "Setup & Scope", desc: "Define focus, specific academic scope, and ethical peer-review policies." },
  { num: "03", title: "Workflow Setup", desc: "Configuration of Journal Website & end-to-end ScholarJMS workflow." },
  { num: "04", title: "Editorial Board", desc: "Formation of qualified international academic review panels and boards." },
  { num: "05", title: "Test Issue", desc: "Conducting a full trial run of the publication lifecycle and production." },
  { num: "06", title: "Official Launch", desc: "Public release, call for papers, and strategic indexing submissions." }
];

export default function ForUniversitiesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold font-headline italic mb-6" data-aos="fade-up">For Universities</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto italic font-medium" data-aos="fade-up" data-aos-delay="100">
              Empowering academic institutions to own their research output and enhance global scholarly standing through professional journal management.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {reasons.map((r, i) => (
              <Card key={i} className="rounded-funky bg-primary text-primary-foreground text-center group hover:bg-accent transition-all duration-500 shadow-2xl relative overflow-hidden" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <r.icon className="h-24 w-24" />
                </div>
                <CardContent className="p-10 relative z-10">
                  <r.icon className="h-12 w-12 text-accent group-hover:text-primary mx-auto mb-6 transition-colors" />
                  <p className="font-bold text-sm md:text-base leading-relaxed font-headline">{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="bg-slate-50 rounded-[60px] p-12 md:p-20 mb-32 shadow-inner border border-accent/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-10 left-10"><Zap className="w-32 h-32 animate-pulse text-accent" /></div>
              <div className="absolute bottom-10 right-10"><Globe className="w-32 h-32 animate-spin-slow text-accent" /></div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline mb-16 text-center italic">Steps to Start Your Journal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 items-start group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <span className="text-6xl font-black text-accent/20 font-headline leading-none group-hover:text-accent group-hover:scale-110 transition-all duration-500">{step.num}</span>
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-3 font-headline italic">{step.title}</h4>
                    <p className="text-foreground/60 text-sm leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Card className="rounded-funky bg-primary text-white p-16 text-center shadow-2xl relative overflow-hidden group" data-aos="fade-up">
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold font-headline mb-8 italic">Start Your Research Journal Today</h3>
              <p className="text-xl mb-12 max-w-2xl mx-auto font-medium text-white/80 leading-relaxed">
                Contact our institutional partnership team to discuss MoU formalities and technical demo setup for your university.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary transition-all rounded-funky px-12 py-10 text-xl font-black shadow-2xl hover:-translate-y-2 group">
                  <Link href="/contact" className="flex items-center gap-3">Inquire Now <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-funky px-12 py-10 text-xl font-black shadow-xl">
                  <Link href="/pricing">View Packages</Link>
                </Button>
              </div>
              <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-2"><Database className="h-5 w-5" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">OJS Migration</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Ownership</span></div>
                <div className="flex items-center gap-2"><Award className="h-5 w-5" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">Compliance Setup</span></div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
=======
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  TrendingUp,
  School,
  FileText,
  Globe,
  Settings,
  Users,
  Search,
  BookOpen,
  Rocket,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ForUniversitiesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  const benefits = [
    {
      icon: TrendingUp,
      text: "Enhances research output and institutional impact"
    },
    {
      icon: School,
      text: "Supports NAAC/NBA/NIRF ranking improvements"
    },
    {
      icon: FileText,
      text: "Dedicated platform for faculty & student publications"
    },
    {
      icon: Globe,
      text: "Strengthens global visibility & institutional brand"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "University Approval",
      desc: "Obtain necessary administrative authorizations for the institutional journal."
    },
    {
      num: "02",
      title: "Setup & Scope",
      desc: "Define focus, specific academic scope, and ethical peer-review policies."
    },
    {
      num: "03",
      title: "Workflow Setup",
      desc: "Configuration of Journal Website & end-to-end ScholarJMS workflow."
    },
    {
      num: "04",
      title: "Editorial Board",
      desc: "Formation of qualified international academic review panels and boards."
    },
    {
      num: "05",
      title: "Test Issue",
      desc: "Conducting a full trial run of the publication lifecycle and production."
    },
    {
      num: "06",
      title: "Official Launch",
      desc: "Public release, call for papers, and strategic indexing submissions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                For Universities
              </h1>
              <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto mb-12">
                Empowering academic institutions to own their research output and enhance global scholarly standing through professional journal management.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                    <benefit.icon className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-lg font-medium leading-tight">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt="Background"
                fill
                className="object-cover"
              />
            )}
          </div>
        </section>

        {/* Steps to Start Your Journal */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline" data-aos="fade-up">
                Steps to Start Your Journal
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, idx) => (
                <Card 
                  key={idx} 
                  className="border-none shadow-xl rounded-[30px] overflow-hidden bg-secondary/30 transition-all hover:shadow-2xl hover:-translate-y-1" 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <CardHeader className="flex flex-row items-center gap-5 pb-2">
                    <span className="text-5xl font-black text-accent/10 font-headline select-none">{step.num}</span>
                    <CardTitle className="text-xl text-primary font-bold leading-tight">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary border-y border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline mb-6">
                Start Your Research Journal Today
              </h2>
              <p className="text-xl text-foreground/70 mb-12 font-medium">
                Contact our institutional partnership team to discuss MoU formalities and technical demo setup for your university.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-14 py-8 text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-white rounded-funky px-14 py-8 text-lg font-bold transition-all hover:scale-105">
                  <Link href="/for-universities#packages">View Packages</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { label: "OJS Migration", icon: Rocket },
                  { label: "Institutional Ownership", icon: ShieldCheck },
                  { label: "Compliance Setup", icon: CheckCircle2 }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-black text-primary/40 uppercase tracking-[0.2em]">
                    <tag.icon className="h-5 w-5 text-accent" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
>>>>>>> old-work
