
'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { useMemo } from 'react';
import { Building2, Star } from 'lucide-react';

export function Projects() {
  const db = useFirestore();

  const featuredQuery = useMemo(() => {
    if (!db) return null;
    return query(
      collection(db, 'journals'), 
      where('isFeatured', '==', true), 
      limit(3)
    );
  }, [db]);

  const { data: featuredJournals, loading } = useCollection(featuredQuery);

  return (
    <section id="projects" className="py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">Featured Hosted Journals</h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-sm md:text-base text-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of secure, university-owned academic journals hosted on our professional platform.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : featuredJournals && featuredJournals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJournals.map((journal: any, index: number) => (
              <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-lg border-accent/20" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative aspect-[3/4] md:aspect-[16/10] bg-secondary">
                  {journal.imageUrl ? (
                     <Image
                      src={journal.imageUrl}
                      alt={journal.name}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <Building2 className="h-12 w-12 text-primary/10" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-xl font-bold text-white font-headline leading-tight italic">{journal.name}</h3>
                    <p className="text-accent font-black uppercase text-[8px] tracking-widest mt-1">{journal.university}</p>
                    <p className="text-white/80 text-xs mt-3 line-clamp-2">
                      {journal.description || "Peer-reviewed, OA compliant, and institutionally branded research source."}
                    </p>
                    <a 
                      href={journal.link} 
                      target="_blank" 
                      className="inline-block mt-4 text-[8px] font-black uppercase tracking-[0.2em] text-accent hover:text-white transition-colors"
                    >
                      View Publication &rarr;
                    </a>
                  </div>
                </div>
                {/* Visual indicator for journals */}
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-0.5 text-[8px] font-black rounded-full shadow-lg uppercase tracking-tighter flex items-center gap-1">
                  <Star className="h-2 w-2 fill-current" /> Featured
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/20 rounded-[30px] border-2 border-dashed border-primary/5">
            <p className="text-base font-bold text-primary/40 uppercase tracking-widest italic">No featured journals to display</p>
          </div>
        )}
      </div>
    </section>
  );
}
