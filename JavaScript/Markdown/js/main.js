document.addEventListener('click', function() {
    document.querySelector('button#submit').addEventListener('click', retranscrire)
    document.querySelector('button#toMarkdown').addEventListener('click', convert_markdown)
})

function retranscrire(e) {
    /**
     * La variable e contient toutes les informations relatives à l'éléments. Ici, le clic sur le bouton va nativement faire la soumission du formulaire et donc rafraichir la page. Pour empêcher ça, on va 
     */ 
    e.preventDefault()
    let texte = document.querySelector('textarea#txt').value
        //remplacement des sauts à la lignes par des <br>
        // /\n/g = expression régulière qui vient sélectionner les nouvelles lignes
    texte = texte.replace(/\n/g, "<br/>")
        //on utilise la fonction .html et non .text afin que le br soit corretement interprété
        document.querySelector('#encart').innerHTML = texte
}

function convert_markdown(e) {
    e.preventDefault()
    let texte = document.querySelector('textarea#txt').value
        // on décompose le texte en un tableau qui contient chaque ligne 
    let lignes = texte.split(/\n/g)
        // la variable texte_md va contenir notre texte converti en html
    let texte_md = ''
        /**
         * on va boucler sur notre tableau de ligne
         * si la ligne est vide, on passe directement à l'itération suivante
         * sinon, on récupère les premiers caractères de la ligne, qui va déterminer dans quelle balise HTML sera contenu notre texte
         *  */
    for (ligne of lignes) {
        //L'instruction continue arrête l'exécution des instructions pour l'itération de la boucle courante ou de la boucle étiquetée. L'exécution est reprise à l'itération suivante. 
        if (ligne.length == 0) continue
        let positionEspace = ligne.indexOf(' ')
        //La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin
        let caractere = ligne.substring(0, positionEspace)
        texte_md += convert_ligne(caractere, ligne)
    }
    //on utilise la fonction .html et non .text afin que le br soit corretement interprété
    document.querySelector('#encart').innerHTML = texte_md
}


/** 
 * Notre mini convertisseur ne gère que quelques cas, on passe donc par un switch qui transforme notre ligne en HTML et la retourne
 */
function convert_ligne(caractere, ligne) {
    let ligne_md, txt
    switch (caractere) {
        case '#':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<h1>${txt.trim()}</h1>` //trim permet de supprimer les espaces vides en fin et début de chaine de caractère
            break
        case '##':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<h2>${txt.trim()}</h2>`
            break
        case '###':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<h3>${txt.trim()}</h3>`
            break
        case '####':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<h4>${txt.trim()}</h4>`
            break
        case '>':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<blockquote>${txt.trim()}</blockquote>`
            break
        case '-':
            txt = ligne.substring(caractere.length, ligne.length)
            ligne_md = `<li>${txt.trim()}</li>`
            break
        default:
            ligne_md = `<p>${ligne.trim()}</p>`
            break
    }
    return ligne_md;
}