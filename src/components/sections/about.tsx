import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-img');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto pl-4 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl" data-aos="fade-right">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline" data-aos="fade-up">
              <span className="underline decoration-accent">About</span> Horizon Group
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              Founded in 1998, Horizon Group has established itself as a premier real estate development and construction firm with a portfolio of landmark projects across the country.
            </p>
            <p className="text-base md:text-lg text-foreground/80">
              Our integrated approach combines innovative design, sustainable practices, and meticulous craftsmanship to deliver exceptional value to our clients and communities.
            </p>
            <Card className="bg-card border-0 border-l-4 border-accent shadow-lg rounded-r-lg rounded-l-none">
              <CardHeader>
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  To create enduring spaces that enrich lives and communities through innovative design, sustainable construction, and unwavering commitment to quality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
