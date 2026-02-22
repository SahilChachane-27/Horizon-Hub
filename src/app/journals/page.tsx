'use client';

import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Building2, 
  Hash, 
  Globe,
  BookOpen, 
  ExternalLink, 
  Tag, 
  Cpu,
  Landmark,
  Stethoscope,
  Sprout,
  Scale,
  Leaf
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
  { name: 'Engineering', icon: Cpu },
  { name: 'Technology', icon: Globe },
  { name: 'Management', icon: Landmark },
  { name: 'Medical & Paramedical', icon: Stethoscope },
  { name: 'Agriculture', icon: Sprout },
  { name: 'Humanities & Social Sciences', icon: BookOpen },
  { name: 'Law', icon: Scale },
  { name: 'Environment & Sustainability', icon: Leaf },
];

const journals = [
  {
    id: 'project-1',
    name: 'Journal of Advanced Engineering',
    university: 'VIT PUNE',
    issn: '2345-6789',
    domain: 'Engineering',
    country: 'India',
    indexing: ['Scopus', 'UGC CARE'],
    link: 'https://scholarjms.com/jae'
  },
  {
    id: 'project-2',
    name: 'Medical Research Quarterly',
    university: 'AAFT UNIVERSITY',
    issn: '1234-5678',
    domain: 'Medical & Paramedical',
    country: 'India',
    indexing: ['DOAJ', 'UGC CARE'],
    link: 'https://scholarjms.com/mrq'
  },
  {
    id: 'project-3',
    name: 'International Journal of Sustainable Tech',
    university: 'SSIPMT RAIPUR',
    issn: '9876-5432',
    domain: 'Technology',
    country: 'India',
    indexing: ['Scopus', 'Web of Science'],
    link: 'https://scholarjms.com/ijst'
  },
  {
    id: 'journal-4',
    name: 'Legal Horizons Review',
    university: 'ARYA GROUP OF COLLEGES',
    issn: '4455-6677',
    domain: 'Law',
    country: 'India',
    indexing: ['UGC CARE'],
    link: 'https://scholarjms.com/lhr'
  },
  {
    id: 'journal-5',
    name: 'Global Management Insights',
    university: 'NOIDA INTERNATIONAL UNIVERSITY',
    issn: '8899-0011',
    domain: 'Management',
    country: 'India',
    indexing: ['DOAJ'],
    link: 'https://scholarjms.com/gmi'
  },
  {
    id: 'journal-6',
    name: 'Agricultural Innovation Journal',
    university: 'SSIPMT RAIPUR',
    issn: '2233-4455',
    domain: 'Agriculture',
    country: 'India',
    indexing: ['Scopus'],
    link: 'https://scholarjms.com/aij'
  }
];

export default function JournalsPage() {
  const [isClient, setIsClient] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [universityQuery, setUniversityQuery] = useState('');
  const [issnQuery, setIssnQuery] = useState('');
  const [countryQuery, setCountryQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndexing, setSelectedIndexing] = useState('All');

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredJournals = useMemo(() => {
    return journals.filter(j => {
      const matchesName = j.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesUniversity = j.university.toLowerCase().includes(universityQuery.toLowerCase());
      const matchesISSN = j.issn.includes(issnQuery);
      const matchesCountry = j.country.toLowerCase().includes(countryQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || j.domain === selectedCategory;
      const matchesIndexing = selectedIndexing === 'All' || j.indexing.includes(selectedIndexing);

      return matchesName && matchesUniversity && matchesISSN && matchesCountry && matchesCategory && matchesIndexing;
    });
  }, [searchQuery, universityQuery, issnQuery, countryQuery, selectedCategory, selectedIndexing]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setUniversityQuery('');
    setIssnQuery('');
    setCountryQuery('');
    setSelectedCategory('All');
    setSelectedIndexing('All');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" data-aos="fade-up">
              University Journal Catalog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Browse prestigious academic publications hosted on our secure ScholarJMS platform.
            </p>
          </div>
        </section>

        {/* Search & Filters Section */}
        <section className="py-16 bg-secondary/30 relative">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="bg-white p-6 md:p-12 rounded-[40px] shadow-2xl border border-primary/5 relative z-20" data-aos="fade-up">
              {isClient ? (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="Search by Journal Name" className="pl-12 h-14 border-primary/10 rounded-xl bg-secondary/5 focus-visible:ring-accent" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="University Name" className="pl-12 h-14 border-primary/10 rounded-xl bg-secondary/5 focus-visible:ring-accent" value={universityQuery} onChange={(e) => setUniversityQuery(e.target.value)} />
                    </div>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input placeholder="ISSN Number" className="pl-12 h-14 border-primary/10 rounded-xl bg-secondary/5 focus-visible:ring-accent" value={issnQuery} onChange={(e) => setIssnQuery(e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                      <Input placeholder="Country" className="pl-12 h-14 border-primary/10 rounded-xl bg-secondary/5 focus-visible:ring-accent" value={countryQuery} onChange={(e) => setCountryQuery(e.target.value)} />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-14 border-primary/10 rounded-xl bg-secondary/5 focus:ring-accent"><SelectValue placeholder="Field of Study" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Fields</SelectItem>
                        {categories.map(cat => <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <Select value={selectedIndexing} onValueChange={setSelectedIndexing}>
                      <SelectTrigger className="h-14 border-primary/10 rounded-xl bg-secondary/5 focus:ring-accent"><SelectValue placeholder="Indexing" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Indexing</SelectItem>
                        <SelectItem value="Scopus">Scopus</SelectItem>
                        <SelectItem value="UGC CARE">UGC CARE</SelectItem>
                        <SelectItem value="DOAJ">DOAJ</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="h-14 bg-primary text-white rounded-full font-bold shadow-xl">Search Sources</Button>
                  </div>
                </div>
              ) : <div className="h-40 flex items-center justify-center">Loading search...</div>}
            </div>
          </div>
        </section>

        {/* Journals Grid */}
        <section className="py-20 min-h-[400px]">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredJournals.map((journal, index) => (
                <Card key={index} className="overflow-hidden bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl" data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-bold text-primary">{journal.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3"><Building2 className="h-4 w-4 text-accent" /><p className="text-sm font-bold">{journal.university}</p></div>
                    <div className="flex items-center gap-3"><Tag className="h-4 w-4 text-accent" /><p className="text-sm">{journal.issn}</p></div>
                    <div className="pt-4 border-t"><Button asChild className="w-full bg-primary"><a href={journal.link} target="_blank">View Journal <ExternalLink className="ml-2 h-4 w-4" /></a></Button></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
