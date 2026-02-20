
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Book, Users, Laptop, Database } from 'lucide-react';

const categories = [
  {
    title: "A. Journal Hosting Services",
    icon: Laptop,
    features: ["ScholarJMS complete setup", "Server maintenance & monitoring", "DOI registration & DigiIdentify", "Article-level indexing metadata", "Anti-plagiarism integration"]
  },
  {
    title: "B. University Partnership Program",
    icon: Users,
    features: ["Co-branded publishing", "Custom institutional branding", "Dedicated account manager", "Annual analytics & visibility reports"]
  },
  {
    title: "C. Editorial Workflow Management",
    icon: Book,
    features: ["Manuscript submission portal", "Reviewer panel management", "Automated system reminders", "Copyediting & production workflow"]
  },
  {
    title: "D. Migration Services",
    icon: Database,
    features: ["Migration from OJS 2.x / other platforms", "Retaining all back issues", "Preserving persistent URLs (PIDs)", "Historical data integrity checks"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Academic Solutions</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto text-lg">
              Empowering universities with end-to-end publishing technology and strategic indexing support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <Card key={i} className="rounded-funky shadow-lg border-primary/5 group transition-all hover:shadow-2xl" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-12 w-12 bg-secondary rounded-funky flex items-center justify-center group-hover:bg-accent transition-colors">
                    <cat.icon className="h-6 w-6 text-primary group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {cat.features.map((feat, fi) => (
                      <li key={fi} className="flex gap-3 items-center text-foreground/80">
                        <Check className="h-5 w-5 text-accent shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
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
