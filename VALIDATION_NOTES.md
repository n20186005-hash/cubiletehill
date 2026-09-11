# Estado de validación del paquete

## Verificaciones realizadas en este entorno

- No existe `pnpm-workspace.yaml` (proyecto de un solo paquete).
- Escaneo del código fuente: no aparecen `example.com`, `localhost` ni `chrome-extension://`.
- No se define `lastmod` manualmente.
- El único script remoto es el cargador oficial de GA4 solicitado (`googletagmanager.com`).
- `PUBLIC_SITE_URL` se lee una sola vez en `astro.config.ts`; canonical, `og:url`, JSON-LD y sitemap dependen de `Astro.site`.
- Logo, favicon SVG, favicon 16/32, Apple touch icon 180 y tarjeta Open Graph son recursos locales.

## Limitaciones del entorno de empaquetado

Este entorno no tiene salida de red hacia el registro npm y solo dispone de Node.js 22.16.0. El proyecto fija Node.js 24.21.0, por lo que aquí no fue posible ejecutar de forma real la cadena requerida `corepack pnpm install --frozen-lockfile → pnpm check → pnpm build`.

Por la misma limitación, no se generó un `pnpm-lock.yaml` inventado o no verificable. Tampoco fue posible descargar los binarios de las fotografías de Wikimedia Commons al ZIP; el sitio usa directamente las URLs de las fotografías reales con su atribución CC BY-SA 4.0.

Para considerar el paquete como validado de producción, debe generarse el lockfile con pnpm 12.3.4 en Node.js 24.21.0, repetir la instalación congelada y ejecutar `pnpm check` y `pnpm build` en un entorno con acceso al registro npm. Este archivo deja constancia explícita de que esas pruebas no se simularon.
