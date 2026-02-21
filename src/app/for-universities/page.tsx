'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Users, CheckCircle, ArrowRight, Zap, ShieldCheck, Globe, Database } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline italic">For Universities</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-3xl mx-auto italic font-medium">
              Empowering academic institutions to own their research output and enhance global scholarly standing through professional journal management.
            </p>
          </div>

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
