"use strict"
let tirage = new Set(); //5 chiffres entre 1 et 50 générés par l'ordinateur
    let user = new Set(); //5 chiffres entre 1 et 50 saisis par l'utilisateur
    let compOrdi, //chiffre complémentaire généré par l'ordinateur
    	compUser; //chiffre complémentaire saisi par l'utilisateur
    let cpt = 0; // contenir le nb de correspondance
    let gain = 0; // contient le total de ce que gagne l'argent


    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function genTirage(){
    	while(tirage.size < 5){
        	tirage.add(getRandomInteger(1, 50));
        }
        compOrdi = getRandomInteger(1, 10);
    }
    
    function getUserChoice(){
    	//récupérer tous les inputs qui ont la classe nombres dans un tableau inputs
        const inputs = document.querySelectorAll(".nombres");
        console.log(inputs);
    	//Pour chacun des inputs, on récupère sa valeur qu'on enregistre dans le set user
        //on boucle sur le tableau pour à chaque ligne récupérer la valeur qui est dans l'input
        for(let input of inputs){
        //input.value = "5" --> string / chaine de caractères
        	let val = parseInt(input.value);
            //on n'ajoute dans le set que si chiffre compris entre 1 et 50 et unique
            if(isNaN(val) === false 
                && val >= 1 
                && val <= 50
                && user.has(val) === false
            ){
        		user.add(val);
                //disable le champ
                input.disabled = true;
                input.classList.remove("nombres");
                input.classList.remove("warning");
            } else {
            //si le numéro a déjà été saisi ou n'est pas entre 1 et 50 
            	//on ajoute la classe warning à l'input
                input.classList.add("warning");
            }
        }
        
        //récupérer le numéro complémentaire saisi et l'enregistrer dans compUser
        const inputComp = document.querySelector("#complementaire");
        const valComp = parseInt(inputComp.value);
        //vérification du complémentaire qui doit être compris entre 1 et 10
        if(isNaN(valComp) === false 
                && valComp >= 1 
                && valComp <= 10
          ){
            compUser = valComp;
            //disable le champ
            inputComp.disabled = true;
            inputComp.classList.remove("warning");
        } else {
            //si le numéro a déjà été saisi ou n'est pas entre 1 et 50 
            //on ajoute la classe warning à l'input
            inputComp.classList.add("warning");
        }
        
        console.log(user, compUser);
        //si on a bien nos 5 chiffres dans user et que compUser n'est pas undefined
        if(user.size === 5 && compUser != undefined){
        	//appelle la fonction compare()
            compare();
        }
    }
    
    /**
 * Compare les chiffres tirés par l'ordinateur à ceux choisis par l'utilisateur
 * Incrémente le compteur cpt à chaque correspondance. C'est le nombre de correspondance qui déterminera le prix remporté par l'utilisateur
  générer le HTML qui sera injecté dans la section cachée
 */
    function compare(){
    	console.log("on lance la comparaison")
        //on va injecter du html dans la page. Ce html va être construit et stocké dans la variable html
        let html = "";
        //comparaison des 5 premiers chiffres
        //on vient générer l'affichage du tirage de l'ordinateur (donc pour ça on parcourt tout le set tirage qui contient les nombres tirés par l'ordinateur)
        //on passer sur chacune des lignes du set pour vérifier si un nombre a été saisi par l'utilisateur (si c'est le cas, on incrémente le compteur de correspondances)
        for(let nb of tirage){
            if(user.has(nb)){
            	//le nombre du tirage a été saisi par l'utilisateur
                //on incrémente le compteur de correspondance
            	cpt++; //cpt = cpt + 1
                //on génère le span avec un class win pour qu'il s'affiche en vert
				html += `<span class="win">${nb}</span>`;
            } else {
            	//le nombre n'a pas été trouvé par l'utilisateur donc on affiche le nombre simplement dans un span SANS la classe win
            	html += `<span>${nb}</span>`;
            }
        }
        
        //on vient vérifier si l'utilisateur a trouvé le nombre complémentaire
        if(compOrdi === compUser){
        	cpt++; //on incrémente le compteur de correspondance
            gain += 2000; //il gagne 2000€ pour avoir trouvé le complémentaire
            //on affiche le nb complémentaire avec la class win pour qu'il apparaisse en vert
            html += `<span class="win complementaire">${compOrdi}</span>`;
        } else {
            	//le complémentaire n'a pas été trouvé par l'utilisateur donc on affiche le nombre simplement dans un span SANS la classe win
            html += `<span class="win complementaire">${compOrdi}</span>`;
        }
        
        //on injecte tout ce HTML généré du tirage de l'ordinateur dans la balise qui a la classe .generate
        document.querySelector(".generate").innerHTML = html;
        
        //une fois la comparaison finie et le nombre de correspondance déterminées, on appelle genPrice qui détermine le gain en fonction des correspondances
        genPrice();
    }
    
    
    /*
    	combien va gagner l'utilisateur ?
    */
    function genPrice(){
    	/*
        	si on a 
            - 2 corr = 1000
            - 3 corr = 5000
            - 4 corr = 10000
            - 5+ corr = 100000
            --> on peut avoir les 2k du complémentaire en +
            -->si 1 seule correspondance = on gagne rien
            -->sauf s'il s'agit du complémentaire = 2000
        
        */
        switch(cpt) {
            case 2 : 
                gain += 1000;
                break;
            case 3 : 
                gain += 5000;
                break;
            case 4 : 
                gain += 10000;
            	break;
            case 5 :
            case 6 :
                gain += 100000;
            	break;
        }
        
        
        //affichage : si on a rien gagné 
        if(gain === 0){
        	// dans #result h3 = Vous n'avez rien gagné, mais vous pouvez retenter votre chance !
            document.querySelector("#result h3").innerHTML = "Vous n'avez rien gagné, mais vous pouvez retenter votre chance !";
        } else {
            //sinon on vient afficher dans le span qui est dans #result h3 le montant du gain
			document.querySelector("#result h3 span").textContent = gain;
        }
        
        showResults();
    }
    
    function showResults(){
    	//cacher la section #choix en lui ajoutant la classe hide
        document.querySelector("#choix").classList.add("hide");
        
        //afficher la grille de l'utilisateur dans .saisi
        //la variable html contient le HTML qu'on va injecter dans .saisi
        let html = "Pour rappel, voici votre grille : ";
        //on parcours le set user pour afficher les chiffres 1 à 1 saisis par l'utilisateur
        for(let nb of user){
        	html += nb + ","; //`${nb},`
        }
        //on indique également le numéro complémentaire
        html += ` et le numéro complémentaire <b>${compUser}</b>`;
        //on injecte tout le contenu de la variable html dans la balise HTML .saisi
        document.querySelector(".saisi").innerHTML = html;
        
        //affiche la section #result en lui enlevant la classe hide
        document.querySelector("#result").classList.remove("hide");
    }
    
    /*
    	document.addEventListener("DOMContentLoaded", function(){
        	tout le code principal ici
        });
        Code qui permet de s'assurer que le HTML ne s'excécute qu'une fois la page HTML bien chargée
        Tout le code que nous mettions jusqu'à présent en dehors de toute fonction va se trouver là dedans désormais
    */
    document.addEventListener("DOMContentLoaded", function(){
        genTirage();
        console.log(tirage, compOrdi);
        
        //installation d'un gestionnaire d'événement sur le bouton pour qu'au clic ça récupère la saisie de l'utilisateur
        document.querySelector("#choix button").addEventListener("click", getUserChoice)
    });