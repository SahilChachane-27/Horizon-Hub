
// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, ShoppingCart, BedDouble, Building2, Hospital, Factory, Compass, HardHat, Leaf, Check } from 'lucide-react';
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
  const heroImage = PlaceHolderImages.find(p => p.id === 'commercial-hero-bg');
  return (
    <section id="commercial-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-start text-left text-white">
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
            Commercial Construction Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl drop-shadow-md">
            Transforming skylines with innovative commercial developments that combine architectural excellence, functional design, and sustainable practices for businesses of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transform -skew-x-12">
              <a href="#commercial-projects"><span className="inline-block transform skew-x-12">Our Projects</span></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground rounded-full transform -skew-x-12">
              <a href="#contact-form"><span className="inline-block transform skew-x-12">Start Your Project</span></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
    { number: '150+', label: 'Commercial Projects' },
    { number: '25M+', label: 'Square Feet Built' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '$3B+', label: 'Project Value' }
];

function CommercialStats() {
    return (
        <section className="bg-secondary py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={stat.label} data-aos="fade-up" data-aos-delay={index * 100}>
                            <p className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</p>
                            <p className="text-sm md:text-base text-foreground/80 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const projectTypes = [
  { id: 'commercial-project-office', icon: Building, title: 'Office Towers', description: 'Modern corporate headquarters and commercial office spaces' },
  { id: 'commercial-project-retail', icon: ShoppingCart, title: 'Retail & Shopping Centers', description: 'Destination shopping experiences and retail developments' },
  { id: 'commercial-project-hospitality', icon: BedDouble, title: 'Hospitality & Hotels', description: 'Luxury hotels, resorts, and hospitality venues' },
  { id: 'commercial-project-mixed-use', icon: Building2, title: 'Mixed-Use Developments', description: 'Integrated residential, commercial, and retail spaces' },
  { id: 'commercial-project-healthcare', icon: Hospital, title: 'Healthcare Facilities', description: 'Medical centers, hospitals, and specialized care facilities' },
  { id: 'commercial-project-industrial', icon: Factory, title: 'Industrial & Warehouse', description: 'Distribution centers, manufacturing facilities, and logistics hubs' }
];

function CommercialProjectTypes() {
  return (
    <section id="commercial-projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Commercial Project Expertise</h2>
          <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
            We specialize in delivering a diverse range of commercial construction projects, each tailored to meet specific business needs and market demands.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((project, index) => {
            const image = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden group relative" data-aos="fade-up" data-aos-delay={index * 100}>
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
                    <project.icon className="h-8 w-8 mb-3 text-accent" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeaturedCaseStudy() {
    const caseStudyImage = PlaceHolderImages.find(p => p.id === 'commercial-case-study');
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Featured Case Study</h2>
                    <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                        Discover how we delivered a landmark commercial project that transformed an urban district.
                    </p>
                </div>
                <Card className="overflow-hidden shadow-2xl lg:grid lg:grid-cols-2 lg:gap-0" data-aos="fade-up" data-aos-delay="200">
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                        {caseStudyImage && (
                            <Image 
                                src={caseStudyImage.imageUrl} 
                                alt={caseStudyImage.description} 
                                fill 
                                className="object-cover"
                                data-ai-hint={caseStudyImage.imageHint} 
                            />
                        )}
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-primary mb-3">Financial District Tower</h3>
                        <p className="text-foreground/80 mb-6">
                            A 45-story Class A office tower in downtown Manhattan, featuring state-of-the-art sustainable design, premium amenities, and flexible workspaces for leading financial institutions.
                        </p>
                        <div className="grid grid-cols-3 gap-4 text-center mb-6">
                            <div><p className="text-2xl font-bold text-primary">45</p><p className="text-sm text-muted-foreground">Floors</p></div>
                            <div><p className="text-2xl font-bold text-primary">850,000</p><p className="text-sm text-muted-foreground">Square Feet</p></div>
                            <div><p className="text-2xl font-bold text-primary">LEED Platinum</p><p className="text-sm text-muted-foreground">Certification</p></div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary mb-3">Project Highlights</h4>
                            <ul className="space-y-2 text-foreground/80">
                                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-accent"/> Completed 3 months ahead of schedule</li>
                                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-accent"/> 98% leased within 6 months of completion</li>
                                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-accent"/> 40% reduction in energy consumption</li>
                                <li className="flex items-center gap-2"><Check className="h-5 w-5 text-accent"/> Integrated smart building technology</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transform -skew-x-12">
                                <Link href="#"><span className="inline-block transform skew-x-12">View Full Case Study</span></Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const commercialServices = [
    {
        icon: Compass,
        title: 'Design-Build',
        description: 'Integrated design and construction services that streamline project delivery, reduce costs, and accelerate timelines.',
        features: ['Single-point responsibility', 'Accelerated schedule', 'Cost certainty']
    },
    {
        icon: HardHat,
        title: 'Construction Management',
        description: 'Professional oversight of all construction phases to ensure quality, budget adherence, and timely completion.',
        features: ['Project scheduling', 'Cost control', 'Quality assurance']
    },
    {
        icon: Leaf,
        title: 'Sustainable Construction',
        description: 'Green building practices and sustainable materials to achieve LEED certification and reduce environmental impact.',
        features: ['LEED certification', 'Energy efficiency', 'Sustainable materials']
    }
];

function CommercialServices() {
    return (
        <section id="commercial-services" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Commercial Construction Services</h2>
                    <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto">
                        We provide comprehensive commercial construction solutions from initial concept to final completion.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commercialServices.map((service, index) => (
                        <Card key={index} className="flex flex-col text-center items-center p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={index * 100}>
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

const commercialProcessSteps = [
    { number: '1', title: 'Feasibility & Planning', description: 'Site analysis, budget development, and project planning' },
    { number: '2', title: 'Design & Engineering', description: 'Architectural design, engineering, and permit acquisition' },
    { number: '3', title: 'Pre-Construction', description: 'Contractor selection, scheduling, and mobilization' },
    { number: '4', title: 'Construction', description: 'Site work, building construction, and quality control' },
    { number: '5', title: 'Systems Installation', description: 'MEP systems, interior finishes, and technology integration' },
    { number: '6', title: 'Commissioning', description: 'System testing, quality verification, and operational readiness' },
    { number: '7', title: 'Project Closeout', description: 'Final inspections, documentation, and client handover' }
];

function CommercialProcess() {
    return (
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Commercial Construction Process</h2>
                    <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                        A structured approach that ensures every commercial project meets the highest standards of quality and efficiency.
                    </p>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-border/80" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative">
                        {commercialProcessSteps.map((step, index) => (
                            <div key={step.number} className="text-center p-4" data-aos="fade-up" data-aos-delay={index * 100}>
                                <div className="relative inline-block">
                                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 border-4 border-secondary">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="font-bold text-primary mb-2">{step.title}</h3>
                                <p className="text-sm text-foreground/70">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  contactPerson: z.string().min(2, { message: "Contact person must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  projectStage: z.string({ required_error: "Please select a project stage." }),
  location: z.string().optional(),
  projectSize: z.string().optional(),
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
        defaultValues: { companyName: "", contactPerson: "", email: "", phone: "", projectType: undefined, projectStage: undefined, location: "", projectSize: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Consultation Request Submitted!",
            description: "Our commercial team will contact you within 24 hours to discuss your project.",
        });
        form.reset();
    }
  
    return (
        <section id="contact-form" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Start Your Commercial Project</h2>
                        <p className="mt-4 text-base md:text-lg text-foreground/80">
                            Contact us for a comprehensive consultation about your commercial construction needs.
                        </p>
                    </div>
                    {isClient && (
                      <Form {...form}>
                          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-secondary p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                              <div className="grid sm:grid-cols-2 gap-6">
                                  <FormField control={form.control} name="companyName" render={({ field }) => (
                                      <FormItem><FormLabel>Company Name</FormLabel><FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="contactPerson" render={({ field }) => (
                                      <FormItem><FormLabel>Contact Person</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="email" render={({ field }) => (
                                      <FormItem><FormLabel>Business Email</FormLabel><FormControl><Input placeholder="john.doe@company.com" {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="phone" render={({ field }) => (
                                      <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="+1 (555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="projectType" render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>Project Type</FormLabel>
                                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                                              <FormControl><SelectTrigger><SelectValue placeholder="Select a project type" /></SelectTrigger></FormControl>
                                              <SelectContent>
                                                  <SelectItem value="Office Building">Office Building</SelectItem>
                                                  <SelectItem value="Retail Center">Retail Center</SelectItem>
                                                  <SelectItem value="Hotel/Resort">Hotel/Resort</SelectItem>
                                                  <SelectItem value="Mixed-Use Development">Mixed-Use Development</SelectItem>
                                                  <SelectItem value="Healthcare Facility">Healthcare Facility</SelectItem>
                                                  <SelectItem value="Industrial/Warehouse">Industrial/Warehouse</SelectItem>
                                                  <SelectItem value="Other">Other</SelectItem>
                                              </SelectContent>
                                          </Select>
                                          <FormMessage />
                                      </FormItem>
                                  )} />
                                  <FormField control={form.control} name="projectStage" render={({ field }) => (
                                      <FormItem>
                                          <FormLabel>Project Stage</FormLabel>
                                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                                              <FormControl><SelectTrigger><SelectValue placeholder="Select a project stage" /></SelectTrigger></FormControl>
                                              <SelectContent>
                                                  <SelectItem value="Concept/Planning">Concept/Planning</SelectItem>
                                                  <SelectItem value="Design Phase">Design Phase</SelectItem>
                                                  <SelectItem value="Ready for Construction">Ready for Construction</SelectItem>
                                                  <SelectItem value="Seeking Contractor">Seeking Contractor</SelectItem>
                                              </SelectContent>
                                          </Select>
                                          <FormMessage />
                                      </FormItem>
                                  )} />
                                  <FormField control={form.control} name="location" render={({ field }) => (
                                      <FormItem><FormLabel>Project Location (Optional)</FormLabel><FormControl><Input placeholder="City, State" {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                                  <FormField control={form.control} name="projectSize" render={({ field }) => (
                                      <FormItem><FormLabel>Estimated Size (sq ft, Optional)</FormLabel><FormControl><Input placeholder="50,000 sq ft" {...field} /></FormControl><FormMessage /></FormItem>
                                  )} />
                              </div>
                              <FormField control={form.control} name="message" render={({ field }) => (
                                  <FormItem><FormLabel>Project Details</FormLabel><FormControl><Textarea placeholder="Your project requirements, timeline, and specific needs..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                              )} />
                              <div className="text-center">
                                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Request Commercial Consultation</Button>
                                  <p className="text-sm text-muted-foreground mt-3">Our commercial team will contact you within 24 hours.</p>
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
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <CommercialHero />
        <CommercialStats />
        <CommercialProjectTypes />
        <FeaturedCaseStudy />
        <CommercialServices />
        <CommercialProcess />
        <CommercialContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
