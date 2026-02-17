
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Leaf, Users, Lightbulb, TrendingUp, Building, Building2, Home, BarChart, Handshake, Cog, Check } from 'lucide-react';
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

function DevelopmentHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'development-hero-bg');
  return (
    <section id="development-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white overflow-hidden">
      {heroImage && (
        <div className="absolute inset-0" data-aos="zoom-in" data-aos-duration="1500">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline">
            Real Estate Development Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md">
            Transforming visions into reality through comprehensive real estate development services that create sustainable communities, enhance urban landscapes, and deliver exceptional value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
              <a href="#development-process">Our Process</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
              <a href="#contact-form">Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const philosophyPillars = [
  { icon: Leaf, title: 'Sustainable Design', description: 'Integrating eco-friendly practices, energy efficiency, and sustainable materials to minimize environmental impact and create lasting value.' },
  { icon: Users, title: 'Community Focus', description: 'Creating developments that enhance community wellbeing, foster social connections, and contribute positively to neighborhood fabric.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Leveraging cutting-edge technology, smart building systems, and innovative design approaches to create forward-thinking developments.' },
  { icon: TrendingUp, title: 'Value Creation', description: 'Strategic development approaches that maximize returns for investors while delivering exceptional quality and long-term asset value.' }
];

function DevelopmentPhilosophy() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Development Philosophy</h2>
                    <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">Built on a foundation of innovation, sustainability, and community-centric design principles.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {philosophyPillars.map((pillar, index) => (
                        <Card key={pillar.title} className="text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-none" data-aos="fade-up" data-aos-delay={index * 100}>
                            <CardHeader className="p-0 flex items-center justify-center mb-4">
                                <div className="bg-primary text-primary-foreground p-4 rounded-none">
                                    <pillar.icon className="h-8 w-8 text-accent" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                              <h3 className="text-xl font-bold text-primary mb-2">{pillar.title}</h3>
                              <p className="text-foreground/70">{pillar.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const processSteps = [
    { title: 'Feasibility & Planning', description: 'Market analysis, site evaluation, and initial financial modeling to assess project viability.' },
    { title: 'Master Planning', description: 'Architectural design, urban planning, and stakeholder engagement to create visionary developments.' },
    { title: 'Approvals & Permitting', description: 'Navigating regulatory landscapes to secure all necessary permits and entitlements for development.' },
    { title: 'Capital Structuring', description: 'Securing project financing, equity partnerships, and developing comprehensive financial models.' },
    { title: 'Project Execution', description: 'Construction management, quality control, and timeline management to deliver on schedule and budget.' },
    { title: 'Sales & Leasing', description: 'Strategic marketing, pre-sales, and leasing to maximize project absorption and returns.' },
    { title: 'Asset Management', description: 'Ongoing property management, maintenance, and value enhancement strategies for long-term success.' }
];

function DevelopmentProcess() {
  return (
    <section id="development-process" className="py-16 md:py-24">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">End-to-End Development Process</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">Our comprehensive approach to real estate development ensures every project is executed with precision and excellence.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.slice(0,4).map((step, index) => (
                <Card key={step.title} className="p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-none" data-aos="fade-up" data-aos-delay={index * 100}>
                    <CardHeader>
                        <CardTitle className="text-accent text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/70">{step.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:w-3/4 mx-auto">
             {processSteps.slice(4).map((step, index) => (
                <Card key={step.title} className="p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-none" data-aos="fade-up" data-aos-delay={(index + 4) * 100}>
                    <CardHeader>
                        <CardTitle className="text-accent text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground/70">{step.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

const portfolioItems = [
    { id: 'development-portfolio-mixed-use', title: 'Downtown Revitalization', description: 'Mixed-use development with residential, retail, and office spaces in urban core.', stat1Icon: Building, stat1: '850K sq ft', stat2Icon: TrendingUp, stat2: '$450M' },
    { id: 'development-portfolio-waterfront', title: 'Riverfront Community', description: 'Master-planned residential community with waterfront amenities and parks.', stat1Icon: Home, stat1: '350 units', stat2Icon: TrendingUp, stat2: '$280M' },
    { id: 'development-portfolio-office-campus', title: 'Sustainable Office Campus', description: 'LEED Platinum certified corporate campus with extensive green spaces.', stat1Icon: Building2, stat1: '1.2M sq ft', stat2Icon: Leaf, stat2: 'LEED Platinum' }
];

function FeaturedDevelopmentProjects() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Featured Development Projects</h2>
                    <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">Explore our portfolio of transformative real estate developments that have redefined communities and created lasting value.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => {
                        const image = PlaceHolderImages.find(p => p.id === item.id);
                        return (
                        <Card key={item.id} className="overflow-hidden group relative rounded-none" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="relative aspect-video">
                                {image && <Image src={image.imageUrl} alt={image.description} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={image.imageHint}/>}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-white/80 text-sm mb-4">{item.description}</p>
                                    <div className="flex justify-between items-center text-white font-medium border-t border-white/30 pt-4">
                                        <div className="flex items-center gap-2"><item.stat1Icon className="h-5 w-5 text-accent"/><span>{item.stat1}</span></div>
                                        <div className="flex items-center gap-2"><item.stat2Icon className="h-5 w-5 text-accent"/><span>{item.stat2}</span></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )})}
                </div>
            </div>
        </section>
    );
}

const expertiseAreas = [
    { icon: Building2, title: 'Mixed-Use Developments', description: 'Integrated projects combining residential, commercial, retail, and hospitality elements to create vibrant, walkable communities.', features: ['Transit-oriented development', 'Live-work-play environments', 'Public space integration'] },
    { icon: Building, title: 'Commercial & Office', description: 'Class A office towers, corporate campuses, and specialized commercial facilities designed for modern business needs.', features: ['Smart building technology', 'Flexible workspace design', 'Sustainability certifications'] },
    { icon: Home, title: 'Residential Communities', description: 'Master-planned communities, multi-family developments, and luxury residential projects that enhance quality of life.', features: ['Community amenities', 'Sustainable design', 'Lifestyle integration'] }
];

function DevelopmentExpertise() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Development Expertise</h2>
                    <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">Specialized development capabilities across diverse property types and markets.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => (
                        <Card key={area.title} className="flex flex-col text-center items-center p-6 border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-none" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="bg-primary text-primary-foreground p-4 rounded-none mb-4"><area.icon className="h-8 w-8" /></div>
                            <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                            <p className="text-foreground/70 mb-4 flex-grow">{area.description}</p>
                             <ul className="space-y-2 text-left w-full">
                                {area.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-accent" />
                                        <span className="text-foreground/80">{feature}</span>
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

const approachFeatures = [
    { icon: BarChart, title: 'Market-Driven Strategy', description: 'Comprehensive market analysis informs our development decisions, ensuring projects meet genuine market demand and deliver strong returns.' },
    { icon: Handshake, title: 'Stakeholder Collaboration', description: 'Engaging with community stakeholders, government agencies, and future users to create developments that gain broad support and add value.' },
    { icon: Cog, title: 'Integrated Delivery', description: 'Seamless coordination across design, construction, finance, and marketing functions to ensure efficient project execution from concept to completion.' }
];

const developmentMetrics = [
    { label: 'Project Success Rate', value: 96, display: '96%' },
    { label: 'Return on Investment', value: 88, display: '22% Average' },
    { label: 'Timeline Adherence', value: 94, display: '94%' },
    { label: 'Sustainability Certification', value: 85, display: '85% LEED' },
];

const portfolioStats = [
    { value: '$3.2B', label: 'Total Development Value' },
    { value: '45', label: 'Projects Completed' },
    { value: '28', label: 'Awards Received' }
];

function StrategicApproach() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Strategic Development Approach</h2>
                            <div className="mt-4 w-24 h-1 bg-accent"></div>
                        </div>
                        <p className="text-base md:text-lg text-foreground/80">We combine market intelligence, financial acumen, and design excellence to create developments that succeed financially while making positive community impacts.</p>
                        {approachFeatures.map(feature => (
                            <div key={feature.title} className="flex items-start gap-4">
                                <div className="bg-primary text-primary-foreground p-3 rounded-none mt-1 flex-shrink-0"><feature.icon className="h-6 w-6" /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                                    <p className="text-foreground/70">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Card className="p-8 shadow-lg rounded-none" data-aos="fade-left">
                        <h3 className="text-2xl font-bold text-primary mb-6">Development Metrics</h3>
                        <div className="space-y-4 mb-8">
                            {developmentMetrics.map(metric => (
                                <div key={metric.label}>
                                    <div className="flex justify-between mb-1 font-medium">
                                        <span className="text-foreground/80">{metric.label}</span>
                                        <span className="text-primary">{metric.display}</span>
                                    </div>
                                    <Progress value={metric.value} className="h-2" />
                                </div>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-6 border-t pt-8">Development Portfolio</h3>
                         <div className="grid grid-cols-3 gap-4 text-center">
                            {portfolioStats.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-accent">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
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
  inquiryType: z.string(),
  projectType: z.string(),
  location: z.string().optional(),
  projectStage: z.string().optional(),
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
        toast({ title: "Inquiry Submitted!", description: "Our development team will contact you within 48 hours." });
        form.reset();
    }
  
    return (
        <section id="contact-form" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Partner With Our Development Team</h2>
                    <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
                    <p className="mt-6 text-base md:text-lg text-foreground/80">Contact us to discuss your real estate development project, investment opportunity, or partnership.</p>
                </div>
                {isClient && (
                  <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-secondary p-8 rounded-none shadow-lg" data-aos="fade-up" data-aos-delay="200">
                          <div className="grid sm:grid-cols-2 gap-6">
                              <FormField control={form.control} name="name" render={({ field }) => (
                                  <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="company" render={({ field }) => (
                                  <FormItem><FormLabel>Company / Organization</FormLabel><FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="email" render={({ field }) => (
                                  <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@company.com" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="phone" render={({ field }) => (
                                  <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+1 (555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="inquiryType" render={({ field }) => (
                                  <FormItem><FormLabel>Inquiry Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select inquiry type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Partnership">Development Partnership</SelectItem><SelectItem value="Investment">Investment Opportunity</SelectItem><SelectItem value="Acquisition">Land Acquisition</SelectItem><SelectItem value="Joint Venture">Joint Venture</SelectItem><SelectItem value="Consultation">Consultation</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="projectType" render={({ field }) => (
                                  <FormItem><FormLabel>Project Type Interest</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Mixed-Use">Mixed-Use</SelectItem><SelectItem value="Residential">Residential Community</SelectItem><SelectItem value="Commercial">Commercial/Office</SelectItem><SelectItem value="Hospitality">Hospitality</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="location" render={({ field }) => (
                                  <FormItem><FormLabel>Project Location (Optional)</FormLabel><FormControl><Input placeholder="City, State" {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <FormField control={form.control} name="projectStage" render={({ field }) => (
                                  <FormItem><FormLabel>Project Stage (Optional)</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select project stage" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Concept">Concept/Idea</SelectItem><SelectItem value="Land Acquisition">Land Acquisition</SelectItem><SelectItem value="Design">Design Phase</SelectItem><SelectItem value="Entitlements">Entitlements</SelectItem><SelectItem value="Ready">Ready for Development</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                              )} />
                          </div>
                          <FormField control={form.control} name="message" render={({ field }) => (
                              <FormItem><FormLabel>Project Details</FormLabel><FormControl><Textarea placeholder="Your project details, investment parameters, timeline..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <div className="text-center">
                              <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">Submit Development Inquiry</Button>
                              <p className="text-sm text-muted-foreground mt-3">Our team will contact you within 48 hours.</p>
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <DevelopmentHero />
        <DevelopmentPhilosophy />
        <DevelopmentProcess />
        <FeaturedDevelopmentProjects />
        <DevelopmentExpertise />
        <StrategicApproach />
        <DevelopmentContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
