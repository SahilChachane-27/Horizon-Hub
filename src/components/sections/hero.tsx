'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative min-h-[85vh] md:h-screen flex flex-col items-start justify-center overflow-hidden bg-primary pt-16">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover opacity-40"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          {/* Navy Overlay */}
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl text-left" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 md:mb-8 shadow-xl">
              <span className="h-1.5 w-1.5 md:h-2 w-2 rounded-full bg-accent" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-accent">Exclusive University Hosting</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-2xl font-headline italic leading-[1.1] text-white">
            Secure and Reliable <br className="hidden md:block"/>Journal Hosting for <span className="text-accent underline decoration-white/30 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">Universities Only</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl drop-shadow-md font-medium leading-relaxed italic">
            Technical Journals provides secure, scalable, and ethical journal hosting exclusively for University-owned academic research journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-primary text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-2xl px-8 md:px-10 py-6 md:py-8 text-lg md:text-xl font-black italic group">
                  <Link href="/start-journal" className="flex items-center gap-3">Start Your University Journal <ArrowRight className="h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-white/5 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-xl px-8 md:px-10 py-6 md:py-8 text-lg md:text-xl font-black italic group">
                  <Link href="/journals" className="flex items-center gap-3"><BookOpen className="h-5 w-5 md:h-6 md:w-6" /> Explore Journals</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}