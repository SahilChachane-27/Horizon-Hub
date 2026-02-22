'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle2, XCircle, Info, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PricingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for single-journal university setups.",
      price: "$499",
      period: "/year",
      features: [
        "1 Academic Journal",
        "ScholarJMS Hosting",
        "Institutional Branding",
        "DOI Registration (CrossRef)",
        "Basic Analytics",
        "SSL Security",
      ],
      notIncluded: [
        "Migration Support",
        "Plagiarism Check (iThenticate)",
        "Custom Workflow Modules",
        "24/7 Dedicated Support",
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Professional",
      description: "Designed for active research departments.",
      price: "$1,299",
      period: "/year",
      features: [
        "Up to 5 Academic Journals",
        "Priority ScholarJMS Hosting",
        "Full Institutional Branding",
        "DOI & Metadata Support",
        "Advanced Usage Analytics",
        "Plagiarism Check Integration",
        "Expert Migration Support",
      ],
      notIncluded: [
        "University-wide Catalog",
        "Custom Development Support",
      ],
      cta: "Choose Professional",
      highlight: true
    },
    {
      name: "Institutional",
      description: "Complete solution for university catalogs.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Journals",
        "University-wide Journal Hub",
        "Sovereign Data Hosting",
        "Full Indexing Support (Scopus/WoS)",
        "Custom Editorial Workflows",
        "24/7 Dedicated Support Team",
        "MoU-based Partnership",
        "Annual Impact Reports",
      ],
      notIncluded: [],
      cta: "Contact Partnership Team",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Can we migrate our existing OJS journals?",
      a: "Yes, our Professional and Institutional plans include full migration support for journals currently on OJS 2.x/3.x or other platforms, ensuring all back issues and persistent links are preserved."
    },
    {
      q: "Who owns the journal data?",
      a: "The university retains 100% ownership of all research data, metadata, and the journal brand. Technical Journals serves strictly as your sovereign hosting partner."
    },
    {
      q: "Is there a limit on submissions?",
      a: "No, we do not charge per submission or per article. Our pricing is based on the number of journals and the level of support required."
    },
    {
      q: "Do you support DOI registration?",
      a: "Yes, we are CrossRef partners and handle the technical setup for DOI registration and metadata deposit for every hosted journal."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">
                Transparent Hosting Plans
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                Simple, predictable pricing designed exclusively for academic institutions and university research bodies.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
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

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, idx) => (
                <Card 
                  key={idx} 
                  className={`flex flex-col rounded-[30px] border-none shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.highlight ? 'ring-4 ring-accent relative' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{plan.name}</CardTitle>
                    <p className="text-sm text-foreground/60 font-medium">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center">
                    <div className="flex items-baseline gap-1 my-6">
                      <span className="text-5xl font-black text-primary font-headline">{plan.price}</span>
                      <span className="text-lg font-bold text-foreground/40">{plan.period}</span>
                    </div>
                    
                    <ul className="w-full space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground/80">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 opacity-40">
                          <XCircle className="h-5 w-5 text-foreground/40 shrink-0 mt-0.5" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button asChild className={`w-full py-7 rounded-xl font-bold text-lg shadow-xl transition-all ${plan.highlight ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary text-white hover:bg-primary/90'}`}>
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Link */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-border/50 max-w-2xl mx-auto" data-aos="zoom-in">
              <Info className="h-6 w-6 text-accent shrink-0" />
              <p className="text-sm font-medium text-foreground/70">
                Need a custom bundle for a specific research center or collaborative project? 
                <Link href="/contact" className="text-primary font-bold hover:underline ml-1">Get a custom quote.</Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline" data-aos="fade-up">
                Pricing FAQs
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4" data-aos="fade-up">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-none rounded-2xl px-6 shadow-md transition-all hover:shadow-lg">
                  <AccordionTrigger className="text-lg font-bold text-primary hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <HelpCircle className="h-5 w-5 text-accent shrink-0" />
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-md leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6" data-aos="fade-up">
              Still Have Questions?
            </h2>
            <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Our academic partnership specialists are ready to help you find the best solution for your university.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-12 py-8 text-lg shadow-2xl shadow-accent/20 transition-all hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
