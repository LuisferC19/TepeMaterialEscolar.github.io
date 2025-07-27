const CACHE_NAME = 'material-tepetitla-v4'; // Versión actualizada
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './sw-register.js',
  './img/Audifonos.jpg',
  './img/Calculadora.png',
  './img/Cargador-iphone.png',
  './img/Goma.png',
  './img/Lapiz.png',
  './img/Lapicero.png',
  './img/Libretas.png',
  './img/Mochila.png',
  './img/Plato-ceramica.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
        console.log('Cache abierto y archivos añadidos');
        return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(resp => {
        return resp || fetch(event.request);
    })
  );
});