'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, BookOpen, ChevronDown } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/journals', label: 'Journals Hosted' },
  { href: '/contact', label: 'For Universities' },
  { href: '#', label: 'Resources' },
  { href: '#', label: 'Subscription Plans' },
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-primary shadow-md' : 'bg-transparent md:bg-gradient-to-b md:from-black/50'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              if (link.items) {
                return (
                  <DropdownMenu key={idx}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-xs 2xl:text-sm font-medium text-white/80 hover:text-white transition-colors outline-none">
                      {link.label} <ChevronDown className="h-3 w-3" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-primary border-white/10 text-white min-w-[220px]">
                      {link.items.map((item, iIdx) => (
                        <DropdownMenuItem key={iIdx} asChild className="focus:bg-accent focus:text-accent-foreground cursor-pointer">
                          <Link href={item.href}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
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
            {isClient && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary border-l-0 text-white w-80 p-6 overflow-y-auto">
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <SheetDescription>
                      Access all pages and resources of Technical Journals.
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col items-start space-y-4 mt-8">
                    <Accordion type="single" collapsible className="w-full text-white">
                      {navLinks.map((link, idx) => {
                        if (link.items) {
                          return (
                            <AccordionItem value={`item-${idx}`} key={idx} className="border-white/10">
                              <AccordionTrigger className="text-white/80 hover:text-white hover:no-underline">
                                {link.label}
                              </AccordionTrigger>
                              <AccordionContent className="flex flex-col gap-3 pl-4 pt-2">
                                {link.items.map((item, iIdx) => (
                                  <SheetClose asChild key={iIdx}>
                                    <Link href={item.href} className="text-sm text-white/60 hover:text-white">
                                      {item.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </AccordionContent>
                            </AccordionItem>
                          );
                        }
                        return (
                          <div key={idx} className="py-4 border-b border-white/10">
                            <SheetClose asChild>
                              <Link href={link.href!} className="text-white/80 hover:text-white font-medium">
                                {link.label}
                              </Link>
                            </SheetClose>
                          </div>
                        );
                      })}
                    </Accordion>
                    <SheetClose asChild>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-funky mt-6">
                        <Link href="/contact">Begin your Research Journey</Link>
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