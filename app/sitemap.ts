// app/sitemap.ts
import { MetadataRoute } from 'next';
import { projects, personalInfo } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${personalInfo.siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: personalInfo.siteUrl, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${personalInfo.siteUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${personalInfo.siteUrl}/about`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: `${personalInfo.siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...projectUrls,
  ];
}