
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Compass, Building, Home, CheckCircle2, Quote, Check } from 'lucide-react';
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
  const heroImage = PlaceHolderImages.find(p => p.id === 'residential-hero-bg');
  return (
    <section id="residential-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white">
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
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="relative z-10 max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline">
            Premium Residential Construction
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md">
            Creating exceptional living spaces that blend innovative design, sustainable practices, and meticulous craftsmanship to build homes that stand the test of time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transform -skew-x-12">
              <a href="#residential-services"><span className="inline-block transform skew-x-12">Our Services</span></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground rounded-full transform -skew-x-12">
              <a href="#contact-form"><span className="inline-block transform skew-x-12">Request Consultation</span></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const residentialServices = [
  {
    icon: Compass,
    title: 'Custom Home Design & Build',
    description: 'Complete design-build services for custom luxury homes tailored to your lifestyle and preferences, from concept to completion.',
    features: ['Architectural design', 'Interior planning', 'Material selection']
  },
  {
    icon: Building,
    title: 'Multi-Family Developments',
    description: 'Construction of apartment complexes, condominiums, and townhouse communities with modern amenities and sustainable features.',
    features: ['Community planning', 'Shared amenities', 'Sustainable design']
  },
  {
    icon: Home,
    title: 'Luxury Residential Communities',
    description: 'Master-planned communities with custom homes, landscaping, and premium amenities that create exceptional living environments.',
    features: ['Master planning', 'Landscaping design', 'Community amenities']
  }
];

function ResidentialServices() {
  return (
    <section id="residential-services" className="py-16 md:py-24">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Residential Construction Services</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            We specialize in creating exceptional residential properties that combine aesthetics, functionality, and sustainability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialServices.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 rounded-[70px]" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4 flex-grow">{service.description}</p>
              <ul className="space-y-2 text-left w-full">
                {service.features.map(feature => (
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

const constructionProcessSteps = [
    { title: 'Initial Consultation & Planning', description: 'We begin with an in-depth consultation to understand your vision, lifestyle needs, and budget. Our team creates preliminary designs and a comprehensive project plan.' },
    { title: 'Design & Architectural Development', description: 'Our architects and designers create detailed plans, 3D visualizations, and material selections. We refine the design until it perfectly matches your vision.' },
    { title: 'Permitting & Pre-Construction', description: 'We handle all necessary permits and approvals while preparing the construction site. Detailed schedules and budgets are finalized before construction begins.' },
    { title: 'Construction & Quality Control', description: 'Our skilled craftsmen execute the construction with regular quality inspections. We maintain open communication and provide progress updates throughout.' }
];

function ConstructionProcess() {
  return (
    <section id="construction-process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Residential Construction Process</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            We follow a meticulous, transparent process to ensure your home is built to the highest standards of quality and craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {constructionProcessSteps.map((step, index) => (
            <Card key={index} className="p-6 text-center bg-card rounded-[70px] shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardHeader>
                <CardTitle className="text-primary text-xl">{step.title}</CardTitle>
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

const galleryItems = [
  { id: 'residential-gallery-1', title: 'Modern Luxury Home', location: 'Beverly Hills, CA' },
  { id: 'residential-gallery-2', title: 'Contemporary Lake House', location: 'Lake Tahoe, NV' },
  { id: 'residential-gallery-3', title: 'Urban Townhouse Development', location: 'Brooklyn, NY' },
  { id: 'residential-gallery-4', title: 'Mountain Retreat', location: 'Aspen, CO' },
  { id: 'residential-gallery-5', title: 'Coastal Residence', location: 'Malibu, CA' },
  { id: 'residential-gallery-6', title: 'Suburban Family Home', location: 'Greenwich, CT' }
];

function ResidentialGallery() {
  return (
    <section id="residential-gallery" className="py-16 md:py-24">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Residential Project Gallery</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of exquisite residential properties that showcase our commitment to quality and design excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const image = PlaceHolderImages.find(p => p.id === item.id);
            return (
              <Card key={item.id} className="overflow-hidden group relative rounded-[70px]" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative aspect-[4/3]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.location}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const whyChooseUsFeatures = [
    { title: '25+ Years of Residential Expertise', description: "We've built hundreds of homes across the country, mastering the art of residential construction." },
    { title: 'Sustainable Building Practices', description: 'We integrate energy-efficient systems and eco-friendly materials to reduce environmental impact.' },
    { title: 'Comprehensive Warranty & Support', description: 'Every home comes with a comprehensive warranty and ongoing support from our team.' }
];

const residentialTestimonials = [
    { id: 'testimonial-residential-1', name: 'David & Sarah Miller', location: 'Custom Home in Greenwich, CT', quote: "Horizon Group built our dream home from the ground up. Their attention to detail and commitment to quality was evident at every stage. We couldn't be happier with the result." },
    { id: 'testimonial-residential-2', name: 'Jennifer Carter', location: 'Luxury Condo in Miami, FL', quote: "From design to completion, the process was seamless. The team was professional, communicative, and delivered our luxury condo project ahead of schedule." }
];

function WhyChooseResidential() {
  return (
    <section id="why-choose-us-residential" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Why Choose Horizon Group for Your Home</h2>
              <div className="mt-4 w-24 h-1 bg-accent"></div>
            </div>
            <p className="text-base md:text-lg text-foreground/80">
              Building a home is one of the most significant investments you'll make. Our approach ensures your project is completed with exceptional quality, transparency, and care.
            </p>
            {whyChooseUsFeatures.map(feature => (
              <div key={feature.title} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card p-8 rounded-[70px] shadow-lg" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-primary mb-6">Residential Construction Testimonials</h3>
            <div className="space-y-8">
              {residentialTestimonials.map(testimonial => {
                const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                return (
                  <div key={testimonial.id}>
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-accent/50 flex-shrink-0" />
                      <p className="italic text-foreground/80">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4 pl-12">
                      {image && <Image src={image.imageUrl} alt={image.description} width={50} height={50} className="rounded-full" data-ai-hint={image.imageHint} />}
                      <div>
                        <p className="font-bold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  location: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

function ResidentialContactForm() {
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", projectType: undefined, location: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
        title: "Request Submitted!",
        description: "Thank you for your interest. We will contact you within 24 hours to schedule your consultation.",
        });
        form.reset();
    }
  
    return (
    <section id="contact-form" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Start Your Residential Project</h2>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-base md:text-lg text-foreground/80">
              Contact us for a personalized consultation about your residential construction project.
            </p>
          </div>
          
          {isClient && (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-[70px] shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <div className="grid sm:grid-cols-2 gap-6">
                    <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Your Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Your Email</FormLabel><FormControl><Input placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+1 (555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="projectType" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a project type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Custom Home Build">Custom Home Build</SelectItem>
                                    <SelectItem value="Home Renovation">Home Renovation</SelectItem>
                                    <SelectItem value="Multi-Family Development">Multi-Family Development</SelectItem>
                                    <SelectItem value="Residential Community">Residential Community</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <FormField control={form.control} name="location" render={({ field }) => (
                  <FormItem><FormLabel>Project Location (Optional)</FormLabel><FormControl><Input placeholder="City, State" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Tell us about your project</FormLabel><FormControl><Textarea placeholder="Your project vision, requirements, timeline..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <div className="text-center">
                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transform -skew-x-12"><span className="inline-block transform skew-x-12">Submit Request</span></Button>
                    <p className="text-sm text-muted-foreground mt-3">We'll contact you within 24 hours to schedule your consultation.</p>
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ResidentialHero />
        <ResidentialServices />
        <ConstructionProcess />
        <ResidentialGallery />
        <WhyChooseResidential />
        <ResidentialContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
