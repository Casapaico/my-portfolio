// components/Footer.tsx
import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600">Email</a>
        </div>
      </div>
    </footer>
  );
}