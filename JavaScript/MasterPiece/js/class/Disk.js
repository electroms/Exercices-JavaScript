"use strict"

class Disk {

    constructor() {
        //on applique des valeurs par défaut aux propriétés
        this.color = "black";
        this.radius = 20;
        this.location = { x: 0, y: 0 };
    }

    setLocation(location){
        //changer la valeur de la propriété location
        this.location = location;
    }

    setRadius(radius){
        //changer la valeur de la propriété radius
        this.radius = radius;
    }

    setColor(color){
        //changer la valeur de la propriété color
        this.color = color;
    }
    //méthode qui permet au disque de se dessiner dans le canvas
    draw(context){
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI);
        context.fill();

    }

}