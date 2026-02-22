'use client';

import Link from 'next/link';
<<<<<<< HEAD
import { Twitter, Linkedin, Instagram, Mail, PhoneCall, ChevronRight, MapPin } from 'lucide-react';
=======
import { Facebook, Twitter, Linkedin, Instagram, BookOpen } from 'lucide-react';
>>>>>>> old-work
import { useEffect, useState } from 'react';

<<<<<<< HEAD
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
=======
const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Instagram, href: '#' },
];

const platformLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/pricing#compare', label: 'Compare' },
  { href: '/journals', label: 'List of Journal' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '#', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

const supportLinks = [
  { href: '/resources', label: 'Documentation' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Help Center' },
>>>>>>> old-work
];

export function Footer() {
  const [year, setYear] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsClient(true);
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Branding & Info */}
          <div className="space-y-6 lg:col-span-1" data-aos="fade-up">
            <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-opacity hover:opacity-80">
                <BookOpen className="h-8 w-8 text-accent" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-accent">Technical Journals</span>
                  <span className="text-[11px] font-medium text-accent/80 tracking-[0.2em] uppercase">University Journal Hosting</span>
                </div>
            </Link>
            <div className="text-sm leading-relaxed space-y-2">
              <p>Empowering academic institutions with secure, scalable, and professional journal hosting since 2024.</p>
              <div className="pt-2">
                <p className="font-bold text-accent mb-1">Platform Info:</p>
                <ul className="text-xs space-y-1 opacity-80">
                  <li>• Exclusively for Universities</li>
                  <li>• Secure ScholarJMS Hosting</li>
                  <li>• Institutional Branding</li>
                  <li>• No Private Publishers</li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
>>>>>>> old-work
            </div>
          </div>

          {/* Column 2: Platform */}
          <div data-aos="fade-up" data-aos-delay="100">
<<<<<<< HEAD
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
=======
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Platform</h5>
            <ul className="space-y-3 text-sm">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
>>>>>>> old-work
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-8">
            <h5 className="font-bold text-lg text-white mb-8 font-headline uppercase border-b border-accent/30 pb-2 inline-block">Newsletter</h5>
            <p className="text-sm text-primary-foreground/70">Subscribe to receive updates on our latest projects and industry insights.</p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="h-12 w-12 bg-white/10 rounded-xl shadow-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500 hover:-translate-y-1">
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
=======
          {/* Column 3: Company */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Company</h5>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="font-bold text-lg text-primary-foreground mb-4 font-headline">Support</h5>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="space-y-6">
              <h5 className="font-bold text-lg text-primary-foreground font-headline">Get in Touch</h5>
              <div className="text-sm space-y-1">
                <p>Email: support@technicaljournals.org</p>
                <p>Mobile: +91 8200385143</p>
              </div>
              {isClient && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider font-bold text-accent">Join Our Newsletter</p>
                  <form className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Email Address" 
                      className="bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/40 border-primary-foreground/10 focus-visible:ring-accent" 
                    />
                    <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky px-4">Go</Button>
                  </form>
                </div>
              )}
>>>>>>> old-work
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        <div className="border-t border-primary-foreground/10 pt-8 text-center text-xs tracking-widest text-primary-foreground/40 uppercase" data-aos="fade-up">
          {isClient && <p>© {year} Technical Journals. All Rights Reserved. Built for Academic Sovereignty.</p>}
>>>>>>> old-work
        </div>
      </div>
    </footer>
  );
}
