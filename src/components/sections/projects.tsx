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
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Featured Hosted Journals</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of secure, university-owned academic journals hosted on our professional platform.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center p-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : featuredJournals && featuredJournals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJournals.map((journal: any, index: number) => (
              <Card key={journal.id} className="overflow-hidden group relative rounded-none shadow-xl border-accent/20" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative aspect-[3/4] md:aspect-[16/10] bg-secondary">
                  {journal.imageUrl ? (
                     <Image
                      src={journal.imageUrl}
                      alt={journal.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                      <Building2 className="h-16 w-16 text-primary/10" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-2xl font-bold text-white font-headline leading-tight italic">{journal.name}</h3>
                    <p className="text-accent font-black uppercase text-[10px] tracking-widest mt-1">{journal.university}</p>
                    <p className="text-white/80 text-sm mt-4 line-clamp-2">Peer-reviewed, OA compliant, and institutionally branded research source.</p>
                    <a 
                      href={journal.link} 
                      target="_blank" 
                      className="inline-block mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:text-white transition-colors"
                    >
                      View Publication &rarr;
                    </a>
                  </div>
                </div>
                {/* Visual indicator for journals */}
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-[10px] font-black rounded-full shadow-lg uppercase tracking-tighter flex items-center gap-1.5">
                  <Star className="h-3 w-3 fill-current" /> Featured
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-secondary/20 rounded-[40px] border-2 border-dashed border-primary/5">
            <p className="text-xl font-bold text-primary/40 uppercase tracking-widest italic">No featured journals to display</p>
          </div>
        )}
      </div>
    </section>
  );
}