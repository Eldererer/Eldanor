const CACHE="eldanor-v3.1";
const CORE=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./eldanor-map.webp","./icon-192.png","./icon-512.png",
"./portraits/borealis.webp","./portraits/thalen.webp","./portraits/xyra.webp","./portraits/serenya.webp","./portraits/mjolnir.webp","./portraits/kaelen.webp","./portraits/lyra.webp"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener("fetch",e=>{
 if(e.request.mode==="navigate"){e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match("./index.html")));return}
 e.respondWith(caches.match(e.request).then(cached=>{
   const net=fetch(e.request).then(r=>{if(r&&r.status===200){let c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return r}).catch(()=>cached);
   return cached||net;
 }));
});