
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Search, Filter, BookOpen } from 'lucide-react';
import { useState } from 'react';

const subjects = [
  'Engineering', 'Technology', 'Management', 'Medical & Paramedical', 
  'Agriculture', 'Humanities & Social Sciences', 'Law', 'Environment & Sustainability'
];

const mockJournals = [
  { name: "Intl Journal of Future Tech", university: "VIT Pune", issn: "2345-6789", category: "Technology", indexing: "Scopus" },
  { name: "Journal of Medical Ethics", university: "NIU Noida", issn: "1234-5678", category: "Medical & Paramedical", indexing: "UGC" },
  { name: "Sustainable Environment Review", university: "AAFT University", issn: "8765-4321", category: "Environment & Sustainability", indexing: "DOAJ" },
  { name: "Advanced Agriculture Quarterly", university: "Arya Group", issn: "1122-3344", category: "Agriculture", indexing: "Scopus" },
  { name: "Global Management & Strategy", university: "SSIPMT Raipur", issn: "5566-7788", category: "Management", indexing: "UGC" },
  { name: "Legal Studies Journal", university: "AAFT University", issn: "9900-1122", category: "Law", indexing: "DOAJ" },
];

export default function JournalHostedPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">Academic Sources</h1>
            <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">Browse the comprehensive list of journals exclusively hosted for university academic partners.</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-12 rounded-funky shadow-lg border-primary/10 overflow-hidden" data-aos="fade-up">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Journal Name" className="pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <Input placeholder="University Name" />
                <Input placeholder="ISSN Number" />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Field of Study" /></SelectTrigger>
                  <SelectContent>
                    {subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Indexing Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scopus">Scopus</SelectItem>
                    <SelectItem value="ugc">UGC-CARE</SelectItem>
                    <SelectItem value="doaj">DOAJ</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-accent text-accent-foreground rounded-funky w-full">Search Sources</Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Categories */}
            <aside className="space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5" /> Subject Categories
                </h3>
                <ul className="space-y-2">
                  {subjects.map((sub) => (
                    <li key={sub}>
                      <button className="text-sm text-foreground/70 hover:text-accent transition-colors text-left w-full pb-2 border-b border-border/50">
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content: Journals Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {mockJournals.map((journal, i) => (
                  <Card key={i} className="rounded-none border-border/50 shadow-md group hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 50}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{journal.name}</h4>
                        <span className="text-[10px] font-bold px-2 py-1 bg-muted rounded-full text-muted-foreground uppercase">{journal.indexing}</span>
                      </div>
                      <div className="space-y-2 text-sm text-foreground/70 mb-6">
                        <p><span className="font-semibold text-primary">University:</span> {journal.university}</p>
                        <p><span className="font-semibold text-primary">ISSN:</span> {journal.issn}</p>
                        <p><span className="font-semibold text-primary">Field:</span> {journal.category}</p>
                      </div>
                      <Button variant="outline" className="w-full rounded-funky border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                        View Journal <BookOpen className="ml-2 h-4 w-4" />
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
