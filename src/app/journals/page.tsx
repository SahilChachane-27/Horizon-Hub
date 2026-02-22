
'use client';

import { useState, useMemo } from 'react';
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
  Filter, 
  BookOpen, 
  GraduationCap, 
  ExternalLink, 
  Tag, 
  Globe, 
  Building2,
  Stethoscope,
  Cpu,
  Landmark,
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndexing, setSelectedIndexing] = useState('All');

  const filteredJournals = useMemo(() => {
    return journals.filter(j => {
      const matchesSearch = 
        j.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        j.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        j.issn.includes(searchQuery);
      
      const matchesCategory = selectedCategory === 'All' || j.domain === selectedCategory;
      const matchesIndexing = selectedIndexing === 'All' || j.indexing.includes(selectedIndexing);

      return matchesSearch && matchesCategory && matchesIndexing;
    });
  }, [searchQuery, selectedCategory, selectedIndexing]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4" data-aos="fade-up">
              University Journal Catalog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Browse the prestigious academic publications hosted on our secure, institutionally branded ScholarJMS platform.
            </p>
          </div>
        </section>

        {/* Search & Filters Section */}
        <section className="py-12 bg-secondary/30 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end" data-aos="fade-up">
              <div className="lg:col-span-2">
                <label className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Search Journals</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search by Journal Name, University or ISSN..." 
                    className="pl-10 h-12 border-primary/20 focus:border-accent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Field of Study</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12 border-primary/20">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat.name} value={cat.name}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-bold text-primary mb-2 block uppercase tracking-wider">Indexing Status</label>
                <Select value={selectedIndexing} onValueChange={setSelectedIndexing}>
                  <SelectTrigger className="h-12 border-primary/20">
                    <SelectValue placeholder="Any Indexing" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">Any Indexing</SelectItem>
                    <SelectItem value="Scopus">Scopus</SelectItem>
                    <SelectItem value="UGC CARE">UGC CARE</SelectItem>
                    <SelectItem value="DOAJ">DOAJ</SelectItem>
                    <SelectItem value="Web of Science">Web of Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Sidebar/Row */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary font-headline mb-8 text-center" data-aos="fade-up">Explore by Subject</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {categories.map((cat, idx) => (
                <Button
                  key={cat.name}
                  variant={selectedCategory === cat.name ? "default" : "outline"}
                  className={`h-auto py-6 flex flex-col gap-3 rounded-funky border-accent/20 transition-all hover:scale-105 ${selectedCategory === cat.name ? 'bg-accent text-accent-foreground shadow-lg' : 'bg-white hover:bg-secondary'}`}
                  onClick={() => setSelectedCategory(cat.name)}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                >
                  <cat.icon className="h-6 w-6" />
                  <span className="text-[10px] uppercase font-bold text-center leading-tight whitespace-normal">{cat.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Journals Grid */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <p className="text-foreground/60 font-medium">Showing {filteredJournals.length} Journals</p>
              { (selectedCategory !== 'All' || searchQuery !== '' || selectedIndexing !== 'All') && (
                <Button variant="ghost" className="text-accent font-bold" onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedIndexing('All');
                }}>Clear Filters</Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJournals.length > 0 ? (
                filteredJournals.map((journal, index) => {
                  const journalImage = PlaceHolderImages.find(p => p.id === journal.id) || PlaceHolderImages[2];
                  return (
                    <Card key={journal.name} className="overflow-hidden bg-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-funky" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="relative h-48 overflow-hidden">
                        <Image 
                          src={journalImage.imageUrl} 
                          alt={journal.name} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {journal.indexing.map(idx => (
                            <Badge key={idx} className="bg-accent text-accent-foreground font-bold border-none shadow-md text-[10px]">{idx}</Badge>
                          ))}
                        </div>
                      </div>
                      <CardHeader className="relative -mt-10 bg-card mx-6 p-6 rounded-xl shadow-lg border">
                        <div className="bg-muted w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <BookOpen className="h-5 w-5 text-accent" />
                        </div>
                        <CardTitle className="text-xl font-bold text-primary font-headline leading-tight">{journal.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 pt-6 space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Building2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest">University</p>
                              <p className="text-sm font-bold text-primary">{journal.university}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-start gap-3">
                              <Tag className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest">ISSN</p>
                                <p className="text-sm font-bold text-primary">{journal.issn}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest">Domain</p>
                              <p className="text-sm font-bold text-accent">{journal.domain}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t">
                          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-funky gap-2 transition-transform hover:scale-105">
                            <a href={journal.link} target="_blank" rel="noopener noreferrer">
                              View Journal <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center space-y-4">
                  <div className="bg-muted inline-flex p-6 rounded-full">
                    <Search className="h-12 w-12 text-muted-foreground opacity-20" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">No Journals Found</h3>
                  <p className="text-foreground/60">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6" data-aos="fade-up">Ready to Launch Your University Journal?</h2>
            <p className="text-lg opacity-90 mb-10" data-aos="fade-up" data-aos-delay="100">
              Join the growing network of academic institutions using Technical Journals for secure, ethical, and institutionally branded publishing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Button asChild size="lg" variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-funky">
                <a href="/contact">Inquire Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-funky">
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
