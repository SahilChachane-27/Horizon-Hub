import { Card } from '@/components/ui/card';
import { 
  Zap, 
  Wand2, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Cpu 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quick Journal Setup',
    description: 'Go live in minutes with our pre-configured architecture, optimized for academic institutional workflows.',
  },
  {
    icon: Wand2,
    title: 'No Technical Experience Needed',
    description: 'Focus on your research and editorial work. We handle all the servers, coding, and technical stress.',
  },
  {
    icon: ShieldCheck,
    title: 'Modern, Scalable & Secure',
    description: 'Built for reliability and data safety, our platform scales effortlessly as your institutional research grows.',
  },
  {
    icon: Layers,
    title: 'All-in-One Platform',
    description: 'A single, unified environment for manuscript submission, peer review, DOI registration, and final publishing.',
  },
  {
    icon: Globe,
    title: 'For Solo to Institutional Use',
    description: 'Flexible plans and modular workflows that grow with you, from single journals to university-wide catalogs.',
  },
  {
    icon: Cpu,
    title: 'Superior, Cutting-Edge Tech',
    description: 'Utilizing next-gen efficiency and bank-grade security to power the future of academic publishing.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Why Choose Technical Journals?
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Empowering universities with professional, secure, and institutionally-owned publishing solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-8 bg-card shadow-lg rounded-funky transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
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
