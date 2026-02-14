import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Featured Projects</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore our portfolio of landmark developments that redefine skylines and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden group relative">
                <div className="aspect-w-4 aspect-h-3">
                  {projectImage && (
                     <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/80">{project.location}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
