'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'Technical Journals transformed our vision into reality with exceptional attention to detail. The quality of hosting and their professional approach throughout the project was outstanding.',
    name: 'Dr. Robert Johnson',
    title: 'Director of Research, Academic Excellence Univ.',
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with Technical Journals was a seamless experience. They delivered our institutional portal ahead of schedule without compromising on quality. Highly recommended!',
    name: 'Prof. Sarah Williams',
    title: 'Dean of Engineering, Global Tech Institute',
  },
  {
    id: 'testimonial-3',
    quote:
      "The setup of our university research journals exceeded all expectations. Technical Journals' team was professional, innovative, and delivered exceptional results.",
    name: 'Dr. Michael Chen',
    title: 'Chief Editor, Innovation & Science Journal',
  },
  {
    id: 'testimonial-4',
    quote:
      'The custom hosting portal they built for my department is a masterpiece. The workflow integration is impeccable, and they brought our dream to life perfectly.',
    name: 'Dr. Emily Davis',
    title: 'Journal Administrator',
  },
  {
    id: 'testimonial-5',
    quote:
      "From platform setup to indexing support, Technical Journals' academic expertise is unparalleled. They delivered a highly professional and beautifully designed ecosystem.",
    name: 'Dr. David Rodriguez',
    title: 'Dean, Medical Sciences Faculty',
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline">
            Academic Community Feedback
          </h2>
          <div className="mt-2 w-16 h-1 bg-accent mx-auto"></div>
          <p className="mt-4 text-sm md:text-base text-foreground/80 max-w-2xl mx-auto">
            Hear from university leadership and research directors who trust Technical Journals for their institutional publications.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          data-aos="fade-up"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map(testimonial => {
              const testimonialImage = PlaceHolderImages.find(
                p => p.id === testimonial.id
              );
              return (
                <CarouselItem key={testimonial.id} className="flex">
                  <div className="p-1 flex-1">
                    <Card className="bg-card shadow-lg rounded-funky h-full flex flex-col border-border/50">
                      <CardContent className="p-8 md:p-12 flex flex-col flex-1">
                        <p className="text-lg md:text-xl text-center text-foreground/80 mb-8 italic flex-grow leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                          <div className="relative h-14 w-14 shrink-0">
                            {testimonialImage && (
                              <Image
                                src={testimonialImage.imageUrl}
                                alt={`Portrait of ${testimonial.name}`}
                                fill
                                className="rounded-full object-cover border-2 border-accent/20"
                                data-ai-hint={testimonialImage.imageHint}
                              />
                            )}
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-lg text-primary">
                              {testimonial.name}
                            </p>
                            <p className="text-xs font-black text-accent uppercase tracking-widest">
                              {testimonial.title}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
