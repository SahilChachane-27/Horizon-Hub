
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Database, Globe, BarChart, BookOpen, Users, Lightbulb, TrendingUp, Check } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function DevelopmentHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
  return (
    <section id="development-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white overflow-hidden bg-primary">
      {heroImage && (
        <div className="absolute inset-0 opacity-20" data-aos="zoom-in" data-aos-duration="1500">
          <Image
            src={heroImage.imageUrl}
            alt="Technical Journals"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline italic">
            Institutional Research Sovereignty
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md font-medium italic">
            Empowering universities to own their scholarly output through secure, scalable, and independent Technical Journals platform technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky font-bold italic shadow-xl h-14">
              <Link href="/pricing">View Hosting Plans</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent/10 rounded-funky font-bold h-14">
              <Link href="/contact">Partner Inquiry</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const philosophyPillars = [
  { icon: ShieldCheck, title: 'Data Security', description: 'Bank-grade encryption and secure servers ensure that institutional research remains protected and compliant with global standards.' },
  { icon: Globe, title: 'Global Visibility', description: 'Strategic indexing support in Scopus, Web of Science, and Google Scholar to maximize the global impact of university research.' },
  { icon: Users, title: 'Institutional Ownership', description: 'We provide the tools, but your university retains 100% ownership of the brand, content, and metadata.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Harnessing advanced JATS XML workflows and DOI integration to keep your journals at the cutting edge of digital publishing.' }
];

function DevelopmentPhilosophy() {
    return (
        <section className="py-16 md:py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Our Founding Principles</h2>
                    <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto font-medium italic">Built on a foundation of academic integrity and institutional independence.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophyPillars.map((pillar, index) => (
                        <Card key={pillar.title} className="text-center p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-funky bg-white border-none shadow-xl" data-aos="fade-up" data-aos-delay={index * 100}>
                            <CardHeader className="p-0 flex items-center justify-center mb-6">
                                <div className="bg-primary text-accent p-4 rounded-full shadow-lg">
                                    <pillar.icon className="h-8 w-8" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                              <h3 className="text-xl font-bold text-primary mb-3 font-headline italic">{pillar.title}</h3>
                              <p className="text-[11px] font-medium leading-relaxed text-foreground/60">{pillar.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const formSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

function DevelopmentContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true) }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", company: "", email: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({ title: "Partner Inquiry Received", description: "Technical Journals' academic team will contact you within 48 hours." });
        form.reset();
    }
  
    return (
        <section id="contact-form" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Partner With Technical Journals</h2>
                    <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/70 font-medium">Discuss your university's publishing needs with our technical specialists.</p>
                </div>
                {isClient && (
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-slate-50 p-8 rounded-funky shadow-2xl border border-border/50" data-aos="fade-up" data-aos-delay="200">
                          <div className="grid sm:grid-cols-2 gap-6">
                              <FormField control={form.control} name="name" render={({ field }) => (
                                  <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Full Name</FormLabel><FormControl><Input placeholder="Enter your name" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="company" render={({ field }) => (
                                  <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">University / Institution</FormLabel><FormControl><Input placeholder="Official Name" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="email" render={({ field }) => (
                                  <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Official Email</FormLabel><FormControl><Input placeholder="official@university.edu" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="phone" render={({ field }) => (
                                  <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Contact Number</FormLabel><FormControl><Input placeholder="+91..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                              )} />
                          </div>
                          <FormField control={form.control} name="message" render={({ field }) => (
                              <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Requirements Details</FormLabel><FormControl><Textarea placeholder="Institutional requirements, migration needs, or journal setup goals..." rows={4} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                          )} />
                          <div className="text-center">
                              <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-accent hover:bg-primary/90 rounded-funky font-black italic h-14 px-12 shadow-xl transition-all hover:scale-105">Submit Partnership Inquiry</Button>
                              <p className="text-[10px] text-muted-foreground mt-4 font-black uppercase tracking-widest italic">Official Technical Journals Channel</p>
                          </div>
                      </form>
                  </Form>
                )}
            </div>
        </section>
    );
}

export default function RealEstateDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <DevelopmentHero />
        <DevelopmentPhilosophy />
        <DevelopmentContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
