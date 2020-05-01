"use strict"

class Personnage {
    
    constructor(nom, sante, force, type){
        //this = à l'intérieur du code d'une classe this = l'objet
        //liste des propriétés
        this.nom = nom;
        this.pv = sante;
        this.force = force;
        this.race = type;
    }
    
    sePresenter(){
        console.log(`Je m'appelle ${this.nom}, j'ai ${this.pv} points de vie, quand j'attaque, j'inflige ${this.force} points de dégâts et je suis un ${this.race}.`)
    }
    
    direBonjour(autre){
        console.log(`${this.nom} dit bonjour à ${autre.nom} !`);
    }
    
    attaquer(autre){
        if(this.pv > 0){
            console.log(this.nom + " passe à l'action !");
            //attaque
            console.log(`${this.nom} attaque ${autre.nom} et lui inflige ${this.force} points de dégâts.`);
            autre.pv -= this.force;
            if(autre.pv > 0){
                console.log(`${autre.nom} a encore ${autre.pv} points de vie.`);
            } else {
                console.log(`${autre.nom} est mort !`);
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer... il est mort...!");
        }
    }

}