import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Exportación estática para Cloudflare Pages (ver README).
  // El sitio no tiene backend: todo el contenido es estático y los
  // formularios redirigen a WhatsApp, por lo que no se necesita servidor.
  output: 'export',
  images: {
    // Las imágenes locales (public/*.jpeg) se sirven tal cual; sin
    // optimización en build porque la exportación estática no lo soporta.
    unoptimized: true,
  },
  transpilePackages: ['motion'],
};

export default nextConfig;