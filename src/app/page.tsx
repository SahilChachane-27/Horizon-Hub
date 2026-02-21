'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Server, 
  Workflow, 
  Globe, 
  CheckCircle2, 
  Database, 
  Rocket, 
  Copyright, 
  Lock, 
  Link as LinkIcon, 
  FileCheck, 
  Headset, 
  Search, 
  ShieldAlert,
  FileText,
  Users,
  PenTool,
  Layout,
  Zap,
  Cpu
} from 'lucide-react';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const certifications = [
  { icon: Rocket, title: "DPIIT Startup India", description: "DPIIT Recognized Startup" },
  { icon: Copyright, title: "Creative Commons", description: "Creative Commons license" },
  { icon: CheckCircle2, title: "UGC CARE", description: "Compliance Ready Platform" },
  { icon: Lock, title: "SSL Encrypted", description: "Bank-Grade Security" },
  { icon: LinkIcon, title: "CrossRef Partner", description: "Official DOI Registration" },
  { icon: FileCheck, title: "DOAJ", description: "Compliance Ready Platform" },
  { icon: Headset, title: "24/7 Support", description: "Always Here to Help" },
  { icon: Search, title: "Scopus", description: "Compliance Ready Platform" },
  { icon: Globe, title: "Web of Science", description: "Compliance Ready Platform" },
  { icon: ShieldAlert, title: "Ithenticate", description: "Smart Plagiarism Checker" }
];

const whyUsFeatures = [
  { icon: ShieldCheck, title: "Exclusive hosting for Universities", description: "Dedicated exclusively to academic institutions and university-owned research journals." },
  { icon: Globe, title: "No private publishers allowed", description: "Maintaining a strictly non-commercial academic environment for maximum research integrity." },
  { icon: Server, title: "Secure ScholarJMS hosting", description: "State-of-the-art security for Scholar Journal Management Systems (ScholarJMS)." },
  { icon: CheckCircle2, title: "99.9% Uptime", description: "Reliable access for researchers worldwide with redundant server architecture." },
  { icon: Workflow, title: "End-to-end workflow", description: "Seamless management from submission to peer review and final publication." },
  { icon: Database, title: "Indexing support", description: "Dedicated format guidance for Scopus, DOAJ, and Web of Science indexing readiness." }
];

const platformFeatures = [
  { icon: FileText, title: "Advanced Manuscript Management", description: "Streamlined submission workflows with automated screening and intelligent manuscript routing for optimal editorial efficiency." },
  { icon: Users, title: "Transparent Peer Review System", description: "Sophisticated reviewer matching algorithms, customizable review forms, and automated workflow management in a transparent peer review environment." },
  { icon: LinkIcon, title: "Integrated DOI Management", description: "Seamless DOI assignment and registration with automated metadata generation and CrossRef integration." },
  { icon: PenTool, title: "Professional Publication Tools", description: "Advanced article formatting, metadata management, issue scheduling, and automated publication workflows." },
  { icon: Layout, title: "Customizable Journal Architecture", description: "Configurable editorial policies, submission guidelines, and team management interfaces - all without technical implementation requirements." },
  { icon: Server, title: "Complete Infrastructure Management", description: "Enterprise hosting, domain management, and server maintenance - enabling complete focus on scholarly content." }
];

const partners = [
  "SSIPMT Raipur", "VIT Pune", "AAFT University Raipur", "Arya Group of Colleges Jaipur", "Noida International University"
];

const journals = [
  { id: 'journal-cover-1', name: 'Eng. & Tech. Journal', university: 'VIT Pune', indexing: 'Scopus' },
  { id: 'journal-cover-2', name: 'Medical Quarterly', university: 'NIU Noida', indexing: 'UGC CARE' },
  { id: 'journal-cover-3', name: 'Global Mgmt Review', university: 'SSIPMT', indexing: 'DOAJ' },
  { id: 'journal-cover-4', name: 'Agri Science Today', university: 'AAFT', indexing: 'Scopus' },
  { id: 'journal-cover-5', name: 'Humanities Insights', university: 'Arya Group', indexing: 'UGC CARE' },
  { id: 'journal-cover-6', name: 'Sustainability J.', university: 'VIT Pune', indexing: 'Scopus' }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Trusted & Certified Section */}
        <section className="py-16 bg-slate-50 border-y border-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32 animate-pulse" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">Trusted & Certified by Leading Organizations</h2>
              <div className="mt-3 w-16 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center text-center p-6 bg-white rounded-funky shadow-md border border-border/30 transition-all hover:shadow-xl hover:-translate-y-1 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div className="h-14 w-14 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                    <cert.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-1">{cert.title}</h4>
                  <p className="text-[10px] text-foreground/60 uppercase font-bold tracking-widest">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Technical Journals? */}
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Why Technical Journals?</h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto italic font-medium">University-focused hosting that prioritizes academic ethics, research visibility, and institutional ownership.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {whyUsFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-xl border-none bg-slate-50 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 group p-2" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="h-20 w-20 bg-white rounded-funky shadow-inner flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                      <feature.icon className="h-10 w-10 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-headline">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Academic Publishing Platform */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><Cpu className="w-32 h-32 animate-spin-slow" /></div>
            <div className="absolute bottom-10 right-10"><Zap className="w-32 h-32 animate-pulse" /></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-accent font-headline">Comprehensive Academic Publishing Platform</h2>
              <div className="mt-4 w-24 h-1 bg-white mx-auto"></div>
              <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">Enterprise-grade features designed exclusively for scholarly excellence and institutional growth.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white group overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-10 flex flex-col items-start text-left">
                    <div className="h-14 w-14 bg-accent/20 rounded-funky flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <feature.icon className="h-7 w-7 text-accent group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary mb-4 leading-tight font-headline">{feature.title}</h3>
                    <p className="text-sm text-white/70 group-hover:text-primary/80 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Journals Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Featured University Journals</h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">Discover the latest research published across our institutional network.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {journals.map((journal, i) => {
                const img = PlaceHolderImages.find(p => p.id === journal.id);
                return (
                  <Card key={i} className="overflow-hidden group rounded-funky border-none shadow-xl relative" data-aos="zoom-in" data-aos-delay={i * 50}>
                    <div className="relative aspect-[3/4]">
                      {img && <Image src={img.imageUrl} alt={journal.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" data-ai-hint={img.imageHint} />}
                      <div className="absolute top-2 right-2 bg-accent/90 text-accent-foreground text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest z-20 shadow-lg">
                        {journal.indexing}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                        <p className="text-white text-[10px] font-black uppercase tracking-tighter mb-1">{journal.university}</p>
                        <p className="text-accent text-xs font-bold leading-tight">{journal.name}</p>
                        <Button variant="link" className="text-white text-[10px] p-0 h-auto mt-2 justify-start font-bold underline decoration-accent underline-offset-4">
                          View Journal portal
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-funky px-10 py-8 text-xl font-bold shadow-2xl hover:scale-105 transition-transform">
                <Link href="/journals">Explore Journal Directory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global University Partners */}
        <section className="py-20 bg-white border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary/40 font-headline uppercase tracking-[0.2em]">Global University Partners</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {partners.map((partner, i) => (
                <div key={i} className="text-xl font-black text-primary/20 hover:text-accent transition-all duration-500 cursor-default select-none" data-aos="fade-up" data-aos-delay={i * 100}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
