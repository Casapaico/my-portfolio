// components/Header.tsx
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg text-blue-600">
          {personalInfo.name}
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">Inicio</Link>
          <Link href="/projects" className="text-gray-600 hover:text-blue-600">Proyectos</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600">Sobre Mí</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}