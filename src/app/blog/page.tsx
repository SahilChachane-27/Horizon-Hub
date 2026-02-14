// @ts-nocheck
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, User, Search, Linkedin, Twitter, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function BlogHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'blog-hero-bg');
  return (
    <section id="blog-hero" className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg font-headline">
          Horizon Insights
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Expert perspectives, industry trends, and project stories from the leaders in real estate development and construction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="#featured-post">Featured Article</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="#blog-articles">Browse Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const featuredPost = {
  id: 'featured-post',
  category: 'Featured Article',
  title: 'The Future of Sustainable Construction: Innovations Shaping 2026',
  date: 'June 15, 2026',
  readTime: '8 min read',
  author: 'Michael Chen',
  excerpt: 'As we move further into the decade, sustainable construction practices are evolving beyond basic energy efficiency. From carbon-neutral building materials to AI-driven energy management systems, discover how technology and innovation are creating buildings that give back to the environment rather than just taking less.'
};

function FeaturedPost() {
  const postImage = PlaceHolderImages.find(p => p.id === featuredPost.id);
  return (
    <div id="featured-post" className="mb-12">
      <Card className="overflow-hidden shadow-2xl">
        {postImage && (
          <div className="relative aspect-video">
            <Image src={postImage.imageUrl} alt={postImage.description} fill className="object-cover" data-ai-hint={postImage.imageHint}/>
          </div>
        )}
        <CardContent className="p-6 md:p-8">
          <span className="text-sm font-semibold text-accent mb-2 inline-block">{featuredPost.category}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{featuredPost.title}</h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {featuredPost.date}</div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {featuredPost.readTime}</div>
            <div className="flex items-center gap-2"><User className="h-4 w-4" /> By {featuredPost.author}</div>
          </div>
          <p className="text-foreground/80 mb-6">{featuredPost.excerpt}</p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#">Read Full Article</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const blogPosts = [
  { id: 'blog-post-1', category: 'Urban Development', title: 'Revitalizing Urban Spaces: The Rise of Mixed-Use Communities', date: 'May 28, 2026', readTime: '6 min read', excerpt: 'How integrated residential-commercial developments are transforming city landscapes and creating more sustainable, walkable communities.' },
  { id: 'blog-post-2', category: 'Residential Design', title: '2026 Luxury Home Trends: What High-End Buyers Are Looking For', date: 'May 12, 2026', readTime: '7 min read', excerpt: 'From wellness-focused design elements to smart home integration, explore the features that define luxury residential properties in today\'s market.' },
  { id: 'blog-post-3', category: 'Commercial Real Estate', title: 'The Evolution of Office Spaces: Post-Pandemic Design Strategies', date: 'April 30, 2026', readTime: '9 min read', excerpt: 'How hybrid work models are reshaping commercial office design, with a focus on flexibility, collaboration spaces, and employee wellbeing.' },
  { id: 'blog-post-4', category: 'Technology', title: 'Building with Robotics: How Automation is Transforming Construction', date: 'April 18, 2026', readTime: '10 min read', excerpt: 'From autonomous machinery to 3D printing and drone surveying, explore how robotics are increasing efficiency and safety on construction sites.' },
  { id: 'blog-post-5', category: 'Renovation', title: 'Historic Preservation Meets Modern Living: Renovation Case Study', date: 'April 5, 2026', readTime: '5 min read', excerpt: 'A detailed look at how we preserved the architectural integrity of a 1920s landmark while integrating contemporary amenities and systems.' },
  { id: 'blog-post-6', category: 'Market Insights', title: '2026 Real Estate Market Outlook: Trends to Watch', date: 'March 22, 2026', readTime: '8 min read', excerpt: 'An analysis of emerging trends in residential and commercial real estate, with predictions for the coming year based on current economic indicators.' },
];

function BlogGrid() {
  return (
    <div id="blog-articles" className="grid md:grid-cols-2 gap-8">
      {blogPosts.map(post => {
        const postImage = PlaceHolderImages.find(p => p.id === post.id);
        return(
          <Card key={post.id} className="overflow-hidden shadow-lg flex flex-col">
            {postImage && <div className="relative aspect-video"><Image src={postImage.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={postImage.imageHint} /></div>}
            <CardContent className="p-6 flex flex-col flex-grow">
              <span className="text-sm font-semibold text-accent mb-2">{post.category}</span>
              <h3 className="text-xl font-bold text-primary mb-3">{post.title}</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</div>
                <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</div>
              </div>
              <p className="text-foreground/70 mb-4 flex-grow">{post.excerpt}</p>
              <Button asChild variant="outline" size="sm" className="self-start">
                <Link href="#">Read More</Link>
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}

function BlogPagination() {
  return(
    <div className="flex justify-center items-center gap-2 mt-12">
      <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4"/></Button>
      <Button variant="outline" className="w-10 h-10 bg-accent text-accent-foreground">1</Button>
      <Button variant="outline" size="icon">2</Button>
      <Button variant="outline" size="icon">3</Button>
      <Button variant="outline" size="icon">4</Button>
      <Button variant="outline" size="icon">5</Button>
      <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4"/></Button>
    </div>
  )
}

const author = {
  id: 'author-bio',
  name: 'Michael Chen',
  title: 'Director of Design and Innovation at Horizon Group',
  bio: 'with over 15 years of experience in sustainable architecture and urban planning. His work has been featured in numerous industry publications, and he regularly speaks at international conferences on the future of construction.'
}

function AuthorBio() {
  const authorImage = PlaceHolderImages.find(p => p.id === author.id);
  return (
    <div className="mt-12 bg-secondary p-6 rounded-lg">
      <Card className="bg-card flex flex-col sm:flex-row items-center gap-6 p-6">
        {authorImage && <Image src={authorImage.imageUrl} alt={author.name} width={100} height={100} className="rounded-full flex-shrink-0" data-ai-hint={authorImage.imageHint} />}
        <div>
          <h4 className="text-xl font-bold text-primary mb-2">About the Editor</h4>
          <p className="text-foreground/80"><span className="font-bold">{author.name}</span> is the {author.title} {author.bio}</p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5"/></Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

const categories = [
  { name: 'Residential Construction', count: 12 },
  { name: 'Commercial Projects', count: 8 },
  { name: 'Sustainable Design', count: 15 },
  { name: 'Urban Development', count: 7 },
  { name: 'Renovation & Remodeling', count: 10 },
  { name: 'Industry News', count: 6 },
  { name: 'Technology & Innovation', count: 9 },
];

const recentPosts = [
  { id: 'recent-post-1', title: 'Exterior Renovation Trends for 2026', date: 'June 10, 2026' },
  { id: 'recent-post-2', title: 'Smart Home Integration in New Developments', date: 'June 3, 2026' },
  { id: 'recent-post-3', title: 'Mixed-Use Development Success Stories', date: 'May 25, 2026' },
];

const tags = ['Sustainability', 'Design', 'Innovation', 'LEED', 'Smart Homes', 'Urban Planning', 'Luxury', 'Renovation', 'Technology', 'Market Trends'];

function BlogSidebar() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <aside className="space-y-8">
      <Card className="p-6">
        <CardHeader className="p-0 mb-4"><CardTitle>Search Articles</CardTitle></CardHeader>
        <div className="relative">
          <Input placeholder="Search blog..." className="pr-10"/>
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
            <Search className="h-4 w-4"/>
          </Button>
        </div>
      </Card>
      <Card className="p-6">
        <CardHeader className="p-0 mb-4"><CardTitle>Categories</CardTitle></CardHeader>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat.name}>
              <Link href="#" className="flex justify-between items-center text-foreground/80 hover:text-accent">
                <span>{cat.name}</span>
                <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="p-6">
        <CardHeader className="p-0 mb-4"><CardTitle>Recent Posts</CardTitle></CardHeader>
        <div className="space-y-4">
          {recentPosts.map(post => {
            const postImage = PlaceHolderImages.find(p => p.id === post.id);
            return (
              <div key={post.id} className="flex items-center gap-4">
                {postImage && <Image src={postImage.imageUrl} alt={post.title} width={80} height={60} className="rounded-md object-cover" data-ai-hint={postImage.imageHint} />}
                <div>
                  <h6 className="font-semibold text-sm leading-snug hover:text-accent"><Link href="#">{post.title}</Link></h6>
                  <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>
       <Card className="p-6">
        <CardHeader className="p-0 mb-4"><CardTitle>Popular Tags</CardTitle></CardHeader>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <Button key={tag} variant="outline" size="sm" asChild>
              <Link href="#">{tag}</Link>
            </Button>
          ))}
        </div>
      </Card>
      <Card className="p-6 bg-secondary">
        <CardHeader className="p-0 mb-4"><CardTitle>Subscribe to Our Newsletter</CardTitle></CardHeader>
        <p className="text-foreground/70 mb-4">Get the latest insights, trends, and project updates delivered to your inbox.</p>
        {isClient && (
        <form className="space-y-4" suppressHydrationWarning>
          <Input type="email" placeholder="Your email address" />
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
        </form>
        )}
      </Card>
    </aside>
  );
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <BlogHero />
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FeaturedPost />
                <BlogGrid />
                <BlogPagination />
                <AuthorBio />
              </div>
              <div>
                <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
