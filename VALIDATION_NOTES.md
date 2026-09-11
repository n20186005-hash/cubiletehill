# Estado de validación del paquete

## Verificaciones realizadas en este entorno

- `pnpm-workspace.yaml` existe solo para declarar `onlyBuiltDependencies` (`esbuild`, `workerd`); no define paquetes de workspace.
- Escaneo del código fuente: no aparecen `example.com`, `localhost` ni `chrome-extension://`.
- No se define `lastmod` manualmente.
- El único script remoto es el cargador oficial de GA4 solicitado (`googletagmanager.com`).
- `astro.config.ts` fija `https://cubiletehill.com` como `site` por defecto y permite sobreescribirlo con `PUBLIC_SITE_URL`; canonical, `og:url`, JSON-LD, robots y sitemap dependen de `Astro.site`.
- Logo, favicon SVG, favicon 16/32, Apple touch icon 180 y tarjeta Open Graph son recursos locales.
- PWA: `public/manifest.webmanifest` y `public/sw.js` se copian a `dist/`.

## Resultado de la cadena de verificación

Ejecutada con Node.js 24.14.0 y pnpm 12.3.4 (la versión fijada del proyecto es Node.js 24.21.0):

- `pnpm install`: correcto (310 paquetes). Requirió aprobar los scripts de `esbuild` y `workerd` con `pnpm approve-builds --all`.
- `pnpm check`: 0 errores, 0 advertencias, 1 hint preexistente (`is:inline` en el bloque JSON-LD).
- `pnpm build`: correcto. Genera `dist/index.html`, `dist/sitemap-0.xml`, `dist/sitemap-index.xml` y los activos de `public/`.
- JSON-LD del HTML construido validado: 5 nodos (`WebSite`, `TouristAttraction`, `LocalBusiness`, `BreadcrumbList`, `FAQPage`).

## Fotografías

El sitio usa directamente las URLs reales de Wikimedia Commons con su atribución CC BY-SA 4.0 (véase `CREDITOS_FOTOS.md`). Las copias locales en `public/images/` se emplean para el nodo `image` del JSON-LD y como recursos de la propia página.
