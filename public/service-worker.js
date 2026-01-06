
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");
  self.skipWaiting(); // activate immediately
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");
  event.waitUntil(
    (async () => {      
      await self.clients.claim();      
      const expectedCaches = [];
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => !expectedCaches.includes(k))
          .map((k) => caches.delete(k))
      );
    })()
  );
});