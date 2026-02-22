'use client';

import { Card } from '@/components/ui/card';
import { 
  Award, 
  Share2, 
  GraduationCap, 
  Lock, 
  ExternalLink, 
  BookOpen, 
  LifeBuoy, 
  Database, 
  Network, 
  FileCheck 
} from 'lucide-react';

const badges = [
  {
    title: 'DPIIT Startup India',
    desc: 'Startup India DPIIT Recognized Startup',
    icon: Award,
  },
  {
    title: 'Creative Commons',
    desc: 'Creative Commons license',
    icon: Share2,
  },
  {
    title: 'UGC CARE',
    desc: 'Compliance Ready Platform',
    icon: GraduationCap,
  },
  {
    title: 'SSL Encrypted',
    desc: 'Bank-Grade Security',
    icon: Lock,
  },
  {
    title: 'CrossRef Partner',
    desc: 'Official DOI Registration',
    icon: ExternalLink,
  },
  {
    title: 'DOAJ',
    desc: 'Compliance Ready Platform',
    icon: BookOpen,
  },
  {
    title: '24/7 Support',
    desc: 'Always Here to Help',
    icon: LifeBuoy,
  },
  {
    title: 'Scopus',
    desc: 'Compliance Ready Platform',
    icon: Database,
  },
  {
    title: 'Web of Science',
    desc: 'Compliance Ready Platform',
    icon: Network,
  },
  {
    title: 'Ithenticate',
    desc: 'Smart Plagiarism Checker',
    icon: FileCheck,
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">
            Trusted & Certified by Leading Organizations
          </h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map((badge, index) => (
            <Card 
              key={index} 
              className="p-6 flex flex-col items-center text-center bg-card hover:shadow-xl transition-all duration-300 border-none rounded-funky group"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-full group-hover:bg-accent/20 transition-colors">
                <badge.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-sm mb-1">{badge.title}</h3>
              <p className="text-[10px] text-foreground/60 leading-tight">{badge.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
