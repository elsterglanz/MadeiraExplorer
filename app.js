//
// Madeira 2026
// App Funktionen
//


// ----------------------------
// Favoriten
// ----------------------------


// Escaped einen String für die sichere Verwendung innerhalb eines
// einfach gequoteten JS-Strings in einem doppelt gequoteten HTML-Attribut
// (z.B. onclick="removeFavorite('...')") - verhindert Fehler bei Namen mit
// Apostroph wie "🍹 Joe's Bar".
function escapeForInlineJs(str) {
    return String(str).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}



// ----------------------------
// Sicherer localStorage-Zugriff
// ----------------------------
// Kapselt localStorage-Zugriffe in try/catch, damit ein defekter
// oder gesperrter Speicher (z.B. privater Modus, voller Speicher,
// kaputtes JSON) nicht die ganze Seite mit einem Fehler abreißt.

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


function safeGetItem(key, fallback) {

    try {

        let value = localStorage.getItem(key);

        return value === null ? fallback : value;

    } catch (err) {

        console.warn("localStorage lesen fehlgeschlagen für '" + key + "':", err);

        return fallback;

    }

}


function safeSetItem(key, value) {

    try {

        localStorage.setItem(key, value);

        return true;

    } catch (err) {

        console.warn("localStorage schreiben fehlgeschlagen für '" + key + "':", err);

        return false;

    }

}



function addFavorite(place){


    let favorites = safeGetJSON("favorites", []);



    if(!favorites.includes(place)){

        favorites.push(place);

    }



    safeSetJSON("favorites", favorites);


    showFavorites();


}







function showFavorites(){


    let box =
    document.getElementById(
        "favorites"
    );


    if(!box)
    return;



    let favorites = safeGetJSON("favorites", []);



    if(favorites.length===0){

        box.innerHTML =
        "Noch keine Favoriten gespeichert.";

        return;

    }



    box.innerHTML="";



    favorites.forEach(
    place=>{


        let div =
        document.createElement(
            "div"
        );


        div.className =
        "favorite";


        div.innerHTML = `

        ⭐ ${place}

        <br><br>

        <button onclick="
        removeFavorite('${escapeForInlineJs(place)}')
        ">

        Entfernen

        </button>

        `;


        box.appendChild(div);


    });


}







function removeFavorite(place){


    let favorites = safeGetJSON("favorites", []);



    favorites =
    favorites.filter(
        item=>item!==place
    );



    safeSetJSON("favorites", favorites);


    showFavorites();

}







// ----------------------------
// Tagebuch
// ----------------------------



function saveNotes(){


    let text =
    document.getElementById(
        "notes"
    ).value;



    let ok = safeSetItem("madeira_notes", text);


    alert(
        ok
        ? "📝 Urlaubstagebuch gespeichert!"
        : "⚠️ Speichern nicht möglich (Speicher voll oder blockiert)."
    );


}




function loadNotes(){


    let notes = safeGetItem("madeira_notes", null);



    if(notes){


        document.getElementById(
            "notes"
        ).value=notes;


    }


}







// ----------------------------
// Checkbox Speicher
// ----------------------------
//
// Jede Checkbox trägt im HTML ein data-day="..." Attribut (z.B. "07.07.").
// Der Status wird darüber als Objekt {tag: checked} gespeichert statt über
// die Position im DOM - so bleibt der Speicherstand auch dann korrekt,
// wenn Tage im Reiseplan hinzugefügt, entfernt oder umsortiert werden.


function saveCheckboxes(){


    let boxes =
    document.querySelectorAll(
        "input[type=checkbox]"
    );


    let states={};


    boxes.forEach(
    (box,index)=>{

        let key = box.dataset.day || ("index-" + index);

        states[key] = box.checked;

    });



    safeSetJSON("checkboxes", states);

    updatePlanProgress();

}






function loadCheckboxes(){


    let saved = safeGetJSON("checkboxes", null);



    if(!saved)
    return;



    let boxes =
    document.querySelectorAll(
        "input[type=checkbox]"
    );



    boxes.forEach(

    (box,index)=>{

        let key = box.dataset.day || ("index-" + index);

        box.checked =
        saved[key] || false;


    });


}




// ----------------------------
// Fortschrittsanzeige Reiseplan
// ----------------------------


function updatePlanProgress(){

    let planSection =
    document.getElementById("plan");

    if(!planSection)
    return;

    let box =
    document.getElementById("planProgress");

    if(!box)
    return;

    let boxes =
    planSection.querySelectorAll(
        "input[type=checkbox]"
    );

    let total = boxes.length;

    if(total === 0){
        box.innerHTML = "";
        return;
    }

    let done = 0;

    boxes.forEach(b=>{
        if(b.checked) done++;
    });

    let percent = Math.round((done / total) * 100);

    box.innerHTML = `
        <div class="plan-progress-label">
            ${done} von ${total} Tagen erledigt
        </div>
        <div class="plan-progress-bar">
            <div class="plan-progress-fill" style="width:${percent}%"></div>
        </div>
    `;

}




// ----------------------------
// Countdown bis / während der Reise
// ----------------------------


function updateCountdown(){

    let box =
    document.getElementById("countdown");

    if(!box)
    return;

    let start = new Date("2026-07-07T00:00:00");

    let end = new Date("2026-07-17T23:59:59");

    let now = new Date();

    let msPerDay = 1000 * 60 * 60 * 24;

    if(now < start){

        let days = Math.ceil((start - now) / msPerDay);

        box.textContent =
            days === 1
            ? "🌴 Noch 1 Tag bis Madeira!"
            : `🌴 Noch ${days} Tage bis Madeira!`;

    } else if(now >= start && now <= end){

        let dayNumber =
            Math.floor((now - start) / msPerDay) + 1;

        let totalDays =
            Math.round((end - start) / msPerDay) + 1;

        box.textContent =
            `🏝️ Tag ${dayNumber} von ${totalDays} auf Madeira!`;

    } else {

        box.textContent =
            "💙 Der Urlaub ist vorbei – hoffentlich war's schön!";

    }

}







// ----------------------------
// Start
// ----------------------------


document.addEventListener(

"DOMContentLoaded",

()=>{


    showFavorites();


    loadNotes();


    loadCheckboxes();


    updatePlanProgress();


    updateCountdown();



    let boxes =
    document.querySelectorAll(
        "input[type=checkbox]"
    );



    boxes.forEach(

    box=>{


        box.addEventListener(

        "change",

        saveCheckboxes

        );


    });



});





// ----------------------------
// Beispiel Favoriten Buttons
// ----------------------------


window.savePlace=function(place){


    addFavorite(place);


};