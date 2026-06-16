// app/projects/page.tsx
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects, personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: `Todos los proyectos de ${personalInfo.name}`,
  openGraph: {
    title: `Proyectos | ${personalInfo.name}`,
    description: `Explora todos los proyectos desarrollados por ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Mis Proyectos</h1>
      <p className="text-gray-600 mb-10">Una colección de mis trabajos más recientes.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}