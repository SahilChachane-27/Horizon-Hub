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
  { href: '/#hero', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#why-us', label: 'Why Us' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' },
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
        const isPageLink = link.href.startsWith('/');
        const className = "text-lg md:text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors";

        if (isPageLink) {
          if (inSheet) {
            return (
              <SheetClose asChild key={link.href}>
                <Link href={link.href} className={className}>
                  {link.label}
                </Link>
              </SheetClose>
            );
          }
          return (
            <Link key={link.href} href={link.href} className={className}>
              {link.label}
            </Link>
          );
        }

        // Anchor link
        if (inSheet) {
          return (
            <SheetClose asChild key={link.href}>
              <a href={link.href} className={className}>
                {link.label}
              </a>
            </SheetClose>
          );
        }
        return (
          <a key={link.href} href={link.href} className={className}>
            {link.label}
          </a>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary shadow-md' : 'bg-transparent md:bg-gradient-to-b md:from-black/50'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center text-2xl font-bold text-accent font-headline">
            <span>Horizon Group</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavContent />
          </nav>

          <div className="md:hidden">
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary border-l-0 text-primary-foreground w-64 p-6">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-6 mt-8">
                    <NavContent inSheet />
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
