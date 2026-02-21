'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Mail, PhoneCall, ChevronRight, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const constructionLinks = [
  { href: '/residential-construction', label: 'Residential Construction' },
  { href: '/commercial-projects', label: 'Commercial Projects' },
  { href: '/real-estate-development', label: 'Real Estate Development' },
  { href: '/renovation-remodeling', label: 'Renovation & Remodeling' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Our Team' },
  { href: '/blog', label: 'News & Insights' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground/80 pt-20 pb-8 border-t border-accent/20 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mb-48 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          <div className="space-y-8" data-aos="fade-up">
            <Link href="/" className="flex w-fit items-center gap-3 bg-white p-4 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 border border-accent/10">
              <div className="bg-primary rounded-lg p-2">
                <span className="text-white font-black text-2xl leading-none tracking-tighter">HG</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none font-headline uppercase">Horizon<span className="text-primary ml-0.5">Group</span></span>
                <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">Building Excellence</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70 font-medium">
              Transforming visions into reality since 1998. We specialize in premium residential and commercial developments that define the skyline.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>123 Construction Plaza, Manhattan, NY</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <PhoneCall className="h-4 w-4 text-accent" />
                <span>+1 (555) 000-1111</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@horizongroup.com</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-white mb-8 font-headline uppercase border-b border-accent/30 pb-2 inline-block">Our Expertise</h5>
            <ul className="space-y-4">
              {constructionLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-primary-foreground/60 hover:text-accent flex items-center gap-2 group transition-colors">
                    <ChevronRight className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-white mb-8 font-headline uppercase border-b border-accent/30 pb-2 inline-block">Quick Links</h5>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-primary-foreground/60 hover:text-accent flex items-center gap-2 group transition-colors">
                    <ChevronRight className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="space-y-8">
            <h5 className="font-bold text-lg text-white mb-8 font-headline uppercase border-b border-accent/30 pb-2 inline-block">Newsletter</h5>
            <p className="text-sm text-primary-foreground/70">Subscribe to receive updates on our latest projects and industry insights.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="h-12 w-12 bg-white/10 rounded-xl shadow-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500 hover:-translate-y-1">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left relative z-10">
          {isClient && (
            <>
              <p className="text-xs text-primary-foreground/40 font-bold uppercase tracking-widest">
                © {year} Horizon Group. All Rights Reserved. <br className="md:hidden" /> Licensed Construction Firm #NY-12345.
              </p>
              <p className="text-[10px] text-accent/40 font-black uppercase tracking-[0.3em] italic">
                Quality Construction • Ethical Development • Innovative Design
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
