# DariLab IPS — Sitio Web

Sitio institucional de DariLab IPS (Tauramena, Casanare, Colombia).

- **Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Motion
- **Despliegue:** GitHub Pages → [darilabips.com](https://darilabips.com)
- **Exportación estática:** todo el sitio es estático, sin servidor

## Estructura

| Ruta | Descripción |
|---|---|
| `/` | Inicio con carrusel de héroes, servicios destacados |
| `/nosotros` | Historia, misión, visión, valores, infraestructura |
| `/servicios` | Catálogo de 26 servicios médicos |
| `/servicios/[id]` | Detalle de cada servicio con formulario WhatsApp |
| `/contacto` | Formulario de contacto → WhatsApp |
| `/pqrsf` | Formulario PQRSF → WhatsApp |

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Despliegue (GitHub Pages)

El sitio se despliega automáticamente al hacer push a `main`:

1. GitHub Actions ejecuta `next build` (exportación estática → `out/`)
2. Se crea el archivo `CNAME` con `darilabips.com`
3. Se despliega a GitHub Pages

### Dominio personalizado

- **DNS:** 4 registros A apuntando a IPs de GitHub Pages (configurados en Wix)
- **`www.darilabips.com`** → CNAME a `wondorlf.github.io`
- **HTTPS:** habilitado y forzado por GitHub Pages

### Cambiar la ruta base

Si el sitio se ve bajo `https://<usuario>.github.io/<repo>/` en lugar del dominio propio, cambiar `NEXT_PUBLIC_BASE_PATH` en `.github/workflows/deploy.yml` a `'/darilab'` (o el nombre del repo).

## Contacto centralizado

Todos los números de teléfono, correo y enlaces de WhatsApp están en `lib/contact.ts`. Para cambiarlos, editar ese archivo una sola vez.

## SEO

- Metadatos por página (título, descripción, canonical, Open Graph)
- JSON-LD `MedicalClinic` (Schema.org) en la portada
- `sitemap.xml` con 31 URLs
- `robots.txt` apuntando al sitemap
- Verificado en Google Search Console

## Pendiente

- [ ] Verificar dominio en Google Search Console (agregar TXT record en Wix DNS)
- [ ] Contenido del blog (sección removida por placeholder — si se desea, crear como rutas estáticas)
- [ ] Redes sociales: solo Facebook está enlazado. Agregar Instagram/Twitter cuando se creen las cuentas
