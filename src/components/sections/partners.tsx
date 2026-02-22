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
    <section className="py-16 bg-secondary border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
            Global University Partners
          </h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              className="flex flex-col items-center mx-8 group cursor-default"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-card border-2 border-accent/40 rounded-xl shadow-[0_0_15px_rgba(var(--accent),0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(251,191,36,0.5)]">
                <GraduationCap className="h-10 w-10 text-accent drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              </div>
              <span className="mt-4 text-base font-semibold text-primary/80 group-hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
