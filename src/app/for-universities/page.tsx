'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  Search,
  Megaphone,
  FileText,
  BookOpen,
  Rocket,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  BarChart3,
  Users2,
  FileSearch,
  Hash,
  Layout
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForUniversitiesPage() {
  const serviceCategories = [
    {
      title: "Discoverability",
      description: "Maximizing the visibility and accessibility of research content.",
      icon: Search,
      items: [
        {
          title: "Indexing",
          desc: "Assistance in getting journals indexed in reputed academic databases and directories. We help journals meet indexing criteria to improve searchability and credibility.",
          icon: FileSearch
        },
        {
          title: "JATS XML",
          desc: "Structured XML formatting to facilitate seamless indexing and integration with global databases. This enables compatibility with major academic repositories.",
          icon: Database
        },
        {
          title: "Journal Hosting",
          desc: "Reliable and scalable hosting solutions for online journal access. Our secure hosting ensures uninterrupted access to journal content for readers worldwide.",
          icon: Globe
        }
      ]
    },
    {
      title: "Marketing",
      description: "Enhancing journal reach and engagement through strategic promotional efforts.",
      icon: Megaphone,
      items: [
        {
          title: "Archive Management",
          desc: "Organized storage and easy retrieval of past issues to maintain long-term accessibility. We provide structured archiving solutions to preserve valuable research for future reference.",
          icon: ShieldCheck
        },
        {
          title: "Journal Promotion",
          desc: "Tailored sales and marketing strategies to increase subscriptions, readership and citations. Digital campaigns, email outreach, and social media engagement to boost visibility.",
          icon: Zap
        },
        {
          title: "Usage Tracking",
          desc: "Data-driven insights into readership patterns and article performance. Our analytics tools help publishers understand their audience and refine content strategies.",
          icon: BarChart3
        }
      ]
    },
    {
      title: "Pre-Publishing",
      description: "Ensuring a strong foundation for high-quality research dissemination.",
      icon: FileText,
      items: [
        {
          title: "Article Submission",
          desc: "Streamlined submission process to manage and track manuscripts efficiently. Our platform simplifies workflows, reducing administrative burden for authors and editors.",
          icon: Rocket
        },
        {
          title: "Peer Review",
          desc: "Robust peer review management to ensure rigorous evaluation and quality control. Our system facilitates smooth communication between reviewers, authors, and editors.",
          icon: Users2
        },
        {
          title: "Plagiarism Check",
          desc: "Advanced plagiarism detection tools to uphold research integrity. We use industry-standard software to detect and address potential overlaps before publication.",
          icon: CheckCircle2
        }
      ]
    },
    {
      title: "Publishing",
      description: "Transforming manuscripts into professionally structured, high-quality publications.",
      icon: BookOpen,
      items: [
        {
          title: "Copyediting",
          desc: "Language and formatting refinement to enhance readability and clarity. Our expert editors ensure consistency in tone, style, and grammar.",
          icon: FileText
        },
        {
          title: "Digital Object Identifiers (DOI)",
          desc: "Assigning unique identifiers to articles for easy citation and long-term accessibility. DOIs provide permanent links, ensuring research remains easily discoverable.",
          icon: Hash
        },
        {
          title: "Pagination",
          desc: "Structuring articles for optimal presentation in both print and digital formats. We maintain a professional layout that aligns with academic publishing standards.",
          icon: Layout
        }
      ]
    }
  ];

  const steps = [
    {
      num: "01",
      title: "University Approval",
      desc: "Obtain necessary administrative authorizations for the institutional journal."
    },
    {
      num: "02",
      title: "Setup & Scope",
      desc: "Define focus, specific academic scope, and ethical peer-review policies."
    },
    {
      num: "03",
      title: "Workflow Setup",
      desc: "Configuration of Journal Website & end-to-end secure workflow."
    },
    {
      num: "04",
      title: "Editorial Board",
      desc: "Formation of qualified international academic review panels and boards."
    },
    {
      num: "05",
      title: "Test Issue",
      desc: "Conducting a full trial run of the publication lifecycle and production."
    },
    {
      num: "06",
      title: "Official Launch",
      desc: "Public release, call for papers, and strategic indexing submissions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-6 md:px-16 lg:px-32 relative z-10 text-center">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-headline italic leading-tight mb-6">
                For Universities & Publishers
              </h1>
              <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xs sm:text-sm md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                Empowering academic institutions to own their research output and enhance global scholarly standing through Technical Journals platform technology.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/ResearchPsychology.jpg"
              alt="Academic Research"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Publisher Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline" data-aos="fade-up">
                Publisher Services
              </h2>
              <p className="text-accent font-bold uppercase tracking-widest text-[10px] mt-2 mb-4" data-aos="fade-up">
                Enhancing the Quality and Reach of Global Research
              </p>
              <div className="mt-2 w-20 h-1 bg-accent mx-auto mb-6" data-aos="fade-up"></div>
              <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-medium" data-aos="fade-up">
                At Technical Journals, we are committed to supporting publishers in improving the quality and accessibility of academic content. By offering a comprehensive suite of services, we ensure that journals meet the highest standards while reaching a global audience. Our expertise spans the entire publishing lifecycle—from manuscript submission to discoverability.
              </p>
            </div>

            <div className="space-y-16">
              {serviceCategories.map((category, catIdx) => (
                <div key={catIdx} data-aos="fade-up">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-lg">
                      <category.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary font-headline italic">{category.title}</h3>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="border-none shadow-xl rounded-funky bg-slate-50 hover:bg-white transition-all duration-500 group">
                        <CardHeader className="pb-2">
                          <div className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                            <item.icon className="h-4 w-4 text-accent group-hover:text-white" />
                          </div>
                          <CardTitle className="text-base font-bold text-primary italic leading-tight">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-[11px] text-foreground/70 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-secondary/30 rounded-funky border border-primary/5 text-center max-w-4xl mx-auto" data-aos="fade-up">
              <p className="text-xs md:text-sm text-foreground/80 leading-relaxed italic">
                By partnering with Technical Journals, publishers can focus on producing quality research while we take care of the technical, editorial, and promotional aspects of journal management.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-8 md:px-16 lg:px-32">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-headline" data-aos="fade-up">
                Steps to Start Your Journal
              </h2>
              <div className="mt-2 w-16 h-1 bg-accent mx-auto" data-aos="fade-up"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <Card 
                  key={idx} 
                  className="border-none shadow-xl rounded-[30px] overflow-hidden bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border border-transparent hover:border-accent/10" 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <CardHeader className="flex flex-col items-start gap-1 pb-2">
                    <span className="text-5xl font-black text-accent/10 font-headline select-none group-hover:text-accent transition-colors duration-500">
                      {step.num}
                    </span>
                    <CardTitle className="text-lg text-primary font-bold leading-tight group-hover:text-accent transition-colors duration-500">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-xs leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Compact */}
        <section className="py-12 bg-primary text-white border-y border-border/50 relative overflow-hidden">
          <div className="container mx-auto px-8 md:px-16 lg:px-32 text-center relative z-10">
            <div className="max-w-4xl mx-auto" data-aos="zoom-in">
              <h2 className="text-xl md:text-2xl font-bold font-headline mb-3 italic">
                Start Your Research Journal Today
              </h2>
              <p className="text-xs md:text-sm text-white/70 mb-8 font-medium max-w-2xl mx-auto">
                Contact our institutional partnership team to discuss MoU formalities and technical setup for your university.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-extrabold rounded-funky px-8 py-3 text-xs shadow-xl shadow-accent/20 transition-all hover:scale-105 h-auto">
                  <Link href="/contact">Inquire Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent rounded-funky px-8 py-3 text-xs font-bold h-auto hover:bg-white/10 transition-colors">
                  <Link href="/pricing">View Packages</Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-40">
                {[
                  { label: "Platform Migration", icon: Rocket },
                  { label: "Institutional Ownership", icon: ShieldCheck },
                  { label: "Compliance Setup", icon: CheckCircle2 }
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em]">
                    <tag.icon className="h-3 w-3 text-accent" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}