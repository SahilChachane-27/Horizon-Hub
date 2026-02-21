
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
  Layout
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
  { icon: ShieldCheck, title: "Exclusive hosting for Universities", description: "Dedicated exclusively to academic institutions and university-owned research." },
  { icon: Globe, title: "No private publishers allowed", description: "Maintaining a strictly non-commercial academic environment for research integrity." },
  { icon: Server, title: "Secure ScholarJMS hosting", description: "State-of-the-art security for Scholar Journal Management Systems (ScholarJMS)." },
  { icon: CheckCircle2, title: "99.9% Uptime", description: "Reliable access for researchers worldwide with redundant server architecture." },
  { icon: Workflow, title: "End-to-end workflow", description: "Seamless management from submission to peer review and final publication." },
  { icon: Database, title: "Indexing support", description: "Dedicated format guidance for Scopus, DOAJ, and Web of Science indexing." }
];

const platformFeatures = [
  { icon: FileText, title: "Advanced Manuscript Management", description: "Streamlined submission workflows with automated screening and intelligent manuscript routing for optimal editorial efficiency." },
  { icon: Users, title: "Transparent Peer Review System", description: "Sophisticated reviewer matching algorithms, customizable review forms, and automated workflow management in a transparent peer review environment." },
  { icon: LinkIcon, title: "Integrated DOI Management", description: "Seamless DOI assignment and registration with automated metadata generation and CrossRef integration." },
  { icon: PenTool, title: "Professional Publication Tools", description: "Advanced article formatting, metadata management, issue scheduling, and automated publication workflows." },
  { icon: Layout, title: "Customizable Journal Architecture", description: "Configurable editorial policies, submission guidelines, and team management interfaces - all without technical implementation requirements." },
  { icon: Server, title: "Complete Infrastructure Management", description: "Enterprise hosting, domain management, and server maintenance - enabling complete focus on scholarly content." }
];

const servicesOverview = [
  { title: "Journal Hosting", description: "Secure, scalable servers for your academic publications." },
  { title: "ScholarJMS Setup", description: "Complete installation and configuration of journal management systems." },
  { title: "University Partnerships", description: "Long-term institutional support and co-branded publishing solutions." },
  { title: "Editorial board Management", description: "Comprehensive systems for managing reviewers and board members." },
  { title: "Plagiarism Check Tools", description: "Integrated tools to ensure the highest standards of academic integrity." },
  { title: "AI-powered indexing support", description: "Optional AI tools to enhance research visibility and discoverability." }
];

const partners = [
  "SSIPMT Raipur", "VIT Pune", "AAFT University Raipur", "Arya Group of Colleges Jaipur", "Noida International University"
];

const journals = [
  { id: 'journal-cover-1', name: 'Eng. & Tech. Journal', university: 'VIT Pune' },
  { id: 'journal-cover-2', name: 'Medical Quarterly', university: 'NIU Noida' },
  { id: 'journal-cover-3', name: 'Global Mgmt Review', university: 'SSIPMT' },
  { id: 'journal-cover-4', name: 'Agri Science Today', university: 'AAFT' },
  { id: 'journal-cover-5', name: 'Humanities Insights', university: 'Arya Group' },
  { id: 'journal-cover-6', name: 'Sustainability J.', university: 'VIT Pune' }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Trusted & Certified Section */}
        <section className="py-16 bg-slate-50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">Trusted & Certified by Leading Organizations</h2>
              <div className="mt-3 w-16 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {certifications.map((cert, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center text-center p-4 bg-white rounded-funky shadow-sm border border-border/30 transition-all hover:shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <cert.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-1">{cert.title}</h4>
                  <p className="text-[10px] text-foreground/60 uppercase font-semibold tracking-wider">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Technical Journals? */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Why Technical Journals?</h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">University-focused hosting that prioritizes academic ethics and research visibility.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-lg border-border/50 transition-all hover:-translate-y-2" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8 text-center flex flex-col items-center">
                    <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-6">
                      <feature.icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Academic Publishing Platform */}
        <section className="py-20 bg-slate-50 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Comprehensive Academic Publishing Platform</h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">Enterprise-grade features designed for scholarly excellence.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platformFeatures.map((feature, i) => (
                <Card key={i} className="rounded-funky shadow-lg bg-white border-none transition-all hover:shadow-xl group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-10 flex flex-col items-start text-left">
                    <div className="h-14 w-14 bg-secondary rounded-funky flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                      <feature.icon className="h-7 w-7 text-primary group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{feature.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Journals Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline">Featured Journals</h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {journals.map((journal, i) => {
                const img = PlaceHolderImages.find(p => p.id === journal.id);
                return (
                  <Card key={i} className="overflow-hidden group rounded-none border-none shadow-xl" data-aos="zoom-in" data-aos-delay={i * 50}>
                    <div className="relative aspect-[3/4]">
                      {img && <Image src={img.imageUrl} alt={journal.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={img.imageHint} />}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <p className="text-white text-xs font-bold">{journal.name}</p>
                        <p className="text-accent text-[10px]">{journal.university}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-funky">
                <Link href="/journals">Explore All Journals</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-6">Comprehensive Academic Services</h2>
                <div className="space-y-6">
                  {servicesOverview.map((service, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <div>
                        <h4 className="font-bold text-primary">{service.title}</h4>
                        <p className="text-foreground/70">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-10 rounded-funky bg-accent text-accent-foreground">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-funky overflow-hidden shadow-2xl" data-aos="fade-left">
                <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" alt="Academic Services" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Global University Partners */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-12">Global University Partners</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {partners.map((partner, i) => (
                <div key={i} className="text-xl font-bold opacity-60 hover:opacity-100 transition-opacity" data-aos="fade-up" data-aos-delay={i * 100}>
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
