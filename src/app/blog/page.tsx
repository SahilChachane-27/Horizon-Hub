'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const blogPosts = [
  { 
    id: 'blog-post-1', 
    category: 'Innovation', 
    title: 'The Future of Open Access Publishing', 
    date: 'Jan 15, 2026', 
    readTime: '8 min read', 
    excerpt: 'Exploring the latest innovations in academic publishing and how open access is transforming research visibility.' 
  },
  { 
    id: 'blog-post-2', 
    category: 'Research Ethics', 
    title: 'Maintaining Integrity in Peer Review Systems', 
    date: 'Feb 02, 2026', 
    readTime: '6 min read', 
    excerpt: 'How academic institutions are implementing rigorous peer-review standards to ensure research quality and transparency.' 
  },
  { 
    id: 'blog-post-3', 
    category: 'Digital Archiving', 
    title: 'The Importance of Long-term Research Preservation', 
    date: 'Feb 10, 2026', 
    readTime: '10 min read', 
    excerpt: 'Analyzing the role of structured archiving and PIDs in maintaining the accessibility of scholarly work over time.' 
  },
  { 
    id: 'blog-post-4', 
    category: 'Institutional Growth', 
    title: 'Elevating University Rankings through Scholarly Output', 
    date: 'Mar 05, 2026', 
    readTime: '12 min read', 
    excerpt: 'How owning a branded journal portfolio directly impacts institutional prestige and global academic standing.' 
  }
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white pt-24 pb-12 md:pb-16">
          <div className="container mx-auto px-4 text-left">
            <h1 className="text-3xl md:text-5xl font-bold font-headline italic mb-4 leading-tight">
              Technical Journals <span className="text-accent">Insights</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl font-medium italic">
              Latest trends, news, and deep dives from the world of academic publishing and institutional research.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className="overflow-hidden shadow-lg border-none bg-slate-50 flex flex-col rounded-funky transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1 group" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src={PlaceHolderImages.find(p => p.id === `project-${(index % 3) + 1}`)?.imageUrl || ''} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest border border-accent/20">
                      {post.category}
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-4 font-headline italic leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                    <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-black uppercase text-primary/40 tracking-widest mb-6">
                      <div className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-accent" />{post.date}</div>
                      <div className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-accent" />{post.readTime}</div>
                    </div>
                    <p className="text-foreground/70 text-sm mb-6 flex-grow leading-relaxed italic line-clamp-3">{post.excerpt}</p>
                    <Button asChild variant="link" className="self-start p-0 h-auto text-primary font-black italic text-sm underline decoration-accent underline-offset-8 hover:text-accent">
                      <Link href="#">Read Full Article →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
