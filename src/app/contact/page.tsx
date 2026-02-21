'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, PhoneCall, BookOpen, Microscope } from "lucide-react";

const contactOptions = [
  { icon: Mail, title: "Support Email", text: "support@technicaljournals.org" },
  { icon: PhoneCall, title: "Partnership Phone", text: "+91 8200385143" },
  { icon: BookOpen, title: "University MoU", text: "Discuss legal & partnership formalities" },
  { icon: Microscope, title: "Hosting Demo", text: "Request a custom ScholarJMS technical demo" }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary pt-32 pb-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white font-headline">
                Connect with Technical Journals
              </h1>
              <p className="max-w-5xl mx-auto text-lg sm:text-xl text-white/90 font-medium italic">
                Our academic partnership team is here to help you navigate the setup and growth of your university journal.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
                <a 
                  href="mailto:support@technicaljournals.org" 
                  className="flex items-center gap-2 hover:text-white transition-colors border-r border-white/20 pr-8"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-bold">Email:</span> support@technicaljournals.org
                </a>
                <a 
                  href="tel:+918200385143" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-bold">Mobile:</span> +91 8200385143
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactOptions.map((opt, i) => (
                <Card key={i} className="rounded-funky text-center border-none bg-secondary/50 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-accent transition-colors">
                      <opt.icon className="h-6 w-6 text-accent group-hover:text-white" />
                    </div>
                    <h4 className="font-bold text-primary mb-2 font-headline">{opt.title}</h4>
                    <p className="text-sm text-foreground/70 font-medium">{opt.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
