// Sổ Thu Trọ — service worker: caches the app shell so it opens instantly and works offline.
var CACHE_NAME = "sotrotro-shell-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){ return cache.addAll(ASSETS); }).catch(function(){})
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE_NAME; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

// App shell files: cache-first (instant, offline-safe).
// Everything else (e.g. the VietQR image, Google APIs): network-first, falling back to cache if offline.
self.addEventListener("fetch", function(event){
  if(event.request.method!=="GET") return;
  var isShellFile = ASSETS.some(function(a){ return event.request.url.indexOf(a.replace("./",""))>-1; });
  if(isShellFile){
    event.respondWith(
      caches.match(event.request).then(function(cached){
        return cached || fetch(event.request);
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).then(function(res){
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, resClone); }).catch(function(){});
        return res;
      }).catch(function(){ return caches.match(event.request); })
    );
  }
});
