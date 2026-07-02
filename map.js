// =====================================
// Madeira 2026 V5.3
// geprüfte Zielpunkte
// =====================================

console.log("Madeira Map V5.3 geladen");

// Escaped einen String für die sichere Verwendung innerhalb eines
// einfach gequoteten JS-Strings in einem doppelt gequoteten HTML-Attribut
// (z.B. onclick="savePlace('...')") - verhindert Fehler bei Namen mit Apostroph
// wie "🍹 Joe's Bar".
function escapeForInlineJs(str) {
    return String(str).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

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
// Gespeicherte Koordinaten anwenden
// =====================================

const corrections = JSON.parse(
    localStorage.getItem("madeiraCorrections") || "{}"
);

spots.forEach(spot => {

    const c = corrections[spot.id];

    if(!c) return;

    spot.lat = c.lat;
    spot.lng = c.lng;

});



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
onclick="savePlace('${escapeForInlineJs(spot.name)}')"
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

<div id="correctionCount"
     style="
        margin:10px 0;
        font-weight:bold;
        color:#2e7d32;
">
</div>

<div id="correctionList"
     style="
        max-height:140px;
        overflow-y:auto;
        border:1px solid #ccc;
        border-radius:6px;
        padding:6px;
        font-size:13px;
        background:#fafafa;
        margin-bottom:10px;
">
</div>

<button onclick="saveCoordinates()">
Speichern
</button>



<button onclick="copyCoordinates()">
JS kopieren
</button>

<button onclick="deletePoi()">
🗑 POI löschen
</button>

<button onclick="exportCorrections()">
    📥 Änderungen exportieren
</button>

<button onclick="clearCorrections()">
    🗑 Änderungen löschen
</button>

`;

    document.getElementById("spotDetails").innerHTML = html;

	updateCorrectionCount();

}

function saveCoordinates(){

    if(!selectedMarker) return;

    const lat = parseFloat(
        document.getElementById("editLat").value
    );

    const lng = parseFloat(
        document.getElementById("editLng").value
    );

    selectedMarker.setLatLng([lat,lng]);

    selectedMarker.spot.lat = lat;
    selectedMarker.spot.lng = lng;

    // ===== dauerhaft speichern =====

    let corrections = JSON.parse(
        localStorage.getItem("madeiraCorrections") || "{}"
    );

    corrections[selectedMarker.spot.id] = {
        lat: lat,
        lng: lng
    };

    localStorage.setItem(
        "madeiraCorrections",
        JSON.stringify(corrections)
    );
	
	updateCorrectionCount();

    alert("Koordinaten gespeichert");
}

// =====================================
// Geänderte POIs exportieren
// =====================================

function exportCorrections(){

    const corrections = JSON.parse(
        localStorage.getItem("madeiraCorrections") || "{}"
    );

    const now = new Date().toLocaleString("de-DE");

	let output =
	`// Geänderte POIs
	// Export: ${now}

	`;

    spots.forEach(spot => {

        if(!corrections[spot.id]) return;

        output += `{
    id: "${spot.id}",
    name: ${JSON.stringify(spot.name)},
    category: "${spot.category}",
    lat: ${spot.lat},
    lng: ${spot.lng},
    description: ${JSON.stringify(spot.description)},
    details: \`${spot.details}\`,
    gpsChecked: ${spot.gpsChecked},
    status: "${spot.status}"
},

`;

    });

    if(Object.keys(corrections).length===0){
        alert("Keine Änderungen vorhanden.");
        return;
    }

    const blob = new Blob([output],{
        type:"text/javascript"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "spots-korrekturen.js";

    link.click();

    URL.revokeObjectURL(link.href);

// ------------------------------------
// Jetzt zusätzlich Löschliste exportieren
// ------------------------------------

const deleted = JSON.parse(
    localStorage.getItem("madeiraDelete") || "[]"
);

if(deleted.length){

    const now = new Date().toLocaleString("de-DE");

    let text =
`// Zu löschende POIs
// Export: ${now}

`;

    deleted.sort().forEach(id=>{
        text += id + "\n";
    });

    const blob2 = new Blob([text],{
        type:"text/plain"
    });

    const a2 = document.createElement("a");

    a2.href = URL.createObjectURL(blob2);
    a2.download = "spots-loeschen.txt";
    a2.click();

    URL.revokeObjectURL(a2.href);

}

}

// =====================================
// Änderungen löschen
// =====================================

function clearCorrections(){

    if(!confirm("Alle gespeicherten Änderungen löschen?"))
        return;

    localStorage.removeItem("madeiraCorrections");
	localStorage.removeItem("madeiraDelete");

    alert("Änderungen gelöscht.");
	
	updateCorrectionCount();

    location.reload();

}

function updateCorrectionCount(){

    const corrections = JSON.parse(
        localStorage.getItem("madeiraCorrections") || "{}"
    );

    const ids = Object.keys(corrections).sort();

    document.getElementById("correctionCount").textContent =
        "Geänderte POIs: " + ids.length;

    const list = document.getElementById("correctionList");

    if(ids.length===0){

        list.innerHTML="<i>Keine Änderungen vorhanden.</i>";
        return;

    }

    list.innerHTML = ids.map(id =>
        "✔ " + id
    ).join("<br>");

}

function deletePoi(){

    if(!selectedMarker) return;

    if(!confirm(
        selectedMarker.spot.name +
        "\n\nWirklich zum Löschen vormerken?"
    )) return;

    let deleted = JSON.parse(
        localStorage.getItem("madeiraDelete") || "[]"
    );

    if(!deleted.includes(selectedMarker.spot.id))
        deleted.push(selectedMarker.spot.id);

    localStorage.setItem(
        "madeiraDelete",
        JSON.stringify(deleted)
    );
	selectedMarker.remove();

	updateCorrectionCount();

    alert("POI zum Löschen vorgemerkt.");

}

function exportDeleted(){

    const deleted = JSON.parse(
        localStorage.getItem("madeiraDelete") || "[]"
    );

    if(deleted.length===0){
        alert("Keine Löschungen.");
        return;
    }

    const now = new Date().toLocaleString("de-DE");

    let text =
`// Zu löschende POIs
// Export: ${now}

`;

    deleted.sort().forEach(id=>{
        text += id + "\n";
    });

    const blob=new Blob([text],{
        type:"text/plain"
    });

    const a=document.createElement("a");

    a.href=URL.createObjectURL(blob);

    a.download="spots-loeschen.txt";

    a.click();

    URL.revokeObjectURL(a.href);

}
