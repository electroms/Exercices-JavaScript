
let game = new Object();
// Fonction pour les dégats infligés par le dragon au joueur
function computeDragonDamagePoint() {
    let damagePoint;
    /* Méthode avec un switch case :
        switch(game.difficulty){
        	case 1:
            	damagePoint = getRandomInteger(10, 20);
            	break;
        	case 2:
        	case 3:
            	damagePoint = getRandomInteger(20, 30);
            	break;
        }*/
    // Méthode avec un if else :
    if (game.difficulty === 1) {
        damagePoint = getRandomInteger(10, 20);
    } else {
        damagePoint = getRandomInteger(20, 30);
    }
    return Math.round(damagePoint * game.armorRatio);
}
// Fonction pour les dégats infligés au dragon par le joueur
function computePlayerDamagePoint() {
    let damagePoint;

    switch (game.difficulty) {
        case 1:
            damagePoint = getRandomInteger(25, 30);
            break;
        case 2:
            damagePoint = getRandomInteger(15, 20);
            break;
        case 3:
            damagePoint = getRandomInteger(5, 10);
            break;
    }
    return Math.round(damagePoint * game.swordRatio);
}

// Déroulé du jeu
function gameLoop() {
    let playerSpeed;
    let dragonSpeed;
    let damagePoint;
    console.log(game);
    while (game.hpPlayer > 0 && game.hpDragon > 0) {
        let playerSpeed = getRandomInteger(10, 20);
        let dragonSpeed = getRandomInteger(10, 20);
        if (dragonSpeed > playerSpeed) {
            // Dragon attaque
            //calculer les points de dégats infligé par le dragon au joueur
            damagePoint = computeDragonDamagePoint();
            //soustraire ces points de dégats des PV du joueur
            game.hpPlayer = game.hpPlayer - damagePoint;
            //afficher dans la console combien de dégats ont été infigés
            console.log(`Le dragon attaque et vous inflige ${damagePoint} points de dégâts.`);
        } else {
            // Joueur attaque
            //calculer les points de dégats infligé par le joueur au dragon
            damagePoint = computePlayerDamagePoint();
            //soustraire ces points de dégats des PV du dragon
            game.hpDragon = game.hpDragon - damagePoint;
            //afficher dans la console combien de dégats ont été infigés
            console.log(`Le joueur attaque le dragon et lui inflige ${damagePoint} points de dégâts.`);
        }
        console.log(game, damagePoint);
        console.log(`--- TOUR ${game.round} ---`);
        display();
        game.round++;
    }
}

    function display() {
        console.log(`PV du joueur : ${game.hpPlayer}`);
        console.log(`PV du dragon : ${game.hpDragon}`);
    }

    function initializeGame() {

        game.round = 1;

        game.difficulty = getRequestInteger(
            'Niveau de difficulté ?\n 1. Facile - 2. Normal - 3. Difficile',
            1, 3
        );
        // Définition des points de vie en fonction du choix de la difficulté
        switch (game.difficulty) {
            case 1: //if (game.difficulty === 1)
                game.hpPlayer = getRandomInteger(200, 250);
                game.hpDragon = getRandomInteger(150, 200);
                break;
            case 2:
                game.hpPlayer = getRandomInteger(200, 250);
                game.hpDragon = getRandomInteger(200, 250);
                break;
            case 3:
                game.hpPlayer = getRandomInteger(150, 200);
                game.hpDragon = getRandomInteger(200, 250);
                break;
        }
        console.log(game);
        // choix de l'épée
        game.sword = getRequestInteger(
            `Choisir type épée ?\n 1.Bois - 2. Acier - 3. Excalibiur`,
            1, 3
        );
        //définition du ratio en fonction du choix de l'épée
        switch (game.sword) {
            case 1:
                game.swordRatio = 0.5
                break;
            case 2:
                game.swordRatio = 1
                break;
            case 3:
                game.swordRatio = 1.5
                break;
        }
        //choix de l'armure
        game.armor = getRequestInteger(
            `Choisir une armure ?\n 1. Cuivre - 2. Fer - 3. Magique`,
            1, 3
        );
        //définition du ratio en fonction du choix de l'armure
        switch (game.armor) {
            case 1:
                game.armorRatio = 1
                break;
            case 2:
                game.armorRatio = 0.75
                break;
            case 3:
                game.armorRatio = 0.5
                break;
        }

        //affichage début du jeu
        console.log(`
		----- Début du jeu : tour n°${game.round} -----
        Rappel des points de vie :
        `);
        display();
    }

    function displayWinner(){
        //affiche l'image du vainqueur dans le HTML
        if(game.hpPlayer > 0){
        	console.log(`Vous avez gagné, il vous restait ${game.hpPlayer} de points de vie`);
            document.querySelector("img").src = "images/knight.jpg";
        } else {
        	console.log(`Vous avez perdu, il restait au dragon ${game.hpDragon} de points de vie`);
            document.querySelector("img").src = "images/dragon.jpg";
        }
    }
        function startGame(){
            initializeGame();
            gameLoop();
            displayWinner()  
        }
        startGame();
