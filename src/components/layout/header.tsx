'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/journals', label: 'Journals Hosted' },
  { href: '/for-universities', label: 'For Universities' },
  { href: '/pricing', label: 'Subscription Plans' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ inSheet }: { inSheet?: boolean }) => (
    <>
      {navLinks.map((link) => {
        const className = cn(
          "text-lg lg:text-[10px] xl:text-xs font-bold transition-all whitespace-nowrap uppercase tracking-wider",
          scrolled ? "text-primary-foreground/80 hover:text-accent" : "text-white/80 hover:text-accent"
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-xl border-b border-accent/20 py-2' : 'bg-primary py-4'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-white rounded-lg p-1.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary font-black text-xl leading-none">TJ</span>
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-bold text-accent font-headline leading-none">
                Technical<span className="ml-0.5">Journals</span>
              </div>
              <span className="text-[8px] text-white/60 tracking-widest uppercase font-bold">University Journal Hosting</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <nav className="flex items-center space-x-3 xl:space-x-5">
              <NavContent />
            </nav>
            <Button asChild className="bg-accent hover:bg-white hover:text-primary text-accent-foreground rounded-funky transition-all duration-300 hover:scale-105 shadow-lg h-10 px-6 font-bold text-xs">
              <Link href="/start-journal">Begin your Research Journey</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary border-l-accent/20 text-white w-72 p-6 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="text-accent text-left font-headline italic">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-6 mt-10">
                    <NavContent inSheet />
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-white hover:text-primary text-accent-foreground mt-4 rounded-funky transition-all font-bold">
                        <Link href="/start-journal">Begin Research Journey</Link>
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
