var dataCacheName = 'resgate';
var cacheName = 'resgate';
var filesToCache = [
  '/',
 "./css/app.css",
 "./js/impetus.js",
 "./js/pinch-zoom-canvas.js",
 "./js/jquery-3.3.1.js",
 "./lib/framework7.js",
 "./lib/require.js",
 "./lib/css/framework7.css",
 "./app.js",
 "./carslist.js",
 "./functions.js",
 "./config.xml",
 "./filtered.html",
 "./icon.png",
 "./index.html",
 "./manifest.json",
 "./service-worker.js",
 "./zoom.html"
];

filesToCache.push("./img/carimage/sheet_18.jpg");

console.log(carslist);

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
