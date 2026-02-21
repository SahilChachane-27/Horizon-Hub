'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

const plans = [
  { name: "Starter", priceINR: "₹15000.00", period: "Annually", isPopular: true },
  { name: "Experience Plan", priceINR: "₹5000.00", period: "90 Days" },
  { name: "Free", priceINR: "₹0.00", period: "Annually" },
  { name: "Enterprise", priceINR: "₹30000.00", period: "Annually" },
  { name: "Institute", priceINR: "₹20000.00", period: "Annually" },
  { name: "Professional Plan", priceINR: "₹25000.00", period: "Annually" },
];

const compareData = [
  { feature: "TRANSPARENT PEER REVIEW SYSTEM", values: [true, true, true, true, true, true] },
  { feature: "JOURNAL WEBSITE", values: [true, true, true, true, true, true] },
  { feature: "DOI INTEGRATION", values: [true, true, true, true, true, true] },
  { feature: "GOOGLE SCHOLAR INDEXING", values: [true, true, true, true, true, true] },
  { feature: "MARKETING AND PROMOTION", values: [true, true, true, true, true, true] },
  { feature: "RESEARCH GATE INDEXING", values: [true, true, true, true, true, true] },
  { feature: "DEDICATED ACCOUNT MANAGER", values: [true, true, true, true, true, true] },
  { feature: "PUBLICATION CERTIFICATE", values: [true, true, true, true, true, true] },
  { feature: "PLAGIARISM CHECK", values: [true, true, true, true, true, true] },
  { feature: "CUSTOM EMAIL SETUP", values: [true, true, true, true, true, true] },
  { feature: "24/7 SUPPORT", values: [true, true, true, true, true, true] },
  { feature: "UGC CARE SUPPORT", values: [true, true, true, true, true, true] },
  { feature: "API ACCESS", values: [true, true, true, true, true, true] },
  { feature: "MINIMUM PHD REQUIRED", values: [null, null, null, null, null, null] },
  { feature: "REVENUE SHARING 50/50 SPLIT", values: [null, null, null, null, null, null] },
];

export default function ComparePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white pt-32 pb-16 md:pb-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-headline italic" data-aos="fade-up">Plan Comparison</h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 font-medium" data-aos="fade-up" data-aos-delay="100">
              A detailed technical breakdown of our university hosting solutions to help you find the perfect fit.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto shadow-2xl border border-border/50 bg-white rounded-xl" data-aos="fade-up">
              <Table className="border-collapse min-w-[1000px] lg:min-w-full">
                <TableHeader>
                  <TableRow className="border-b-0">
                    <TableHead className="w-[200px] md:w-[300px] text-primary font-bold text-sm md:text-lg py-8 md:py-12 bg-secondary/30 text-center border-r">Features</TableHead>
                    {plans.map((plan) => (
                      <TableHead key={plan.name} className="text-center py-6 md:py-10 px-2 md:px-4 min-w-[150px] md:min-w-[180px] align-top bg-secondary/30">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-6 md:h-8 flex items-end">
                            {plan.isPopular && (
                              <Badge className="bg-[#1e6cd9] text-white font-bold text-[8px] md:text-[10px] uppercase px-2 md:px-3 py-0.5 md:py-1 rounded-full mb-1 border-none">Popular</Badge>
                            )}
                          </div>
                          <span className="font-bold text-primary text-xs md:text-sm leading-tight h-6 md:h-8 flex items-center text-center">{plan.name}</span>
                          <span className="text-xl md:text-2xl font-black text-primary leading-none mt-1 md:mt-2">{plan.priceINR}</span>
                          <div className="mt-1 md:mt-2 mb-3 md:mb-4">
                            <span className="text-[8px] md:text-[10px] bg-secondary text-primary/60 uppercase font-bold px-2 md:px-4 py-0.5 md:py-1 rounded-full tracking-wider border border-border/50">
                              {plan.period}
                            </span>
                          </div>
                          <Button asChild size="sm" variant="outline" className="rounded-full border-[#1e6cd9] text-[#1e6cd9] hover:bg-[#1e6cd9] hover:text-white transition-all text-[10px] md:text-xs font-bold h-7 md:h-9 px-4 md:px-6">
                            <Link href="/start-journal">Get Started</Link>
                          </Button>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {compareData.map((row, idx) => (
                    <TableRow key={idx} className="hover:bg-secondary/10 transition-colors group">
                      <TableCell className="font-bold text-primary/80 text-[10px] md:text-[11px] border-r py-4 md:py-6 uppercase tracking-wider pl-4 md:pl-8 bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        {row.feature}
                      </TableCell>
                      {row.values.map((val, pIdx) => (
                        <TableCell key={pIdx} className="text-center py-4 md:py-6 border-b border-border/30">
                          {val === true ? (
                            <div className="flex justify-center">
                              <Check className="h-4 w-4 md:h-5 md:w-5 text-[#1e6cd9] stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-muted-foreground opacity-30 font-bold text-sm">—</span>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-12 md:mt-16 text-center" data-aos="fade-up">
              <div className="inline-block p-8 md:p-10 bg-white rounded-funky shadow-xl border border-accent/10 max-w-2xl w-full">
                <h3 className="text-xl md:text-2xl font-bold text-primary font-headline italic mb-4">Need a custom solution?</h3>
                <p className="text-foreground/60 text-xs md:text-sm mb-8 font-medium">
                  We offer tailored packages for large scale institutional deployments and university networks. Contact our partnership team for a custom quote.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground rounded-funky px-8 md:px-12 py-6 md:py-8 text-base md:text-lg font-black italic shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                  <Link href="/contact">Contact Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
