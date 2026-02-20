
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, FileText, MonitorPlay, MapPin } from 'lucide-react';

const contactOptions = [
  { icon: Mail, title: "Support Email", text: "support@technicaljournals.org" },
  { icon: Phone, title: "Partnership Phone", text: "+91 8200385143" },
  { icon: FileText, title: "University MoU", text: "Discuss legal & partnership formalities" },
  { icon: MonitorPlay, title: "Hosting Demo", text: "Request a custom ScholarJMS technical demo" }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Connect with Us</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
              Our academic partnership team is here to help you navigate the setup and growth of your university journal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactOptions.map((opt, i) => (
              <Card key={i} className="rounded-funky text-center border-none bg-secondary shadow-md hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <opt.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{opt.title}</h4>
                  <p className="text-sm text-foreground/70 font-medium">{opt.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
