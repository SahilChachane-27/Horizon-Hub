import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
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
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline">
          Building Dreams. Creating Landmarks.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          For over two decades, Horizon Group has been transforming skylines and communities through innovative real estate development and premium construction services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#projects">View Our Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
