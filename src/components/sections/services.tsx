import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, Factory, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom luxury homes, multi-family developments, and residential communities built with precision and care.',
  },
  {
    icon: Building2,
    title: 'Commercial Projects',
    description: 'Office towers, retail centers, hotels, and mixed-use developments designed for functionality and aesthetics.',
  },
  {
    icon: Factory,
    title: 'Real Estate Development',
    description: 'End-to-end development services from land acquisition and planning to construction and marketing.',
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with innovative designs and quality craftsmanship to meet modern needs.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Our Services</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            We offer comprehensive real estate and construction solutions tailored to meet the diverse needs of our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-primary text-primary-foreground p-4 rounded-full mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-foreground/70 flex-grow">{service.description}</p>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/80">
                  <a href="#contact">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
