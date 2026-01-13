const CACHE_VERSION = "task360-v2";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;

const OFFLINE_URL = "/offline.html";

/* ---------- INSTALL ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll([
        "/",
        "/offline.html",

        // Core branding
        "/android-chrome-192x192.png",
        "/android-chrome-512x512.png",

        // Fonts / CSS if any
      ])
    )
  );
  self.skipWaiting();
});

/* ---------- ACTIVATE ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* ---------- FETCH ---------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET
  if (request.method !== "GET") return;
  if (!request.url.startsWith("http")) {
    return;
  }

  const url = new URL(request.url);

  // HTML pages (Services, About, etc.)
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(PAGE_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match(OFFLINE_URL))
        )
    );
    return;
  }

  // Static assets (JS, CSS, images)
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        if (
          !response ||
          response.status !== 200 ||
          response.type !== "basic"
        ) {
          return response;
        }
        const copy = response.clone();
        caches.open(STATIC_CACHE).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
