'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const featuredPost = {
  id: 'featured-post',
  category: 'Featured Article',
  title: 'The Evolution of Institutional Research Ownership',
  date: 'June 15, 2026',
  readTime: '8 min read',
  excerpt: 'Discover how modern universities are reclaiming their research output through sovereign publishing platforms.'
};

const recentPosts = [
  { id: 'blog-post-1', title: 'Streamlining Peer Review with Advanced Editorial Workflows' },
  { id: 'blog-post-2', title: 'Why Branding Matters: Creating a Prestigious University Journal' },
];

export function Blog() {
  const featuredImage = PlaceHolderImages.find(p => p.id === featuredPost.id);

  return (
    <section id="blog" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">Technical Journals Insights</h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-sm md:text-base text-foreground/80 max-w-2xl mx-auto">
            Explore the latest trends, insights, and stories from the world of academic publishing and institutional research.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="overflow-hidden shadow-xl group rounded-funky border-none" data-aos="fade-right">
            <Link href="/blog">
              <div className="relative aspect-video">
                {featuredImage && (
                  <Image
                    src={featuredImage.imageUrl}
                    alt={featuredImage.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={featuredImage.imageHint}
                  />
                )}
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {featuredPost.category}
                </div>
              </div>
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 font-headline italic leading-tight group-hover:text-accent transition-colors">{featuredPost.title}</h3>
                <div className="flex items-center gap-4 text-xs font-bold text-primary/40 uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" />{featuredPost.date}</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" />{featuredPost.readTime}</div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic">{featuredPost.excerpt}</p>
              </CardContent>
            </Link>
          </Card>
          <div className="space-y-6 flex flex-col justify-between" data-aos="fade-left">
            <div className="space-y-6">
              {recentPosts.map(post => {
                const postImage = PlaceHolderImages.find(p => p.id === post.id);
                return(
                  <Card key={post.id} className="overflow-hidden shadow-lg group rounded-funky border-none bg-slate-50 hover:bg-white transition-all">
                    <Link href="/blog" className="flex items-center">
                      <div className="relative w-1/3 aspect-square flex-shrink-0">
                        {postImage && (
                          <Image src={postImage.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={postImage.imageHint}/>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h4 className="font-bold text-primary text-sm md:text-base leading-tight italic group-hover:text-accent transition-colors">{post.title}</h4>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
            <Button asChild size="lg" className="w-full bg-primary hover:bg-accent text-white hover:text-accent-foreground transition-all duration-300 rounded-funky font-bold h-14">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
