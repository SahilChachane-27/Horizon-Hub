'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Globe, 
  Cpu, 
  BookOpen, 
  School, 
  Landmark, 
  Scale
} from 'lucide-react';

export default function AboutPage() {

  const pillars = [
    {
      icon: School,
      title: "100% University-only hosting",
      desc: "Strictly limited to academic institutions to preserve research ownership."
    },
    {
      icon: Scale,
      title: "Transparent, ethical publishing",
      desc: "Supporting international ethics standards and peer-review transparency."
    },
    {
      icon: Cpu,
      title: "Platform Powered",
      desc: "Utilizing industry-grade professional systems for journal management."
    },
    {
      icon: Globe,
      title: "Global Research Visibility",
      desc: "Maximized dissemination and visibility through strategic indexing support."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Standardized Banner */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline italic leading-tight mb-4">
                About Technical Journals
              </h1>
              <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
              <p className="text-xs sm:text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                Empowering academic institutions with secure, scalable, and sovereign journal hosting solutions built on the Technical Journals platform.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/aboutUs.jpeg"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
              data-ai-hint="university campus"
            />
          </div>
        </section>

        {/* Core Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-funky overflow-hidden shadow-xl" data-aos="fade-right">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="University Publishing"
                  fill
                  className="object-cover"
                  data-ai-hint="academic publishing"
                />
              </div>
              <div className="space-y-6" data-aos="fade-left">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
                    Our Academic Mission
                  </h2>
                  <div className="w-20 h-1 bg-accent mt-2"></div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  Technical Journals is a global platform exclusively developed for Universities and Academic Institutions. Unlike traditional hosting providers, we do not serve private publishers. 
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  We believe that research belongs to the institutions that foster it. Our objective is to provide a high-performance environment where universities can manage and publish journals under their own unique institutional branding.
                </p>
                
                <div className="grid gap-6">
                  {/* Vision Statement Section */}
                  <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky overflow-hidden">
                    <CardHeader className="py-4">
                      <CardTitle className="text-primary text-lg font-headline">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                        To build the world’s most trusted, university-exclusive journal hosting ecosystem that empowers institutions to publish, preserve, and elevate their scholarly research through secure, scalable, and future-ready technologies.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Mission Statement Section */}
                  <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-funky overflow-hidden">
                    <CardHeader className="py-4">
                      <CardTitle className="text-primary text-lg font-headline">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                        To empower academic institutions with sovereign publishing tools that ensure their research remains accessible, professional, and firmly under institutional control.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Pillars */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline mb-3" data-aos="fade-up">
              Key Pillars of Excellence
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-10" data-aos="fade-up"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <Card key={idx} className="border-none shadow-xl rounded-funky bg-white p-6 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:-translate-y-1" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="mb-4 p-4 bg-primary rounded-full text-accent shadow-lg">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg text-primary font-bold leading-tight">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-foreground/70 text-xs leading-relaxed font-medium">{pillar.desc}</p>
                  </CardContent>
                </Card>
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
