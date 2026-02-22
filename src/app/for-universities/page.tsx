'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShieldCheck, 
  RefreshCw, 
  BarChart3, 
  Globe2, 
  CheckCircle2,
  GraduationCap,
  LayoutDashboard,
  Server
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ForUniversitiesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  const plans = [
    {
      name: "Starter Bundle",
      price: "Ideal for Single Journals",
      features: [
        "1 ScholarJMS Instance",
        "DOI Registration Support",
        "Standard Hosting",
        "Weekly Backups",
        "Email Support"
      ]
    },
    {
      name: "Institutional Suite",
      price: "For Departmental Catalogs",
      features: [
        "Up to 5 Journals",
        "Institutional Branding",
        "Priority Migration",
        "Daily Backups",
        "Plagiarism Checker Integration",
        "Dedicated Manager"
      ],
      featured: true
    },
    {
      name: "University Sovereign",
      price: "Campus-Wide Solution",
      features: [
        "Unlimited Journals",
        "Custom Sub-domains",
        "API Access",
        "Advanced Analytics",
        "Institutional Repository Sync",
        "24/7 Technical SLA"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6" data-aos="fade-up">
              Empowering Academic Sovereignty
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
              Professional journal hosting solutions designed exclusively for universities to regain control over their research output.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky px-10">
                <Link href="/contact">Request Institutional Demo</Link>
              </Button>
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

        {/* Core Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary font-headline" data-aos="fade-up">Institutional Advantages</h2>
              <div className="mt-4 w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Sovereign Ownership",
                  desc: "Your journals, your data. We provide the platform, but you retain 100% ownership and control."
                },
                {
                  icon: RefreshCw,
                  title: "Migration Support",
                  desc: "Expert migration from OJS 2.x, OJS 3.x, or legacy systems with full metadata preservation."
                },
                {
                  icon: BarChart3,
                  title: "Index Readiness",
                  desc: "Built-in compliance for Scopus, Web of Science, and UGC CARE indexing requirements."
                },
                {
                  icon: LayoutDashboard,
                  title: "ScholarJMS Powered",
                  desc: "Enterprise-grade Journal Management System optimized for modern editorial workflows."
                }
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="mb-6 p-4 bg-secondary rounded-full text-accent shadow-sm">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary font-headline" data-aos="fade-up">Hosting Packages</h2>
              <div className="mt-4 w-20 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, idx) => (
                <Card 
                  key={idx} 
                  className={`border-none shadow-xl rounded-[40px] overflow-hidden ${plan.featured ? 'ring-2 ring-accent scale-105 z-10' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <CardHeader className={`p-8 text-center ${plan.featured ? 'bg-primary text-white' : 'bg-white'}`}>
                    <CardTitle className="text-2xl font-bold font-headline">{plan.name}</CardTitle>
                    <p className={`mt-2 text-sm ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>{plan.price}</p>
                  </CardHeader>
                  <CardContent className="p-8 bg-white">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full font-bold rounded-funky ${plan.featured ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-white'}`}>
                      <Link href="/contact">Inquire for Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why ScholarJMS */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8" data-aos="fade-right">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest">
                  <Server className="h-4 w-4" />
                  Superior Infrastructure
                </div>
                <h2 className="text-4xl font-bold text-primary font-headline leading-tight">
                  Technical Excellence for <br />Research Journals
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  ScholarJMS is not just a hosting platform; it's a dedicated ecosystem for academic publishing. We ensure your university's research is presented with the professionalism it deserves.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "DOI Automation", desc: "Automated Crossref integration for persistent linking." },
                    { title: "Ethics Compliant", desc: "Built-in workflows for COPE-aligned peer review transparency." },
                    { title: "Indexing Support", desc: "Article-level XML generation for automated indexing submissions." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-foreground/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square lg:aspect-auto h-[500px]" data-aos="fade-left">
                <div className="absolute inset-0 bg-primary rounded-[60px] transform rotate-3 scale-95 opacity-10"></div>
                <div className="absolute inset-0 bg-accent/5 rounded-[60px] transform -rotate-3 scale-105"></div>
                <div className="absolute inset-0 bg-white shadow-2xl rounded-[60px] overflow-hidden border">
                   <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                    <GraduationCap className="h-24 w-24 text-accent mb-8" />
                    <h3 className="text-3xl font-bold text-primary font-headline mb-4">University Partners</h3>
                    <p className="text-foreground/60 max-w-sm mb-8">Join leading institutions like VIT, SSIPMT, and AAFT University in reclaiming academic publishing sovereignty.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                       <Globe2 className="h-10 w-10 text-primary/20" />
                       <ShieldCheck className="h-10 w-10 text-primary/20" />
                       <Server className="h-10 w-10 text-primary/20" />
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6" data-aos="fade-up">Ready to Start Your Institutional Journey?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
              Our specialists are ready to help your university launch its own secure and professional journal hosting platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-12 rounded-funky">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
