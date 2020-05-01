"use strict"
//Déclaration d'une variable
let user;

//Condition do while pour que le code s'éxécute au moins une fois
do {
	user = window.prompt("saisissez pierre, feuille ou ciseau").toLowerCase();
} while (user != "pierre" && user != "feuille" && user != "ciseau");;

//Affichage dans la console
console.log(user);

//Déclaration d'une variable et affectation d'un Math.random pour générer un nombre aléatoire
let ordi = Math.random();

//Condition if else if else
if(ordi <= 1/3){
	ordi = "feuille";
} else if(ordi > 1/3 && ordi <= 2/3) {
	ordi = "pierre";
} else {
	ordi = "ciseau";
}

//Affichage dans la console
console.log(user, ordi);

//Déclaration d'une variable
let message;

//Combinaison de condition if else avec switch et case
if(user === ordi) {
    message = `Vous avez tous deux joué ${ordi}`;
}else{
    message = `pas égalité`;
    
    switch(user) {
    
        case "feuille":
        // si l'utilisateur a joué feuille (case 'feuille')
            //si l'ordi a joué pierre : le joueur gagne
            if(ordi === "pierre"){
            	message = "Le joueur gagne face à la pierre";
            } else {
            //sinn le joueur perd
            	message = "Le joueur perd face aux ciseaux";
            }
        	break;
        case "pierre":
        // si l'utilisateur a joué pierre (case 'pierre')
            //si l'ordi a joué ciseau : le joueur gagne
            if(ordi === "ciseau"){
            	message = "Le joueur gagne face aux ciseaux";
            } else {
            //sinon le joueur perd
            	message = "Le joueur perd face à la feuille";
            }
        	break;
        case "ciseau":
        // si l'utilisateur a joué ciseau (case 'ciseau')
            //si l'ordi a joué ciseau : le joueur gagne
            if(ordi === "feuille"){
            	message = "Le joueur gagne face à la feuille";
            } else {
            //sinn le joueur perd
            	message = "Le joueur perd face à la pierre";
            }
        	break;
    }
}
//Affichage de l'id de la page 
document.querySelector("p#chifoumi").textContent = message;

