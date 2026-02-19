
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const plans = [
  {
    name: "Basic Hosting",
    price: "₹25,000",
    period: "/year per journal",
    features: [
      "Scholar JMS installation",
      "Journal website hosting",
      "Technical support",
      "Up to 4 issues/year",
      "Unlimited articles",
      "HTTPS security"
    ],
    accent: "muted"
  },
  {
    name: "Standard Plan",
    price: "₹45,000",
    period: "/year per journal",
    featured: true,
    features: [
      "Everything in Basic +",
      "DOI support (DigiIdentify/Crossref)",
      "Plagiarism Check (200 papers)",
      "Automated Editorial Workflow",
      "Institutional Branding"
    ],
    accent: "accent"
  },
  {
    name: "Premium University",
    price: "₹75,000",
    period: "/year per journal",
    features: [
      "Everything in Standard +",
      "Article formatting templates",
      "Metadata optimization",
      "Annual analytics dashboard",
      "Google Scholar optimization",
      "Free migration"
    ],
    accent: "primary"
  }
];

const addOns = [
  { service: "DOI Registration", price: "₹150/article" },
  { service: "DigiIdentify Registration", price: "₹25/article" },
  { service: "Plagiarism Check", price: "₹50/article" },
  { service: "Article Copyediting", price: "₹500/article" },
  { service: "Citation Improvisation", price: "Custom" },
  { service: "Scopus Consultation", price: "Custom" },
];

export default function SubscriptionPlansPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Subscription Plans</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">Flexible, ethical, and transparent pricing models for university journal hosting.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, i) => (
              <Card key={i} className={`rounded-funky border-2 ${plan.featured ? 'border-accent shadow-2xl scale-105' : 'border-border shadow-lg'} flex flex-col`} data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader className="text-center pb-0">
                  <CardTitle className="text-2xl font-bold text-primary">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex-1 flex flex-col">
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Check className="h-5 w-5 text-accent shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full rounded-funky ${plan.featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}>Select Plan</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Package */}
          <section className="mb-20" data-aos="fade-up">
             <Card className="rounded-funky bg-primary text-primary-foreground p-12 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32" />
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold font-headline mb-4">Enterprise Package</h2>
                    <p className="text-primary-foreground/80 mb-6 text-lg">For universities hosting 3+ journals. Comprehensive institutional support.</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-accent" /> Dedicated server</li>
                      <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-accent" /> Dedicated manager</li>
                      <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-accent" /> Annual audit report</li>
                      <li className="flex gap-2 items-center"><Check className="h-4 w-4 text-accent" /> Priority indexing</li>
                    </ul>
                  </div>
                  <div className="text-center lg:text-right">
                    <p className="text-accent text-lg font-bold mb-2">Up to 5 Journals</p>
                    <p className="text-5xl font-extrabold mb-8">₹1,80,000<span className="text-xl font-normal opacity-70">/year</span></p>
                    <Button size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary transition-colors rounded-funky">Contact for Enterprise</Button>
                  </div>
                </div>
             </Card>
          </section>

          {/* Add-On Services */}
          <section id="compare" data-aos="fade-up">
            <h2 className="text-3xl font-bold font-headline text-primary mb-8 text-center">Add-On Services</h2>
            <Card className="rounded-funky overflow-hidden shadow-lg border-primary/10">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead className="font-bold text-primary">Service</TableHead>
                    <TableHead className="font-bold text-primary text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {addOns.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell className="text-right font-bold text-accent">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <div className="mt-8 bg-secondary p-6 rounded-funky flex items-start gap-4 text-sm text-foreground/70">
              <Info className="h-5 w-5 text-accent shrink-0" />
              <p>Prices are exclusive of applicable taxes. Custom services like Scopus Ready Consultation and Citation Improvisation involve dedicated strategic planning and digital marketing efforts.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
