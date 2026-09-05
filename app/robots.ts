import type {MetadataRoute} from 'next';

// Requerido para generar robots.txt con exportación estática (output: 'export')
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://darilabips.com/sitemap.xml',
  };
}