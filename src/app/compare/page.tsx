
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

const plans = [
  { name: "Starter", priceINR: "₹15,000", priceUSD: "$215.00", slug: "starter" },
  { name: "Experience", priceINR: "₹5,000", priceUSD: "$60.00", slug: "experience" },
  { name: "Free", priceINR: "₹0", priceUSD: "$0.00", slug: "free" },
  { name: "Enterprise", priceINR: "₹30,000", priceUSD: "$355.00", slug: "enterprise" },
  { name: "Institute", priceINR: "₹20,000", priceUSD: "$285.00", slug: "institute" },
  { name: "Professional", priceINR: "₹25,000", priceUSD: "$315.00", slug: "professional" },
];

const compareData = [
  { feature: "Peer Review System", values: [true, true, true, true, true, true] },
  { feature: "Journal Website", values: [true, true, true, true, true, true] },
  { feature: "DOI Integration", values: [true, true, true, true, true, true] },
  { feature: "Google Scholar", values: [true, true, true, true, true, true] },
  { feature: "Plagiarism Check", values: [true, true, true, true, true, true] },
  { feature: "UGC Care Support", values: [true, true, true, true, true, true] },
  { feature: "API Access", values: [true, true, true, true, true, true] },
  { feature: "Minimum PhD Required", values: [false, false, true, false, false, false] },
  { feature: "50/50 Revenue Split", values: [false, false, true, false, false, false] },
  { feature: "Dedicated Server", values: [false, false, false, true, false, false] },
  { feature: "Annual Audit Report", values: [false, false, false, true, true, true] },
];

export default function ComparePage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white pt-32 pb-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-headline" data-aos="fade-up">Compare Our Plans</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
              Detailed technical comparison to help you choose the right hosting solution for your university.
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto shadow-2xl rounded-funky border border-border/50" data-aos="fade-up">
              <Table className="border-collapse min-w-[1000px]">
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="w-[250px] text-primary font-bold text-lg py-8 border-r">Technical Specs</TableHead>
                    {plans.map((plan) => (
                      <TableHead key={plan.slug} className="text-center p-6 min-w-[150px]">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-primary mb-2">{plan.name}</span>
                          <span className="text-xl font-black text-primary">
                            {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                          </span>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {compareData.map((row, idx) => (
                    <TableRow key={idx} className="hover:bg-secondary/20">
                      <TableCell className="font-medium text-primary border-r">{row.feature}</TableCell>
                      {row.values.map((val, pIdx) => (
                        <TableCell key={pIdx} className="text-center py-6">
                          {val ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <span className="text-muted-foreground opacity-30">—</span>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-12 text-center" data-aos="fade-up">
              <Button asChild size="lg" className="bg-accent text-accent-foreground rounded-funky px-12 py-8 text-xl font-bold shadow-xl">
                <Link href="/pricing">Get Started with a Plan</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
