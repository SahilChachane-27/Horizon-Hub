import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AOSInit } from '@/components/AOSInit';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'Horizon Group | Premier Real Estate & Construction',
  description: 'Transforming visions into landmarks. Excellence in residential construction, commercial developments, and real estate innovation since 1998.',
=======
  title: 'Technical Journals | Secure University Journal Hosting',
  description: 'Technical Journals - Providing secure, scalable, and ethical journal hosting exclusively for University-owned academic journals.',
>>>>>>> old-work
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" className="scroll-smooth">
=======
    <html lang="en" suppressHydrationWarning>
>>>>>>> old-work
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <AOSInit />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
