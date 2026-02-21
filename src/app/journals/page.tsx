'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, BookOpen, ExternalLink, Globe, Landmark, Hash, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

const subjects = [
  'Engineering', 'Technology', 'Management', 'Medical & Paramedical', 
  'Agriculture', 'Humanities & Social Sciences', 'Law', 'Environment & Sustainability'
];

const mockJournals = [
  { name: "Intl Journal of Future Tech", university: "VIT Pune", issn: "2345-6789", category: "Technology", indexing: "Scopus", country: "India" },
  { name: "Journal of Medical Ethics", university: "NIU Noida", issn: "1234-5678", category: "Medical & Paramedical", indexing: "UGC CARE", country: "India" },
  { name: "Sustainable Environment Review", university: "AAFT University", issn: "8765-4321", category: "Environment & Sustainability", indexing: "DOAJ", country: "India" },
  { name: "Advanced Agriculture Quarterly", university: "Arya Group", issn: "1122-3344", category: "Agriculture", indexing: "Scopus", country: "India" },
  { name: "Global Management & Strategy", university: "SSIPMT Raipur", issn: "5566-7788", category: "Management", indexing: "UGC CARE", country: "India" },
  { name: "Legal Studies Journal", university: "AAFT University", issn: "9900-1122", category: "Law", indexing: "DOAJ", country: "India" },
];

export default function JournalHostedPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-white pt-32 pb-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6" data-aos="fade-up">Institutional Sources</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto italic font-medium" data-aos="fade-up" data-aos-delay="100">
              Browse our comprehensive directory of university-owned journals, managed through industry-grade ScholarJMS systems.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          {/* Scopus Inspired Search and Filters */}
          <Card className="mb-16 rounded-funky shadow-2xl border-accent/10 overflow-hidden bg-slate-50/50 backdrop-blur-sm" data-aos="fade-up">
            <CardContent className="p-8 space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-accent transition-colors" />
                  <Input placeholder="Search by Journal Name" className="pl-10 h-12 bg-white rounded-xl border-accent/20 focus:ring-accent" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="relative group">
                  <Landmark className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-accent transition-colors" />
                  <Input placeholder="University Name" className="pl-10 h-12 bg-white rounded-xl border-accent/20 focus:ring-accent" />
                </div>
                <div className="relative group">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-accent transition-colors" />
                  <Input placeholder="ISSN Number" className="pl-10 h-12 bg-white rounded-xl border-accent/20 focus:ring-accent" />
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative group">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4 group-focus-within:text-accent transition-colors" />
                  <Input placeholder="Country" className="pl-10 h-12 bg-white rounded-xl border-accent/20 focus:ring-accent" />
                </div>
                <Select>
                  <SelectTrigger className="h-12 bg-white rounded-xl border-accent/20"><SelectValue placeholder="Field of Study" /></SelectTrigger>
                  <SelectContent>
                    {subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 bg-white rounded-xl border-accent/20"><SelectValue placeholder="Indexing Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scopus">Scopus Ready</SelectItem>
                    <SelectItem value="ugc">UGC-CARE Compliant</SelectItem>
                    <SelectItem value="doaj">DOAJ Indexed</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-primary text-white hover:bg-accent hover:text-primary rounded-funky h-12 font-bold shadow-lg transition-all">Search Academic Sources</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Categories */}
            <aside className="space-y-10" data-aos="fade-right">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Tag className="h-5 w-5 text-accent" /> Browse Categories
                </h3>
                <ul className="space-y-3">
                  {subjects.map((sub) => (
                    <li key={sub}>
                      <button className="text-sm font-bold text-foreground/60 hover:text-accent transition-all text-left w-full py-3 px-4 rounded-xl hover:bg-slate-100 border-b border-border/30">
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Card className="bg-accent/10 border-accent/20 rounded-funky p-6">
                <h4 className="font-bold text-primary mb-2">Institutional Hosting</h4>
                <p className="text-xs text-foreground/70 leading-relaxed">All journals listed here are verified university-owned publications under institutional branding.</p>
              </Card>
            </aside>

            {/* Main Content: Journals Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {mockJournals.map((journal, i) => (
                  <Card key={i} className="rounded-funky border border-accent/5 shadow-lg group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden bg-white" data-aos="fade-up" data-aos-delay={i * 50}>
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                          <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">{journal.name}</h4>
                          <p className="text-[10px] font-black text-accent uppercase tracking-widest">{journal.indexing} Indexed</p>
                        </div>
                        <div className="h-10 w-10 bg-slate-50 rounded-lg flex items-center justify-center border border-accent/10">
                          <BookOpen className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="space-y-4 text-sm text-foreground/70 mb-8 pb-6 border-b border-dashed border-accent/20">
                        <div className="flex items-center gap-3">
                          <Landmark className="h-4 w-4 text-accent" />
                          <p><span className="font-bold text-primary/60">University:</span> {journal.university}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Hash className="h-4 w-4 text-accent" />
                          <p><span className="font-bold text-primary/60">ISSN:</span> {journal.issn}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Tag className="h-4 w-4 text-accent" />
                          <p><span className="font-bold text-primary/60">Domain:</span> {journal.category}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full rounded-funky border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold h-12 shadow-md">
                        Visit Journal Portal <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}