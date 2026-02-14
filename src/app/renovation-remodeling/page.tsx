// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Bath, Home, Building, Warehouse, Leaf, Clock, ClipboardCheck, ShieldCheck, Check, Grip } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

function RenovationHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'renovation-hero-bg');
  return (
    <section id="renovation-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline">
          Transform Your Space
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Expert renovation and remodeling services that breathe new life into your home or commercial property, combining innovative design with meticulous craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#renovation-services">Our Services</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="#contact-form">Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterShowcase() {
  const beforeImage = PlaceHolderImages.find(p => p.id === 'renovation-before');
  const afterImage = PlaceHolderImages.find(p => p.id === 'renovation-after');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
  
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  }
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Transformation Showcase</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            See how we've transformed outdated spaces into beautiful, functional environments.
          </p>
        </div>
        {beforeImage && afterImage && (
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-video overflow-hidden rounded-lg shadow-2xl select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <Image
              src={afterImage.imageUrl}
              alt={afterImage.description}
              fill
              className="object-cover"
              data-ai-hint={afterImage.imageHint}
            />
            <div
              className="absolute top-0 left-0 h-full w-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={beforeImage.imageUrl}
                alt={beforeImage.description}
                fill
                className="object-cover"
                data-ai-hint={beforeImage.imageHint}
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 bg-white rounded-full shadow-md">
                <Grip className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        )}
         <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">Drag the slider to see the transformation</p>
        </div>
      </div>
    </section>
  );
}

const renovationServicesList = [
    { id: 'renovation-service-kitchen', icon: Utensils, title: "Kitchen Remodeling", description: "Complete kitchen transformations with custom cabinetry, premium appliances, and innovative layouts." },
    { id: 'renovation-service-bathroom', icon: Bath, title: "Bathroom Renovation", description: "Luxury bathroom upgrades with premium fixtures, custom tile work, and spa-like features." },
    { id: 'renovation-service-whole-house', icon: Home, title: "Whole House Renovation", description: "Comprehensive home transformations that update layout, systems, and finishes throughout." },
    { id: 'renovation-service-commercial', icon: Building, title: "Commercial Renovation", description: "Office, retail, and hospitality renovations that enhance functionality and modernize business spaces." },
    { id: 'renovation-service-basement', icon: Warehouse, title: "Basement & Attic Conversion", description: "Transform underutilized spaces into functional living areas, home offices, or entertainment rooms." },
    { id: 'renovation-service-exterior', icon: Leaf, title: "Exterior Renovation", description: "Siding replacement, window upgrades, roofing, and exterior enhancements that boost curb appeal." },
];

function RenovationServices() {
    return (
        <section id="renovation-services" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Renovation & Remodeling Services</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Comprehensive renovation solutions tailored to transform your residential or commercial space.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renovationServicesList.map(service => {
                        const image = PlaceHolderImages.find(p => p.id === service.id);
                        return (
                            <Card key={service.id} className="overflow-hidden group relative">
                                <div className="aspect-[4/3] relative">
                                    {image && (
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            fill
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <service.icon className="h-8 w-8 mb-3 text-accent" />
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                    <p className="text-sm text-white/80">{service.description}</p>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

const renovationProcessSteps = [
    { number: 1, title: "Initial Consultation", description: "We discuss your vision, assess your space, and understand your needs, timeline, and budget." },
    { number: 2, title: "Design & Planning", description: "Our designers create detailed plans, 3D visualizations, and material selections tailored to your preferences." },
    { number: 3, title: "Detailed Proposal", description: "We provide a comprehensive proposal with transparent pricing, timeline, and scope of work." },
    { number: 4, title: "Pre-Construction", description: "Permitting, material procurement, and scheduling to prepare for a smooth construction phase." },
    { number: 5, title: "Construction Phase", description: "Our skilled craftsmen execute the renovation with regular updates and minimal disruption." },
    { number: 6, title: "Final Walkthrough", description: "We conduct a comprehensive final inspection to ensure every detail meets our quality standards." },
];

function RenovationProcess() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Renovation Process</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">A structured approach that ensures your renovation project runs smoothly from concept to completion.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renovationProcessSteps.map(step => (
                        <Card key={step.number} className="p-6">
                            <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
                                <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex-shrink-0 flex items-center justify-center text-xl font-bold">{step.number}</div>
                                <CardTitle className="text-primary text-xl">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <p className="text-foreground/70">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const whyChooseFeatures = [
    { icon: Clock, title: "Minimal Disruption", description: "We work efficiently and respectfully in your home or business, minimizing disruption to your daily life while maintaining clean, safe work areas." },
    { icon: ClipboardCheck, title: "Transparent Communication", description: "Regular updates, detailed progress reports, and open communication ensure you're informed every step of the way." },
    { icon: ShieldCheck, title: "Comprehensive Warranty", description: "All our renovation work comes with a comprehensive warranty, giving you peace of mind long after project completion." },
];

const renovationCapabilities = [
    { title: 'Structural Modifications', description: 'Safe and precise wall removal, room additions, and structural enhancements' },
    { title: 'Custom Millwork & Cabinetry', description: 'Handcrafted built-ins and custom storage solutions' },
    { title: 'Mechanical System Updates', description: 'Electrical, plumbing, and HVAC upgrades for modern efficiency' },
    { title: 'Finish Carpentry', description: 'Precise trim, molding, and detail work that elevates every space' },
];

const renovationMetrics = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '450+', label: 'Renovations Completed' },
    { value: '92%', label: 'On-Time Completion' },
];

function WhyChooseRenovation() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Why Choose Horizon Group for Your Renovation</h2>
                        <p className="text-lg text-foreground/80">With decades of renovation experience, we bring precision, craftsmanship, and innovative solutions to every project.</p>
                        {whyChooseFeatures.map(feature => (
                            <div key={feature.title} className="flex items-start gap-4">
                                <div className="bg-primary text-primary-foreground p-3 rounded-full mt-1 flex-shrink-0"><feature.icon className="h-6 w-6" /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                                    <p className="text-foreground/70">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Card className="p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Renovation Expertise</h3>
                        <div className="space-y-4 mb-8">
                            <h4 className="font-semibold text-primary">Our Renovation Capabilities</h4>
                            {renovationCapabilities.map(capability => (
                                <div key={capability.title} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                                    <div>
                                        <h5 className="font-semibold text-primary">{capability.title}</h5>
                                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-6 border-t pt-8">Renovation Metrics</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {renovationMetrics.map(stat => (
                                <div key={stat.label}>
                                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
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

const renovationPortfolioItems = [
    { id: 'renovation-portfolio-1', title: 'Modern Kitchen Renovation', description: 'Complete transformation with custom cabinetry and premium appliances' },
    { id: 'renovation-portfolio-2', title: 'Luxury Bathroom Remodel', description: 'Spa-inspired bathroom with custom tile work and premium fixtures' },
    { id: 'renovation-portfolio-3', title: 'Open Concept Living Space', description: 'Wall removal and reconfiguration for modern, flowing living areas' },
    { id: 'renovation-portfolio-4', title: 'Home Office Conversion', description: 'Basement transformation into a functional, stylish home office' },
    { id: 'renovation-portfolio-5', title: 'Commercial Office Renovation', description: 'Modern workspace transformation for enhanced productivity' },
    { id: 'renovation-portfolio-6', title: 'Exterior Facelift', description: 'Complete exterior renovation with new siding, windows, and landscaping' },
];

function RenovationPortfolio() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Renovation Portfolio</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Explore our gallery of completed renovation projects that showcase our attention to detail and design excellence.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renovationPortfolioItems.map(item => {
                        const image = PlaceHolderImages.find(p => p.id === item.id);
                        return (
                            <Card key={item.id} className="overflow-hidden group relative">
                                <div className="aspect-[4/3] relative">
                                    {image && <Image src={image.imageUrl} alt={image.description} fill className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" data-ai-hint={image.imageHint} />}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-sm text-white/80">{item.description}</p>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

const renovationTestimonialsList = [
    { id: 'testimonial-renovation-1', name: "Jennifer Martinez", location: "Kitchen Renovation, Brooklyn", quote: "Our kitchen renovation exceeded all expectations. The team was professional, the craftsmanship exceptional, and they completed the project exactly on schedule. We couldn't be happier with our new space." },
    { id: 'testimonial-renovation-2', name: "David Chen", location: "Office Renovation, Manhattan", quote: "Horizon Group transformed our outdated office into a modern, functional workspace. They managed the entire renovation with minimal disruption to our business operations. Highly professional team!" },
    { id: 'testimonial-renovation-3', name: "Sarah Johnson", location: "Home Addition, Westchester", quote: "We added a second floor to our home, and Horizon Group made the process seamless. Their attention to detail and communication throughout the project was exceptional. Our expanded home is perfect for our growing family." },
    { id: 'testimonial-renovation-4', name: "Michael Roberts", location: "Bathroom Renovation, Long Island", quote: "The bathroom renovation transformed our cramped master bath into a luxurious spa-like retreat. The quality of materials and workmanship is outstanding. We're already planning our next project with Horizon Group." },
];

function RenovationTestimonials() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">What Our Renovation Clients Say</h2>
                    <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Hear from homeowners and business owners who have transformed their spaces with Horizon Group.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {renovationTestimonialsList.map(testimonial => {
                        const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                        return (
                            <Card key={testimonial.id} className="p-6">
                                <CardContent className="p-0">
                                    <p className="italic text-foreground/80 mb-4">"{testimonial.quote}"</p>
                                    <div className="flex items-center gap-4">
                                        {image && <Image src={image.imageUrl} alt={image.description} width={50} height={50} className="rounded-full object-cover" data-ai-hint={image.imageHint} />}
                                        <div>
                                            <p className="font-bold text-primary">{testimonial.name}</p>
                                            <p className="text-sm text-foreground/70">{testimonial.location}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

const formSchema = z.object({
    name: z.string().min(2),
    address: z.string().optional(),
    email: z.string().email(),
    phone: z.string().min(10),
    projectType: z.string(),
    propertyType: z.string(),
    timeline: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10),
});

function RenovationContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", address: "", email: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({ title: "Inquiry Submitted!", description: "We'll contact you within 24 hours to schedule your free consultation." });
        form.reset();
    }

    return (
        <section id="contact-form" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Start Your Renovation Project</h2>
                    <p className="mt-4 text-lg text-foreground/80">Contact us for a free consultation and estimate for your renovation or remodeling project.</p>
                </div>
                {isClient && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-secondary p-8 rounded-lg shadow-lg">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your Name" {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="address" render={({ field }) => (
                                    <FormItem><FormLabel>Property Address (Optional)</FormLabel><FormControl><Input placeholder="123 Main St, Anytown" {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <FormItem><FormLabel>Email</FormLabel><FormControl><Input placeholder="your.email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="phone" render={({ field }) => (
                                    <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="+1 (555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="projectType" render={({ field }) => (
                                    <FormItem><FormLabel>Project Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Kitchen">Kitchen Remodeling</SelectItem><SelectItem value="Bathroom">Bathroom Renovation</SelectItem><SelectItem value="Whole House">Whole House Renovation</SelectItem><SelectItem value="Commercial">Commercial Renovation</SelectItem><SelectItem value="Basement/Attic">Basement/Attic Conversion</SelectItem><SelectItem value="Exterior">Exterior Renovation</SelectItem><SelectItem value="Other">Other</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="propertyType" render={({ field }) => (
                                    <FormItem><FormLabel>Property Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Single Family">Single Family Home</SelectItem><SelectItem value="Multi-Family">Multi-Family Building</SelectItem><SelectItem value="Condo">Condominium/Apartment</SelectItem><SelectItem value="Commercial">Commercial/Office</SelectItem><SelectItem value="Retail">Retail Space</SelectItem><SelectItem value="Other">Other</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="timeline" render={({ field }) => (
                                    <FormItem><FormLabel>Timeline (Optional)</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger></FormControl><SelectContent><SelectItem value="1-3 months">Immediate (1-3 months)</SelectItem><SelectItem value="3-6 months">Near Future (3-6 months)</SelectItem><SelectItem value="6+ months">Planning Phase (6+ months)</SelectItem><SelectItem value="Not Sure">Not Sure</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                                )} />
                                <FormField control={form.control} name="budget" render={({ field }) => (
                                    <FormItem><FormLabel>Budget (Optional)</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger></FormControl><SelectContent><SelectItem value="&lt;50k">Under $50,000</SelectItem><SelectItem value="50k-100k">$50,000 - $100,000</SelectItem><SelectItem value="100k-250k">$100,000 - $250,000</SelectItem><SelectItem value="250k-500k">$250,000 - $500,000</SelectItem><SelectItem value="500k+">$500,000+</SelectItem><SelectItem value="Not Sure">Not Sure</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                                )} />
                            </div>
                            <FormField control={form.control} name="message" render={({ field }) => (
                                <FormItem><FormLabel>Project Details</FormLabel><FormControl><Textarea placeholder="Tell us about your renovation project..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <div className="text-center">
                                <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Request Free Consultation</Button>
                                <p className="text-sm text-muted-foreground mt-3">We'll contact you within 24 hours.</p>
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <RenovationHero />
        <BeforeAfterShowcase />
        <RenovationServices />
        <RenovationProcess />
        <WhyChooseRenovation />
        <RenovationPortfolio />
        <RenovationTestimonials />
        <RenovationContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
