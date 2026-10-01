
const PREFIX = 'my-gym-shell:' + new URL(self.registration.scope).pathname + ':';
const CACHE = PREFIX + "4ba4991410415e65";
const ASSETS = ["./index.html","./manifest.webmanifest","./icon.svg"].map(path => new URL(path, self.registration.scope).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(
    ASSETS.map(url => new Request(url, { cache: 'reload' }))
  )).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key =>
    (key.startsWith(PREFIX) && key !== CACHE) ||
    (new URL(self.registration.scope).pathname === '/gym/' && key === 'my-gym-pwa-v1')
  ).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !request.url.startsWith(self.registration.scope)) return;
  if (url.pathname.includes('/api/')) return;
  if (request.mode === 'navigate') {
    event.respondWith(caches.open(CACHE).then(async cache =>
      (await cache.match(new URL('./index.html', self.registration.scope).href)) || fetch(request)
    ));
  } else if (ASSETS.includes(request.url)) {
    event.respondWith(caches.open(CACHE).then(async cache => (await cache.match(request)) || fetch(request)));
  }
});
