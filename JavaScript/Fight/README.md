# Fight game

Nous allons développer notre premier jeu vidéo ! Rien de tel que d'apprendre en s'amusant ! ;) Il s'agit d'un jeu de combat au tour par tour dans lequel le joueur incarnera le chevalier  parti combattre le terrible dragon, qui retient captive dans son antre la princesse.

## Conseils techniques
 - Ce programme est un récapitulatif général de ce qui a été vu jusqu'à présent, vous aurez besoin pour en venir à bout d'utiliser tous les outils que vous avez connaissez maintenant : boucles, conditions, constantes, variables, tableaux, objets, fonctions, etc !
 - Pour aborder l'antre du terrible dragon, mieux vaut avoir un plan et avancer prudemment *pas à pas*, testant votre code au fur-et-à-mesure !
 - Les *fonctions* sont vos alliées ! Servez-vous en pour éviter de vous répéter et pour organiser votre code de manière logique.
 - Pour le moment difficile de réaliser une interface graphique élaborée : tout le jeu se déroulera dans la **console**.

## Règles du jeu
### 1. Résumé
Il s'agit d'un jeu de combat au tour par tour, chaque personnage dispose au départ d'un certain nombre de points de vie. A chaque tour de jeu, l'un des personnages attaque l'autre et lui ôte des points de vie. Le premier des deux dont les points de vie atteignent 0 à perdu le combat. 

Une partie se déroulera en 3 grandes étapes :

 1. **La préparation du jeu** : distribution des points de vie, réglages des paramètres du jeu, etc
 2. Le déroulement de la partie 
 3. Fin du jeu et affichage du vainqueur

### 2. Préparation

Le joueur incarne le chevalier et choisit les paramètres du jeu :
* Le niveau de **difficulté** : facile, moyen ou difficile
* **L'armure** du chevalier : en cuivre, fer ou magique
* **L'épée** du chevalier : en bois, en acier ou *Excalibur*

#### Points de vie de départ   

Le chevalier et le dragon sont tous deux pourvus au début du jeu d'un certain nombre de points de vie. Le nombre de points de vie de chacun est tiré de manière aléatoire à l'intérieur d'un intervalle qui dépend du niveau de difficulté du jeu, comme indiqué ci-dessous :

- En mode **FACILE** : 

Points de vie du dragon : **entre 150 et 200**
Points de vie du chevalier : **entre 200 et 250**
- En mode **NORMAL** : 

Points de vie du dragon : **entre 200 et 250**
Points de vie du chevalier  : **entre 200 et 250**
- En mode **DIFFICILE** : 

Points de vie du dragon  : **entre 200 et 250**
Points de vie du chevalier  : **entre 150 et 200**

#### Affichage console

> DEBUT DE LA PARTIE    
> ***Dragon*** : 152 PV    
> ***Chevalier*** : 134 PV    

### 3. Déroulement de la partie
#### Principe
On joue un tour **tant que les deux personnages sont encore vivants**. A chaque tour du jeu les étapes sont les suivantes : 

 1. On tire au sort quel personnage est le plus rapide et attaque l'autre
 2. On calcule les points de dommages infligés par l'attaquant à son adversaire
 3. On soustrait ces points de dommages aux points de vie du personnage qui a subit l'attaque
 4. On affiche dans la console le numéro du tour, ce qu'il s'est passé pendant ce tour et les points de vie restants des deux personnages

#### Dommages infligés par le dragon au chevalier
Si le dragon attaque, les points de dommage qu'il inflige au chevalier sont tirés aléatoirement dans un intervalle qui dépend du niveau de difficulté :

- En mode **FACILE**      : le dragon inflige **entre 10 et 20 points** de dommage au chevalier
- En mode **NORMAL** : le dragon inflige **entre 20 et 30 points** de dommage au chevalier
- En mode **DIFFICILE** : le dragon inflige **entre 20 et 30 points** de dommage au chevalier

Ces points de dommages seront ***minorés*** en fonction de l'***armure du chevalier*** :

 - Armure en **CUIVRE** : les points de dommages du dragon *ne sont pas minorés*
 - Armure en **FER** : les points de dommages sont minorés de **25%**
 - Armure **MAGIQUE** : les points de dommages sont minorés de **50%**
 
#### Dommages infligés par le chevalier au dragon      

 Si c'est le chevalier qui attaque, les points de dommage qu'il inflige au dragon sont tirés aléatoirement dans un intervalle qui dépend du niveau de difficulté :
- En mode **FACILE**      : le chevalier inflige **entre 25 et 30 points** de dommage au dragon 
- En mode **NORMAL** : le chevalier inflige **entre 15 et 20 points** de dommage au dragon 
- En mode **DIFFICILE** : le chevalier inflige **entre 5 et 10 points** de dommage au dragon 

Ces points de dommage seront ***majorés ou minorés*** en fonction de ***l'épée du chevalier***:

 - Epée de **BOIS**: les points de dommage sont **minorés de 50%**
 - Epée en **ACIER**: les points de dommage sont *inchangés*
 - **EXCALIBUR** : les points de dommage sont ***majorés de 50%***

#### Affichage console
##### Si le dragon attaque :
> == Tour n° 3 ==      
> Le dragon ***Dragon*** est plus rapide et vous inflige 14 points de dommage.     
> ***Dragon*** : 152 PV    
> ***Chevalier*** : 134 PV    

##### Si c'est le chevalier qui attaque
> == Tour n° 18 ==      
> Vous êtes plus rapide et vous infligez 24 points de dommage au dragon.      
> ***Dragon*** : 75 PV    
> ***Chevalier*** : 38PV    

### 4. Fin de la partie
#### 4.1 Un combat à mort
La partie se termine dès que le chevalier ou le dragon est mort. Le vainqueur ne s'acharne pas sur le cadavre de son adversaire. 

#### 4.2 Affichage console   
##### Si le dragon a gagné :    
 > ***Dragon*** a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir.
 > Il restait 12 points de vie au dragon.

##### Si le chevalier à gagné :
> Vous avez terrassé le terrible ***Dragon*** et délivrez la princesse !
> Il vous restait 140 points de vie.
 