import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CalendarCheck, Eye, History } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'We adhere to the highest standards of construction and use premium materials to ensure lasting value.',
  },
  {
    icon: CalendarCheck,
    title: 'On-Time Delivery',
    description: 'Our meticulous project management ensures that every project is completed within the agreed timeframe.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'We maintain open communication and provide regular updates throughout the project lifecycle.',
  },
  {
    icon: History,
    title: '25+ Years Experience',
    description: 'With over two decades in the industry, we bring extensive expertise to every project we undertake.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Why Choose Horizon Group</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction sets us apart in the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
