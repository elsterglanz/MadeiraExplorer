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

// ----------------------------
// Sicherer localStorage-Zugriff
// ----------------------------
// (siehe app.js für Details - hier dupliziert, da map.js vor app.js
// geladen wird und die Funktionen daher noch nicht zur Verfügung stehen)

function safeGetJSON(key, fallback) {

    try {

        let raw = localStorage.getItem(key);

        if (raw === null) return fallback;

        return JSON.parse(raw);

    } catch (err) {

        console.warn("localStorage lesen fehlgeschlagen für '" + key + "':", err);

        return fallback;

    }

}


function safeSetJSON(key, value) {

    try {

        localStorage.setItem(key, JSON.stringify(value));

        return true;

    } catch (err) {

        console.warn("localStorage schreiben fehlgeschlagen für '" + key + "':", err);

        return false;

    }

}


function safeRemoveItem(key) {

    try {

        localStorage.removeItem(key);

        return true;

    } catch (err) {

        console.warn("localStorage löschen fehlgeschlagen für '" + key + "':", err);

        return false;

    }

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

const corrections = safeGetJSON("madeiraCorrections", {});

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
// In meiner Nähe
// ======================================

function haversineDistanceKm(lat1, lng1, lat2, lng2) {

    const R = 6371; // Erdradius in km

    const toRad = deg => deg * Math.PI / 180;

    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;

}


function formatDistance(km) {

    if (km < 1) return Math.round(km * 1000) + " m";

    return km.toFixed(1).replace(".", ",") + " km";

}


function findNearbySpots() {

    const detailsBox = document.getElementById("spotDetails");

    if (!detailsBox) return;

    if (!navigator.geolocation) {
        alert("Dein Browser unterstützt keine Standortbestimmung.");
        return;
    }

    detailsBox.innerHTML = "<p>📍 Standort wird ermittelt…</p>";

    navigator.geolocation.getCurrentPosition(

        position => {

            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const withDistance = markers
                .filter(marker =>
                    activeCategory === "alle" ||
                    marker.category === activeCategory
                )
                .map(marker => ({
                    marker: marker,
                    distanceKm: haversineDistanceKm(
                        userLat, userLng,
                        marker.spot.lat, marker.spot.lng
                    )
                }))
                .sort((a, b) => a.distanceKm - b.distanceKm)
                .slice(0, 12);

            if (withDistance.length === 0) {
                detailsBox.innerHTML =
                    "<p>Keine Spots in dieser Kategorie gefunden.</p>";
                return;
            }

            let html = `<h3>📍 Nächste Spots</h3><ul class="nearby-list">`;

            withDistance.forEach((entry, index) => {

                const icon = markerIcons[entry.marker.spot.category] || "📍";

                html += `
                    <li onclick="focusNearbySpot(${index})">
                        <span>${icon} ${entry.marker.spot.name}</span>
                        <span class="nearby-distance">${formatDistance(entry.distanceKm)}</span>
                    </li>
                `;

            });

            html += `</ul>`;

            detailsBox.innerHTML = html;

            window._nearbyMarkers = withDistance.map(e => e.marker);

        },

        error => {

            let msg = "Standort konnte nicht ermittelt werden.";

            if (error.code === error.PERMISSION_DENIED) {
                msg = "Standortzugriff wurde verweigert. Bitte in den Browser-/System-Einstellungen erlauben.";
            }

            detailsBox.innerHTML = `<p>⚠️ ${msg}</p>`;

        },

        { enableHighAccuracy: true, timeout: 10000 }

    );

}


function focusNearbySpot(index) {

    const marker = window._nearbyMarkers && window._nearbyMarkers[index];

    if (!marker) return;

    map.setView(marker.getLatLng(), 15);

    marker.openPopup();

}


document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("nearMeBtn");

    if (btn) {
        btn.addEventListener("click", findNearbySpots);
    }

});

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

function copyCoordinates(){

    if(!selectedMarker) return;

    const lat = parseFloat(
        document.getElementById("editLat").value
    );

    const lng = parseFloat(
        document.getElementById("editLng").value
    );

    const snippet =
`{
    id: "${selectedMarker.spot.id}",
    name: ${JSON.stringify(selectedMarker.spot.name)},
    category: "${selectedMarker.spot.category}",
    lat: ${lat},
    lng: ${lng},
    description: ${JSON.stringify(selectedMarker.spot.description)},
    details: \`${selectedMarker.spot.details || ""}\`,
    gpsChecked: true,
    status: "finished"
},`;

    if(navigator.clipboard && navigator.clipboard.writeText){

        navigator.clipboard.writeText(snippet)
            .then(()=> alert("JS-Snippet in Zwischenablage kopiert."))
            .catch(()=> prompt("Kopieren fehlgeschlagen. Manuell kopieren:", snippet));

    } else {

        prompt("JS-Snippet manuell kopieren:", snippet);

    }

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

    let corrections = safeGetJSON("madeiraCorrections", {});

    corrections[selectedMarker.spot.id] = {
        lat: lat,
        lng: lng
    };

    safeSetJSON("madeiraCorrections", corrections);
	
	updateCorrectionCount();

    alert("Koordinaten gespeichert");
}

// =====================================
// Geänderte POIs exportieren
// =====================================

function exportCorrections(){

    const corrections = safeGetJSON("madeiraCorrections", {});

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

const deleted = safeGetJSON("madeiraDelete", []);

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

    safeRemoveItem("madeiraCorrections");
	safeRemoveItem("madeiraDelete");

    alert("Änderungen gelöscht.");
	
	updateCorrectionCount();

    location.reload();

}

function updateCorrectionCount(){

    const corrections = safeGetJSON("madeiraCorrections", {});

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

    let deleted = safeGetJSON("madeiraDelete", []);

    if(!deleted.includes(selectedMarker.spot.id))
        deleted.push(selectedMarker.spot.id);

    safeSetJSON("madeiraDelete", deleted);
	selectedMarker.remove();

	updateCorrectionCount();

    alert("POI zum Löschen vorgemerkt.");

}

function exportDeleted(){

    const deleted = safeGetJSON("madeiraDelete", []);

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
