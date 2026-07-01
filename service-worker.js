const CACHE="madeira-v5";


const FILES=[

"index.html",
"style.css",
"app.js",
"map.js"

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