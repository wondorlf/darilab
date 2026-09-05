import type {MetadataRoute} from 'next';
import {servicesData} from '@/data/services';

// Requerido para generar sitemap.xml con exportación estática (output: 'export')
export const dynamic = 'force-static';

export const revalidate = 86400;

// GitHub Pages sirve el dominio raíz; www redirige al apex automáticamente.
const BASE_URL = 'https://darilabips.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ['', '/nosotros', '/contacto', '/pqrsf', '/servicios'].map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map(service => ({
    url: `${BASE_URL}/servicios/${service.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}