# DariLab IPS — Sitio Web

Sitio institucional de DariLab IPS / CRC (Tauramena, Casanare, Colombia).

- **Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Motion
- **Despliegue:** GitHub Pages → [darilabips.com](https://darilabips.com)
- **Exportación estática:** todo el sitio es estático, sin servidor propio
- **Lighthouse:** Performance 78 · Accesibilidad **100** · Best Practices **100** · SEO **100**

## Estructura

| Ruta | Descripción |
|---|---|
| `/` | Inicio: carrusel de héroes, servicios destacados, splash promocional |
| `/nosotros` | Historia (con foto del equipo ampliable), misión, visión, valores, derechos y deberes |
| `/servicios` | Catálogo de 28 servicios médicos en 9 categorías |
| `/servicios/[id]` | Detalle de cada servicio + formulario de cita (envío por WhatsApp) |
| `/contacto` | Formulario de contacto (correo), mapa de Google, líneas de atención |
| `/pqrsf` | Radicación de PQRSF (correo a Gerencia) |

## Formularios y correos

Los formularios envían correo real mediante [Web3Forms](https://web3forms.com) (funciona en sitio estático; no requiere servidor). Cada access key tiene configurado su buzón destinatario en el panel de Web3Forms.

| Formulario | Access key (`lib/contact.ts`) | Destino |
|---|---|---|
| Contacto (`/contacto`) | `WEB3FORMS.contacto` | `darilab1999@gmail.com` |
| Modal flotante de ayuda | `WEB3FORMS.contacto` | `darilab1999@gmail.com` |
| PQRSF (`/pqrsf`) | `WEB3FORMS.pqrsf` | `darilabgerencia1@gmail.com` |
| Solicitud de cita (`/servicios/[id]`) | — | WhatsApp (mensaje pre-cargado) |

**Para cambiar destinatarios o agregar un formulario:** editar la key en el panel de Web3Forms y/o `lib/contact.ts`. El envío está centralizado en `lib/web3forms.ts` (incluye honeypot anti-spam: si el campo oculto `empresa_web` llega con datos, se descarta la solicitud).

## Contacto centralizado

Todos los números, correos y mensajes por defecto están en `lib/contact.ts`:

- **WhatsApp:** +57 314 238 4325 (mostrado como `314 238 4325`)
- **Correos:** `darilab1999@gmail.com` (contacto) y `darilabgerencia1@gmail.com` (gerencia/PQRSF)
- **Ubicación:** Carrera 7 # 5 - 26, Barrio Gavan, Tauramena — Casanare
- **Mapa:** botón "Cómo llegar" → `maps.app.goo.gl/Pn8f3RBPetRK7JYy8` (ficha de DARILAB S.A.S.)

## Seguridad

El sitio es estático, por lo que el hardening se hace desde el HTML (`app/layout.tsx`):

- **CSP bloqueante** vía `<meta http-equiv>`: scripts/estilos solo propios, `connect-src` limitado a `api.web3forms.com`, imágenes propias + Unsplash, iframe solo Google Maps. GitHub Pages no permite cabeceras HTTP personalizadas ni CSP Report-Only vía meta, por eso la política va en modo bloqueo directo.
- **Honeypot anti-spam** en los 3 formularios con correo.
- **Referrer policy** `strict-origin-when-cross-origin`.
- **Sin sourcemaps ni secretos** en el bundle (las access keys de Web3Forms son públicas por diseño; su protección es el dominio autorizado en el panel).
- Dependencias parchadas con `npm audit fix`. Quedan ~5 vulnerabilidades solo de herramientas de desarrollo (no llegan al navegador del usuario) que requieren actualizar Next.js/ESLint a versiones mayores.

## Accesibilidad y rendimiento

- **WCAG AA 100/100:** contrastes verificados (cyan de marca `#00AEEF` reservado para fondos/iconos grandes; texto pequeño en cyan usa `#0077B6`, y `#005E93` sobre gris claro), placeholders legibles, botones con nombre accesible, áreas táctiles ≥24px, `prefers-reduced-motion` respetado.
- **Rendimiento:** imágenes locales comprimidas (-45%, mozjpeg q72), splash pre-cargado (`rel=preload`), primera diapositiva del carrusel con `fetchpriority=high`, dimensiones explícitas en imágenes (CLS 0), `preconnect` a Unsplash.
- **Imagen OG** 1200×630 (`public/og-image.jpg`) para vista previa en redes.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de producción local (simula CI):

```bash
npm run build      # exporta a out/
```

> Nota (Windows): si el navegador bloquea rutas al probar localmente, usar `MSYS_NO_PATHCONV=1`.

## Despliegue (GitHub Pages)

El sitio se despliega automáticamente al hacer push a `main`:

1. GitHub Actions (`.github/workflows/deploy.yml`) ejecuta `next build` con `NEXT_PUBLIC_BASE_PATH=''` (exportación estática → `out/`)
2. Se crea el archivo `CNAME` con `darilabips.com`
3. Se despliega a GitHub Pages

Hay **un solo workflow** (los workflows duplicados fueron eliminados) y el artefacto `out/` no se versiona.

### Dominio personalizado

- **DNS (en Wix):** 4 registros A apuntando a las IPs de GitHub Pages + CNAME de `www` a `wondorlf.github.io`
- **HTTPS:** habilitado y forzado por GitHub Pages (redirecciones HTTP→HTTPS y www→dominio raíz verificadas)

### Cambiar la ruta base

Si el sitio se sirve bajo `https://<usuario>.github.io/<repo>/`, poner `NEXT_PUBLIC_BASE_PATH: '/darilab'` en `.github/workflows/deploy.yml`. Todas las rutas de imágenes pasan por el helper `assetUrl()` (`lib/assets.ts`), que aplica la ruta base automáticamente.

## SEO

- Metadatos por página (título, descripción, canonical, Open Graph)
- JSON-LD `MedicalClinic` (Schema.org) en la portada
- `sitemap.xml` con 33 URLs (se regenera solo al agregar servicios en `data/services.ts`)
- `robots.txt` apuntando al sitemap
- Sitemap enviado a Google Search Console (verificación TXT en Wix DNS)

## Agregar un servicio

1. Agregar el objeto a `servicesData` en `data/services.ts` (id, título, categorías, descripción, icono, imagen, tema, recomendaciones)
2. Listo: la página de detalle, el listado, el menú del header y el sitemap se generan automáticamente

## Pendiente

- [ ] Actualizar Next.js/ESLint a versiones mayores para limpiar las vulnerabilidades restantes de dependencias de desarrollo
- [ ] Blog (fue removido por ser placeholder; crear como rutas estáticas si se desea)
