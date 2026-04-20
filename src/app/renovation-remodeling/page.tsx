
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Layout, Database, ShieldCheck, Check, Laptop, Users, Workflow } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function RenovationHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-2');
  return (
    <section id="renovation-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white bg-primary">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Technical Journals"
          fill
          className="object-cover opacity-30"
          priority
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline italic">
            Legacy Journal Migration
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md italic">
            Expert migration services to transition your institutional journals from legacy platforms to the modern, high-performance Technical Journals ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky font-bold shadow-xl h-14">
              <Link href="/contact">Request Migration Plan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white hover:bg-accent/10 rounded-funky font-bold h-14">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const whyChooseFeatures = [
    { icon: Workflow, title: "Zero Downtime Transition", description: "Our technical team ensures that your journal remains accessible to global readers throughout the migration process." },
    { icon: Database, title: "Complete Metadata Retention", description: "We preserve all back issues, indexing tags, and persistent URLs (PIDs) to maintain your scholarly citation integrity." },
    { icon: ShieldCheck, title: "Data Integrity Auditing", description: "Rigorous quality control and historical cleanup to ensure migrated data meets current international standards." },
];

function WhyChooseRenovation() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Why Choose Technical Journals for Migration</h2>
                          <div className="mt-2 w-24 h-1 bg-accent"></div>
                        </div>
                        <p className="text-base md:text-lg text-foreground/70 font-medium italic">With extensive experience in digital preservation, we handle the technical complexities of legacy data so your editors can focus on research.</p>
                        <div className="space-y-4">
                        {whyChooseFeatures.map(feature => (
                            <div key={feature.title} className="group rounded-funky p-6 bg-slate-50 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-accent/10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary text-accent p-3 rounded-xl mt-1 flex-shrink-0 shadow-lg">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-primary font-headline italic">{feature.title}</h3>
                                        <p className="text-[11px] font-medium leading-relaxed text-foreground/60">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <Card className="p-8 shadow-2xl rounded-funky border-none bg-primary text-white" data-aos="fade-left">
                        <h3 className="text-2xl font-bold font-headline italic mb-8">Technical Expertise</h3>
                        <div className="space-y-6 mb-8">
                            <h4 className="font-black text-accent uppercase tracking-widest text-xs">Migration Capabilities</h4>
                            {[
                                { title: 'JATS XML Conversion', desc: 'Transforming legacy PDFs into structured machine-readable metadata.' },
                                { title: 'DOI & Crossref Refresh', desc: 'Verifying and updating persistent identifiers for historical issues.' },
                                { title: 'Multi-Platform Ingestion', desc: 'Support for migrating from OJS 2.x, commercial publishers, or custom scripts.' },
                                { title: 'Asset Preservation', desc: 'Secure archival of high-resolution figures, tables, and supplemental files.' }
                            ].map(cap => (
                                <div key={cap.title} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                                    <div>
                                        <h5 className="font-bold text-sm italic">{cap.title}</h5>
                                        <p className="text-[10px] text-white/60 font-medium">{cap.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                            <div>
                                <p className="text-3xl font-black italic">500+</p>
                                <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Issues Migrated</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black italic">100%</p>
                                <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Data Integrity</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().min(10),
});

function RenovationContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({ title: "Migration Inquiry Submitted", description: "Our technical team will contact your department to schedule a legacy audit." });
        form.reset();
    }

    return (
        <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Discuss Your Journal Migration</h2>
                    <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-base md:text-lg text-foreground/70 font-medium italic">Contact our technical team for a free legacy data audit and migration estimate.</p>
                </div>
                {isClient && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-funky shadow-2xl border border-border/50" data-aos="fade-up" data-aos-delay="200">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Department / Institution</FormLabel><FormControl><Input placeholder="University of..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Official Email</FormLabel><FormControl><Input placeholder="admin@university.edu" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Contact Number</FormLabel><FormControl><Input placeholder="+91..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Current Platform</FormLabel><Select><FormControl><SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Select platform" /></SelectTrigger></FormControl><SelectContent><SelectItem value="ojs">Open Journal Systems (OJS)</SelectItem><SelectItem value="commercial">Commercial Publisher</SelectItem><SelectItem value="static">Static HTML/PDF</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></FormItem>
                            </div>
                            <FormField control={form.control} name="message" render={({ field }) => (
                                <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Migration Details</FormLabel><FormControl><Textarea placeholder="Number of issues, legacy system version, and special archiving requirements..." rows={4} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                            )} />
                            <div className="text-center">
                                <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-accent hover:bg-primary/90 rounded-funky font-black italic h-14 px-12 shadow-xl">Request Technical Consultation</Button>
                                <p className="text-[10px] text-muted-foreground mt-4 font-black uppercase tracking-widest italic">Powered by Technical Journals Platform</p>
                            </div>
                        </form>
                    </Form>
                )}
            </div>
        </section>
    );
}

export default function RenovationRemodelingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <RenovationHero />
        <WhyChooseRenovation />
        <RenovationContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
