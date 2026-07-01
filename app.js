//
// Madeira 2026
// App Funktionen
//


// ----------------------------
// Favoriten
// ----------------------------


const favoriteSpots = [

    "🐠 Garajau Schnorcheln",

    "🖤 Seixal Strand",

    "🌊 Porto Moniz Lavapools",

    "🏖️ Calheta Baden",

    "🌲 Fanal Wald",

    "🥾 Rabaçal Wanderung"

];



function addFavorite(place){


    let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];



    if(!favorites.includes(place)){

        favorites.push(place);

    }



    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    showFavorites();


}







function showFavorites(){


    let box =
    document.getElementById(
        "favorites"
    );


    if(!box)
    return;



    let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];



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
        removeFavorite('${place}')
        ">

        Entfernen

        </button>

        `;


        box.appendChild(div);


    });


}







function removeFavorite(place){


    let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];



    favorites =
    favorites.filter(
        item=>item!==place
    );



    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );


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



    localStorage.setItem(

        "madeira_notes",

        text

    );


    alert(
        "📝 Urlaubstagebuch gespeichert!"
    );


}




function loadNotes(){


    let notes =
    localStorage.getItem(
        "madeira_notes"
    );



    if(notes){


        document.getElementById(
            "notes"
        ).value=notes;


    }


}







// ----------------------------
// Checkbox Speicher
// ----------------------------



function saveCheckboxes(){


    let boxes =
    document.querySelectorAll(
        "input[type=checkbox]"
    );


    let states=[];


    boxes.forEach(
    box=>{

        states.push(
            box.checked
        );

    });



    localStorage.setItem(

        "checkboxes",

        JSON.stringify(states)

    );



}






function loadCheckboxes(){


    let saved =
    JSON.parse(

        localStorage.getItem(
            "checkboxes"
        )

    );



    if(!saved)
    return;



    let boxes =
    document.querySelectorAll(
        "input[type=checkbox]"
    );



    boxes.forEach(

    (box,index)=>{


        box.checked =
        saved[index] || false;


    });


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