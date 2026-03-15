
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
  BookOpen,
  ArrowRight
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
    title: "Scholar JMS Documentation",
    icon: BookOpen,
    description: "Comprehensive technical manuals and user guides for the Scholar Journal Management System (JMS)."
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline italic leading-tight mb-6">
                Academic Resources & Guidelines
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xs sm:text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                Empowering authors, reviewers, and editors with the tools and information needed for high-quality academic publishing.
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
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid md:grid-cols-2 gap-8">
              {resourceCategories.map((item, i) => (
                <Card key={i} className="rounded-funky border border-border/50 shadow-md hover:shadow-xl transition-all cursor-pointer group bg-white" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8 md:p-10 flex gap-6 items-start">
                    <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-accent-foreground" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-primary font-headline italic">{item.title}</h3>
                      <p className="text-sm text-foreground/70 leading-relaxed font-medium">{item.description}</p>
                      <Button variant="link" className="p-0 h-auto text-accent font-bold uppercase text-[10px] tracking-widest hover:text-primary">
                        Access Now <ArrowRight className="ml-1.5 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Documentation Section */}
        <section className="py-12 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-16 lg:px-32">
            <Card className="bg-primary text-primary-foreground p-6 md:p-12 lg:p-16 rounded-[30px] md:rounded-[40px] overflow-hidden relative shadow-2xl border-none" data-aos="fade-up">
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
                    <LifeBuoy className="h-4 w-4" />
                    Support Documentation
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold font-headline leading-tight italic">
                    Technical Guide for Scholar JMS
                  </h2>
                  <p className="text-base md:text-lg opacity-80 leading-relaxed font-medium italic">
                    Need help navigating our Journal Management System? Access comprehensive guides on manuscript tracking, reviewer assignment, and production workflows.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-8 md:px-14 py-4 md:py-8 text-sm md:text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105 h-auto">
                      Technical Guides
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white rounded-funky px-8 md:px-14 py-4 md:py-8 text-sm md:text-lg font-bold transition-all h-auto">
                      Video Tutorials
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-white/5 shadow-2xl">
                  <Image
                    src="/ResearchPsychology.jpg"
                    alt="Technical Support"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-primary border-b-[8px] md:border-b-[12px] border-b-transparent ml-1 md:ml-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48 blur-2xl md:blur-3xl"></div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
