'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Mail, PhoneCall, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/journals', label: 'Journals Hosted' },
  { href: '/pricing', label: 'Subscription Plans' },
  { href: '/contact', label: 'Contact Us' },
];

const policyLinks = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Hosting Agreement' },
  { href: '#', label: 'Ethics & Guidelines' },
  { href: '#', label: 'Accessibility Statement' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
          <div className="lg:col-span-2 space-y-8" data-aos="fade-up">
            <div className="flex w-fit items-center gap-3 bg-white p-4 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 border border-accent/10">
              <div className="bg-primary rounded-lg p-2">
                <span className="text-white font-black text-2xl leading-none">TJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none font-headline italic">Technical<span className="text-primary ml-0.5">Journals</span></span>
                <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest">Academic Excellence</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-primary-foreground/70 font-medium">
              The premier ScholarJMS hosting platform exclusively for University-owned academic research. Empowering institutions through robust technology and research visibility.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="h-12 w-12 bg-white/10 rounded-xl shadow-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500 hover:-translate-y-1">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-white mb-8 font-headline italic border-b border-accent/30 pb-2 inline-block">Quick Links</h5>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
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
            <h5 className="font-bold text-lg text-white mb-8 font-headline italic border-b border-accent/30 pb-2 inline-block">Policies</h5>
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-bold text-primary-foreground/60 hover:text-accent flex items-center gap-2 group transition-colors">
                    <ChevronRight className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16 relative z-10" data-aos="fade-up">
          <div className="bg-white/5 border-2 border-accent/20 rounded-[30px] p-8 flex flex-col md:flex-row items-center gap-10 shadow-2xl backdrop-blur-sm group hover:border-accent/40 transition-all duration-500">
            <div className="flex items-center gap-6 border-b-2 md:border-b-0 md:border-r-2 border-accent/10 pb-8 md:pb-0 md:pr-10 shrink-0">
              <div className="relative w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-2xl transition-transform group-hover:scale-110 duration-500">
                <Image 
                  src="https://scholar9.com/assets/images/Startup%20India%20Logo.webp" 
                  alt="Startup India" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg font-headline italic leading-none mb-1">Startup India Registered</span>
                <span className="text-[10px] text-accent font-black uppercase tracking-widest">DPIIT Recognized | Make in India</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
              <a href="mailto:scholarjms@gmail.com" className="flex items-center gap-4 text-sm text-primary-foreground/80 hover:text-accent transition-all group">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-tighter">Institutional Support</span>
                  <span className="font-bold tracking-tight italic">scholarjms@gmail.com</span>
                </div>
              </a>
              <div className="flex items-center gap-4 text-sm text-primary-foreground/80 transition-all group">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center shadow-xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-tighter">Partnerships</span>
                  <span className="font-bold tracking-tight italic">+91 8200385143</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/10 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left relative z-10">
          {isClient && (
            <>
              <p className="text-xs text-primary-foreground/40 font-bold uppercase tracking-widest">
                © {year} Technical Journals | SRND | Licensed under CC BY 4.0. <br className="md:hidden" /> ALL RIGHTS RESERVED.
              </p>
              <p className="text-[10px] text-accent/40 font-black uppercase tracking-[0.3em] italic">
                Driving Academic Excellence through Integrated ScholarJMS
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
