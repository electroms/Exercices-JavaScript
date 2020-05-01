"use strict"

let canvas, context;


function onClickCanvas(event) {
    //event contient les données de l'événement
    console.log(event.offsetX, event.offsetY);
    const location = {
        x: event.offsetX,
        y: event.offsetY
    };
    context = canvas.getContext("2d");
    let disk = new Disk();
    //appeler la méthode setLocation pour changer l'emplacement de dessin du cercle
    disk.setLocation(location);
    //générer un nombre aléatoire entre 10 et 50
    let radius = getRandomInteger(10,50);
    //envoyer ce nombre aléatoire au setRadius
    disk.setRadius(radius);
    //appeler la méthode setColor pour changer la couleur du cercle
    disk.setColor(getRandomColor());

    disk.draw(context);
}

document.addEventListener("DOMContentLoaded", function () {
    canvas = document.querySelector("#masterpiece");
    
    canvas.addEventListener("click", onClickCanvas);
});