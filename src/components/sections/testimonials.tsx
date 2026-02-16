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
      'Horizon Group transformed our vision into reality with exceptional attention to detail. The quality of construction and their professional approach throughout the project was outstanding.',
    name: 'Robert Johnson',
    title: 'CEO, Johnson Enterprises',
  },
  {
    id: 'testimonial-2',
    quote:
      'Working with Horizon Group was a seamless experience. They delivered our commercial complex ahead of schedule without compromising on quality. Highly recommended!',
    name: 'Sarah Williams',
    title: 'Director, Urban Developments Inc.',
  },
  {
    id: 'testimonial-3',
    quote:
      "The renovation of our corporate headquarters exceeded all expectations. Horizon Group's team was professional, innovative, and delivered exceptional results.",
    name: 'Michael Chen',
    title: 'CFO, TechVantage Solutions',
  },
  {
    id: 'testimonial-4',
    quote:
      'The custom home they built for my family is a masterpiece. The craftsmanship is impeccable, and they brought our dream to life perfectly.',
    name: 'Emily Davis',
    title: 'Homeowner',
  },
  {
    id: 'testimonial-5',
    quote:
      "From land acquisition to final sales, Horizon Group's development expertise is unparalleled. They delivered a highly profitable and beautifully designed community.",
    name: 'David Rodriguez',
    title: 'Real Estate Investor',
  },
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Client Testimonials
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
            What our clients say about working with Horizon Group.
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
                    <Card className="bg-card shadow-lg rounded-[70px] h-full flex flex-col">
                      <CardContent className="p-8 md:p-12 text-center flex flex-col items-center flex-1">
                        <p className="text-lg md:text-xl text-foreground/80 mb-6 italic flex-grow">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4">
                          {testimonialImage && (
                            <Image
                              src={testimonialImage.imageUrl}
                              alt={`Portrait of ${testimonial.name}`}
                              width={64}
                              height={64}
                              className="rounded-full"
                              data-ai-hint={testimonialImage.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-bold text-lg text-primary">
                              {testimonial.name}
                            </p>
                            <p className="text-foreground/70">
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
