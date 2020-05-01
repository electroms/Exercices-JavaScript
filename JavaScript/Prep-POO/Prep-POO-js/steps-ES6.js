// class Personnage
class Personnage {

    constructor(nom, sante, force, race) {
        // les propriétés de ma class
        this.nom    = nom;
        this.sante  = sante;
        this.force  = force;
        this.race   = race;
    }

    // une méthode de ma class
    // "nom_de_la_class".prototype."nom_de_la_methode"
    seDecrire() {
        var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et est un " + this.race;

        console.log(description);
    }

    direBonjour(autre) {

        console.log(this.nom + " dit bonjour à " + autre.nom);
    }

    attaquer(cible) {

    	console.log(this.nom + " passe à l'action !");

        if (this.sante > 0) {
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + this.force + " points de dégâts");
            cible.sante -= this.force;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }

    }
};


// Nouvelle instance (Objet) de ma class Personnage
var Gandalf = new Personnage("Gandalf", 200, 25, "humain");
var Frodon = new Personnage("Frodon", 50, 10, "hobbit");
var Sauron = new Personnage("Sauron", 10000, 500, "Dieu du mal de la destruction");

// Appel d'une methode sur mes nouveaux Objets
Gandalf.seDecrire();
Frodon.seDecrire();
Sauron.seDecrire();


Gandalf.direBonjour(Frodon);

// Fight !
Gandalf.attaquer(Sauron);
Frodon.attaquer(Sauron);
Sauron.attaquer(Frodon);
Sauron.attaquer(Gandalf);
