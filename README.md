# DariLab IPS — Sitio Web

Sitio institucional de DariLab IPS (Tauramena, Casanare, Colombia): página de inicio, servicios (25+), Nosotros, Contacto y formulario PQRSF.

- **Stack:** Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Motion
- **Despliegue:** GitHub Pages (exportación estática, `output: 'export'`, vía GitHub Actions)
- **Sin backend:** todo el contenido es estático. No hay API routes ni variables de entorno requeridas.

## Ejecutar en local

```bash
npm install
npm run dev
```

Compilar la exportación estática (genera la carpeta `out/`):

```bash
npm run build
```

## Formularios → WhatsApp

Todos los formularios del sitio (Contacto, PQRSF, solicitud de cita por servicio y el modal flotante) **no envían correos**: al enviar, abren WhatsApp (`wa.me`) con un mensaje pre-cargado con los datos del formulario para que el visitante lo envíe desde su propio WhatsApp.

**Dónde se configura la información de contacto (un solo lugar):**

Archivo: [`lib/contact.ts`](lib/contact.ts)

| Constante | Valor actual |
|---|---|
| `WHATSAPP_NUMBER` | `573142384325` (+57 314 238 4325) |
| `WHATSAPP_DISPLAY` | `314 238 4325` |
| `EMAIL` | `darilab1999@gmail.com` |

Si cambian el número, se actualiza en todo el sitio automáticamente (footer, página de contacto, botones "Agendar por WhatsApp", formularios).

## Desplegar en GitHub Pages (plan actual)

El proyecto ya está listo: exportación estática (`output: 'export'` + `images.unoptimized`) y el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) que compila y despliega automáticamente en cada push a `main`.

### 1. Crear el repositorio en GitHub

1. Cree un repositorio en GitHub (público — GitHub Pages en repositorios privados requiere plan de pago).
2. Inicialice git en el proyecto (si aún no lo está) y suba el código:
   ```bash
   git init
   git add .
   git commit -m "Sitio DariLab IPS (exportación estática Next.js)"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```

### 2. Activar GitHub Pages

1. En el repositorio: **Settings → Pages**.
2. **Source:** `GitHub Actions` (no usar branch).
3. El primer push ya dispara el workflow; el sitio queda en `https://<usuario>.github.io/<repositorio>/`.

### 3. Conectar el dominio `darilabips.com`

1. En **Settings → Pages → Custom domain**, ingrese `darilabips.com` y guarde (GitHub valida el DNS y agrega el archivo `CNAME`; el workflow también lo genera en `out/`).
2. Marque **Enforce HTTPS**.

### 4. Apuntar el DNS en Wix (no requiere transferir el dominio)

Wix permite editar registros A y CNAME de dominios comprados con Wix (artículo oficial: *Connecting a Wix Domain to an External Site*). En **Wix → Domains → `darilabips.com` → Manage DNS Records**: (los cambios tardan hasta 48 h)

**Registros A (dominio raíz)** — borrar los 3 actuales de Wix (`185.230.63.*`) y añadir los 4 de GitHub Pages:

| Host Name | Value |
|---|---|
| (vacío / @) | `185.199.108.153` |
| (vacío / @) | `185.199.109.153` |
| (vacío / @) | `185.199.110.153` |
| (vacío / @) | `185.199.111.153` |

**Registro CNAME (www)** — borrar el actual de Wix (`cdn1.wixdns.net`) y añadir:

| Host Name | Value |
|---|---|
| `www` | `<usuario>.github.io` |

⚠️ **No borre otros registros** (MX, TXT, etc.) que no tengan que ver con la web. Al cambiar los registros A, el sitio Wix antiguo deja de servirse en el dominio.

### 5. Verificar

1. El workflow debe terminar en verde (Actions).
2. `https://darilabips.com` y `https://www.darilabips.com` (redirige al raíz) sirven el sitio con HTTPS.
3. Confirmar en **Settings → Pages** que el certificado se emitió (DNS check en verde) y Google Search Console para indexar el sitemap (`https://darilabips.com/sitemap.xml`).

### Notas

- No se requieren variables de entorno (`GEMINI_API_KEY`, `APP_URL`, `PORT` eran del andamiaje de AI Studio y ya no se usan).
- La ruta `/api/health` (monitoreo PM2) fue eliminada: no hay servidor. El archivo `ecosystem.config.cjs` y la carpeta `logs/` ya no son necesarios y pueden borrarse.
- **Alternativa (Cloudflare Pages):** el proyecto también sirve allí (preset `Next.js (Static HTML Export)`, build `npm run build`, carpeta `out`), pero el dominio raíz **sí requeriría transferir** el dominio fuera de Wix (Cloudflare exige nameservers propios; Wix no los permite cambiar). Por eso GitHub Pages es la vía elegida: sirve el dominio raíz solo con registros A/CNAME en Wix.

## Estado verificado del dominio (`darilabips.com`)

Consultado el 04/09/2026 vía RDAP/DNS:

- **Registrador:** Wix.com Ltd. (el dominio fue **comprado en Wix**)
- **Registro:** 2025-02-19 · **Expira:** 2027-02-19
- **Estado:** `client transfer prohibited` (bloqueo de transferencia activo)
- **DNS actual:** `ns12.wixdns.net` / `ns13.wixdns.net`, apuntando al hosting de Wix

> GitHub Pages no exige cambiar nameservers: basta con editar los registros A/CNAME en el panel de Wix. La transferencia del dominio queda **opcional** (solo si en el futuro se pasa a Cloudflare Pages).

## Pendientes / mejoras detectadas

- [ ] Crear el repositorio en GitHub, subir el código y ejecutar los pasos 2–5 del despliegue.
- [ ] (Opcional) Transferir `darilabips.com` a otro registrador si en el futuro se quiere Cloudflare Pages.
- [ ] **Twitter/Instagram**: los íconos del footer aún apuntan a `#` (Facebook ya está enlazado); actualizar cuando haya perfiles reales.
- [ ] **Resultados**: el enlace "Resultados" del menú no lleva a ninguna parte (enlaza a `#`).
- [ ] **Blog**: la sección "Blog de Salud" del home usa fechas/artículos de ejemplo y "Ver todos los artículos" apunta a `#`.
- [ ] **Código sin usar** (opcional limpiar): `hooks/use-mobile.ts`, `lib/utils.ts` (`cn`) y las dependencias `class-variance-authority`, `clsx`, `tailwind-merge` no se usan.
- [ ] **PM2**: si deja de usar el VPS, elimine `ecosystem.config.cjs` y `logs/`.

## SEO aplicado

- Metadatos completos en `app/layout.tsx`: title/template, description, keywords, Open Graph (`es_CO`), Twitter Cards, robots, íconos y `metadataBase` en `https://darilabips.com` (dominio raíz servido por GitHub Pages; `www` redirige al raíz).
- Metadatos por página (Inicio, Nosotros, Contacto, PQRSF, Servicios) y `generateMetadata` dinámico para cada servicio (con canonical por página).
- Datos estructurados **Schema.org `MedicalClinic`** (JSON-LD) en la portada: dirección, teléfono, correo y perfil de Facebook.
- `app/sitemap.ts` → genera `sitemap.xml` con las 5 rutas principales + las 25+ páginas de servicio.
- `app/robots.ts` → genera `robots.txt` que permite indexar y apunta al sitemap.
- Faltaría (opcional): Google Search Console para verificar el dominio y enviar el sitemap una vez publicado.