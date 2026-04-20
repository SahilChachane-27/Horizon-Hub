
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, School, Award, Check } from 'lucide-react';
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

function ResidentialHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
  return (
    <section id="residential-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white bg-primary">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Technical Journals"
          fill
          className="object-cover opacity-40"
          priority
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline italic">
            Faculty & Departmental Portals
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md font-medium italic">
            Dedicated publishing environments for university departments, providing professional workflows and sovereign branding for academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky font-bold italic shadow-xl h-14">
              <Link href="/contact">Discuss Setup</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white hover:bg-accent/10 rounded-funky font-bold h-14">
              <Link href="/pricing">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResidentialConstructionServices() {
  const services = [
    {
      icon: School,
      title: 'University-Wide Hosting',
      description: 'Comprehensive publishing hubs for institutional research offices and university presses.',
      features: ['Unified Analytics', 'Cross-Department Branding', 'Centralized Billing'],
    },
    {
      icon: BookOpen,
      title: 'Departmental Journals',
      description: 'Focused platforms for specific faculties like Engineering, Law, or Medical Sciences.',
      features: ['Niche Indexing Support', 'Faculty Review Panels', 'Tailored Ethics Policies'],
    },
    {
      icon: Award,
      title: 'Conference Modules',
      description: 'Integrated systems for managing and publishing university conference proceedings and papers.',
      features: ['Rapid Peer Review', 'Fast-Track DOIs', 'Abstract Management'],
    },
  ];

  return (
    <section id="residential-services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">University Solutions</h2>
          <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto font-medium italic">
            Technical Journals provides professional infrastructure at every level of institutional publishing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="p-8 bg-slate-50 rounded-funky flex flex-col items-center text-center border-none shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-primary text-accent p-4 rounded-xl shadow-lg mb-6">
                 <service.icon className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-primary text-center mb-4 font-headline italic">{service.title}</h3>
              <p className="text-[11px] font-medium leading-relaxed text-foreground/60 text-center mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 w-full">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 justify-center text-[10px] font-bold text-primary/70 uppercase tracking-widest">
                    <Check className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
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

function ResidentialContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
        title: "Setup Inquiry Received",
        description: "Technical Journals specialists will contact your department within 24 hours.",
        });
        form.reset();
    }
  
    return (
    <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Start Your Departmental Portal</h2>
            <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-base md:text-lg text-foreground/70 font-medium italic">
              Contact us for a personalized institutional setup plan for your university department.
            </p>
          </div>
          
          {isClient && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-funky shadow-2xl border border-border/50" data-aos="fade-up" data-aos-delay="200">
                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Department Name</FormLabel><FormControl><Input placeholder="Faculty of..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Official Email</FormLabel><FormControl><Input placeholder="admin@university.edu" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Contact Number</FormLabel><FormControl><Input placeholder="+91..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Setup Interest</FormLabel><Select><FormControl><SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Select interest" /></SelectTrigger></FormControl><SelectContent><SelectItem value="department">Departmental Journal</SelectItem><SelectItem value="faculty">Faculty Portal</SelectItem><SelectItem value="conference">Conference Proceeding</SelectItem><SelectItem value="other">Other</SelectItem></SelectContent></Select></FormItem>
                </div>
                <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Inquiry Details</FormLabel><FormControl><Textarea placeholder="Tell us about your journal scope and institutional goals..." rows={4} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="text-center">
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-accent hover:bg-primary/90 rounded-funky font-black italic h-14 px-12 shadow-xl">Request Institutional Consultation</Button>
                    <p className="text-[10px] text-muted-foreground mt-4 font-black uppercase tracking-widest italic">Technical Journals Partner Channel</p>
                </div>
                </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}


export default function ResidentialConstructionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <ResidentialHero />
        <ResidentialConstructionServices />
        <ResidentialContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
