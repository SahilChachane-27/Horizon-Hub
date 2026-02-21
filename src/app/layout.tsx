import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AOSInit } from '@/components/AOSInit';

export const metadata: Metadata = {
  title: 'Horizon Group | Premier Real Estate & Construction',
  description: 'Building the future with excellence in residential construction, commercial developments, and real estate innovation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
