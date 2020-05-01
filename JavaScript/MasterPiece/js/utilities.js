'use strict';   

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomColor()
{
    var red;
    var blue;
    var green;
    var opacity;
    
    red = getRandomInteger(0, 255);
    blue = getRandomInteger(0, 255);
    green = getRandomInteger(0, 255);
    
    opacity = Math.random();
    
    return 'rgba('+ red +', '+ blue +', '+ green +', '+ opacity +')';
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}