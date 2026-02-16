
import { Card } from '@/components/ui/card';

const features = [
  {
    title: 'Uncompromising Quality',
    description:
      'We adhere to the highest standards of construction and use premium materials to ensure lasting value.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Our meticulous project management ensures that every project is completed within the agreed timeframe.',
  },
  {
    title: 'Transparent Process',
    description:
      'We maintain open communication and provide regular updates throughout the project lifecycle.',
  },
  {
    title: '25+ Years Experience',
    description:
      'With over two decades in the industry, we bring extensive expertise to every project we undertake.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Why Choose Horizon Group
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction sets us apart in
            the industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-8 bg-card shadow-lg rounded-none transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="w-10 h-10 border border-accent"></div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
