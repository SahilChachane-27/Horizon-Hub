
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative h-screen flex items-center justify-start text-left text-white">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline" data-aos="fade-right" data-aos-delay="100">
            Building Dreams. Creating Landmarks.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl drop-shadow-md" data-aos="fade-right" data-aos-delay="200">
            For over two decades, Horizon Group has been transforming skylines and communities through innovative real estate development and premium construction services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start" data-aos="fade-right" data-aos-delay="300">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
                <a href="#projects">View Our Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-foreground transition-transform duration-300 ease-in-out hover:scale-105 rounded-funky">
                <a href="#contact">Contact Us</a>
            </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
