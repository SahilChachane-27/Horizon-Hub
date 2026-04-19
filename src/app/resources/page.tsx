'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LifeBuoy,
  FileText,
  CheckCircle2,
  Scale,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';

const resourceCategories = [
  {
    title: "Author Guidelines Templates",
    icon: FileText,
    description: "Standardized manuscript templates, formatting guides, and submission checklists for scholarly authors."
  },
  {
    title: "Reviewer Guidelines",
    icon: CheckCircle2,
    description: "Ethical standards, best practices, and systematic procedures for conducting rigorous academic peer reviews."
  },
  {
    title: "Publishing Ethics (COPE)",
    icon: Scale,
    description: "Guidelines aligned with the Committee on Publication Ethics (COPE) to ensure institutional research integrity."
  },
  {
    title: "Technical Journals Documentation",
    icon: BookOpen,
    description: "Comprehensive technical manuals and user guides for the Technical Journals Management System (JMS)."
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline italic leading-tight mb-4">
                Academic Resources & Guidelines
              </h1>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-xs sm:text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                Empowering authors, reviewers, and editors with the tools needed for high-quality academic publishing.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/ResearchPsychology.jpg"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Resource Hub Grid */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {resourceCategories.map((item, i) => (
                <Card key={i} className="rounded-funky border border-border/50 shadow-md hover:shadow-xl transition-all cursor-pointer group bg-white" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-6 md:p-10 flex gap-6 items-start">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-accent-foreground" />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <h3 className="text-lg md:text-xl font-bold text-primary font-headline italic">{item.title}</h3>
                      <p className="text-xs md:text-sm text-foreground/70 leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Documentation Section - Compact */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <Card className="bg-primary text-primary-foreground p-6 md:p-8 lg:p-10 rounded-[30px] md:rounded-[40px] overflow-hidden relative shadow-2xl border-none" data-aos="fade-up">
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 md:space-y-5">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest">
                    <LifeBuoy className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    Support Documentation
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold font-headline leading-tight italic">
                    Technical Guide for Technical Journals
                  </h2>
                  <p className="text-xs md:text-sm opacity-80 leading-relaxed font-medium italic max-w-lg">
                    Need help navigating our Journal Management System? Access comprehensive guides on manuscript tracking, reviewer assignment, and production workflows.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-xs shadow-xl shadow-accent/20 transition-all hover:scale-105 h-auto">
                      Technical Guides
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white rounded-funky px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold h-auto hover:bg-white hover:text-primary transition-all">
                      Video Tutorials
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border-2 md:border-4 border-white/5 shadow-2xl">
                  <Image
                    src="/ResearchPsychology.jpg"
                    alt="Technical Support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[6px] md:border-t-[8px] border-t-transparent border-l-[10px] md:border-l-[14px] border-l-primary border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-accent/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-xl"></div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}