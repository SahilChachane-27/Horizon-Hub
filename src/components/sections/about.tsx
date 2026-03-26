import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-6 md:py-12 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2 relative aspect-square rounded-funky overflow-hidden shadow-xl" data-aos="fade-right">
            <Image
              src="/aboutUs.jpeg"
              alt="University Academic Publishing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              data-ai-hint="academic publishing"
            />
          </div>
          <div className="lg:col-span-3 space-y-4 md:space-y-6" data-aos="fade-left">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-primary font-headline">
                About Technical Journals
              </h2>
              <div className="mt-1 md:mt-2 w-16 md:w-20 h-1 bg-accent"></div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <p className="text-xs md:text-base text-foreground/80 leading-relaxed font-medium">
                Technical Journals is a global journal hosting platform exclusively developed for Universities and Academic Institutions. The platform does NOT host journals from private publishers.
              </p>
              <p className="text-xs md:text-base text-foreground/80 leading-relaxed font-medium">
                Our objective is to provide a secure, scalable, and professional OJS Platform based hosting environment where universities can launch, manage, and publish research under their own unique institutional branding.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Card className="bg-card border-0 border-l-4 border-accent shadow-md rounded-funky overflow-hidden">
                <CardHeader className="py-2 md:py-3 px-4">
                  <CardTitle className="text-primary text-base md:text-lg font-headline">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="pb-3 md:pb-4 px-4">
                  <p className="text-[11px] md:text-sm text-foreground/70 leading-relaxed font-medium">
                    To build the world’s most trusted, university-exclusive journal hosting ecosystem that empowers institutions to elevate scholarly research.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 border-l-4 border-accent shadow-md rounded-funky overflow-hidden">
                <CardHeader className="py-2 md:py-3 px-4">
                  <CardTitle className="text-primary text-base md:text-lg font-headline">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="pb-3 md:pb-4 px-4">
                  <p className="text-[11px] md:text-sm text-foreground/70 leading-relaxed font-medium">
                    To empower academic institutions with sovereign publishing tools that ensure research remains firmly under institutional control.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
