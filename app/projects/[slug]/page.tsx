// app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${personalInfo.name}`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
      url: `${personalInfo.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/projects" className="text-blue-600 hover:underline mb-6 inline-block">← Volver a proyectos</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.description}</p>
      <Image src={project.image} alt={project.title} width={800} height={450} className="rounded-lg mb-6 w-full object-cover" />
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Ver Demo</a>}
        {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50">GitHub</a>}
      </div>
    </div>
  );
}