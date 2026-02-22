'use client';

import { GraduationCap } from 'lucide-react';

const partners = [
  'SSIPMT Raipur',
  'VIT Pune',
  'AAFT University Raipur',
  'Arya Group of Colleges Jaipur',
  'Noida International University',
];

export function Partners() {
  // Double the partners to create a seamless infinite scroll effect
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-12 bg-secondary border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
            Global University Partners
          </h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex items-center space-x-4 mx-12 text-lg font-semibold text-primary/80 hover:text-primary transition-colors cursor-default"
            >
              <GraduationCap className="h-6 w-6 text-accent" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
