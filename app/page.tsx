// app/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { personalInfo, projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Inicio',
  description: `Portafolio de ${personalInfo.name}, ${personalInfo.title}`,
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Hola, soy {personalInfo.name} 👋</h1>
          <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>
          <p className="text-gray-500 mb-8">{personalInfo.description}</p>
          <div className="flex gap-4">
            <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Ver Proyectos
            </Link>
            <Link href="/about" className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
              Sobre Mí
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            width={300}
            height={300}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}