'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Menu, X } from 'lucide-react';
=======
import { Menu, BookOpen } from 'lucide-react';
>>>>>>> old-work
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
<<<<<<< HEAD
  { href: '/residential-construction', label: 'Residential' },
  { href: '/commercial-projects', label: 'Commercial' },
  { href: '/real-estate-development', label: 'Development' },
  { href: '/renovation-remodeling', label: 'Renovation' },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
=======
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/journals', label: 'Journals Hosted' },
  { href: '/for-universities', label: 'For Universities' },
  { href: '/resources', label: 'Resources' },
  { href: '/pricing', label: 'Subscription Plans' },
  { href: '/contact', label: 'Contact Us' },
>>>>>>> old-work
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const NavContent = ({ inSheet }: { inSheet?: boolean }) => (
    <>
      {navLinks.map((link) => {
        const className = cn(
          "text-sm font-bold transition-all whitespace-nowrap uppercase tracking-wider",
          inSheet 
            ? "text-lg text-white/80 hover:text-accent py-2" 
            : "text-white/80 hover:text-accent lg:text-[10px] xl:text-xs"
        );

        if (inSheet) {
          return (
            <SheetClose asChild key={link.label}>
              <Link href={link.href} className={className}>
                {link.label}
              </Link>
            </SheetClose>
          );
        }
        return (
          <Link key={link.label} href={link.href} className={className}>
            {link.label}
          </Link>
        );
      })}
    </>
  );

=======
>>>>>>> old-work
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary shadow-xl py-2 border-b border-accent/10' : 'bg-primary/90 backdrop-blur-md py-4'
      )}
    >
<<<<<<< HEAD
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-white rounded-lg p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-black text-xl leading-none tracking-tighter">HG</span>
            </div>
            <div className="flex flex-col">
              <div className="text-lg md:text-xl font-bold text-accent font-headline leading-none uppercase">
                Horizon<span className="ml-0.5 text-white">Group</span>
              </div>
              <span className="text-[8px] text-white/60 tracking-widest uppercase font-bold">Construction & Development</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <nav className="flex items-center space-x-3 xl:space-x-5">
              <NavContent />
            </nav>
            <Button asChild className="bg-accent hover:bg-white hover:text-primary text-accent-foreground rounded-funky transition-all duration-300 hover:scale-105 shadow-lg h-10 px-6 font-bold text-[10px] xl:text-xs uppercase">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <div className="lg:hidden">
=======
      <div className="container mx-auto px-8 md:px-16 lg:px-32">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 leading-tight font-headline transition-transform hover:scale-[1.02]">
            <BookOpen className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-accent">Technical Journals</span>
              <span className="text-[10px] md:text-[11px] font-medium text-white/80 tracking-[0.15em] uppercase leading-tight">University Journal Hosting</span>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center space-x-3">
            {navLinks.map((link, idx) => {
              return (
                <Link key={idx} href={link.href!} className="text-xs 2xl:text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky ml-2 text-xs">
              <Link href="/contact">Begin your Research Journey</Link>
            </Button>
          </nav>

          <div className="xl:hidden">
>>>>>>> old-work
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
<<<<<<< HEAD
                <SheetContent side="right" className="bg-primary border-l-accent/20 text-white w-[280px] sm:w-[350px] p-6 overflow-y-auto">
                  <SheetHeader className="mb-8 border-b border-accent/10 pb-4">
                    <SheetTitle className="text-accent text-left font-headline italic text-2xl uppercase">Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-4">
                    <NavContent inSheet />
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-white hover:text-primary text-accent-foreground mt-6 rounded-funky transition-all font-bold uppercase">
                        <Link href="/contact">Contact Us Today</Link>
=======
                <SheetContent side="right" className="bg-primary border-l-0 text-white w-80 p-6 overflow-y-auto">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      Access all pages and resources of Technical Journals.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-4 mt-8">
                    {navLinks.map((link, idx) => (
                      <div key={idx} className="py-4 border-b border-white/10 w-full text-left">
                        <SheetClose asChild>
                          <Link href={link.href!} className="text-white/80 hover:text-white font-medium block w-full">
                            {link.label}
                          </Link>
                        </SheetClose>
                      </div>
                    ))}
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky mt-6">
                        <Link href="/contact">Begin your Research Journey</Link>
>>>>>>> old-work
                      </Button>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
