// Ruta base del despliegue.
// GitHub Pages sirve el proyecto bajo una sub-ruta (https://wondorlf.github.io/darilab/)
// hasta que el dominio propio (darilabips.com) apunte aquí; entonces será ''.
// El workflow de despliegue define NEXT_PUBLIC_BASE_PATH; vacío en desarrollo local.
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '');

/**
 * Devuelve la URL pública de un recurso local (public/*) teniendo en cuenta la base
 * del despliegue: '/logo.jpeg' -> '/darilab/logo.jpeg' (o '/logo.jpeg' en la raíz).
 * Las URLs absolutas (http/https, protocolo relativo //, data:) se devuelven sin cambios.
 */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
