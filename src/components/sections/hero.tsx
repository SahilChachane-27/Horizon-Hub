'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Building2, Home } from 'lucide-react';
import Image from 'next/image';
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
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl text-left" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 shadow-xl">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Excellence in Construction Since 1998</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-2xl font-headline text-white leading-[1.1]">
              Transforming Visions into <span className="text-accent underline decoration-white/30 decoration-8 underline-offset-8">Landmarks</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl drop-shadow-md font-medium leading-relaxed italic">
              Horizon Group is a premier real estate firm specializing in luxury residential construction, large-scale commercial projects, and sustainable urban development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-primary text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-2xl px-10 py-8 text-xl font-black uppercase group">
                  <Link href="/contact" className="flex items-center gap-3">Start Your Project <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-white/5 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-xl px-10 py-8 text-xl font-black uppercase group">
                  <Link href="/commercial-projects" className="flex items-center gap-3">View Portfolio</Link>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-3 text-white">
                <Building2 className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/60">Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Home className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">2.5k</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/60">Units Built</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
