'use client';

import { useUser, useAuth, useFirestore, useCollection } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, BookOpen, Plus, Settings, LogOut, ExternalLink, Activity } from 'lucide-react';
import Link from 'next/link';
import { collection, query } from 'firebase/firestore';

export default function AdminDashboard() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();

  const journalsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, 'journals'));
  }, [db]);

  const { data: journals, loading: journalsLoading } = useCollection(journalsQuery);

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
    
    // Calculate unique universities
    const uniqueUniversities = new Set(journals?.map((j: any) => j.university?.toLowerCase().trim()).filter(Boolean));
    const partnersCount = uniqueUniversities.size;

    return [
      { 
        title: "Hosted Journals", 
        count: journalsLoading ? "..." : hostedCount.toString(), 
        icon: BookOpen, 
        color: "text-blue-500" 
      },
      { 
        title: "Active Partners", 
        count: journalsLoading ? "..." : partnersCount.toString(), 
        icon: ExternalLink, 
        color: "text-green-500" 
      },
      { 
        title: "System Health", 
        count: "Optimal", 
        icon: Activity, 
        color: "text-purple-500" 
      },
    ];
  }, [journals, journalsLoading]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-8 md:px-16 lg:px-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div data-aos="fade-right">
              <h1 className="text-4xl font-bold text-primary font-headline flex items-center gap-4 italic">
                <LayoutDashboard className="h-10 w-10 text-accent" />
                Admin Dashboard
              </h1>
              <p className="text-foreground/60 mt-2 font-medium">Welcome back, {user.email}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleLogout} 
              className="rounded-funky border-primary/20 text-primary hover:bg-primary hover:text-white"
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {dynamicStats.map((stat, i) => (
              <Card key={i} className="rounded-funky border-none shadow-xl bg-secondary/50" data-aos="fade-up" data-aos-delay={i * 100}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-bold text-primary/60 uppercase tracking-widest">{stat.title}</CardTitle>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-black text-primary">{stat.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl">
            <Card className="rounded-funky border-none shadow-2xl p-8" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-primary font-headline italic mb-6">Journal Management</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Add new journals to the catalog, update university information, or manage indexing details.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-accent rounded-funky px-8 h-12 shadow-lg hover:scale-105 transition-transform">
                  <Link href="/admin/journals"><Plus className="mr-2 h-5 w-5" /> Manage Journals</Link>
                </Button>
                <Button variant="outline" asChild className="rounded-funky px-8 h-12 border-primary/20 hover:bg-secondary">
                  <Link href="/journals">View Public Catalog</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
