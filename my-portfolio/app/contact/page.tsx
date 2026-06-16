// app/contact/page.tsx
import type { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    url: `${personalInfo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="text-gray-600 mb-8">¿Tienes un proyecto en mente? ¡Hablemos!</p>
      <div className="space-y-4">
        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <span className="text-2xl">📧</span>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-500 text-sm">{personalInfo.email}</p>
          </div>
        </a>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <span className="text-2xl">💻</span>
          <div>
            <p className="font-medium">GitHub</p>
            <p className="text-gray-500 text-sm">{personalInfo.github}</p>
          </div>
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50">
          <span className="text-2xl">🔗</span>
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className="text-gray-500 text-sm">{personalInfo.linkedin}</p>
          </div>
        </a>
      </div>
    </div>
  );
}