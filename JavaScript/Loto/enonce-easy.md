# Exercice JS / Loto

Cet exercice peut comprendre des bonus

## Introduction

Le but de cet exercice va être de créer un tirage de loto.

Tout sera généré dans la console de développement.

## Énoncé

L'ordinateur génère 5 nombres aléatoires entiers compris entre 1 et 50 (chaque nombre doit être unique, l'ordinateur ne peut pas tirer 2 fois le même nombre).
L'utilisateur saisi également 5 nombres compris entre 1 et 50.
L'objectif pour l'utilisateur est de saisir des nombres qui sont tirés par l'ordinateur. Au plus il y a de correspondance, au plus il gagne d'argent !

Afficher le total gagné et le nombre de correspondance dans la console.

### Gestion des gains

- A partir de 2 correspondances : 1 000€
- A partir de 3 correspondances : 5 000€
- A partir de 4 correspondances : 10 000€
- A partir de 5 correspondances : 100 000€

## Bonus 

1. Rajouter la gestion du numéro complémentaire, un 6ème chiffre généré par l'orinateur entre 1 et 10 et la saisie de l'utilisateur entre 1 et 10. S'il a tiré le numéro complémentaire, on ajoute 2 000€ à son gain.
2. Créer un tirge de loto visuel où les boules de nombre apparaissent avec un contour vert si elles ont bien été tirées.

## Méthodologie

Afin de bien aborder l'exercice, voici les étapes que nous vous recommandons de respecter :

1. Générer les 5 nombres aléatoires de l'ordinateur et les stocker dans une variable
2. Demander à l'utilisateur de saisir un nombre (⚠ il faut absolument qu'il saisisse un nombre)
3. Utiliser une boucle pour que l'utilisateur saisisse 5 nombres et les stocker dans une variable
4. Vérifier si les nombres saisis se trouvent dans le tirage, si oui, afficher "correspondance" dans la console
5. Dès qu'il y a une correspondance, incrémenter un compteur qui permet de savoir combien de correspondances il y a 
6. Indiquer à l'utilisateur combien de correspondance il a et son gain

## Astuces

1. Utiliser une fonction qui se charge de générer un nombre aléatoire et qui le retourne
2. On peut mettre une boucle à l'intérieur d'une autre boucle : on appelle ça une boucle imbriquée
3. Pour la lisibilité, et en cas de comparaison conditionnelle sur l'égalité, on va plutôt utiliser un switch case dès qu'on dépasse 3 comparaisons

## Recommandations / Attention

Les boucles for servent surtout à parcourir un ensemble de données ou à répéter une action un nombre de fois défini.

## Ressources

Vous êtes libres pour le design du bonus ;) Le reste se passe dans la console.

## Théorie

Les boucles nous permettent d'éviter des tâches redondantes.

Elles nous permettront également de générer du contenu automatiquement à partir de données fournies, par exemple afficher les derniers articles d'un blog (sans avoir à retoucher le html à chaque nouvel article).

### Liens recommandés

Pour cet exeercice, vous aurez besoin de :
- [JS / Savoir faire des boucles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration)
- [JS / Ensemble de données Set()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set)

## Culture

Les boucles c'est bien, les égyptiens s'en sont servis pour construire leur pyramides
