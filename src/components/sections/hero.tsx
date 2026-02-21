
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

  return (
    <section id="hero" className="relative h-screen flex items-center justify-start text-left text-white overflow-hidden bg-primary">
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover transition-transform duration-[10s] ease-linear scale-110 animate-slow-zoom"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      {/* Animated Floating Shapes for eye-catchiness */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Exclusive University Hosting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-2xl font-headline italic leading-[1.1]">
            Secure and Reliable <br/>Journal Hosting for <span className="text-accent underline decoration-white/30 decoration-8 underline-offset-8">Universities Only</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl drop-shadow-md font-medium leading-relaxed italic">
            Technical Journals provides secure, scalable, and ethical journal hosting exclusively for University-owned academic research journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-primary text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-2xl px-10 py-8 text-xl font-black italic group">
                  <Link href="/start-journal" className="flex items-center gap-3">Start Your University Journal <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-white/5 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-xl px-10 py-8 text-xl font-black italic group">
                  <Link href="/journals" className="flex items-center gap-3"><BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform" /> Explore Journals</Link>
              </Button>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent" />
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
    </section>
  );
}
