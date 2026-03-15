'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { useMemo } from 'react';
import { Building2, Star, ExternalLink, ArrowRight, Tag, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Projects() {
  const db = useFirestore();

  // Fetch journals where isFeatured is explicitly true, limited to 4 for a more prominent single row
  const featuredQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'journals'), 
      where('isFeatured', '==', true), 
      limit(4)
    );
  }, [db]);

  const { data: featuredJournals, loading } = useCollection(featuredQuery);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="flex flex-col items-center text-center gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic">Featured Journals</h2>
            <div className="mt-2 w-20 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-base md:text-lg text-foreground/70 font-medium leading-relaxed">
              Explore our selection of prestigious, university-owned academic journals hosted on our professional and secure platform.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-funky border-primary/20 text-primary hover:bg-primary hover:text-white transition-all h-12 px-8 font-bold">
            <Link href="/journals">View Full Catalog <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[3/4] rounded-none bg-slate-200 animate-pulse shadow-sm" />
            ))}
          </div>
        ) : featuredJournals && featuredJournals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredJournals.map((journal: any, index: number) => (
              <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-lg border-none flex flex-col h-full bg-white transition-all duration-500" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Image Container - Taller and wider for increased presence */}
                <div className="relative aspect-[3/4] w-full shrink-0 flex items-center justify-center bg-secondary/5 overflow-hidden">
                  {journal.imageUrl ? (
                     <Image
                      src={journal.imageUrl}
                      alt={journal.name}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <Building2 className="h-16 w-16 text-primary/10" />
                    </div>
                  )}
                  
                  {/* Category label styling */}
                  <div className="absolute top-4 left-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm text-primary">
                      {journal.domain}
                    </div>
                  </div>

                  {/* Featured Ribbon styling */}
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-[10px] font-black rounded-full shadow-lg uppercase tracking-widest flex items-center gap-1 z-10">
                    <Star className="h-2.5 w-2.5 fill-current" /> Featured
                  </div>
                </div>

                {/* Hover Overlay - Enhanced dimensions and spacing */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-white font-headline leading-tight italic mb-2 line-clamp-2">
                      {journal.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-5 w-0.5 bg-accent"></div>
                      <p className="text-accent font-black uppercase text-[10px] tracking-widest truncate">
                        {journal.university}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-6 opacity-90">
                      <div className="flex items-center gap-2">
                        <Tag className="h-3 w-3 text-accent" />
                        <p className="text-[10px] font-medium text-white/80">{journal.issn}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3 text-accent" />
                        <p className="text-[10px] font-medium text-white/80">{journal.domain}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <Button asChild className="w-full bg-accent hover:bg-white text-primary font-black uppercase text-[11px] tracking-widest h-11 rounded-xl transition-all duration-300">
                        <a href={journal.link} target="_blank" className="flex items-center justify-center gap-2">
                          View Journal <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px] border-2 border-dashed border-slate-200 shadow-sm">
            <Building2 className="h-12 w-12 text-slate-200 mx-auto mb-4" />
            <p className="text-lg font-bold text-primary/40 uppercase tracking-widest italic">No featured journals currently available</p>
            <Button asChild variant="link" className="mt-4 text-accent font-bold uppercase tracking-widest">
              <Link href="/admin/journals">Manage Catalog &rarr;</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}