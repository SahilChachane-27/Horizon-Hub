'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
<<<<<<< HEAD
import { Card, CardContent } from '@/components/ui/card';
import { Mail, PhoneCall, MapPin, Building } from "lucide-react";

const contactOptions = [
  { icon: Mail, title: "Email Inquiry", text: "contact@horizongroup.com" },
  { icon: PhoneCall, title: "Project Hotline", text: "+1 (555) 000-1111" },
  { icon: MapPin, title: "Our Headquarters", text: "123 Construction Plaza, Manhattan, NY" },
  { icon: Building, title: "Project Consult", text: "Schedule a site visit or office meeting" }
];
=======
import { ScrollToTop } from '@/components/layout/scroll-to-top';
>>>>>>> old-work

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
<<<<<<< HEAD
      <main className="flex-1 pt-16">
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary pt-32 pb-24">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white font-headline">
                Start Your Project with Horizon Group
              </h1>
              <p className="max-w-5xl mx-auto text-lg sm:text-xl text-white/90 font-medium italic">
                From initial concept to final construction, our team is ready to bring your vision to life.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
                <a 
                  href="mailto:contact@horizongroup.com" 
                  className="flex items-center gap-2 hover:text-white transition-colors border-r border-white/20 pr-8"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-bold">Email:</span> contact@horizongroup.com
                </a>
                <a 
                  href="tel:+15550001111" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-bold">Phone:</span> +1 (555) 000-1111
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
=======
      <main className="flex-1 pt-20">
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" data-aos="fade-up">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Ready to launch your university journal? Get in touch with our specialist academic hosting team.
            </p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
>>>>>>> old-work
    </div>
  );
}
