const worker = /** @type {any} */ (self);
worker.addEventListener('install', () => worker.skipWaiting());
worker.addEventListener('activate', /** @param {any} event */ (event) => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('cubiletehill-')).map(k => caches.delete(k)))).then(() => worker.clients.claim())));
