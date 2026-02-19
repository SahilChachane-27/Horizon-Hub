
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Check, 
  Info, 
  Microscope, 
  FlaskConical, 
  BookOpen, 
  Atom, 
  Dna, 
  Compass, 
  CalendarDays, 
  Puzzle, 
  ReceiptText, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useState, useEffect } from 'react';

const plans = [
  { name: "Starter", price: "₹15,000", period: "Annually", featured: true, slug: "starter" },
  { name: "Experience Plan", price: "₹5,000", period: "90 Days", slug: "experience" },
  { name: "Free", price: "₹0", period: "Annually", slug: "free" },
  { name: "Enterprise", price: "₹30,000", period: "Annually", slug: "enterprise" },
  { name: "Institute", price: "₹20,000", period: "Annually", slug: "institute" },
  { name: "Professional Plan", price: "₹25,000", period: "Annually", slug: "professional" },
];

const features = [
  "Transparent Peer Review System",
  "Journal Website",
  "DOI Integration",
  "Google Scholar Indexing",
  "Marketing and Promotion",
  "Research Gate Indexing",
  "Dedicated Account Manager",
  "Publication Certificate",
  "Plagiarism Check",
  "Custom Email Setup",
  "24/7 Support",
  "UGC Care Support",
  "API Access",
  "Minimum PhD Required",
  "Revenue Sharing 50/50 Split"
];

const supportFeatures = [
  { icon: Compass, text: "24/7 Technical Support (Chat & Email)" },
  { icon: CalendarDays, text: "Free Ongoing Software Updates" },
  { icon: Puzzle, text: "Data Migration Support (from OJS or other systems)" },
  { icon: ReceiptText, text: "Training & Onboarding for Editors and Reviewers" },
  { icon: FileText, text: "18% GST will be applied", highlight: true },
];

export default function SubscriptionPlansPage() {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Floating Icon Hero */}
        <section className="relative overflow-hidden bg-primary text-white pt-32 pb-20">
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <Microscope className="absolute top-1/4 left-[10%] w-24 h-24 animate-bounce" style={{ animationDuration: '8s' }} />
            <FlaskConical className="absolute top-1/3 right-[15%] w-20 h-20 animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }} />
            <BookOpen className="absolute bottom-1/4 left-[15%] w-28 h-28 animate-bounce" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            <Atom className="absolute top-1/2 right-[10%] w-32 h-32 animate-spin" style={{ animationDuration: '15s' }} />
            <Dna className="absolute bottom-1/3 right-[20%] w-24 h-24 animate-pulse" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
              Choose the plan that fits your needs and start your academic journey today.
            </p>

            {/* Currency Toggle */}
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

        {/* Comparison Table Section */}
        <section className="py-20 -mt-10 bg-white/95 rounded-t-[50px]">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto" data-aos="fade-up">
              <Table className="border-collapse min-w-[1000px]">
                <TableHeader>
                  <TableRow className="bg-secondary/50 hover:bg-secondary/50">
                    <TableHead className="w-[300px] text-primary font-bold text-lg py-8 border-r">Features</TableHead>
                    {plans.map((plan) => (
                      <TableHead key={plan.slug} className={`text-center p-6 min-w-[180px] ${plan.featured ? 'bg-accent/5' : ''}`}>
                        <div className="flex flex-col items-center space-y-3">
                          {plan.featured && <span className="bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>}
                          <span className="font-bold text-primary text-base">{plan.name}</span>
                          <div className="flex flex-col">
                            <span className="text-2xl font-black text-primary">{plan.price}</span>
                            <span className="text-[10px] text-muted-foreground uppercase">{plan.period}</span>
                          </div>
                          <Button className={`w-full rounded-funky ${plan.featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>
                            Get Started
                          </Button>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {features.map((feature, idx) => (
                    <TableRow key={idx} className="hover:bg-secondary/30">
                      <TableCell className="font-medium text-xs text-primary uppercase py-4 border-r">{feature}</TableCell>
                      {plans.map((plan) => (
                        <TableCell key={`${plan.slug}-${idx}`} className={`text-center py-4 ${plan.featured ? 'bg-accent/5' : ''}`}>
                          {/* Logic for showing ticks/dashes based on plan - Simplified for template */}
                          {feature === "Minimum PhD Required" || feature === "Revenue Sharing 50/50 Split" ? (
                            plan.slug === "free" ? <Check className="mx-auto h-5 w-5 text-accent" /> : <span className="text-muted-foreground">—</span>
                          ) : (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Support & Maintenance List */}
            <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">
              <Card className="rounded-funky shadow-lg border-primary/10 overflow-hidden" data-aos="fade-right">
                <CardContent className="p-10">
                  <h2 className="text-2xl font-bold text-primary mb-8 font-headline">Support & Maintenance</h2>
                  <ul className="space-y-6">
                    {supportFeatures.map((item, i) => (
                      <li key={i} className={`flex items-center gap-4 ${item.highlight ? 'text-destructive font-bold' : 'text-foreground/80'}`}>
                        <div className="h-10 w-10 bg-secondary rounded-funky flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="text-sm">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Guarantee Banner */}
              <div className="relative p-1 rounded-funky bg-gradient-to-r from-accent via-orange-400 to-accent" data-aos="fade-left">
                <div className="bg-orange-50 rounded-funky p-10 flex flex-col md:flex-row items-center gap-8">
                  <ShieldCheck className="h-20 w-20 text-accent shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">30-Day Money-Back Guarantee</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      Try ScholarJMS risk-free. If you're not completely satisfied within the first 30 days, we'll refund your money—no questions asked.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary/70">
                        <Check className="h-4 w-4 text-accent" /> No credit card required
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-primary/70">
                        <Check className="h-4 w-4 text-accent" /> Cancel anytime
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6" data-aos="fade-up">Want to Launch Your Own Journal?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
              Join over 50 journals currently utilizing ScholarJMS for robust, end-to-end publishing management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button size="lg" className="bg-primary text-primary-foreground px-12 py-8 text-lg font-bold rounded-funky hover:scale-105 transition-transform">
                Start Your Journal
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary px-12 py-8 text-lg font-bold rounded-funky hover:bg-primary hover:text-white transition-all">
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
