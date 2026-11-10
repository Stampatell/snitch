const C='firebase-sdk-10.14.1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
 if(e.request.method!=='GET'||u.hostname!=='www.gstatic.com'||!u.pathname.includes('/firebasejs/'))return;
 e.respondWith(caches.open(C).then(async c=>{const m=await c.match(e.request);if(m)return m;
  const r=await fetch(e.request);if(r.ok)c.put(e.request,r.clone());return r}))});
