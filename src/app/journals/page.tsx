'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Projects } from '@/components/sections/projects';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

export default function JournalsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" data-aos="fade-up">
              University Journal Catalog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Explore the prestigious academic publications hosted on our secure, institutionally branded platform.
            </p>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
