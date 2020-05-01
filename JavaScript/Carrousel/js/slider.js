"use strict"

//tableau qui contient les informations sur les photos à afficher
//chaque ligne du tableau est un objet qui contient 2 propriétés correspondant au chemin et au titre de l'image
let images = [
    { src: 'images/1.jpg', legend: 'Street Art' },
    { src: 'images/2.jpg', legend: 'Fast Lane' },
    { src: 'images/3.jpg', legend: 'Colorful Building' },
    { src: 'images/4.jpg', legend: 'Skyscrapers' },
    { src: 'images/5.jpg', legend: 'City by night' },
    { src: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];
let index; //variable qui va nous permettre de déterminer quelle photo afficher = correspondant à l'index dans le tableau images

let idInterval = null; //variable qui contiendra l'id de l'interval pour le diaporama. Par défaut à null quand l'intervalle n'est pas lancé
/*
    Fonction qui à partir de la photo courante (dont l'index est contenu dans la variable index) affiche l'image et son titre dans le HTML
*/
function refreshSlider() {
    //cible la balise html de l'image et la stocke dans une constante img
    const img = document.querySelector("#slider img");
    img.src = images[index].src; //injecte la valeur de la propriété src contenue dans le tableau images dans l'attribut src de la balise HTML 
    img.alt = images[index].legend; //injecte la valeur de la propriété legend contenue dans le tableau images dans l'attribut alt de la balise HTML

    //cible la balise html figcaption et lui injecte en contenu texte la valeur de la propriété legend contenue dans le tableau images
    document.querySelector("#slider figcaption").textContent = images[index].legend
}

/*
    Fonction qui a pour but de cibler la ul dans nav.toobar et de l'afficher en lui enlevant sa classe hide s'il ne l'a pas
*/
function onToolbarToggle() {
    document.querySelector(".toolbar ul").classList.toggle("hide");
    document.querySelector("#toolbar-toggle i").classList.toggle("fa-arrow-right");
    document.querySelector("#toolbar-toggle i").classList.toggle("fa-arrow-down");
}
/*
    Fonction qui permet de passer à l'image suivante
*/
function onSliderGoToNext() {
    //on rajoute =1 à l'index pour aller à la ligne suivante du tableau et donc afficher les infos de l'image suivante
    index++;
    //si on est arrivé à la fin des photos (et que donc l'index est monté trop haut), on revient au début = 0
    if (index > images.length - 1) {
        index = 0;
    }
    //on appelle la fonction qui rafraichi l'affichage afin d'avoir la nouvelle image et son titre
    refreshSlider();
}

function onSliderGoToPrevious() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    refreshSlider();
}

function onSliderGoToRandom() {
    //indexRandom = getRandomInteger(0, images.length - 1);
    //tant que le nb aléatoire généré est égal à l'index, on regénère un nombre
    /*let old = index;
    do {
        index = getRandomInteger(0, images.length - 1);
    } while(old === index);
    */

    //en utilisant une varaible temporaire
    let tmpIndex;
    do {
        tmpIndex = getRandomInteger(0, images.length - 1);
    } while (tmpIndex === index);
    index = tmpIndex;

    //on appelle la fonction qui rafraichi l'affichage afin d'avoir la nouvelle image et son titre
    refreshSlider();
}

function onSliderToggle() {

    if (idInterval === null) {

        /*
        let idInterval = window.setInterval(function(){
        	console.log("ça fait 2sec");
        }, 2000); //2000ms = 2s
        console.log("id de l'interval :" + idInterval);

        window.setTimeout(function(){
        	clearInterval(idInterval);
            console.log(`L'intervale ${idInterval} est stoppé.`);
        }, 10000);
        */
        //on lance l'intervalle qui toutes les 2 secondes appelle la fonction onSliderGoToNext qui permet d'afficher la photo suivante
        //on enregistre dans la variable idInterval le numéro de l'intervalle qui vient de se déclencher (généré automatiquement par le navigateur), qui nous permettra ensuite de pouvoir arrêter le diaporam
        idInterval = window.setInterval(onSliderGoToNext, 2000);

    } else {
        //si idInterval ≠ null, on arrête le diapo
        clearInterval(idInterval);
        //on réinitialise la valeur d'idInterval à null de façon à pouvoir relancer le diapo
        idInterval = null;
    }
    //on change la classe de l'icone = classes fontawesome
    document.querySelector("#slider-toggle i").classList.toggle("fa-play");
    document.querySelector("#slider-toggle i").classList.toggle("fa-pause");

}


/*
    document.addEventListener("DOMContentLoaded", function(){
        tout le code principal ici
    });
    Code qui permet de s'assurer que le HTML ne s'excécute qu'une fois la page HTML bien chargée
    Tout le code que nous mettions jusqu'à présent en dehors de toute fonction va se trouver là dedans désormais
*/
document.addEventListener("DOMContentLoaded", function () {
    //une fois la page chargée, on souhaite afficher la première image du tableau donc index 0
    index = 0;
    //on appelle la fonction qui affiche dans le HTML la photo dont l'index est contenu dans la variable index
    refreshSlider();


    //gestionnaires d'événements
    //installation du gestionnaire d'événement sur #toolbar-toggle pour, au clic, afficher la ul qui est dans nav.toolbar (fonction onToolbarToggle)
    document.querySelector("#toolbar-toggle").addEventListener("click", onToolbarToggle);

    //installation du gestionnaire d'événement sur #slider-next qui au clic appelle la fonction onSliderGoToNext, qui permet d'afficher la photo suivante
    document.querySelector("#slider-next").addEventListener("click", onSliderGoToNext);

    //installation du gestionnaire d'événement sur #slider-previous qui au clic appelle la fonction onSliderGoToPrevious, qui permet d'afficher la photo précédente
    document.querySelector("#slider-previous").addEventListener("click", onSliderGoToPrevious);

    //installation du gestionnaire d'événement sur #slider-random qui au clic appelle la fonction onSliderGoToRandom, qui permet d'afficher une photo aléatoire
    document.querySelector("#slider-random").addEventListener("click", onSliderGoToRandom);

    //installation du gestionnaire d'événement sur #slider-toggle qui au clic appelle la fonction onSliderToggle, qui permet de lancer ou arrêter le diapo
    document.querySelector("#slider-toggle").addEventListener("click", onSliderToggle);
});