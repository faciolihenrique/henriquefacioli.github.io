
const PREFIX = 'my-gym-shell:' + new URL(self.registration.scope).pathname + ':';
const CACHE = PREFIX + "37be4d307cac82ea";
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
const TIMERS = new Map();
self.addEventListener('message', event => {
  const data = event.data;
  if (!data || !data.tag) return;
  if (data.type === 'SCHEDULE_TIMER') {
    const existing = TIMERS.get(data.tag);
    if (existing) {
      clearTimeout(existing.timeoutId);
      existing.resolve();
      TIMERS.delete(data.tag);
    }
    const delay = Math.max(0, Number(data.endsAt) - Date.now());
    event.waitUntil(new Promise(resolve => {
      const timeoutId = setTimeout(async () => {
        TIMERS.delete(data.tag);
        try {
          const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
          const isVisible = clients.some(client => client.visibilityState === 'visible' && client.focused);
          if (!isVisible && self.registration?.showNotification) {
            await self.registration.showNotification(data.title || 'Timer Complete', {
              body: data.body || 'Time for your next set!',
              tag: data.tag,
              renotify: true,
              vibrate: [200, 100, 200, 100, 300],
              icon: './icon.svg'
            });
          }
        } catch {}
        resolve();
      }, delay);
      TIMERS.set(data.tag, { timeoutId, resolve });
    }));
  } else if (data.type === 'CANCEL_TIMER') {
    const existing = TIMERS.get(data.tag);
    if (existing) {
      clearTimeout(existing.timeoutId);
      existing.resolve();
      TIMERS.delete(data.tag);
    }
    if (self.registration?.getNotifications) {
      event.waitUntil(
        self.registration.getNotifications({ tag: data.tag }).then(list => {
          list.forEach(n => n.close());
        }).catch(() => {})
      );
    }
  }
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
