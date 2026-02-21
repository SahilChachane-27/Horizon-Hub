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
  Link as LinkIcon, 
  FileText,
  Users,
  PenTool,
  Layout,
  Zap,
  Cpu,
  Landmark,
  GraduationCap,
  School
} from 'lucide-react';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const whyUsFeatures = [
  { icon: ShieldCheck, title: "Exclusive for Universities", description: "Dedicated exclusively to academic institutions and university-owned research journals." },
  { icon: Globe, title: "Non-Commercial", description: "Maintaining a strictly non-commercial academic environment for maximum research integrity." },
  { icon: Server, title: "Secure ScholarJMS", description: "State-of-the-art security for Scholar Journal Management Systems (ScholarJMS)." },
  { icon: CheckCircle2, title: "99.9% Uptime", description: "Reliable access for researchers worldwide with redundant server architecture." },
  { icon: Workflow, title: "End-to-End Workflow", description: "Seamless management from submission to peer review and final publication." },
  { icon: Database, title: "Indexing Readiness", description: "Dedicated format guidance for Scopus, DOAJ, and Web of Science indexing readiness." }
];

const platformFeatures = [
  { icon: FileText, title: "Manuscript Management", description: "Streamlined submission workflows with automated screening and intelligent routing." },
  { icon: Users, title: "Transparent Peer Review", description: "Sophisticated matching algorithms and customizable review forms in a secure environment." },
  { icon: LinkIcon, title: "DOI Integration", description: "Seamless DOI assignment and registration with automated CrossRef integration." },
  { icon: PenTool, title: "Publication Tools", description: "Advanced article formatting, metadata management, and automated publication workflows." },
  { icon: Layout, title: "Custom Architecture", description: "Configurable editorial policies and submission guidelines without technical requirements." },
  { icon: Server, title: "Infra Management", description: "Enterprise hosting, domain management, and server maintenance handled by experts." }
];

const partners = [
  { name: "SSIPMT Raipur", icon: Landmark },
  { name: "VIT Pune", icon: School },
  { name: "AAFT University Raipur", icon: GraduationCap },
  { name: "Arya Group of Colleges", icon: Landmark },
  { name: "Noida International University", icon: School }
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
      <main className="flex-1 pt-20">
        <Hero />

        {/* Why Technical Journals? */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Why Technical Journals?</h2>
              <div className="mt-4 w-20 md:w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto italic font-medium">University-focused hosting that prioritizes academic ethics, research visibility, and institutional ownership.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {whyUsFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-xl border-none bg-slate-50 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 group p-2" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                    <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-funky shadow-inner flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-500">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-3 font-headline">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Academic Publishing Platform */}
        <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none hidden md:block">
            <div className="absolute top-10 left-10"><Cpu className="w-32 h-32 animate-spin-slow" /></div>
            <div className="absolute bottom-10 right-10"><Zap className="w-32 h-32 animate-pulse" /></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-accent font-headline">Comprehensive Academic Publishing Platform</h2>
              <div className="mt-4 w-20 md:w-24 h-1 bg-white mx-auto"></div>
              <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto">Enterprise-grade features designed exclusively for scholarly excellence and institutional growth.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {platformFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all hover:bg-white group overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8 md:p-10 flex flex-col items-start text-left">
                    <div className="h-12 w-12 md:h-14 md:w-14 bg-accent/20 rounded-funky flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary mb-4 leading-tight font-headline">{feature.title}</h3>
                    <p className="text-sm text-white/70 group-hover:text-primary/80 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Journals Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Featured University Journals</h2>
              <div className="mt-4 w-20 md:w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">Discover the latest research published across our institutional network.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
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
                        <p className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-tighter mb-1">{journal.university}</p>
                        <p className="text-accent text-[10px] md:text-xs font-bold leading-tight">{journal.name}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12 md:mt-16">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-funky px-8 md:px-10 py-6 md:py-8 text-lg md:text-xl font-bold shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto">
                <Link href="/journals">Explore Journal Directory</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global University Partners */}
        <section className="py-16 md:py-24 bg-white border-t border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-xs font-black text-primary/20 uppercase tracking-[0.5em] mb-4">Institutional Network</h2>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-headline italic">Global University Partners</h3>
              <div className="mt-4 w-12 h-1 bg-accent mx-auto"></div>
            </div>
            
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-8 md:gap-12 py-10 w-max">
                {[...partners, ...partners, ...partners].map((partner, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center gap-4 group min-w-[150px] md:min-w-[180px]"
                  >
                    <div className="h-20 w-20 md:h-24 md:w-24 rounded-[25px] md:rounded-[30px] bg-accent/10 flex items-center justify-center border-2 border-accent shadow-[0_0_30px_rgba(255,191,0,0.2)] group-hover:bg-accent transition-all duration-500">
                      <partner.icon className="h-8 w-8 md:h-10 md:w-10 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-[10px] md:text-xs font-black text-primary uppercase tracking-widest text-center leading-tight whitespace-normal max-w-[120px] md:max-w-[140px]">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
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
          animation: spin-slow 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}
