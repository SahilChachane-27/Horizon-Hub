
'use client';

import Link from 'next/link';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ArticleSummarizer } from '@/components/summarizer';
import { useEffect, useState } from 'react';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const quickLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/residential-construction', label: 'Residential Construction' },
  { href: '/commercial-projects', label: 'Commercial Projects' },
  { href: '/real-estate-development', label: 'Real Estate Development' },
  { href: '/renovation-remodeling', label: 'Renovation & Remodeling' },
  { href: '/blog', label: 'Blog' },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4" data-aos="fade-up">
            <Link href="#hero" className="flex items-center gap-2 text-2xl font-bold text-primary-foreground">
                <Building2 className="h-7 w-7 text-accent" />
                <span>Horizon Group</span>
            </Link>
            <p className="text-sm">
              Building dreams and creating landmarks through innovative real estate development and premium construction services since 1998.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href} data-aos="fade-right" data-aos-delay={150 * (index + 1)}>
                  <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Our Services</h5>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={link.label} data-aos="fade-left" data-aos-delay={150 * (index + 1)}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            {isClient && <ArticleSummarizer suppressHydrationWarning />}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm" suppressHydrationWarning data-aos="fade-up">
          {isClient && <p suppressHydrationWarning>© {year} Horizon Group. All Rights Reserved.</p>}
        </div>
      </div>
    </footer>
  );
}
