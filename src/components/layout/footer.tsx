
'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4" data-aos="fade-up">
            <Link href="/" className="flex items-center text-2xl font-bold text-accent font-headline">
                <span>Technical Journals</span>
            </Link>
            <p className="text-sm leading-relaxed">
              The complete Journal Management System for academic publishing. Technical Journals provides secure, scalable, and ethical hosting exclusively for University-owned journals.
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
            <h5 className="font-bold text-lg text-primary-foreground mb-4">Platform</h5>
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
                Request a technical demo for your university's ScholarJMS hosting setup.
              </p>
              {isClient && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input type="email" placeholder="Business Email" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 placeholder:text-primary-foreground/40" />
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-funky px-6">Demo</Button>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-primary-foreground/10">
                    <a href="tel:+918200385143" className="flex items-center gap-2 text-xs hover:text-accent transition-colors">
                      <PhoneCall className="h-3 w-3" /> +91 8200385143
                    </a>
                    <a href="mailto:support@technicaljournals.org" className="flex items-center gap-2 text-xs hover:text-accent transition-colors">
                      <Mail className="h-3 w-3" /> support@technicaljournals.org
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          {isClient && (
            <>
              <p>© {year} Technical Journals | SRND. Licensed under CC BY 4.0.</p>
              <p className="text-primary-foreground/40">Enterprise Publishing Solutions | Driving academic excellence through integrated journal systems.</p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
