<<<<<<< HEAD
=======

// @ts-nocheck
>>>>>>> old-work
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
<<<<<<< HEAD
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
=======
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  CheckCircle2, 
  Shield, 
  Globe, 
  Cpu, 
  BookOpen, 
  School, 
  Landmark, 
  Scale, 
  Eye 
} from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-img');
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  const pillars = [
    {
      icon: School,
      title: "100% University-only hosting",
      desc: "Strictly limited to academic institutions to preserve research ownership."
    },
    {
      icon: Landmark,
      title: "Non-commercial model",
      desc: "A system focused on academic value and research integrity rather than private profit."
    },
    {
      icon: Scale,
      title: "Transparent, ethical publishing",
      desc: "Supporting international ethics standards and peer-review transparency."
    },
    {
      icon: Cpu,
      title: "ScholarJMS Powered",
      desc: "Utilizing industry-grade ScholarJMS for professional journal management."
    },
    {
      icon: Globe,
      title: "Global Research Visibility",
      desc: "Maximized dissemination and visibility through strategic indexing support."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                About Technical Journals
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Empowering academic institutions with secure, scalable, and sovereign journal hosting solutions.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
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

        {/* Core Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-6" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
                  Our Academic Mission
                </h2>
                <div className="w-20 h-1 bg-accent"></div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Technical Journals is a global platform exclusively developed for Universities and Academic Institutions. Unlike traditional hosting providers, we do not serve private publishers. 
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  We believe that research belongs to the institutions that foster it. Our objective is to provide a high-performance environment where universities can manage and publish journals under their own unique institutional branding.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Shield, text: "Sovereign Ownership" },
                    { icon: Globe, text: "Global Standards" },
                    { icon: Cpu, text: "Advanced JMS Tech" },
                    { icon: BookOpen, text: "Open Access Ready" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                      <item.icon className="h-6 w-6 text-accent" />
                      <span className="font-semibold text-primary">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Are Different */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
              Why Choose Technical Journals?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" data-aos="fade-up"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Exclusivity",
                  desc: "We only host university journals. No private commercial interests or predatory publishers are allowed on our infrastructure."
                },
                {
                  title: "ScholarJMS Powered",
                  desc: "Built on industry-leading Journal Management System (JMS) architecture, optimized for peer review and editorial workflows."
                },
                {
                  title: "Institutional Identity",
                  desc: "Every journal reflects the university's brand, ensuring professional credibility and maintaining academic integrity."
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-lg rounded-funky" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Pillars of Excellence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline mb-4" data-aos="fade-up">
              Key Pillars of Excellence
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12" data-aos="fade-up"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <Card key={idx} className="border-none shadow-xl rounded-funky bg-secondary p-4 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="mb-4 p-4 bg-primary rounded-full text-accent shadow-lg">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-xl text-primary font-bold">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/70">{pillar.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Objective */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <Card className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl overflow-hidden relative" data-aos="zoom-in">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold font-headline mb-6">The Path Forward</h3>
                <p className="text-lg opacity-85 mb-8">
                  Technical Journals bridges the gap between research and publication. By providing a scalable infrastructure, we allow academic bodies to focus on the quality of the content while we handle the complexities of digital distribution and ethical indexing.
                </p>
                <ul className="space-y-4">
                  {[
                    "Ethical publishing workflows",
                    "DOI integration and indexing support",
                    "Secure data backups and storage",
                    "Customizable editorial interfaces"
                  ].map((list, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
>>>>>>> old-work
    </div>
  );
}
