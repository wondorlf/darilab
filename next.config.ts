import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Exportación estática (el sitio no tiene backend: todo es estático y los
  // formularios redirigen a WhatsApp, por lo que no se necesita servidor).
  output: 'export',

  // Cuando GitHub Pages sirve el proyecto bajo una sub-ruta (https://<user>.github.io/<repo>/)
  // Next.js necesita conocer el prefijo. El workflow de despliegue define NEXT_PUBLIC_BASE_PATH
  // (ej: '/darilab'); vacío cuando el sitio se sirve en el dominio raíz (darilabips.com).
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    // Las imágenes locales (public/*.jpeg) se sirven tal cual; sin
    // optimización en build porque la exportación estática no lo soporta.
    unoptimized: true,
  },
  transpilePackages: ['motion'],
};

export default nextConfig;