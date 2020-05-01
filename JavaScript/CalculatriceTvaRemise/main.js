"use strict"
//déclaration d'une constante
const TAUX_TVA = 20;
//Déclaration des variables + do while pour que le code séxécute au moin une fois
let montantHT;
do {
	montantHT = parseFloat(prompt("Merci de saisir votre montant hors taxes"));
} while (isNaN(montantHT));

let montantTVA; 
let montantTTC;
let isRemise;
let tauxRemise;
let montantRemise;
let html = `<p>Montant HT : ${montantHT}€</p>`; //contenir le HTML qui sera affiché

//affichage d'un popup
isRemise = window.prompt('Souhaitez-vous une remise ?').toLowerCase();

//Déclaration d'une constante
const baliseHTML = document.querySelector("#total")
// document --> représente la page html
// querySelector --> dans la page html on vient cibler un élément grâce à n'importe quel selecteur CSS

//Affiche le résultat dans la console
console.log(isRemise);

//Condition if else et do while
if(isRemise == 'oui' || isRemise == 'yes')
{
    do {
        tauxRemise = parseFloat(prompt("Saisir le taux de la remise"));
        } while (isNaN(tauxRemise));

    tauxRemise = parseFloat(prompt("saisir le taux de la remise"));
   
    montantRemise = montantHT * (tauxRemise / 100);
    montantHT = montantHT - montantRemise;

    montantTTC = montantTTC - montantRemise;

    html += `<p>Vous bénéficiez d'une remise de ${tauxRemise}%, ce qui vous fait un montantHT remisé de ${montantHT}€</p>`;
} else {
	html += `<p>Vous ne bénéficiez pas d'une remise.</p>`;
}

//Calcul montant TVA et montant TTC
montantTVA = montantHT * (TAUX_TVA / 100);
montantTTC = montantHT + montantTVA;

//affichage dans la console
console.log(baliseHTML);

/*baliseHTML.innerHTML = `<p>Montant HT : ${montantHT}€</p>`;
baliseHTML.innerHTML = baliseHTML.innerHTML + `<p>Pour un tuax de TVA de : ${TAUX_TVA}% le montant de la TVA est de ${montantTVA}€</p>`;
baliseHTML.innerHTML += `<p>Montant TTC : ${montantTTC}€</p>`;

baliseHTML.innerHTML =  `<p>Montant HT : ${montantHT}€</p>`
                        `<p>Pour un taux de TVA de : ${TAUX_TVA}% le montant de la TVA est de ${montantTVA}€</p>`
                        `<p>Montant TTC : ${montantTTC}€</p>`*/

//affichage dans le HTML
html += `<p>Pour un taux de TVA de ${TAUX_TVA}%, le montant de TVA est de ${montantTVA}€</p>
                        <p>Montant TTC : ${montantTTC}€</p>`;
                        
baliseHTML.innerHTML = html;
