# Cerro del Cubilete — sitio turístico

Sitio estático de una sola página en español (México), construido con Astro + Tailwind CSS + TypeScript y preparado para desplegarse como sitio estático mediante Cloudflare Workers Assets.

## Requisitos fijados

- Node.js 24.21.0 (ver `.node-version` y `engines`)
- pnpm 12.3.4 (ver `packageManager` y `engines`)
- Astro 7.3.2
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- Tailwind CSS / Vite plugin 4.3.3
- Wrangler 4.130.0

## Dominio: un único punto de configuración

El dominio por defecto es `https://cubiletehill.com`, definido en `astro.config.ts` y asignado a `site` de Astro.

- Puede sobrescribirse con la variable de entorno `PUBLIC_SITE_URL` (URL HTTPS completo) sin tocar el código.
- Canonical, Open Graph, JSON-LD, robots y sitemap se derivan de `Astro.site`.
- Con dominio definido, `@astrojs/sitemap` genera `sitemap-0.xml` y `sitemap-index.xml`.

## SEO de entidad y PWA

- **NAP consistente**: nombre, dirección y teléfono del `Cerro del Cubilete` (Cubilete Hill) aparecen en cabecera, cuerpo y pie (`<address>`) con un único origen de datos en `src/pages/index.astro`.
- **JSON-LD** (`@graph`): `WebSite`, `TouristAttraction` (con `@id`, `alternateName`, `image`, `geo`, `sameAs`), `LocalBusiness`, `BreadcrumbList` y `FAQPage`.
- **TDK + OG**: título con `全称 + (域名含义) + ciudad`, meta description, canonical, `og:image:alt` y metadatos geográficos (`geo.region`, `geo.position`, `ICBM`).
- **Fuentes (E-E-A-T)**: sección `#fuentes` con enlaces oficiales `.gob.mx` y `.org`.
- **Transporte y accesos**: bloque dentro de `#llegar` con el aeropuerto BJX, la Central de Autobuses de Silao, los hubs de León y CDMX, el estado real del Tren de Pasajeros México–Querétaro (ficha oficial en `proyectosmexico.gob.mx`) y la última milla hasta la cima.
- **PWA**: `public/manifest.webmanifest` + `public/sw.js` (cache del shell y modo offline), registrado desde la propia página.

## Desarrollo y verificación

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Despliegue en Cloudflare Workers

Después de autenticar Wrangler:

```bash
pnpm deploy
```

`wrangler.jsonc` publica `./dist` como Workers Assets. No hay base de datos, autenticación, CMS ni servidor de aplicación.

## GA4

El identificador configurado es `G-HXM22WWPKP` mediante el script oficial de Google Tag Manager / gtag.

## Fotografías

Las tres fotografías de contenido son imágenes reales alojadas en Wikimedia Commons bajo CC BY-SA 4.0. Se mantienen como URLs de origen por una limitación de red del entorno de empaquetado actual; véase `CREDITOS_FOTOS.md`.
