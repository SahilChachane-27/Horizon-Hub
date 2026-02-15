import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    title: 'Skyline Towers',
    location: 'Downtown Financial District',
  },
  {
    id: 'project-2',
    title: 'Riverfront Residences',
    location: 'East Bank Waterfront',
  },
  {
    id: 'project-3',
    title: 'Horizon Plaza',
    location: 'Uptown Commercial District',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Featured Projects</h2>
          <div className="mt-4 w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of landmark developments that redefine skylines and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden group relative" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative aspect-[16/10]">
                  {projectImage && (
                     <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-white/80">{project.location}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
