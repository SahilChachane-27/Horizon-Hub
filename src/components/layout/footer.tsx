'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, Globe, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/compare', label: 'Compare' },
  { href: '/journals', label: 'Journal List' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/start-journal', label: 'Contact' },
];

const supportLinks = [
  { href: '/documentation', label: 'Documentation' },
  { href: '/blog', label: 'Blog' },
  { href: '/start-journal', label: 'Help Center' },
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
    <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8 border-t border-primary-foreground/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6" data-aos="fade-up">
            <div className="flex w-fit items-center gap-3 bg-white p-4 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
              <div className="bg-primary rounded-lg p-2">
                <span className="text-white font-black text-2xl leading-none">SJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none">Scholar<span className="text-primary ml-0.5">JMS</span></span>
                <span className="text-[10px] text-primary/60 font-bold uppercase tracking-wider">Next-Gen Journal Management</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-primary-foreground/70">
              The complete Journal Management System for academic journal publishing. Technical Journals provides secure, scalable, and ethical hosting exclusively for University-owned journals.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-bold text-lg text-primary-foreground mb-6">Platform</h5>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-6">Company</h5>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="font-bold text-lg text-primary-foreground mb-6">Support</h5>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Startup India Banner */}
        <div className="mb-12" data-aos="fade-up">
          <div className="bg-slate-50 border-2 border-orange-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 shadow-inner">
            <div className="flex items-center gap-4 border-b-2 md:border-b-0 md:border-r-2 border-orange-500/20 pb-6 md:pb-0 md:pr-8 shrink-0">
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
                <Image src="https://scholar9.com/assets/images/Startup%20India%20Logo.webp" alt="Startup India" width={64} height={64} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold">Startup India Registered</span>
                <span className="text-xs text-slate-500">DPIIT Recognized | Make in India</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
              <a href="mailto:scholarjms@gmail.com" className="flex items-center gap-3 text-sm text-slate-700 hover:text-primary transition-colors group">
                <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Email Support</span>
                  <span className="font-medium">scholarjms@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918200385143" className="flex items-center gap-3 text-sm text-slate-700 hover:text-primary transition-colors group">
                <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Mobile Support</span>
                  <span className="font-medium">+91 8200385143</span>
                </div>
              </a>
            </div>
            <div className="ml-auto flex gap-3">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          {isClient && (
            <>
              <p className="text-xs text-primary-foreground/50">
                © {year} Technical Journals | SRND | Licensed under CC BY 4.0. <br className="md:hidden" /> All Rights Reserved.
              </p>
              <p className="text-[10px] text-primary-foreground/30 font-medium uppercase tracking-widest">
                Enterprise Publishing Solutions | Empowering Academic Excellence
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
