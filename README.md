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
