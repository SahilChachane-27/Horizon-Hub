'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, Code, ShieldCheck, Rocket } from 'lucide-react';
import Link from 'next/link';

const boardOfDirectors = [
  {
    name: "Mr. Hitesh Patel",
    role: "Research Journal Publisher",
    skills: ["PHP", "CSS", "Laravel", "Web Hosting", "JavaScript", "MySQL", "DBMS", "Bootstrap", "HTML", "Scholar9", "ScholarJMS"],
    bio: "I am Hitesh Patel, a computer engineer with a wealth of knowledge and expertise in the field. With 10 years of experience, I have worked on a wide range of projects, developing software solutions that are both efficient and scalable. I am an expert in various programming languages and technologies, possessing strong analytical and problem-solving skills that enable identifying and resolving even the most complex issues.",
    profileLink: "https://scholar9.com"
  },
  {
    name: "Alpesh Radadiya",
    role: "CTO & Co-Founder",
    skills: ["Python", "Ecommerce Consultant", "Software Architecture", "Web Technology", "PHP", "JavaScript", "React", "Angular", "Vue.js"],
    bio: "Over 11 years of experience in web development and software architecture. I have a deep passion for creating efficient and high-performing web applications. Throughout my career, I have gained extensive knowledge in various frameworks and honed my skills in designing scalable systems. I am committed to staying up-to-date with the latest trends to ensure clients receive the best possible solutions for their business needs.",
    profileLink: "https://scholar9.com"
  },
  {
    name: "VARUN PATEL",
    role: "Product Manager",
    skills: ["Clinical Data Analytics", "Communication", "Technology Strategy"],
    bio: "Founder of Social Benchers and Coreway Solution. I've empowered non-profit organizations and worked with political leaders to optimize campaigns through technological tools. Rewarded with the NationBuilder Certified Expert badge, my team was praised by Ex-President Obama during a White House launch. I am on a mission to revolutionize the world through the power of internet and technology.",
    profileLink: "https://scholar9.com"
  }
];

const advisoryBoard = [
  {
    name: "Dr. Patel Parin",
    role: "Professor",
    skills: ["Cloud Computing", "C++", "Blockchain", "JavaScript", "Data Structure", "Node.js", "NFT"],
    bio: "Ph.D. Candidate in Blockchain and an experienced academic professional. With a decade of experience, I am passionate about pushing the boundaries of knowledge. My research expertise includes consensus mechanisms, smart contracts, privacy, security, and scalability solutions within Blockchain systems.",
    profileLink: "https://scholar9.com"
  },
  {
    name: "Mr. Darshan Patel",
    role: "COO, Sequence R&D Pvt. Ltd. Ahmedabad",
    skills: ["Public Speaking", "Communication", "Marketing", "Computer Science"],
    bio: "Incredibly enthusiastic about the field of computer science, with a passion for exploring ever-evolving paradigms. My primary interest lies in conducting research and actively participating in scholarly pursuits. I have honed my skills in the intricate art of journal building, contributing to the dissemination of valuable knowledge.",
    profileLink: "https://scholar9.com"
  },
  {
    name: "Mr. Jatin Patel",
    role: "Technical Analyst",
    skills: ["PHP", "Laravel", "C++", "C", "OJS", "SQL"],
    bio: "A passionate computer engineer with a master's degree. My journey in technology has equipped me with a diverse skill set in programming and web development. I have a strong command of SQL for database management and an enthusiasm for solving complex problems in the ever-evolving field of computer engineering.",
    profileLink: "https://scholar9.com"
  },
  {
    name: "Dr. Nisarg Patel",
    role: "Project Manager",
    skills: ["Global Partnerships", "Academic Networks", "International Standards"],
    bio: "22+ years building international academic collaborations and maintaining high standards in institutional research management.",
    profileLink: null
  }
];

const technicalTeam = [
  {
    name: "Bhaumik Patel",
    role: "Chief Technology Officer",
    skills: ["System Architecture", "Cloud Infrastructure", "Team Leadership"],
    description: "14+ years in enterprise software architecture and SaaS platforms."
  },
  {
    name: "Khushal Suthar",
    role: "Lead Full-Stack Developer",
    skills: ["React", "Node.js", "Database Design"],
    description: "10+ years building scalable web applications."
  },
  {
    name: "Manan Mozar",
    role: "Senior Backend Engineer",
    skills: ["Python", "API Development", "Microservices"],
    description: "9+ years in backend development and API integration."
  },
  {
    name: "Sachin Makwana",
    role: "UI/UX Designer",
    skills: ["User Research", "Interface Design", "Prototyping"],
    description: "8+ years designing user-centric digital experiences."
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white pt-32 pb-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-headline italic" data-aos="fade-up">Our Team</h1>
            <p className="text-xl text-accent font-bold mb-4 uppercase tracking-widest" data-aos="fade-up" data-aos-delay="100">Innovators in Academic Publishing</p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto font-medium leading-relaxed italic" data-aos="fade-up" data-aos-delay="200">
              Our team brings together experienced editors, technical experts, and visionary leaders dedicated to advancing academic publishing. Together, we ensure quality, innovation, and integrity in every journal we publish.
            </p>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic flex items-center justify-center gap-3">
                <Rocket className="h-8 w-8 text-accent" /> Board of Directors
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-4 text-foreground/60 font-medium">Visionary leaders guiding ScholarJMS strategic direction and growth</p>
            </div>

            <div className="grid gap-12">
              {boardOfDirectors.map((member, i) => (
                <Card key={i} className="rounded-funky border-none shadow-xl overflow-hidden bg-white group" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="grid md:grid-cols-3 items-stretch">
                    <div className="bg-primary/5 p-8 flex flex-col items-center justify-center text-center border-r border-slate-100">
                      <div className="h-32 w-32 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="text-2xl font-bold text-primary font-headline">{member.name}</h3>
                      <p className="text-accent font-black text-xs uppercase tracking-widest mt-2">{member.role}</p>
                    </div>
                    <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="bg-slate-100 text-primary/70 font-bold text-[10px] uppercase px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-foreground/70 leading-relaxed italic mb-8 font-medium">
                        {member.bio}
                      </p>
                      <Button asChild className="w-fit bg-primary text-accent hover:bg-primary/90 rounded-funky font-bold">
                        <Link href={member.profileLink} target="_blank">
                          View TechnicalJournals Profile <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic flex items-center justify-center gap-3">
                <ShieldCheck className="h-8 w-8 text-accent" /> Advisory Board
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-4 text-foreground/60 font-medium">Distinguished experts providing strategic guidance and industry insights</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advisoryBoard.map((member, i) => (
                <Card key={i} className="rounded-funky border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-50/50" data-aos="fade-up" data-aos-delay={i * 50}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-primary font-headline">{member.name}</CardTitle>
                        <p className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mt-1">{member.role}</p>
                      </div>
                      <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-md text-primary font-black">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.skills.map(skill => (
                        <span key={skill} className="text-[9px] font-black uppercase text-primary/40 tracking-wider">
                          • {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed italic line-clamp-4 hover:line-clamp-none transition-all duration-500">
                      {member.bio}
                    </p>
                    {member.profileLink && (
                      <Button variant="link" asChild className="text-primary p-0 h-auto mt-4 font-bold text-xs underline decoration-accent underline-offset-4">
                        <Link href={member.profileLink} target="_blank">View Profile</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Team */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline italic flex items-center justify-center gap-3">
                <Code className="h-8 w-8 text-accent" /> Technical Team
              </h2>
              <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-4 text-foreground/60 font-medium">Expert engineers and developers building cutting-edge publishing technology</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalTeam.map((member, i) => (
                <Card key={i} className="rounded-funky border-none shadow-lg text-center bg-white hover:-translate-y-2 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                  <CardContent className="p-8">
                    <div className="h-20 w-20 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center text-primary font-bold text-2xl">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-primary font-headline">{member.name}</h3>
                    <p className="text-accent font-black text-[10px] uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {member.skills.map(skill => (
                        <span key={skill} className="text-[8px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold uppercase">{skill}</span>
                      ))}
                    </div>
                    <p className="text-xs text-foreground/60 font-medium italic">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-headline italic mb-6" data-aos="fade-up">Join Our Growing Team</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 font-medium italic" data-aos="fade-up" data-aos-delay="100">
              We're always looking for talented individuals passionate about transforming academic publishing.
            </p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-funky px-12 py-8 text-xl font-black italic shadow-2xl transition-all duration-300">
              <Link href="/contact">Inquire for Openings</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
