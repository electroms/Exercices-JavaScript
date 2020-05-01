# Markdown to HTML

Nous allons créer un mini éditeur markdown : dans le textarea, nous saisissons du texte sous le format MD, et en un clic sur le bouton, cela nous le converti et affiche en HTML

Nous n'allons pas gérer tous les cas possible du md mais uniquement les essentiels.

## Etape 1

Au clic sur le bouton, récupérer le contenu de la textarea et le mettre dans un bloc à côté

## Etape 2 : md to html

Pour chaque ligne, vérifier les premiers caractères.

- \#    = h1
- \##   = h2
- \###  = h3
- \#### = h4
- \-    = li
- \>    = blockquote
- le reste = p

## Indice
- couper une chaine de caractères : split()