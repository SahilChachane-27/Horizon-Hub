import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    href: '/residential-construction',
    title: 'Residential Construction',
    description: 'Custom luxury homes, multi-family developments, and residential communities built with precision and care.',
  },
  {
    href: '/commercial-projects',
    title: 'Commercial Projects',
    description: 'Office towers, retail centers, hotels, and mixed-use developments designed for functionality and aesthetics.',
  },
  {
    href: '/real-estate-development',
    title: 'Real Estate Development',
    description: 'End-to-end development services from land acquisition and planning to construction and marketing.',
  },
  {
    href: '/renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with innovative designs and quality craftsmanship to meet modern needs.',
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
            <Card key={index} className="text-center bg-card shadow-lg rounded-3xl flex flex-col p-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold font-body mt-6 mb-4">{service.title}</h3>
                    <p className="text-sm font-body text-foreground/70">{service.description}</p>
                </div>
                <Button asChild className="mt-5 py-2 px-4 text-xs bg-accent hover:bg-accent/90 text-accent-foreground rounded-full transform -skew-x-12 self-center">
                    <Link href={service.href}><span className="inline-block transform skew-x-12">View More</span></Link>
                </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
