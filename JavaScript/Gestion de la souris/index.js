"use strict"

/**************
   fonctions
   **************/

function hideRectangle() {
    console.log(rectangle)
    //on ajout la classe hide s'il ne l'a pas
    //on enlève la classe hide s'il l'a
    rectangle.classList.toggle("hide")
}

function redRectangle() {
    rectangle.classList.add("important");
}

function greenRectangle() {
    rectangle.classList.add("good");
}

function resetRectangle() {
    rectangle.classList.remove("important");
    rectangle.classList.remove("good");
}


/**************
code principal
**************/

const rectangle = document.querySelector(".rectangle");
document.querySelector("#toggle-rectangle").addEventListener('click', hideRectangle);

//au survol du rectangle (sur le rectangle) le rectangle passe en rouge (on ajoute la classe important) : fonction à appeler redRectangle()
rectangle.addEventListener('mouseenter', redRectangle);

rectangle.addEventListener('dblclick', greenRectangle);

rectangle.addEventListener('mouseleave', resetRectangle);