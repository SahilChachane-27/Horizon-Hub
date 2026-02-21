'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Check, 
  Zap,
  Info,
  ShieldCheck,
  TrendingUp,
  Award,
  Globe,
  Database,
  Search,
  BookOpen
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: "Basic Hosting Plan",
    priceINR: "₹25,000",
    priceUSD: "$300",
    period: "Annually",
    description: "Essential tools for launching a new journal.",
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
    description: "Optimized for automated editorial workflows.",
    features: [
      "Everything in Basic",
      "DOI Support (DigiIdentify/CrossRef)",
      "Plagiarism Check (200 papers/year)",
      "Automated Editorial Workflow",
      "Institutional Branding",
      "Custom Institutional Email"
    ],
    slug: "standard"
  },
  {
    name: "Premium University Plan",
    priceINR: "₹75,000",
    priceUSD: "$900",
    period: "Annually",
    description: "Advanced growth and indexing optimization.",
    features: [
      "Everything in Standard",
      "Article Formatting Templates",
      "Metadata Optimization for Indexing",
      "Annual Analytics Dashboard",
      "Google Scholar Optimization",
      "Free Migration from existing systems"
    ],
    slug: "premium"
  },
  {
    name: "Enterprise Package",
    priceINR: "₹1,80,000",
    priceUSD: "$2,150",
    period: "Annually",
    description: "For universities hosting 3 to 5 journals.",
    features: [
      "Up to 5 Journals Included",
      "Dedicated High-Speed Server",
      "Dedicated Account Manager",
      "Annual Compliance Audit Report",
      "Priority Indexing Guidance (Scopus/DOAJ)",
      "UGC CARE Readiness Support"
    ],
    slug: "enterprise"
  }
];

const addOns = [
  { name: "DOI Registration", price: "₹150 / article", icon: HashIcon },
  { name: "DigiIdentify Registration", price: "₹25 / article", icon: LandmarkIcon },
  { name: "Plagiarism Check", price: "₹50 / article", icon: ShieldAlertIcon },
  { name: "Article Copyediting", price: "₹500 / article", icon: PenToolIcon },
  { name: "Citation Improvisation", price: "Email/Digital Marketing", icon: TrendingUpIcon },
  { name: "Scopus Ready Consult", price: "Custom Quote", icon: SearchIcon },
  { name: "Payment Gateway", price: "Direct Integration", icon: CreditCardIcon }
];

function HashIcon() { return <div className="text-accent">#</div> }
function LandmarkIcon() { return <Landmark className="h-4 w-4 text-accent" /> }
function ShieldAlertIcon() { return <ShieldAlert className="h-4 w-4 text-accent" /> }
function PenToolIcon() { return <PenTool className="h-4 w-4 text-accent" /> }
function TrendingUpIcon() { return <TrendingUp className="h-4 w-4 text-accent" /> }
function SearchIcon() { return <Search className="h-4 w-4 text-accent" /> }
function CreditCardIcon() { return <CreditCard className="h-4 w-4 text-accent" /> }

import { Landmark, ShieldAlert, PenTool, CreditCard } from 'lucide-react';

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
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <Globe className="absolute top-1/4 left-[10%] w-64 h-64 animate-spin-slow" />
            <Database className="absolute bottom-1/4 right-[10%] w-64 h-64 animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline italic" data-aos="fade-up">Institutional Hosting Plans</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-slideUp" data-aos="fade-up" data-aos-delay="100">
              Scalable annual plans designed exclusively for University research ownership.
            </p>

            <div className="inline-flex bg-white/10 p-1 rounded-funky border border-white/20 shadow-2xl" data-aos="fade-up" data-aos-delay="200">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-10 py-3 rounded-funky transition-all font-black text-sm tracking-widest ${currency === 'USD' ? 'bg-accent text-accent-foreground' : 'text-white/70 hover:text-white'}`}
              >
                $ USD
              </button>
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-10 py-3 rounded-funky transition-all font-black text-sm tracking-widest ${currency === 'INR' ? 'bg-accent text-accent-foreground' : 'text-white/70 hover:text-white'}`}
              >
                ₹ INR
              </button>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-24 -mt-16 bg-white rounded-t-[60px] shadow-2xl relative z-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, i) => (
                <Card 
                  key={plan.slug} 
                  className={`flex flex-col rounded-funky border-accent/10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl relative overflow-hidden bg-slate-50 group hover:bg-white ${plan.featured ? 'ring-2 ring-accent border-accent/20' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter z-30">Recommended</div>
                  )}
                  <CardHeader className="text-center pb-8 border-b border-accent/5 p-8">
                    <CardTitle className="text-xl font-bold text-primary font-headline italic">{plan.name}</CardTitle>
                    <div className="mt-6">
                      <span className="text-4xl font-black text-primary italic">{currency === 'INR' ? plan.priceINR : plan.priceUSD}</span>
                      <span className="text-[10px] text-primary/40 uppercase font-black ml-1 tracking-widest">/ {plan.period}</span>
                    </div>
                    <p className="text-xs text-foreground/50 font-bold mt-4 leading-relaxed uppercase">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 p-8">
                    <ul className="space-y-5 mb-10">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs font-bold text-primary/70">
                          <div className="mt-0.5 h-4 w-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                            <Check className="h-2.5 w-2.5 text-accent" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full rounded-funky h-14 text-base font-black italic tracking-tighter shadow-lg group-hover:scale-105 transition-transform duration-300 ${plan.featured ? 'bg-accent text-accent-foreground hover:bg-primary hover:text-white' : 'bg-primary text-white hover:bg-accent hover:text-primary'}`}>
                      <Link href="/start-journal">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add-Ons and Support */}
            <div className="grid lg:grid-cols-5 gap-12 mt-24">
              <Card className="lg:col-span-3 rounded-funky shadow-2xl border-none bg-slate-50 overflow-hidden" data-aos="fade-right">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold text-primary mb-10 font-headline italic flex items-center gap-4">
                    <Zap className="h-8 w-8 text-accent fill-accent" /> <span>Add-On Modular Services</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {addOns.map((addon, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-accent/10 shadow-sm hover:shadow-xl transition-all group flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            <addon.icon />
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
                </CardContent>
              </Card>

              <div className="lg:col-span-2 relative p-[2px] rounded-funky overflow-hidden group shadow-2xl" data-aos="fade-left">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-accent animate-gradient-xy"></div>
                <div className="relative bg-white rounded-funky p-12 flex flex-col items-center justify-center text-center gap-8 h-full">
                  <div className="h-24 w-24 bg-accent/10 rounded-full flex items-center justify-center animate-pulse">
                    <ShieldCheck className="h-12 w-12 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-4 font-headline italic">30-Day Research Guarantee</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm font-medium max-w-sm mx-auto">
                      Try our institutional hosting portal risk-free. If your editorial team isn't completely satisfied with the workflow in 30 days, we'll provide a full refund.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-10">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">
                        <Check className="h-4 w-4 text-accent" strokeWidth={4} /> No Hidden Fees
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase text-primary/40 tracking-[0.2em]">
                        <Check className="h-4 w-4 text-accent" strokeWidth={4} /> Verified Setup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Compliance Badges */}
        <section className="py-20 bg-slate-50 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-sm font-black text-primary/20 uppercase tracking-[0.5em] mb-12">Compliance Ready Systems</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex items-center gap-2"><Award className="h-6 w-6" /><span className="text-xs font-bold uppercase">UGC CARE</span></div>
              <div className="flex items-center gap-2"><Database className="h-6 w-6" /><span className="text-xs font-bold uppercase">Scopus Support</span></div>
              <div className="flex items-center gap-2"><Search className="h-6 w-6" /><span className="text-xs font-bold uppercase">Web of Science</span></div>
              <div className="flex items-center gap-2"><BookOpen className="h-6 w-6" /><span className="text-xs font-bold uppercase">DOAJ Readiness</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 5s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
