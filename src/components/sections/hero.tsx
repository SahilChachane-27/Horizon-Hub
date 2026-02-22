import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-start justify-center overflow-hidden bg-primary pt-16">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="relative z-10 max-w-4xl" data-aos="fade-right">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline text-white">
            Secure and Reliable Journal Hosting for Universities Only
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
            Technical Journals provides secure, scalable, ethical journal hosting exclusively for University-owned journals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
              <Link href="/contact">Start Your University Journal</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-white bg-transparent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
              <Link href="/journals">Explore Journals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
