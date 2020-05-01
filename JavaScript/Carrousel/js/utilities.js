//Déclaration d'une fonction
function getRandomInteger(min, max){
    //retourne un nombre aléatoire entre un minimum et maximum
        return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   //Sert d'affichage de test pour la fonction
   //let nb = getRandomInteger(200, 250);
   //console.log(nb);

//Déclaration d'une fonction
   function getRequestInteger(message, min, max){
//Déclaration d'une variable
    let nb;
//Condition do while
    do{
//Affectation d'une valeur à la variable nb et parse en entier
        nb = parseInt(prompt(message));
    } while (isNaN(nb) || nb < min || nb > max)
    return nb;
}