'use strict'; //force un mode plus cadré (moins permissif) de JS

// https://sharemycode.fr/zpm sharecode d'Audrey

// ## Enoncé
// Gérer une liste de courses en affichant les informations dans la console du navigateur web.
// ## Détails
// * La liste de courses est stockée dans une seule variable (un tableau par exemple ?).
// * Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
// * Les fonctionnalités de gestion de la liste de courses sont :
//   1. Ajouter un produit par son nom
//   2. Supprimer un produit ayant un nom spécifique
//   3. Supprimer tous les produits
//   4. Afficher la taille et le contenu de la liste
// * Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
// * Les tableaux sont des objets de la classe *Array*, s’appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
// * Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//   1. Ajouter 4 produits simples puis afficher les informations
//   2. Demander à l’utilisateur de saisir le nom d’un produit, essayer de supprimer celui-ci puis afficher les informations
//   3. Supprimer tous les produits puis afficher les informations

let liste = new Array();
let choixUtilisateur;
let produit;

function display() {
    console.log(liste);
}

function addProduit(produit) {
    liste.push(produit);
}

function findAndRemoveProduit(produit) {
    if (liste.indexOf(produit) != -1) {
        liste.splice(liste.indexOf(produit), 1);
    } else {
        alert("Ce produit ne figure pas dans la liste !")
    }
}


function demandeUtilisateur() {
    do {
        choixUtilisateur = parseFloat(prompt("Saisir votre choix : 1 pour afficher, 2 pour ajouter, 3 pour supprimer, 4 pour quitter"))
        //Si touteds les conditions sont fauses alors l'utilisateur devra saisir l'information correcte
    } while (choixUtilisateur != 1 && choixUtilisateur != 2 && choixUtilisateur != 3 && choixUtilisateur != 4);
    console.log("");
    // return choixUtilisateur;
}
display()
do {
    demandeUtilisateur();
    switch (choixUtilisateur) {
        case 1:
            console.log("cas 1 : affichage de la liste");
            display();
            break;

        case 2:
            produit = prompt("Saisir le produit à ajouter").toLowerCase();
            addProduit(produit);
            console.log("cas 2 : ajout de " + produit);
            break;

        case 3:
            produit = prompt("Saisir le produit à supprimer").toLowerCase();
            findAndRemoveProduit(produit);
            console.log("cas 3 : suppression de " + produit);
            break;

        case 4:
            console.log("Au revoir");
            break;
    }
} while (choixUtilisateur != 4);





