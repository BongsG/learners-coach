/* Learners Coach service worker. Version 3ceac8dd6e */
var VERSION = "3ceac8dd6e";
var CORE_CACHE = "lc-core-" + VERSION;
var MEDIA_CACHE = "lc-media-v1";
var CORE = ["./", "index.html", "support.js", "gh.js", "react.production.min.js", "react-dom.production.min.js", "fonts.css", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "font-bricolage-grotesque-latin-500-normal.woff2", "font-bricolage-grotesque-latin-700-normal.woff2", "font-bricolage-grotesque-latin-800-normal.woff2", "font-barlow-semi-condensed-latin-600-normal.woff2", "font-barlow-semi-condensed-latin-700-normal.woff2", "font-barlow-condensed-latin-700-normal.woff2", "font-source-sans-3-latin-400-normal.woff2", "font-source-sans-3-latin-600-normal.woff2", "font-source-sans-3-latin-700-normal.woff2", "font-ibm-plex-mono-latin-400-normal.woff2", "font-ibm-plex-mono-latin-500-normal.woff2", "font-atkinson-hyperlegible-latin-400-normal.woff2", "font-atkinson-hyperlegible-latin-700-normal.woff2", "img-controls-car-9d76f63e.png", "img-controls-moto-4f0005da.png", "img-signs-b0a9628b.jpg"];
var MEDIA_ALL = ["film-1-cdcc48e9.js", "film-10-f23a08b5.js", "film-2-962c62cb.js", "film-3-7cfe0154.js", "film-4-220ecf74.js", "film-5-60a0de2c.js", "film-6-9235de60.js", "film-7-6e68ef40.js", "film-8-9b9aa06e.js", "film-9-3431028b.js", "img-controls-car-9d76f63e.png", "img-controls-moto-4f0005da.png", "img-signs-b0a9628b.jpg", "pdf-learners-coach-cheat-sheet-car-00da2caf.pdf", "pdf-learners-coach-cheat-sheet-motorcycle-32dbfa3e.pdf", "pdf-learners-coach-sign-chart-a780de92.pdf", "pdf-learners-coach-test-day-checklist-5ea24b5c.pdf", "player-d9ea4d7a.js", "voice-flashcards-a8aef8f3.webm", "voice-flashcards-fbae1d85.mp4", "voice-session-1-0abdc353.mp4", "voice-session-1-bb2aacea.webm", "voice-session-10-342d2925.webm", "voice-session-10-7895d51c.mp4", "voice-session-2-09661760.mp4", "voice-session-2-7c3c5dd1.webm", "voice-session-3-4909ba02.mp4", "voice-session-3-b3c11595.webm", "voice-session-4-9a5fba71.mp4", "voice-session-4-a35786d8.webm", "voice-session-5-3631dd69.webm", "voice-session-5-36d55ed2.mp4", "voice-session-6-05a13381.webm", "voice-session-6-f03731a8.mp4", "voice-session-7-48be5ce0.mp4", "voice-session-7-abb4e0f7.webm", "voice-session-8-4b3a335b.webm", "voice-session-8-a322abab.mp4", "voice-session-9-3854852b.mp4", "voice-session-9-a3b5c8fc.webm"];
function abs(u) { return new URL(u, self.registration.scope).href; }
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CORE_CACHE).then(function (c) { return c.addAll(CORE.map(function (u) { return new Request(abs(u), { cache: "reload" }); })); }));
});
self.addEventListener("activate", function (e) {
  var keep = {}; MEDIA_ALL.forEach(function (u) { keep[abs(u)] = 1; });
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf("lc-core-") === 0 && k !== CORE_CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () {
    return caches.open(MEDIA_CACHE).then(function (c) { return c.keys().then(function (rs) { return Promise.all(rs.filter(function (r) { return !keep[r.url]; }).map(function (r) { return c.delete(r); })); }); });
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("message", function (e) { if (e.data === "skipWaiting") self.skipWaiting(); });
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.headers.get("range")) return;
  if (/\/(film-|player-|voice-|pdf-)[^/]*$/.test(url.pathname)) {
    // Films, recordings and PDFs: from the phone once saved, otherwise download and keep
    e.respondWith(caches.open(MEDIA_CACHE).then(function (c) {
      return c.match(url.href).then(function (hit) {
        if (hit) return hit;
        return fetch(req).then(function (res) { if (res.ok && res.status === 200) c.put(url.href, res.clone()); return res; });
      });
    }));
    return;
  }
  if (/\.ics$/.test(url.pathname)) return;
  if (req.mode === "navigate") {
    e.respondWith(caches.open(CORE_CACHE).then(function (c) {
      return c.match(abs("index.html")).then(function (hit) { return hit || fetch(req); });
    }).catch(function () { return fetch(req); }));
    return;
  }
  var clean = url.origin + url.pathname;
  e.respondWith(caches.open(CORE_CACHE).then(function (c) {
    return c.match(clean).then(function (hit) { return hit || fetch(req); });
  }));
});
