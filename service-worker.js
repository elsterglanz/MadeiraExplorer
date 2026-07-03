const CACHE="madeira-v7";


const FILES=[

"index.html",
"style.css",
"app.js",
"map.js",
"weather.js",
"spots.js",
"manifest.json",
"icons/icon-192.png",
"icons/icon-512.png",
"icons/icon-192-maskable.png",
"icons/icon-512-maskable.png"

];



self.addEventListener(

"install",

event=>{


event.waitUntil(

caches.open(CACHE)

.then(

cache=>cache.addAll(FILES)

)

);


}

);





self.addEventListener(

"activate",

event=>{


event.waitUntil(

caches.keys().then(
keys=>Promise.all(
keys
.filter(key=>key!==CACHE)
.map(key=>caches.delete(key))
)
)

);


}

);




self.addEventListener(

"fetch",

event=>{


event.respondWith(

caches.match(event.request)

.then(

response=>response || fetch(event.request)

)

);


}

);