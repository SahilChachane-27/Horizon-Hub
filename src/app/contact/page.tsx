
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Contact } from '@/components/sections/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, PhoneCall, Microscope, FlaskConical, BookOpen, Atom, Dna } from "lucide-react";
import { useEffect, useState } from "react";

const contactOptions = [
  { icon: Mail, title: "Support Email", text: "support@technicaljournals.org" },
  { icon: PhoneCall, title: "Partnership Phone", text: "+91 8200385143" },
  { icon: BookOpen, title: "University MoU", text: "Discuss legal & partnership formalities" },
  { icon: Microscope, title: "Hosting Demo", text: "Request a custom ScholarJMS technical demo" }
];

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate random floating bubbles for visual consistency
  const bubbles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 10}s`,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Navy Blue */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-primary -mt-20 pt-32 pb-24">
          <div className="absolute inset-0">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-slate-900 opacity-95" />
            
            {/* Icons */}
            <div className="absolute top-1/4 left-[10%] animate-float opacity-10">
              <Microscope className="w-24 h-24 text-white" />
            </div>
            <div className="absolute top-1/3 right-[15%] animate-float opacity-10" style={{ animationDelay: '2s' }}>
              <FlaskConical className="w-20 h-20 text-white" />
            </div>
            <div className="absolute bottom-1/4 left-[15%] animate-float opacity-10" style={{ animationDelay: '1s' }}>
              <BookOpen className="w-28 h-28 text-white" />
            </div>
            <div className="absolute top-1/2 right-[10%] animate-float opacity-10" style={{ animationDelay: '3s' }}>
              <Atom className="w-32 h-32 text-white" />
            </div>
            <div className="absolute bottom-1/3 right-[20%] animate-float opacity-10" style={{ animationDelay: '1.5s' }}>
              <Dna className="w-24 h-24 text-white" />
            </div>

            {/* Bubbles */}
            {isClient && bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute w-1.5 h-1.5 bg-white/30 rounded-full animate-float"
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  animationDelay: bubble.delay,
                  animationDuration: bubble.duration,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white font-headline animate-slideUp">
                Connect with Technical Journals
              </h1>
              <p className="max-w-5xl mx-auto text-lg sm:text-xl text-white/90 animate-slideUp delay-200 font-medium italic">
                Our academic partnership team is here to help you navigate the setup and growth of your university journal.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 animate-slideUp delay-300">
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
          
          <div className="w-full absolute bottom-0 left-0 -mb-1 overflow-hidden">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" fillOpacity="0.95"></path>
            </svg>
          </div>
        </section>

        {/* Contact Quick Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactOptions.map((opt, i) => (
                <Card key={i} className="rounded-funky text-center border-none bg-secondary/50 shadow-md hover:shadow-xl transition-all group hover:-translate-y-1" data-aos="fade-up" data-aos-delay={i * 100}>
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
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translate(0); }
          25% { transform: translateY(-20px) translate(10px); }
          50% { transform: translateY(-10px) translate(-10px); }
          75% { transform: translateY(-30px) translate(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
    </div>
  );
}
