# Validación local

La revisión del 29 de octubre de 2026 conserva Node 24.21.0, pnpm 12.3.4 y las dependencias exactas del proyecto. La instalación normal con lockfile congelado se ejecutó en un directorio sin node_modules; reutilizó paquetes del almacén local y descargó los que faltaban. No se deshabilitaron scripts.

El sitio sigue siendo estático. La configuración usa el Worker existente `cubiletehill`, con Assets y ejecución del Worker antes de archivos. La comprobación de rutas locales debe incluir GET y HEAD, alias index/error, 404/noindex, recursos y conservación de ruta/consulta al consolidar HTTP/www. Un dry-run no publica.

El pronóstico se comprueba por separado con respuestas válidas, errores HTTP y datos incompletos. La prueba de la función del navegador no equivale a la interacción visual en un navegador real. La revisión visual debe comprobar menú móvil, créditos de las imágenes, mapa y pronóstico a tamaños de teléfono y escritorio.

La publicación, el resultado de CI del nuevo commit y la aceptación de producción permanecen pendientes hasta que se comprueben de forma independiente. No se declara una nueva versión desplegada mediante estas notas.
