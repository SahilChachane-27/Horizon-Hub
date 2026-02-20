
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Award, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const reasons = [
  { icon: TrendingUp, text: "Enhances research output and impact" },
  { icon: Award, text: "Supports NAAC/NBA/NIRF ranking improvements" },
  { icon: Users, text: "Dedicated platform for faculty & student publications" },
  { icon: CheckCircle, text: "Strengthens global visibility & institutional brand" }
];

const steps = [
  { num: "01", title: "University Approval", desc: "Obtain administrative authorizations for the institutional journal." },
  { num: "02", title: "Setup & Scope", desc: "Define focus, scope, and ethical peer-review policies." },
  { num: "03", title: "Workflow Setup", desc: "Configuration of Journal Website & ScholarJMS workflow." },
  { num: "04", title: "Editorial Board", desc: "Formation of qualified international academic review panels." },
  { num: "05", title: "Test Issue", desc: "Conducting a full trial run of the publication lifecycle." },
  { num: "06", title: "Official Launch", desc: "Public release, call for papers, and indexing submissions." }
];

export default function ForUniversitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">For Universities</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
              Empowering institutions to own their research output and enhance global academic standing through professional journal management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {reasons.map((r, i) => (
              <Card key={i} className="rounded-funky bg-primary text-primary-foreground text-center" data-aos="zoom-in" data-aos-delay={i * 100}>
                <CardContent className="p-8">
                  <r.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <p className="font-bold text-sm md:text-base">{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="bg-secondary rounded-funky p-12 mb-20 shadow-inner">
            <h2 className="text-3xl font-bold text-primary font-headline mb-12 text-center">Steps to Start Your Journal</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start" data-aos="fade-up" data-aos-delay={i * 100}>
                  <span className="text-5xl font-black text-accent/20 font-headline leading-none">{step.num}</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Card className="rounded-funky bg-accent text-accent-foreground p-12 text-center shadow-2xl" data-aos="fade-up">
            <h3 className="text-3xl font-bold font-headline mb-6">Start Your Research Journal Today</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">Contact our institutional partnership team to discuss MoU formalities and technical demo setup for your university.</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-white hover:text-primary transition-all rounded-funky px-12 py-8 text-xl font-bold shadow-lg hover:-translate-y-1">
              <Link href="/contact">Inquire Now</Link>
            </Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
