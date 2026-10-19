/* Learners Coach: offline, install and update support for the GitHub Pages version */
(function () {
  var MEDIA = ["assets/films/film-1-cdcc48e9.js", "assets/films/film-10-f23a08b5.js", "assets/films/film-2-962c62cb.js", "assets/films/film-3-7cfe0154.js", "assets/films/film-4-220ecf74.js", "assets/films/film-5-60a0de2c.js", "assets/films/film-6-9235de60.js", "assets/films/film-7-6e68ef40.js", "assets/films/film-8-9b9aa06e.js", "assets/films/film-9-3431028b.js", "assets/pdf/learners-coach-cheat-sheet-car-00da2caf.pdf", "assets/pdf/learners-coach-cheat-sheet-motorcycle-32dbfa3e.pdf", "assets/pdf/learners-coach-sign-chart-a780de92.pdf", "assets/pdf/learners-coach-test-day-checklist-5ea24b5c.pdf", "assets/player-d9ea4d7a.js", "assets/voice/flashcards-fbae1d85.mp4", "assets/voice/session-1-0abdc353.mp4", "assets/voice/session-10-7895d51c.mp4", "assets/voice/session-2-09661760.mp4", "assets/voice/session-3-4909ba02.mp4", "assets/voice/session-4-9a5fba71.mp4", "assets/voice/session-5-36d55ed2.mp4", "assets/voice/session-6-f03731a8.mp4", "assets/voice/session-7-48be5ce0.mp4", "assets/voice/session-8-a322abab.mp4", "assets/voice/session-9-3854852b.mp4"];
  var MEDIA_CACHE = "lc-media-v1";
  var GH = window.__K53GH = { on: true, update: false, canPrompt: false, standalone: false, isIOS: false, offline: {}, totalMb: 29 };
  function fire() { try { window.dispatchEvent(new Event("k53gh")); } catch (e) {} }
  function abs(u) { try { return new URL(u, location.href).href; } catch (e) { return u; } }
  try {
    GH.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    GH.standalone = (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  } catch (e) {}
  // Install to home screen (Android, Chrome, Edge show a prompt; iPhone uses Share, then Add to Home Screen)
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; GH.canPrompt = true; fire(); });
  window.addEventListener("appinstalled", function () { deferred = null; GH.canPrompt = false; GH.standalone = true; fire(); });
  GH.install = function () {
    if (!deferred) return;
    try { deferred.prompt(); } catch (e) {}
    var done = function () { deferred = null; GH.canPrompt = false; fire(); };
    try { deferred.userChoice.then(done, done); } catch (e) { done(); }
  };
  // Ask the browser to keep saved progress (stops it being cleared to free space)
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  // Service worker: offline use and "new version ready"
  var waiting = null;
  function onWaiting(w) { waiting = w; GH.update = true; fire(); }
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").then(function (reg) {
        function track(w) {
          if (!w) return;
          var check = function () { if (w.state === "installed" && navigator.serviceWorker.controller) onWaiting(w); };
          check(); w.addEventListener("statechange", check);
        }
        if (reg.waiting && navigator.serviceWorker.controller) onWaiting(reg.waiting);
        reg.addEventListener("updatefound", function () { track(reg.installing); });
        setInterval(function () { reg.update().catch(function () {}); }, 30 * 60 * 1000);
        document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") reg.update().catch(function () {}); });
      }).catch(function () {});
      var reloaded = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () { if (reloaded) return; reloaded = true; location.reload(); });
    });
  }
  GH.applyUpdate = function () { if (waiting) waiting.postMessage("skipWaiting"); else location.reload(); };
  // Download every film, recording and PDF for use with no connection
  function checkOffline() {
    if (!window.caches) return;
    caches.open(MEDIA_CACHE).then(function (c) {
      return Promise.all(MEDIA.map(function (u) { return c.match(abs(u)).then(function (r) { return !!r; }); }));
    }).then(function (a) { if (a.length && a.every(Boolean)) { GH.offline = { done: true }; fire(); } }).catch(function () {});
  }
  setTimeout(checkOffline, 1500);
  GH.downloadAll = function () {
    if (!window.caches) { GH.offline = { failed: true }; fire(); return; }
    GH.offline = { busy: true, pct: 0 }; fire();
    caches.open(MEDIA_CACHE).then(function (c) {
      var i = 0, n = MEDIA.length;
      function next() {
        if (i >= n) { GH.offline = { done: true }; fire(); return; }
        var u = abs(MEDIA[i]);
        return c.match(u).then(function (r) {
          if (r) return;
          return fetch(u, { cache: "reload" }).then(function (res) { if (!res.ok) throw new Error("load"); return c.put(u, res); });
        }).then(function () { i++; GH.offline = { busy: true, pct: Math.round(i / n * 100) }; fire(); return next(); });
      }
      return next();
    }).catch(function () { GH.offline = { failed: true }; fire(); });
  };
})();
