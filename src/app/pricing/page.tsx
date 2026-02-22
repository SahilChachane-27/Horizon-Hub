
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Info, 
  Globe, 
  Database, 
  Search, 
  BookOpen,
  Award,
  Landmark,
  ShieldAlert,
  PenTool,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PricingPage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const plans = [
    {
      name: "Basic Hosting Plan",
      price: currency === 'INR' ? "₹25,000" : "$299",
      description: "Essential tools for launching a new journal.",
      features: [
        "ScholarJMS Installation",
        "Journal Website Hosting",
        "Technical Support",
        "Up to 4 issues/year",
        "Unlimited Articles",
        "HTTPS Security"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Standard Plan",
      price: currency === 'INR' ? "₹45,000" : "$549",
      description: "Optimized for automated editorial workflows.",
      features: [
        "Everything in Basic",
        "DOI Support (DigiIdentify/CrossRef)",
        "Plagiarism Check (200 papers/year)",
        "Automated Editorial Workflow",
        "Institutional Branding",
        "Custom Institutional Email"
      ],
      cta: "Get Started",
      highlight: true,
      tag: "Recommended"
    },
    {
      name: "Premium University Plan",
      price: currency === 'INR' ? "₹75,000" : "$899",
      description: "Advanced growth and indexing optimization.",
      features: [
        "Everything in Standard",
        "Article Formatting Templates",
        "Metadata Optimization for Indexing",
        "Annual Analytics Dashboard",
        "Google Scholar Optimization",
        "Free Migration from existing systems"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Enterprise Package",
      price: currency === 'INR' ? "₹1,80,000" : "$2,199",
      description: "For universities hosting 3 to 5 journals.",
      features: [
        "Up to 5 Journals Included",
        "Dedicated High-Speed Server",
        "Dedicated Account Manager",
        "Annual Compliance Audit Report",
        "Priority Indexing Guidance",
        "UGC CARE Readiness Support"
      ],
      cta: "Get Started",
      highlight: false
    }
  ];

  const addons = [
    { name: "DOI Registration", price: currency === 'INR' ? "₹150 / article" : "$2 / article", icon: "#" },
    { name: "DigiIdentify Registration", price: currency === 'INR' ? "₹25 / article" : "$0.5 / article", icon: Landmark },
    { name: "Plagiarism Check", price: currency === 'INR' ? "₹50 / article" : "$1 / article", icon: ShieldAlert },
    { name: "Article Copyediting", price: currency === 'INR' ? "₹500 / article" : "$7 / article", icon: PenTool },
    { name: "Citation Improvisation", price: "Digital Marketing", icon: TrendingUp },
    { name: "Scopus Ready Consult", price: "Custom Quote", icon: Search },
    { name: "Payment Gateway", price: "Direct Integration", icon: CreditCard },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white pt-32 pb-24">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <Globe className="absolute top-1/4 left-[10%] w-64 h-64 animate-pulse" />
            <Database className="absolute bottom-1/4 right-[10%] w-64 h-64 animate-pulse" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-6 font-headline italic">
              Institutional Hosting Plans
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
              Scalable annual plans designed exclusively for University research ownership.
            </p>
            
            {isClient && (
              <div data-aos="fade-up" data-aos-delay="200" className="inline-flex bg-white/10 p-1 rounded-funky border border-white/20 shadow-2xl">
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-10 py-3 rounded-funky transition-all font-black text-sm tracking-widest ${currency === 'USD' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-white/70 hover:text-white'}`}
                >
                  $ USD
                </button>
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-10 py-3 rounded-funky transition-all font-black text-sm tracking-widest ${currency === 'INR' ? 'bg-accent text-accent-foreground shadow-lg' : 'text-white/70 hover:text-white'}`}
                >
                  ₹ INR
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-24 -mt-16 bg-white rounded-t-[60px] shadow-2xl relative z-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, idx) => (
                <Card 
                  key={idx} 
                  className={`flex flex-col rounded-funky shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden group ${plan.highlight ? 'ring-2 ring-accent border-accent/20 bg-white' : 'bg-slate-50 hover:bg-white border-accent/10'}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {plan.tag && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter z-30">
                      {plan.tag}
                    </div>
                  )}
                  <CardHeader className="flex flex-col space-y-1.5 text-center border-b border-accent/5 p-8">
                    <CardTitle className="text-xl font-bold text-primary font-headline italic">{plan.name}</CardTitle>
                    <div className="mt-6">
                      <span className="text-4xl font-black text-primary italic">{plan.price}</span>
                      <span className="text-[10px] text-primary/40 uppercase font-black ml-1 tracking-widest">/ Annually</span>
                    </div>
                    <p className="text-xs text-foreground/50 font-bold mt-4 leading-relaxed uppercase">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 p-8">
                    <ul className="space-y-5 mb-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs font-bold text-primary/70">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-accent" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full rounded-funky h-14 text-base font-black italic tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300 ${plan.highlight ? 'bg-accent text-accent-foreground hover:bg-primary hover:text-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}>
                      <Link href="/contact">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-ons Section */}
            <div className="grid lg:grid-cols-5 gap-12 mt-24">
              <Card className="lg:col-span-3 rounded-funky shadow-2xl border-none bg-slate-50 overflow-hidden" data-aos="fade-right">
                <div className="p-12">
                  <h2 className="text-3xl font-bold text-primary mb-10 font-headline italic flex items-center gap-4">
                    <Zap className="h-8 w-8 text-accent fill-accent" />
                    <span>Add-On Modular Services</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {addons.map((addon, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-accent/10 shadow-sm hover:shadow-xl transition-all group flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            {typeof addon.icon === 'string' ? (
                              <div className="text-accent text-xs font-bold">#</div>
                            ) : (
                              <addon.icon className="h-4 w-4 text-accent" />
                            )}
                          </div>
                          <p className="text-xs font-black text-primary/60 uppercase tracking-widest">{addon.name}</p>
                        </div>
                        <p className="text-primary font-black italic text-sm">{addon.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 flex items-center gap-3 text-red-600 font-black bg-red-50 p-4 rounded-2xl border border-red-100 italic shadow-inner">
                    <Info className="h-5 w-5" />
                    <span className="text-xs uppercase tracking-[0.2em]">18% GST will be applied to all annual plans</span>
                  </div>
                </div>
              </Card>

              {/* Guarantee Section */}
              <div data-aos="fade-left" className="lg:col-span-2 relative p-[2px] rounded-funky overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent animate-pulse"></div>
                <div className="relative bg-white rounded-funky p-12 flex flex-col items-center justify-center text-center gap-8 h-full">
                  <div className="h-24 w-24 bg-accent/10 rounded-full flex items-center justify-center animate-bounce">
                    <ShieldCheck className="h-12 w-12 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4 font-headline italic">30-Day Research Guarantee</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm font-medium max-w-sm mx-auto">
                      Try our institutional hosting portal risk-free. If your editorial team isn't completely satisfied with the workflow in 30 days, we'll provide a full refund.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">
                        <Check className="h-4 w-4 text-accent" /> No Hidden Fees
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">
                        <Check className="h-4 w-4 text-accent" /> Verified Setup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Footer section removed as per user instruction */}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
