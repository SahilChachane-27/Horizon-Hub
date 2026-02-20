
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Code, Shield, Terminal } from 'lucide-react';

const docs = [
  { icon: Book, title: "User Guide", desc: "Learn how to manage your journal from start to finish." },
  { icon: Terminal, title: "API Reference", desc: "Integration guides for advanced indexing and tools." },
  { icon: Shield, title: "Security Protocols", desc: "Understanding ScholarJMS data protection measures." },
  { icon: Code, title: "Customization", desc: "Branding and workflow configuration documentation." },
];

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Documentation Hub</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
              Everything you need to know about setting up and running your university journal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {docs.map((doc, i) => (
              <Card key={i} className="rounded-funky border border-border/50 shadow-md hover:shadow-xl transition-all cursor-pointer group" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardContent className="p-10 flex gap-6 items-center">
                  <div className="h-16 w-16 rounded-funky bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                    <doc.icon className="h-8 w-8 text-primary group-hover:text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{doc.title}</h3>
                    <p className="text-sm text-foreground/70">{doc.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
