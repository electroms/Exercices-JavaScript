# Tirage de tarot

On sort un peu des sentiers battus avec cet exercice !

## Infos utiles

On a 2 fichiers JS :

- `arcanes.js` : contient un Set() qui liste tous les arcanes majeurs (22 cartes)
- `main.js` : code fonctionnel du tirage

Les images sont contenues dans le dossier `/images`

## Fonctionnement du tirage

Quand on clique sur le bouton `#go`, le jeu tire une carte (basé sur la génération d'un nombre aléatoire entre 1 et 22) et l'affiche dans le HTML.

On peut tirer jusque 3 cartes. Une fois 3 cartes tirées, le bouton disparait et un autre apparait nous permettant de rafraichir la page pour refaire un tirage.

## Votre mission

Vous ne partez pas d'une feuille blanche : le HTML et le CSS sont faits, et le JS est déjà bien entammé !

Il va falloir venir compléter le fichier `main.js` à différents endroits :

1. Installer le gestionnaire d'événement sur le bouton `#go` qui appelle la fonction `pickCard()`
2. Compléter la fonction `pickCard()`
3. Créer la fonction `atIndex()` qui attend 2 paramètres et retourne la carte se trouvant à l'index tiré aléatoirement
4. Créer la fonction `displayCard()` qui se charge d'afficher la carte tirée dans une `li` dans la `ul#tirage`

> Pensez bien à lire les commentaires présents dans le code : non seulement ils vous permettent de comprendre le code déjà fait mais surtout il vous donne des infos sur le code que vous devez produire (notamment les paramètres attendus dans les fonctions que vous devez créer).

`// -> à coder` : vous permet d'identifier les lignes où vous devez intervenir.

