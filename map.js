// =====================================
// Madeira 2026 V5.3
// geprüfte Zielpunkte
// =====================================

console.log("Madeira Map V5.3 geladen");
let markers = [];
let activeCategory = "alle";
let editMode = false;
let selectedMarker = null;

const markerIcons = {
    baden: "🌊",
    schnorcheln: "🤿",
    naturpool: "🌊",
    wandern: "🥾",
    aussicht: "🌅",
    natur: "🌲",
    essen: "🍽️",
    supermarkt: "🛒",
    einkaufen: "🛍️",
    baeckerei: "🥖",
    apotheke: "💊",
    tankstelle: "⛽",
    metzgerei: "🥩",
    fisch: "🐟",
    obst: "🍌",
    ausflug: "🏛️",
    ort: "📍",
    service: "🛠️",
    home: "🏠"
};


// Karte

const map = L.map("map").setView(
    [32.74, -17.12],
    10
);


// Kartenquelle

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
    subdomains:["a","b","c"],
    maxZoom:19,
    attribution:"© OpenStreetMap-Mitwirkende"
}
).addTo(map);




// =====================================
// Madeira Ziele
// =====================================

// Madeira POI Datenbank laden

const spots = madeiraSpots;





// =====================================
// Marker
// =====================================


let allPoints=[];


spots.forEach(spot => {

    // Spots ohne Koordinaten überspringen
    if (
        typeof spot.lat !== "number" ||
        typeof spot.lng !== "number"
    ) {
        return;
    }

const marker = L.marker(
    [spot.lat, spot.lng],
    {
        icon: L.divIcon({
            className: "custom-marker",
            html: `<div class="marker">${markerIcons[spot.category] || "📍"}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        })
    }
);

    marker.category = spot.category;
	marker.spot = spot;
    marker.bindPopup(`

<h3>${spot.name}</h3>

<b>${spot.category}</b>

<p>${spot.description}</p>

<button
onclick="savePlace('${spot.name}')"
style="
background:#0077b6;
color:white;
border:0;
padding:8px;
border-radius:15px;
">
❤️ Favorit
</button>

<br><br>

<a target="_blank"
href="https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}">
🚗 Route
</a>

`);
marker.on("click", () => {
	if (editMode) {
    selectedMarker = marker;
    showCoordinateEditor(marker);
    return;
}

    const mapsLink =
        (typeof spot.lat === "number" && typeof spot.lng === "number")
        ? `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name + ", Madeira")}`;

document.getElementById("spotDetails").innerHTML = `

<h2>${spot.name}</h2>

<p>
<strong>Kategorie:</strong>
${spot.category}
</p>

<p>
${spot.description}
</p>

<hr>

<div class="details">
${spot.details || spot.description}
</div>

<p>

<a
target="_blank"
href="${mapsLink}">
🌍 Google Maps öffnen
</a>

</p>

`;

});
    marker.addTo(map);

    markers.push(marker);

    allPoints.push([
        spot.lat,
        spot.lng
    ]);

});





// Karte auf Punkte zentrieren

map.fitBounds(
allPoints,
{
padding:[40,40]
}
);


console.log(
spots.length + " Punkte geladen"
);

// =====================================
// Filter
// =====================================

const filterBar = document.getElementById("filterBar");

const icons = {
    alle:"🌍",
    baden:"🌊",
    schnorcheln:"🤿",
    naturpool:"🌊",
    wandern:"🥾",
    aussicht:"🌅",
    natur:"🌲",
    essen:"🍽️",
    supermarkt:"🛒",
    einkaufen:"🛍️",
    baeckerei:"🥖",
    apotheke:"💊",
    tankstelle:"⛽",
    metzgerei:"🥩",
    fisch:"🐟",
    obst:"🍌",
    ausflug:"🏛️",
    ort:"📍",
    service:"🛠️",
    home:"🏠"
};

const kategorien = [
    "alle",
    ...[...new Set(
        spots
            .filter(s => s.category)
            .map(s => s.category)
    )].sort((a, b) => a.localeCompare(b, "de"))
];

kategorien.forEach(cat=>{

    const btn=document.createElement("button");

    btn.dataset.category=cat;

    btn.innerHTML=
        (icons[cat] || "📍") +
        " " +
        cat;

    if(cat==="alle"){
        btn.classList.add("active");
    }

    btn.onclick=()=>filterMarkers(cat);

    filterBar.appendChild(btn);

});


function filterMarkers(cat){

    activeCategory=cat;

    document
        .querySelectorAll("#filterBar button")
        .forEach(btn=>{

            btn.classList.toggle(
                "active",
                btn.dataset.category===cat
            );

        });

    markers.forEach(marker=>{

        if(map.hasLayer(marker)){
            map.removeLayer(marker);
        }

        if(
            cat==="alle" ||
            marker.category===cat
        ){
            marker.addTo(map);
			marker.on("dragend", function () {

    if (!editMode) return;

    const pos = marker.getLatLng();

    marker.spot.lat = pos.lat;
    marker.spot.lng = pos.lng;

    showCoordinateEditor(marker);

});
        }

    });

}
// ======================================
// Koordinateneditor
// ======================================

function toggleCoordinateEditor(){

    editMode=!editMode;

    alert(
        editMode
        ? "Koordinateneditor aktiviert"
        : "Koordinateneditor beendet"
    );

    markers.forEach(m=>{

        if(editMode){

            m.dragging.enable();

        }else{

            m.dragging.disable();

        }

    });

}

function showCoordinateEditor(marker){

    const spot=marker.spot;

    let html=`

<h3>${spot.name}</h3>

Latitude<br>
<input id="editLat"
value="${spot.lat}"
style="width:100%;margin-bottom:8px;">

Longitude<br>
<input id="editLng"
value="${spot.lng}"
style="width:100%;margin-bottom:8px;">

<button onclick="saveCoordinates()">
Speichern
</button>

<button onclick="copyCoordinates()">
JS kopieren
</button>

`;

    document.getElementById("spotDetails").innerHTML=html;

}

function saveCoordinates(){

    if(!selectedMarker) return;

    const lat=parseFloat(
        document.getElementById("editLat").value
    );

    const lng=parseFloat(
        document.getElementById("editLng").value
    );

    selectedMarker.setLatLng([lat,lng]);

    selectedMarker.spot.lat=lat;
    selectedMarker.spot.lng=lng;

}

function copyCoordinates(){

    if(!selectedMarker) return;

    const txt=
`lat: ${selectedMarker.spot.lat},
lng: ${selectedMarker.spot.lng},`;

    navigator.clipboard.writeText(txt);

    alert("Koordinaten kopiert");

}