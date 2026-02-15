import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Home, Building, Building2, Paintbrush } from 'lucide-react';

const services = [
  {
    href: '/residential-construction',
    title: 'Residential Construction',
    description: 'Custom luxury homes, multi-family developments, and residential communities built with precision and care.',
    icon: Home,
  },
  {
    href: '/commercial-projects',
    title: 'Commercial Projects',
    description: 'Office towers, retail centers, hotels, and mixed-use developments designed for functionality and aesthetics.',
    icon: Building,
  },
  {
    href: '/real-estate-development',
    title: 'Real Estate Development',
    description: 'End-to-end development services from land acquisition and planning to construction and marketing.',
    icon: Building2,
  },
  {
    href: '/renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with innovative designs and quality craftsmanship to meet modern needs.',
    icon: Paintbrush,
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Services</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer comprehensive real estate and construction solutions tailored to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center bg-card shadow-lg rounded-2xl flex flex-col p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="flex-grow">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 border-2 border-accent rounded-full">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold font-body mt-2 mb-4">{service.title}</h3>
                      <p className="text-sm font-body text-foreground/70">{service.description}</p>
                  </div>
                  <Button asChild className="mt-5 py-2 px-4 text-sm bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg self-center">
                      <Link href={service.href}>View More</Link>
                  </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
