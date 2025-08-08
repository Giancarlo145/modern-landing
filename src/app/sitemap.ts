import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tu-dominio.vercel.app/', lastModified: new Date() },
    { url: 'https://tu-dominio.vercel.app/pricing', lastModified: new Date() },
    { url: 'https://tu-dominio.vercel.app/faq', lastModified: new Date() },
    { url: 'https://tu-dominio.vercel.app/contacto', lastModified: new Date() },
  ];
}