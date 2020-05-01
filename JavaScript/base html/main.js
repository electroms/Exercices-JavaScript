"use strict"

function onClickSelectItem(){
    console.log(this)
    //this = variable magique qui existe par défaut en JS
    //on ne peut pas manuellement changer sa valeur : this = xxx -> impossible
    //la valeur de this change en fonction de là où elle se trouve dans le code
    //dans une fonction qui est appelée dans le cadre d'un (gestionnaire d')événement alors this représente la balise html qui a DÉCLENCHÉ l'événement
    
    //3. ajouter la classe selected à la balise li sur laquelle on a cliquée
    this.classList.toggle("selected");
    
    //4. on appelle la fonction compteur qui permet de mettre à jour le compteur
    compteur();
}

function selectAll(){
    //7. sur chaque li de notre tableau photos on vient ajouter la classe selected
    for(let photo of photos){
        photo.classList.add("selected");
    }
    //on appelle la fonction compteur qui permet de mettre à jour le compteur
    compteur();
}
function deselectAll(){

    for(let photo of photos){
        photo.classList.remove("selected");
    }
    compteur();
}

function compteur(){
    //4. on récupère le nombre de li sélectionnées en récupérant toutes les li qui ont la classe selected dans un tableau et en récupérant la longueur de ce tableau
    let selectedPhotos = document.querySelectorAll("li.selected")
    let nb = selectedPhotos.length;
    
    //let nbSelectedPhotos = document.querySelectorAll("li.selected").length
    
    //5. injecter ce nombre dans le em du p#total
    document.querySelector("#total em").textContent = nb;
    //document.querySelector("#total em").textContent = selectedPhotos.length;
}


// rajouter 2 boutons dans le html #selectAll permet de sélectionner toutes les photos et #deselectAll de toutes les déselectionner au clic sur ces boutons

//6. on récupère la balise html du bouton qui a l'id selectAll et au clic sur ce dernier on appelle la fonction selectAll
document.querySelector("#selectAll").addEventListener("click", selectAll);

document.querySelector("#deselectAll").addEventListener("click", deselectAll);


//1. on sélectionne toutes les li qu'on enregistre dans une variable photos
let photos = document.querySelectorAll("li");
console.log(photos);


//2. on boucle sur le tableau de li contenues dans photos 
//correct
for(let i = 0; i < photos.length; i++){
    //sur chacune des li, on installe un gestionnaire d'événement qui au click sur la li va appeler la fonction onClickSelectItem
    photos[i].addEventListener('click', onClickSelectItem);
}

//autres façons de faire l'étape 2
//pas mal
photos.forEach(function (ligne){
    ligne.addEventListener('click', onClickSelectItem);
});

// <3 top méthode
for(let ligne of photos){
    ligne.addEventListener('click', onClickSelectItem);
}

//le moins optimal 
let i = 0;
while (i < photos.length){
    photos[i].addEventListener('click', onClickSelectItem);
    i++;
}