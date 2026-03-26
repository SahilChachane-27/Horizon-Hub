'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Laptop, Users, Workflow, Database, ShieldCheck, Zap, Globe, BarChart } from 'lucide-react';
import Link from 'next/link';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';

const categories = [
  {
    title: "Journal Hosting Services",
    icon: Laptop,
    description: "Robust, secure infrastructure tailored for academic journals.",
    features: [
      "Platform complete installation & setup",
      "Enterprise server maintenance & monitoring",
      "DOI registration (DigiIdentify/CrossRef)",
      "Article-level indexing metadata management",
      "Anti-plagiarism system integration"
    ]
  },
  {
    title: "University Partnership Program",
    icon: Users,
    description: "Long-term collaboration for institutional research growth.",
    features: [
      "Institutional branded publishing portals",
      "Co-branded publication workflows",
      "Dedicated institutional account manager",
      "Annual journal analytics & visibility reports",
      "Assistance with institutional ranking metrics"
    ]
  },
  {
    title: "Editorial Workflow Management",
    icon: Workflow,
    description: "End-to-end editorial system for maximum efficiency.",
    features: [
      "Manuscript submission & tracking portal",
      "Automated reviewer panel creation",
      "Systematic automated reminders for peers",
      "Professional copyediting production tools",
      "Version control & archival management"
    ]
  },
  {
    title: "Migration & Legacy Services",
    icon: Database,
    description: "Transitioning legacy research to modern standards.",
    features: [
      "Migration from legacy systems",
      "Full retention of back issues & metadata",
      "Preservation of Persistent URLs (PIDs)",
      "Data integrity auditing & historical cleanup",
      "Seamless redirection for legacy citation links"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline italic leading-tight mb-6">
                Academic Solutions
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xs sm:text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed italic font-medium">
                Empowering universities with end-to-end publishing technology and strategic indexing support.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/ResearchPsychology.jpg"
              alt="Academic Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <div className="container mx-auto px-8 md:px-16 lg:px-32 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {categories.map((cat, i) => (
              <Card key={i} className="rounded-funky shadow-xl border-none bg-slate-50 group hover:bg-white transition-all duration-500 relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <cat.icon className="w-24 h-24" />
                </div>
                <CardHeader className="p-6 pb-0">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-primary rounded-funky flex items-center justify-center shadow-lg group-hover:bg-accent transition-colors duration-500 relative">
                      <cat.icon className="h-6 w-6 text-white group-hover:text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-primary font-headline italic tracking-tight">{cat.title}</CardTitle>
                      <p className="text-[10px] text-foreground/50 font-bold uppercase tracking-wider mt-0.5">{cat.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {cat.features.map((feat, fi) => (
                      <li key={fi} className="flex gap-3 items-start text-foreground/80 group-hover:text-foreground">
                        <div className="mt-1 h-4 w-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                          <Check className="h-2.5 w-2.5 text-primary group-hover:text-white" />
                        </div>
                        <span className="text-xs font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16 p-8 md:p-12 bg-primary rounded-funky shadow-2xl relative overflow-hidden text-center text-white" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32" />
            
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">Scalable Hosting for Academic Excellence</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 font-medium text-xs md:text-sm">
              Technical Journals provides more than just hosting; we provide a complete ecosystem for institutional research visibility and global dissemination.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60">
              <div className="flex flex-col items-center gap-2"><Globe className="h-6 w-6 md:h-7 md:h-7" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Global Indexing</span></div>
              <div className="flex flex-col items-center gap-2"><ShieldCheck className="h-6 w-6 md:h-7 md:h-7" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Secure Servers</span></div>
              <div className="flex flex-col items-center gap-2"><BarChart className="h-6 w-6 md:h-7 md:h-7" /><span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Growth Analytics</span></div>
            </div>
            <Button asChild className="mt-10 bg-accent hover:bg-white hover:text-primary text-accent-foreground px-6 sm:px-10 py-3 sm:py-6 text-sm sm:text-base font-bold rounded-funky shadow-2xl w-full sm:w-auto h-auto transition-all">
              <Link href="/contact">Inquire About Services</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
