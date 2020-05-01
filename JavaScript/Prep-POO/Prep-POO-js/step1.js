// class Personnage
var Personnage = function(nom, sante, force, race) {

    // les propriétés de ma class
    this.nom    = nom;
    this.sante  = sante;
    this.force  = force;
    this.race   = race;

};

// une méthode de ma class
// "nom_de_la_class".prototype."nom_de_la_methode"
Personnage.prototype.seDecrire = function () {

    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et est un " + this.race;

    console.log(description);
};

Personnage.prototype.direBonjour = function(autre) {
	console.log(this.nom + " dit bonjour à " + autre.nom + ' qui est un ' + autre.race);
}

// Nouvelle instance (Objet) de ma class Personnage
var Gandalf = new Personnage("Gandalf", 200, 25, "humain");
var Frodon = new Personnage("Frodon", 50, 10, "hobbit");
var Sauron = new Personnage("Sauron", 10000, 500, "Dieu du mal de la destruction");

// Appel d'une methode sur mes nouveaux Objets
Gandalf.seDecrire();
Frodon.seDecrire();
Sauron.seDecrire();


Gandalf.direBonjour(Frodon);
