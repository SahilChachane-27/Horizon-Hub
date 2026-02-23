'use client';

import { useUser, useAuth, useFirestore, useCollection } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  BookOpen, 
  Plus, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Activity, 
  Users,
  ChevronRight,
  Clock,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import Image from 'next/image';

export default function AdminDashboard() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

  // Fetch all journals for stats
  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

  // Fetch recent 5 journals for activity list
  const recentQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'), orderBy('createdAt', 'desc'), limit(5));
  }, [db]);

  const { data: recentJournals, loading: recentLoading } = useCollection(recentQuery);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  const handleLogout = () => {
    if (auth) {
      auth.signOut();
      router.push('/admin/login');
    }
  };

  const dynamicStats = useMemo(() => {
    const hostedCount = journals?.length || 0;
    const uniqueUniversities = new Set(journals?.map((j: any) => j.university?.toLowerCase().trim()).filter(Boolean));
    const uniqueDomains = new Set(journals?.map((j: any) => j.domain?.toLowerCase().trim()).filter(Boolean));

    return [
      { 
        title: "Total Journals", 
        count: journalsLoading ? "..." : hostedCount.toString(), 
        icon: BookOpen, 
        color: "bg-blue-500/10 text-blue-500",
        desc: "Active publications hosted"
      },
      { 
        title: "Partner Universities", 
        count: journalsLoading ? "..." : uniqueUniversities.size.toString(), 
        icon: Users, 
        color: "bg-green-500/10 text-green-500",
        desc: "Institutions on platform"
      },
      { 
        title: "Academic Domains", 
        count: journalsLoading ? "..." : uniqueDomains.size.toString(), 
        icon: Globe, 
        color: "bg-purple-500/10 text-purple-500",
        desc: "Diverse research fields"
      },
      { 
        title: "Platform Status", 
        count: "Active", 
        icon: Activity, 
        color: "bg-amber-500/10 text-amber-500",
        desc: "Server health: 99.9%"
      },
    ];
  }, [journals, journalsLoading]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      <Header />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-black text-primary font-headline flex items-center gap-3">
                <LayoutDashboard className="h-8 w-8 text-accent" />
                DASHBOARD OVERVIEW
              </h1>
              <p className="text-muted-foreground text-sm font-medium mt-1 uppercase tracking-widest">
                System Administrator: {user.email}
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="rounded-funky bg-primary hover:bg-primary/90 text-accent font-bold shadow-lg">
                <Link href="/admin/journals">
                  <Plus className="mr-2 h-4 w-4" /> Add Journal
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout} 
                className="rounded-funky border-primary/20 text-primary hover:bg-red-50 hover:text-red-500 hover:border-red-200"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dynamicStats.map((stat, i) => (
              <Card key={i} className="rounded-funky border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-white" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs font-black uppercase tracking-[0.2em] text-primary/40">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-xl ${stat.color}`}>
                    <stat.icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-black text-primary">{stat.count}</div>
                  <p className="text-[10px] text-muted-foreground mt-1 font-bold uppercase tracking-wider">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity List */}
            <Card className="lg:col-span-2 rounded-funky border-none shadow-xl bg-white overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <CardHeader className="border-b border-slate-50 p-8">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary font-headline italic">Recent Publications</CardTitle>
                    <CardDescription>Latest journals added to the platform</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild className="text-accent font-bold text-xs uppercase tracking-widest hover:text-primary">
                    <Link href="/admin/journals">View All <ChevronRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {recentLoading ? (
                  <div className="p-12 text-center"><div className="animate-spin inline-block rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
                ) : (recentJournals && recentJournals.length > 0) ? (
                  <div className="divide-y divide-slate-50">
                    {recentJournals.map((journal: any) => (
                      <div key={journal.id} className="p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors group">
                        <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 overflow-hidden relative">
                          {journal.imageUrl ? (
                            <Image src={journal.imageUrl} alt={journal.name} fill className="object-cover" />
                          ) : (
                            <BookOpen className="h-6 w-6 text-primary/20" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-primary truncate text-sm">{journal.name}</h4>
                          <p className="text-xs text-muted-foreground truncate">{journal.university}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/40 uppercase tracking-wider mb-1">
                            <Clock className="h-3 w-3" />
                            {journal.createdAt?.seconds ? new Date(journal.createdAt.seconds * 1000).toLocaleDateString() : 'Just now'}
                          </div>
                          <Link href={journal.link} target="_blank" className="text-[10px] text-accent font-black uppercase tracking-widest flex items-center justify-end gap-1 hover:text-primary transition-colors">
                            Live <ExternalLink className="h-2 w-2" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-muted-foreground italic text-sm">No journals recorded yet.</div>
                )}
              </CardContent>
            </Card>

            {/* Quick Management Section */}
            <div className="space-y-6" data-aos="fade-up" data-aos-delay="600">
              <Card className="rounded-funky border-none shadow-xl bg-primary text-white p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Settings className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-headline italic mb-4">Journal Management</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">
                    Access the central management suite to update journal details, verify indexing, or remove records.
                  </p>
                  <Button asChild className="w-full bg-accent text-accent-foreground font-black italic rounded-funky hover:scale-105 transition-transform shadow-xl">
                    <Link href="/admin/journals">Launch Manager <ChevronRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </Card>

              <Card className="rounded-funky border-none shadow-xl bg-white p-8">
                <h3 className="text-lg font-bold text-primary font-headline italic mb-4">System Notifications</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                    <p className="text-xs text-blue-900 leading-snug">New university partner application pending review.</p>
                  </div>
                  <div className="flex gap-3 items-start p-3 rounded-xl bg-green-50/50 border border-green-100">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
                    <p className="text-xs text-green-900 leading-snug">Indexing metadata for 12 journals updated successfully.</p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
