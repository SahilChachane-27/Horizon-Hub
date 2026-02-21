'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, Search, BookOpen, Layers, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const blogPosts = [
  { 
    id: 'blog-post-1', 
    category: 'Industry Insights', 
    title: 'Why Journals Running on Open Journal System (OJS) Must Transfer to Technical Journals', 
    date: 'Dec 24, 2025', 
    readTime: '10 min read', 
    excerpt: 'For nearly two decades, Open Journal System (OJS) has been a staple. Discover why institutional research ownership now requires a shift to more modern, secure Technical Journals environments.' 
  },
  { 
    id: 'blog-post-2', 
    category: 'Technology', 
    title: 'What is Open Access Journal? A Complete Guide', 
    date: 'Dec 18, 2025', 
    readTime: '8 min read', 
    excerpt: 'A Complete Guide for Researchers, Universities, and Publishers. Academic publishing is undergoing a major transition toward transparency and accessibility.' 
  },
  { 
    id: 'blog-post-3', 
    category: 'Industry Insights', 
    title: 'What is a Peer-Reviewed Journal?', 
    date: 'Dec 09, 2025', 
    readTime: '6 min read', 
    excerpt: 'Peer-reviewed journals are the foundation of academic publishing. They validate research, filter out weak or unverified claims, and ensure scholarly integrity.' 
  },
  { 
    id: 'blog-post-4', 
    category: 'Technology', 
    title: 'Why Universities Should Start Research Journals? Importance & Benefits', 
    date: 'Dec 08, 2025', 
    readTime: '12 min read', 
    excerpt: 'Research is the backbone of higher education. Every discovery begins with research, and research becomes meaningful when shared through institutional journals.' 
  },
  { 
    id: 'blog-post-5', 
    category: 'Technology', 
    title: 'What is a Journal Management System?', 
    date: 'Dec 01, 2025', 
    readTime: '7 min read', 
    excerpt: 'Academic publishing has transformed more in the past decade than in the century before. Explore how modern management systems automate complex editorial tasks.' 
  },
  { 
    id: 'blog-post-6', 
    category: 'Technology', 
    title: 'What Are the Requirements to Start a Research Journal?', 
    date: 'Nov 30, 2025', 
    readTime: '9 min read', 
    excerpt: 'Starting a research journal is one of the most impactful steps an academic institution can take. Learn the key administrative and technical requirements.' 
  },
  { 
    id: 'blog-post-7', 
    category: 'Tutorials', 
    title: 'How to Get a USA ISSN for Your Journal? Step by Step Guide', 
    date: 'Nov 30, 2025', 
    readTime: '15 min read', 
    excerpt: 'The process involves eligibility checks, sample preparation, and specific technical documentation. Our guide simplifies obtaining a US-based ISSN.' 
  },
  { 
    id: 'blog-post-8', 
    category: 'Industry Insights', 
    title: 'Why Technical Journals is the Most Trusted Transparent Peer Review Solution', 
    date: 'Nov 27, 2025', 
    readTime: '11 min read', 
    excerpt: 'Transparency has become one of the most important pillars of modern scholarly publishing. Discover how transparent review models build institutional trust.' 
  },
  { 
    id: 'blog-post-9', 
    category: 'Industry Insights', 
    title: 'Launch Your Academic Journal in 24 Hours Without IT Staff', 
    date: 'Nov 26, 2025', 
    readTime: '5 min read', 
    excerpt: 'Launching an academic journal is traditionally considered a long and technical process. Technical Journals changes the game with rapid institutional setup.' 
  },
  { 
    id: 'blog-post-10', 
    category: 'Company News', 
    title: 'Why Technical Journals is Preferred Over Traditional Systems', 
    date: 'Nov 26, 2025', 
    readTime: '8 min read', 
    excerpt: 'Academic publishing is moving through one of the biggest transitions in decades. Explore the next-generation features that universities prefer.' 
  },
  { 
    id: 'blog-post-11', 
    category: 'Company News', 
    title: 'Technical Journals: Advanced Management & OJS Alternative', 
    date: 'Nov 19, 2025', 
    readTime: '7 min read', 
    excerpt: 'A modern solution for modern publishing. In a rapidly evolving world, universities need tools that go beyond simple archiving to active dissemination.' 
  },
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
        {/* Blog Hero */}
        <section className="bg-primary text-white pt-32 pb-16 md:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Knowledge Hub</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-headline italic mb-6 leading-tight">
                Technical Journals <span className="text-accent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium italic leading-relaxed">
                Insights, tutorials, and updates from the team at Technical Journals.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Stats */}
        <section className="py-8 md:py-10 bg-slate-50 border-b border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-6 md:gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-primary leading-none">11</p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase text-primary/40 tracking-widest">Total Articles</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 md:h-12 md:w-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                  <Layers className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-primary leading-none">0</p>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase text-primary/40 tracking-widest">Featured</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
              <div className="lg:col-span-2">
                {/* Featured Post */}
                <div className="mb-12 md:mb-16" data-aos="fade-up">
                  <Card className="overflow-hidden shadow-2xl rounded-funky border-none bg-white group">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-video md:aspect-auto">
                        <Image 
                          src={PlaceHolderImages.find(p => p.id === 'journal-hosting-img')?.imageUrl || ''} 
                          alt="Featured Blog" 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                          LATEST
                        </div>
                      </div>
                      <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                        <span className="text-xs font-black text-accent mb-4 uppercase tracking-[0.2em]">{blogPosts[0].category}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-headline italic leading-tight">{blogPosts[0].title}</h2>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-xs text-muted-foreground mb-6 font-bold uppercase tracking-widest">
                          <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {blogPosts[0].date}</div>
                          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> {blogPosts[0].readTime}</div>
                        </div>
                        <p className="text-sm md:text-base text-foreground/70 mb-8 leading-relaxed italic line-clamp-3">{blogPosts[0].excerpt}</p>
                        <Button asChild className="w-fit bg-primary text-accent hover:bg-accent hover:text-primary rounded-funky px-8 py-6 text-base md:text-lg font-black italic shadow-xl transition-all hover:scale-105">
                          <Link href="#">Read More →</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Blog Grid */}
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {blogPosts.slice(1).map((post, index) => (
                    <Card key={post.id} className="overflow-hidden shadow-lg border-none bg-slate-50 flex flex-col rounded-funky transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay={index * 50}>
                      <div className="relative aspect-video overflow-hidden">
                        <Image 
                          src={PlaceHolderImages.find(p => p.id === `journal-cover-${(index % 6) + 1}`)?.imageUrl || ''} 
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

                <div className="flex justify-center mt-12 md:mt-20" data-aos="fade-up">
                  <Button variant="outline" className="rounded-funky border-primary text-primary font-black italic px-8 md:px-10 py-5 md:py-6 hover:bg-primary hover:text-white transition-all shadow-lg w-full sm:w-auto">
                    Load More Articles
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8 md:space-y-10">
                <Card className="p-6 md:p-8 rounded-funky border-none bg-slate-50 shadow-lg" data-aos="fade-left">
                  <h4 className="text-lg font-bold text-primary mb-6 font-headline italic border-b border-accent/20 pb-2">Search Insights</h4>
                  <div className="relative">
                    <Input placeholder="Search articles..." className="pr-12 rounded-xl h-12 border-primary/10 focus:ring-accent bg-white" />
                    <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-10 w-10 text-primary hover:text-accent">
                      <Search className="h-4 w-4"/>
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 md:p-8 rounded-funky border-none bg-slate-50 shadow-lg" data-aos="fade-left" data-aos-delay="100">
                  <h4 className="text-lg font-bold text-primary mb-6 font-headline italic border-b border-accent/20 pb-2">Academic Categories</h4>
                  <ul className="space-y-1">
                    {['Industry Insights', 'Technology', 'Tutorials', 'Company News'].map(cat => (
                      <li key={cat}>
                        <Link href="#" className="flex justify-between items-center text-[11px] font-bold text-primary/60 uppercase tracking-widest hover:text-accent transition-colors py-3 border-b border-accent/5">
                          <span>{cat}</span>
                          <ChevronRight className="h-3 w-3 text-accent" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-8 bg-primary text-white rounded-funky shadow-2xl relative overflow-hidden" data-aos="fade-left" data-aos-delay="200">
                  <div className="relative z-10">
                    <h4 className="text-lg font-bold text-accent mb-4 font-headline italic">Start Your Journal</h4>
                    <p className="text-xs text-white/70 mb-8 leading-relaxed">Join 100+ universities in owning their research output today.</p>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-white hover:text-primary rounded-funky font-black italic shadow-xl">
                      <Link href="/start-journal">Get Started →</Link>
                    </Button>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
