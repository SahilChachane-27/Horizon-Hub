
'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/journals', label: 'Journals' },
  { href: '/pricing', label: 'Subscription' },
  { href: '/contact', label: 'Contact' },
];

const policyLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Hosting Agreement' },
  { href: '#', label: 'Ethics & Guidelines' },
  { href: '#', label: 'Accessibility Statement' },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4" data-aos="fade-up">
            <Link href="/" className="flex items-center text-2xl font-bold text-accent font-headline">
                <span>Technical Journals</span>
            </Link>
            <p className="text-sm">
              Technical Journals provides secure, scalable, and ethical journal hosting exclusively for University-owned academic journals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Policies</h5>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="space-y-4">
              <h5 className="font-bold text-lg text-primary-foreground">University Demo</h5>
              <p className="text-sm">
                Request a demo for your university's ScholarJMS hosting setup.
              </p>
              {isClient && (
                <div className="flex gap-2">
                  <Input type="email" placeholder="Business Email" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20" />
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky">Demo</Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm">
          {isClient && <p>© {year} Technical Journals. All Rights Reserved.</p>}
        </div>
      </div>
    </footer>
  );
}
