// app/about/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Sobre Mí</h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Image
          src={personalInfo.avatar}
          alt={personalInfo.name}
          width={250}
          height={250}
          loading="lazy"
          className="rounded-xl object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">{personalInfo.name}</h2>
          <p className="text-blue-600 mb-4">{personalInfo.title}</p>
          <p className="text-gray-600 mb-4">{personalInfo.description}</p>
          <p className="text-gray-500">Apasionado por el desarrollo web moderno, siempre buscando aprender nuevas tecnologías y aplicar las mejores prácticas en cada proyecto.</p>
        </div>
      </div>
    </div>
  );
}