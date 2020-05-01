"use strict"
//si la fonction a pour but de renvoyer quelquechose, elle a forcément un return dans son code

function valAtIndex(table, i){
    return table[i];
}

function tableau(){
    let tab = [
        2, "toto", 4, "hello"
    ]
    
    let valeur = valAtIndex(tab, 1);
    console.log(valeur);
    alert(valAtIndex(tab, 3));
}

tableau();


/*
function hello(){
    return ("Hello world !");
}

function helloSomebody(name, age){
    alert(`Hello ${name}, as ${age} ans !`);
}

//helloSomebody("Toto", 12);

//helloSomebody("Tata", 49);

let valeur = hello();
console.log(valeur);
*/

//window.setTimeout(hello, 30);