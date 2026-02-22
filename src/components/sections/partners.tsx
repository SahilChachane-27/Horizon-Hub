'use client';

import { Cpu, Atom, Film, BookOpen, Globe } from 'lucide-react';

const partners = [
  {
    name: 'SSIPMT Raipur',
    icon: Cpu,
  },
  {
    name: 'VIT Pune',
    icon: Atom,
  },
  {
    name: 'AAFT University Raipur',
    icon: Film,
  },
  {
    name: 'Arya Group of Colleges Jaipur',
    icon: BookOpen,
  },
  {
    name: 'Noida International University',
    icon: Globe,
  },
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
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center mx-8 group cursor-default"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-card border-2 border-accent/40 rounded-xl shadow-[0_0_15px_rgba(var(--accent),0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                <partner.icon className="h-12 w-12 text-accent drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
              </div>
              <span className="mt-4 text-base font-semibold text-primary/80 group-hover:text-primary transition-colors text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}