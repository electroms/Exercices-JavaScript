"use strict"
let frodon = new Personnage("Frodon", 50, 10, "Hobbit");
let gandalf = new Personnage("Gandalf", 300, 50, "Magicien");
let sauron = new Personnage("Sauron", 10000, 500, "Dieu de la destruction et du mal hahhahahahhaa");


frodon.sePresenter();
gandalf.sePresenter();
sauron.sePresenter();

frodon.direBonjour(gandalf);

gandalf.attaquer(sauron);