
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Globe, Award, Database, School, ShieldCheck, Zap, Check } from 'lucide-react';
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

function CommercialHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
  return (
    <section id="commercial-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt="Technical Journals"
          fill
          className="object-cover"
          priority
          data-ai-hint="university campus"
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline italic">
            Institutional Hosting Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md italic">
            Powering the world's leading universities with sovereign publishing tools and secure journal hosting infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky font-bold shadow-xl">
              <Link href="/journals">Explore Catalog</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white hover:bg-accent/10 rounded-funky font-bold">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
    { number: '200+', label: 'University Journals' },
    { number: '50+', label: 'Institutional Partners' },
    { number: '99.9%', label: 'Uptime Reliability' },
    { number: '1M+', label: 'Monthly Readers' }
];

function CommercialStats() {
    return (
        <section className="bg-slate-50 py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 100}>
                            <p className="text-4xl md:text-5xl font-black text-primary italic">{stat.number}</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const projectTypes = [
  { id: 'project-1', icon: School, title: 'Medical Sciences', description: 'Advanced clinical and paramedical research publications.' },
  { id: 'project-2', icon: Zap, title: 'Engineering & Tech', description: 'Cutting-edge innovation and technological discovery journals.' },
  { id: 'project-3', icon: Award, title: 'Law & Humanities', description: 'Sovereign platforms for social science and legal scholarship.' }
];

function CommercialProjectTypes() {
  return (
    <section id="commercial-projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Platform Domain Expertise</h2>
          <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto font-medium">
            Technical Journals provides specialized environments for every academic field.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => {
            const image = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden group relative rounded-none border-none shadow-xl" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-[4/3] relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="academic journal"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <project.icon className="h-8 w-8 mb-3 text-accent" />
                    <h3 className="text-xl font-bold font-headline italic">{project.title}</h3>
                    <p className="text-xs text-white/70 font-medium">{project.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Institution name must be at least 2 characters." }),
  contactPerson: z.string().min(2, { message: "Contact person must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid official email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectType: z.string({ required_error: "Please select a service category." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function CommercialContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { companyName: "", contactPerson: "", email: "", phone: "", projectType: undefined, message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Consultation Requested",
            description: "Technical Journals experts will contact your institution within 24 hours.",
        });
        form.reset();
    }
  
    return (
        <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Start Your Institutional Journal</h2>
                        <div className="mt-2 w-24 h-1 bg-accent mx-auto"></div>
                        <p className="mt-6 text-base md:text-lg text-foreground/70 font-medium">
                            Partner with Technical Journals for professional hosting and global research indexing.
                        </p>
                    </div>
                    {isClient && (
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-funky shadow-2xl border border-border/50" data-aos="fade-up" data-aos-delay="200">
                              <div className="grid sm:grid-cols-2 gap-6">
                                  <FormField control={form.control} name="companyName" render={({ field }) => (
                                      <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Institution Name</FormLabel><FormControl><Input placeholder="University of..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="contactPerson" render={({ field }) => (
                                      <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Lead Administrator</FormLabel><FormControl><Input placeholder="Dr. John Doe" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="email" render={({ field }) => (
                                      <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Official Email</FormLabel><FormControl><Input placeholder="admin@university.edu" {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="phone" render={({ field }) => (
                                      <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Mobile Number</FormLabel><FormControl><Input placeholder="+91..." {...field} className="rounded-xl h-12" /></FormControl><FormMessage /></FormItem>
                                  )} />
                              </div>
                              <FormField control={form.control} name="projectType" render={({ field }) => (
                                  <FormItem>
                                      <FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Inquiry Category</FormLabel>
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <FormControl><SelectTrigger className="rounded-xl h-12"><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                                          <SelectContent>
                                              <SelectItem value="hosting">Journal Hosting</SelectItem>
                                              <SelectItem value="indexing">Indexing Support</SelectItem>
                                              <SelectItem value="migration">Platform Migration</SelectItem>
                                              <SelectItem value="setup">New Journal Setup</SelectItem>
                                          </SelectContent>
                                      </Select>
                                      <FormMessage />
                                  </FormItem>
                              )} />
                              <FormField control={form.control} name="message" render={({ field }) => (
                                  <FormItem><FormLabel className="text-[10px] font-black uppercase tracking-widest text-primary/60">Requirements Details</FormLabel><FormControl><Textarea placeholder="Tell us about your journal scope and migration needs..." rows={4} {...field} className="rounded-xl" /></FormControl><FormMessage /></FormItem>
                              )} />
                              <div className="text-center">
                                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary text-accent hover:bg-primary/90 rounded-funky font-black italic shadow-xl h-14 px-10">Request Technical Consultation</Button>
                                  <p className="text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-widest italic">Our academic team will respond within 24 hours.</p>
                              </div>
                          </form>
                      </Form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default function CommercialProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <CommercialHero />
        <CommercialStats />
        <CommercialProjectTypes />
        <CommercialContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
