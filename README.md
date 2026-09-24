# DariLab IPS — Sitio Web

Sitio institucional de DariLab IPS / CRC (Tauramena, Casanare, Colombia).

- **Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Motion
- **Despliegue:** GitHub Pages → [darilabips.com](https://darilabips.com)
- **Exportación estática:** sin servidor propio; formularios vía Web3Forms y citas por WhatsApp

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # exporta a out/
npm run start      # sirve out/ en http://localhost:8383
```

## Despliegue

Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) ejecuta lint + build y despliega `out/` a GitHub Pages.

## Portafolio de servicios (PDF)

- **Archivo:** `public/portafolio-servicios.pdf` (en producción: `https://darilabips.com/portafolio-servicios.pdf`)
- **Constantes:** `PORTFOLIO_PDF` y `PORTFOLIO_PDF_FILENAME` en `lib/contact.ts`
- **Ubicaciones del enlace de descarga:**
  - Header desktop y móvil
  - Widget flotante de ayuda
  - Home (junto a "Ver todo el portafolio")
  - Página `/servicios` (botón bajo el título)
  - Página `/contacto` (tarjeta "Portafolio de Servicios")
  - Footer (visible en todas las páginas)

Para actualizar el PDF: reemplazar el archivo en `public/portafolio-servicios.pdf` y hacer push a `main`.
