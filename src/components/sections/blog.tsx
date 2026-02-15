// @ts-nocheck
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const featuredPost = {
  id: 'featured-post',
  category: 'Featured Article',
  title: 'The Future of Sustainable Construction',
  date: 'June 15, 2026',
  readTime: '8 min read',
  excerpt: 'Discover how technology and innovation are creating buildings that give back to the environment.'
};

const recentPosts = [
  { id: 'blog-post-1', title: 'Revitalizing Urban Spaces: The Rise of Mixed-Use Communities' },
  { id: 'blog-post-2', title: '2026 Luxury Home Trends: What Buyers Are Looking For' },
];

export function Blog() {
  const featuredImage = PlaceHolderImages.find(p => p.id === featuredPost.id);

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Horizon Insights</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore the latest trends, insights, and stories from the world of real estate and construction.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="overflow-hidden shadow-xl group" data-aos="fade-right">
            <Link href="/blog">
              {featuredImage && (
                <div className="relative aspect-video">
                  <Image
                    src={featuredImage.imageUrl}
                    alt={featuredImage.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={featuredImage.imageHint}
                  />
                </div>
              )}
              <CardContent className="p-6">
                <span className="text-sm font-semibold text-accent mb-2 inline-block">{featuredPost.category}</span>
                <h3 className="text-2xl font-bold text-primary mb-3">{featuredPost.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4" />{featuredPost.date}</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4" />{featuredPost.readTime}</div>
                </div>
                <p className="text-foreground/70">{featuredPost.excerpt}</p>
              </CardContent>
            </Link>
          </Card>
          <div className="space-y-6 flex flex-col justify-between" data-aos="fade-left">
            {recentPosts.map(post => {
              const postImage = PlaceHolderImages.find(p => p.id === post.id);
              return(
                <Card key={post.id} className="overflow-hidden shadow-lg group">
                  <Link href="/blog" className="flex items-center">
                    {postImage && (
                      <div className="relative w-1/3 aspect-square flex-shrink-0">
                        <Image src={postImage.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" data-ai-hint={postImage.imageHint}/>
                      </div>
                    )}
                    <CardContent className="p-4">
                      <h4 className="font-bold text-primary leading-snug">{post.title}</h4>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
             <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transform -skew-x-12">
              <Link href="/blog"><span className="inline-block transform skew-x-12">View All Articles</span></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
