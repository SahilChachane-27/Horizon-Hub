
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight, BookOpen, Microscope, FlaskConical, Atom, Dna } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-bg');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate random floating bubbles for visual consistency
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 10}s`,
  }));

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#198bea] via-[#1570c7] to-[#1570c7]">
      <div className="absolute inset-0">
        {/* Background Image with low opacity to add texture while maintaining the brand color */}
        {heroImage && (
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover transition-transform duration-[20s] ease-linear scale-110 animate-slow-zoom"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        )}

        {/* Floating Academic Icons */}
        <div className="absolute top-1/4 left-[10%] animate-float opacity-10">
          <Microscope className="w-24 h-24 text-white" />
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float opacity-10" style={{ animationDelay: '2s' }}>
          <FlaskConical className="w-20 h-20 text-white" />
        </div>
        <div className="absolute bottom-1/4 left-[15%] animate-float opacity-10" style={{ animationDelay: '1s' }}>
          <BookOpen className="w-28 h-28 text-white" />
        </div>
        <div className="absolute top-1/2 right-[10%] animate-float opacity-10" style={{ animationDelay: '3s' }}>
          <Atom className="w-32 h-32 text-white" />
        </div>
        <div className="absolute bottom-1/3 right-[20%] animate-float opacity-10" style={{ animationDelay: '1.5s' }}>
          <Dna className="w-24 h-24 text-white" />
        </div>

        {/* Floating Bubbles */}
        {isClient && bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 mx-auto shadow-xl">
              <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Exclusive University Hosting</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-2xl font-headline italic leading-[1.1] text-white">
            Secure and Reliable <br/>Journal Hosting for <span className="text-accent underline decoration-white/30 decoration-8 underline-offset-8">Universities Only</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md font-medium leading-relaxed italic">
            Technical Journals provides secure, scalable, and ethical journal hosting exclusively for University-owned academic research journals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-white hover:text-primary text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-2xl px-10 py-8 text-xl font-black italic group">
                  <Link href="/start-journal" className="flex items-center gap-3">Start Your University Journal <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent bg-white/5 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all duration-500 hover:scale-105 rounded-funky shadow-xl px-10 py-8 text-xl font-black italic group">
                  <Link href="/journals" className="flex items-center gap-3"><BookOpen className="h-6 w-6 group-hover:rotate-12 transition-transform" /> Explore Journals</Link>
              </Button>
            </div>
        </div>
      </div>
      
      {/* Wave Curve Transition */}
      <div className="w-full absolute bottom-0 left-0 -mb-1 overflow-hidden">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.95"></path>
        </svg>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translate(0); }
          25% { transform: translateY(-20px) translate(10px); }
          50% { transform: translateY(-10px) translate(-10px); }
          75% { transform: translateY(-30px) translate(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
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
