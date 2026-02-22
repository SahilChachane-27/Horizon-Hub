
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
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
    </div>
  );
}

