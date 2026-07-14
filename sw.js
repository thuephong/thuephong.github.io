// Sổ Thu Trọ — service worker: works offline, but always prefers the latest
// version from the network when available (so updates show up immediately
// instead of getting stuck on an old cached copy).
var CACHE_NAME = "sotrotro-shell-v2";

// Files that rarely change: safe to serve straight from cache (fast, offline-proof).
var STATIC_ASSETS = [
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];

// Files that change whenever the app is updated: always try the network
// first so updates are picked up right away; only fall back to the cached
// copy if there's no connection.
var NETWORK_FIRST_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(STATIC_ASSETS.concat(NETWORK_FIRST_ASSETS));
    }).catch(function(){})
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

function isListedAsset(url, list){
  return list.some(function(a){ return url.indexOf(a.replace("./",""))>-1; });
}

self.addEventListener("fetch", function(event){
  if(event.request.method!=="GET") return;
  var url = event.request.url;

  if(isListedAsset(url, NETWORK_FIRST_ASSETS)){
    // Network-first: always get the latest app shell when online.
    event.respondWith(
      fetch(event.request).then(function(res){
        var resClone = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, resClone); }).catch(function(){});
        return res;
      }).catch(function(){ return caches.match(event.request); })
    );
    return;
  }

  if(isListedAsset(url, STATIC_ASSETS)){
    // Cache-first: static icons, instant + offline-safe.
    event.respondWith(
      caches.match(event.request).then(function(cached){ return cached || fetch(event.request); })
    );
    return;
  }

  // Everything else (e.g. the VietQR image, Google APIs): network-first, cache as a fallback.
  event.respondWith(
    fetch(event.request).then(function(res){
      var resClone = res.clone();
      caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, resClone); }).catch(function(){});
      return res;
    }).catch(function(){ return caches.match(event.request); })
  );
});
