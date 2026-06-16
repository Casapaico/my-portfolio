// components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{project.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{tech}</span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="text-blue-600 text-sm font-medium hover:underline">
          Ver detalles →
        </Link>
      </div>
    </div>
  );
}