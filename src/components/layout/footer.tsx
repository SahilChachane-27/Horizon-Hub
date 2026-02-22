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
  { href: '/#hero', label: 'Home' },
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Our Services' },
  { href: '/#projects', label: 'Hosted Journals' },
  { href: '/#contact', label: 'Inquiry' },
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
            <Link href="/" className="flex flex-col leading-tight font-headline transition-opacity hover:opacity-80">
                <span className="text-2xl font-bold text-accent">Technical Journals</span>
                <span className="text-[11px] font-medium text-accent/80 tracking-[0.2em] uppercase">University Journal Hosting</span>
            </Link>
            <p className="text-sm">
              Empowering academic institutions with secure, scalable, and professional journal hosting since 2024.
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
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Platform Info</h5>
            <p className="text-sm leading-relaxed">
              Exclusively for Universities.<br />
              Secure ScholarJMS Hosting.<br />
              Institutional Branding.<br />
              No Private Publishers.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="space-y-4">
              <h5 className="font-bold text-lg text-primary-foreground">Contact Us</h5>
              <p className="text-sm">
                Email: support@technicaljournals.org<br />
                Mobile: +91 8200385143
              </p>
              {isClient && (
                <form className="flex gap-2">
                  <Input type="email" placeholder="Your Email" className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20" />
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky">Go</Button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm" data-aos="fade-up">
          {isClient && <p>© {year} Technical Journals. All Rights Reserved.</p>}
        </div>
      </div>
    </footer>
  );
}
