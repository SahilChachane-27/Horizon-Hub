'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 mx-auto shadow-xl">
              <span className="h-2 w-2 rounded-full bg-accent" />
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
                  <Link href="/journals" className="flex items-center gap-3"><BookOpen className="h-6 w-6" /> Explore Journals</Link>
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
    </section>
  );
}