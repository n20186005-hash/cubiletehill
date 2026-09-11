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

El sitio lee exclusivamente `PUBLIC_SITE_URL` en `astro.config.ts` y lo asigna a `site` de Astro.

- Si `PUBLIC_SITE_URL` está vacío o no existe, el proyecto sigue construyéndose.
- En ese modo se omiten canonical y `og:url`, los recursos sociales pueden usar rutas relativas y `@astrojs/sitemap` no se habilita.
- Cuando exista dominio definitivo, define `PUBLIC_SITE_URL` con el URL HTTPS completo y vuelve a construir. Canonical, Open Graph, JSON-LD y sitemap se derivan de `Astro.site`.

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
