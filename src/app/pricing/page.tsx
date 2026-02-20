'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  Microscope, 
  FlaskConical, 
  BookOpen, 
  Atom, 
  Dna, 
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: "Basic Hosting Plan",
    priceINR: "₹25,000",
    priceUSD: "$300",
    period: "Annually",
    description: "Essential tools for journal launching.",
    features: [
      "ScholarJMS Installation",
      "Journal Website Hosting",
      "24/7 Technical Support",
      "Up to 4 issues/year",
      "Unlimited Articles",
      "HTTPS Security"
    ],
    slug: "basic"
  },
  {
    name: "Standard Plan",
    priceINR: "₹45,000",
    priceUSD: "$540",
    period: "Annually",
    featured: true,
    description: "Everything in Basic plus automation.",
    features: [
      "DOI Support (DigiIdentify/Crossref)",
      "Plagiarism Check (200 papers/year)",
      "Automated Editorial Workflow",
      "Institutional Branding",
      "Custom Email Setup",
      "Metadata for Indexing"
    ],
    slug: "standard"
  },
  {
    name: "Premium University Plan",
    priceINR: "₹75,000",
    priceUSD: "$900",
    period: "Annually",
    description: "Advanced optimization and growth.",
    features: [
      "Article Formatting Templates",
      "Metadata Optimization",
      "Annual Analytics Dashboard",
      "Google Scholar Optimization",
      "Free Migration from OJS",
      "Indexing Guidance (Scopus/DOAJ)"
    ],
    slug: "premium"
  },
  {
    name: "Enterprise Package",
    priceINR: "₹1,80,000",
    priceUSD: "$2,150",
    period: "Annually",
    description: "For universities hosting 3+ journals.",
    features: [
      "Up to 5 Journals Included",
      "Dedicated Server",
      "Dedicated Account Manager",
      "Annual Audit Report",
      "Priority Indexing guidance",
      "UGC Care Readiness Support"
    ],
    slug: "enterprise"
  }
];

const addOns = [
  { name: "DOI Registration", price: "₹150 / article" },
  { name: "DigiIdentify Registration", price: "₹25 / article" },
  { name: "Plagiarism Check", price: "₹50 / article" },
  { name: "Article Copyediting", price: "₹500 / article" },
  { name: "Citation Marketing", price: "Custom Quote" },
  { name: "Scopus Consultation", price: "Free for Premium+" },
  { name: "Payment Integration", price: "Included in Standard+" }
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white pt-32 pb-24">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <Microscope className="absolute top-1/4 left-[10%] w-24 h-24 animate-float" />
            <FlaskConical className="absolute top-1/3 right-[15%] w-20 h-20 animate-float" style={{ animationDelay: '2s' }} />
            <BookOpen className="absolute bottom-1/4 left-[15%] w-28 h-28 animate-float" style={{ animationDelay: '1s' }} />
            <Atom className="absolute top-1/2 right-[10%] w-32 h-32 animate-float" style={{ animationDelay: '3s' }} />
            <Dna className="absolute bottom-1/3 right-[20%] w-24 h-24 animate-float" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline" data-aos="fade-up">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
              Institutional plans designed to scale your university's research impact.
            </p>

            <div className="inline-flex bg-white/10 p-1 rounded-funky border border-white/20" data-aos="fade-up" data-aos-delay="200">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-8 py-2 rounded-funky transition-all ${currency === 'USD' ? 'bg-accent text-accent-foreground font-bold' : 'text-white/70 hover:text-white'}`}
              >
                $ USD
              </button>
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-8 py-2 rounded-funky transition-all ${currency === 'INR' ? 'bg-accent text-accent-foreground font-bold' : 'text-white/70 hover:text-white'}`}
              >
                ₹ INR
              </button>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20 -mt-12 bg-white/95 rounded-t-[50px] shadow-2xl relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, i) => (
                <Card 
                  key={plan.slug} 
                  className={`flex flex-col rounded-funky border-border/50 shadow-xl transition-all hover:-translate-y-2 ${plan.featured ? 'border-accent ring-2 ring-accent/20' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <CardHeader className="text-center pb-8 border-b border-border/50">
                    {plan.featured && (
                      <span className="bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block mx-auto">Most Popular</span>
                    )}
                    <CardTitle className="text-xl font-bold text-primary font-headline">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-black text-primary">{currency === 'INR' ? plan.priceINR : plan.priceUSD}</span>
                      <span className="text-xs text-muted-foreground uppercase ml-1">/ {plan.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 pt-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                          <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full rounded-funky h-12 text-base font-bold ${plan.featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                      <Link href="/start-journal">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-Ons and Support */}
            <div className="grid lg:grid-cols-2 gap-12 mt-20">
              <Card className="rounded-funky shadow-lg border-primary/10 overflow-hidden" data-aos="fade-right">
                <CardContent className="p-10">
                  <h2 className="text-2xl font-bold text-primary mb-8 font-headline flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent fill-accent" /> Add-On Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {addOns.map((addon, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">{addon.name}</p>
                        <p className="text-primary font-bold">{addon.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-red-600 font-bold bg-red-50 p-3 rounded-xl border border-red-100">
                    <Info className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-wider">18% GST will be applied to all plans</span>
                  </div>
                </CardContent>
              </Card>

              <div className="relative p-[3px] rounded-funky overflow-hidden group shadow-xl" data-aos="fade-left">
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-orange-400 to-accent animate-gradient-x" style={{ backgroundSize: '200% 200%' }}></div>
                <div className="relative bg-white rounded-funky p-10 flex flex-col items-center justify-center text-center gap-6 h-full">
                  <ShieldCheck className="h-20 w-20 text-accent" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 font-headline">30-Day Money-Back Guarantee</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm max-w-md mx-auto">
                      Try our hosting services risk-free. If you're not completely satisfied with our workflow and support in the first 30 days, we'll provide a full refund.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary/70">
                        <Check className="h-4 w-4 text-accent" strokeWidth={4} /> No hidden fees
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary/70">
                        <Check className="h-4 w-4 text-accent" strokeWidth={4} /> Secure hosting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-headline" data-aos="fade-up">Ready to Empower Your Research?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10 font-medium" data-aos="fade-up" data-aos-delay="100">
              Join the growing network of university journals utilizing ScholarJMS for world-class publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-lg font-bold rounded-funky hover:scale-105 transition-all shadow-xl" asChild>
                <Link href="/start-journal">Inquire Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary px-12 py-8 text-lg font-bold rounded-funky hover:bg-primary hover:text-white transition-all shadow-lg" asChild>
                <Link href="/contact">Book a technical Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
