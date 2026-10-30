# Cerro del Cubilete — guía independiente

Guía turística y de divulgación cultural sin fines de lucro, en español de México. No representa al santuario ni vende entradas. Sitio estático Astro con Cloudflare Workers Assets.

## Entorno y comprobación

Node 24.21.0, pnpm 12.3.4 y todas las dependencias conservan las versiones exactas del lockfile.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
npx wrangler deploy --dry-run
```

El Worker existente se llama `cubiletehill`. `src/worker.js` se ejecuta antes de Assets: consolida HTTP/www al apex HTTPS conservando ruta y consulta, redirige los alias index y devuelve 404/noindex real para rutas desconocidas y alias de error, incluido HEAD. No se agregan dominios o bindings externos. El sitemap incluye únicamente la portada. La actualización de `sw.js` retira las antiguas cachés del sitio sin devolver la portada para errores.

## Contenido y fuentes

La página distingue el cerro del Santuario de Cristo Rey. La portada del operador publica 06:00–20:00 para el recinto; el dato de Maps pertenece a la ficha de la montaña y no se convierte en horario estructurado. Las fuentes y su fecha de consulta se muestran en la página. Los datos de opiniones son una instantánea atribuida de terceros, no reseñas propias ni una valoración estructurada de esta guía. No se publican tarifas, frecuencias, accesibilidad continua o servicios ferroviarios sin confirmación.

La fotografía histórica del camino se sirve localmente como WebP con fuente, autor, licencia, fecha y cambios junto a su uso. La portada es una ilustración abstracta original identificada como tal. Véase `CREDITOS_FOTOS.md`. Las imágenes históricas no muestran el estado actual de accesos.

Se conserva el identificador público de Google Analytics. El pie informa de Analytics, Google Maps y Open-Meteo; no se promete consentimiento previo ni ausencia de terceros. No hay formularios, cuentas, reservas o almacenamiento propio de preferencias.

## Estado de validación

Véase `VALIDATION_NOTES.md`. Las verificaciones locales no demuestran publicación ni funcionamiento de los dominios de producción. La activación y la revisión visual del candidato requieren una aceptación independiente.
