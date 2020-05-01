---


---

<h1 id="etape-1---le-fichier-utilities.js-">Etape 1 - le fichier utilities.js :</h1>

Certaines fonctions peuvent être communes ou utilisées pour différents projets. On peut donc les placer dans une fichiers JS à part.

<h2 id="getrandominteger">getRandomInteger()</h2>
<p>On a besoin à plusieurs reprise de générer des nombres aléatoires = on crée donc une fonction getRandomInteger qui attend 2 paramètres : <strong>un minimum et un maximum</strong>.</p>
<p>La fonction <strong>retourne</strong> un nombre entier aléatoire compris entre le minimum et le maximum.</p>
<pre><code>Indice : on va utiliser Math.random
On va chercher sur internet comment obtenir un random entre 2 nombres : "random javascript between two numbers" sur Google
</code></pre>
<h2 id="requestinteger">requestInteger()</h2>
<p>On a besoin de faire saisir plusieurs infos à l’utilisateur (niveau du jeu, épée, armure), qui doit être à chaque fois un nombre entier = on crée une <strong>fonction requestInteger qui attend 3 paramètres</strong> : un message à afficher à l’utilisateur, un nombre minimum et un nombre maximum (qui représentent les choix possibles par l’utilisateur).</p>
<pre><code>Ex d'utilisation : requestInteger("Niveau de difficulté", 1, 3) 
</code></pre>
<p>On demande le niveau de difficulté qui doit être compris entre 1 et 3 tant que l’utilisateur ne saisit pas un nombre compris entre 1 et 3. Une fois qu’il a saisi un nombre compris entre un et 3, <strong>on retourne le nombre saisi</strong>.</p>
<p>Maintenant, on peut passer au développement du jeu.</p>
<h1 id="etape-2---initialisation-du-jeu-">Etape 2 - Initialisation du jeu :</h1>
<p>Toutes les informations du jeu (Niveau, PV, etc… ) sont stockées <strong>dans une variable de type Object</strong> (donc une information = un attribut) -> cela nous permet de n'avoir qu'une variable pour tout le jeu</p>
<h2 id="initializegame">initializeGame()</h2>
<p>On crée une fonction initializeGame() qui contient notre objet Game :</p>
<pre><code>game = new Object();
</code></pre>
<p>Il va falloir définir plusieurs informations :</p>
<ul>
<li>le niveau (difficulty)<br>
-&gt; En fonction du niveau, on défini les PV du joueur et du dragon (hpDragon et hpPlayer) &gt; nombres aléatoires</li>
<li>l’épée (sword) et l’armure (armor) &gt; pensez à bien relire l’énoncé pour voir quel ratio leur attribuer (armorRatio et swordRatio)</li>
</ul>
<blockquote>
<p>Pour définir ici les valeurs en fonction de ce qui a été utilisé par l’utilisateur, on se posera la question s’il faut privilégier une structure de contrôle IF ou SWITCH CASE 😉</p>
</blockquote>
<blockquote>
<p><strong>DEBUG</strong> : on fait un console log de <code>game</code> pour vérifier que toutes nos infos sont correctes</p>
</blockquote>
<h2 id="calcul-des-points-de-dégâts">Calcul des points de dégâts</h2>
<p>Les points de dégâts seront à calculer aussi bien pour le dragon que pour le joueur = <strong>2 fonctions différentes</strong>. (<code>computeDragonDamagePoint()</code> et <code>computePlayerDamagePoint()</code>).</p>
<blockquote>
<p>L’intervalle pour déterminer le nombre aléatoire de dégâts dépend du niveau du jeu.</p>
</blockquote>
<blockquote>
<p>Les points de dégâts sont impactés par l’armure pour <code>computeDragonDamagePoint</code> ou l’épée pour <code>computePlayerDamagePoint</code>.</p>
</blockquote>
<p>Pensez à arrondir les points de dégâts, on ne veut pas de nombre à virgule !</p>
<h2 id="déroulement-du-jeu">Déroulement du jeu</h2>
<p>Le coeur du jeu se trouve dans la fonction <code>gameLoop()</code> : tant que le joueur et le dragon sont vivants, le jeu continue.</p>
<p>Dans notre objet <code>game</code>, on a un attribut <code>round</code> qui nous permettra de connaitre le round du jeu et qui s’implémentera donc à chaque tour.</p>
<p>Pour déterminer qui attaque qui, on va, pour chaque tour, déterminer la vitesse du joueur et du dragon (comprise pour chacun entre 10 et 20). <strong>Le plus rapide attaque l’autre</strong> et on indique dans la console qui a attaqué et combien de dégâts il a infligé.</p>
<blockquote>
<p>On utilise les fonctions créées au préalable pour calculer les points de dégâts.</p>
</blockquote>
<p>A chaque tour, on affiche un recap des PV de chacun.</p>
<h1 id="etape-3--on-lance-le-jeu">Etape 3 : on lance le jeu</h1>
<p>On commence par afficher un recap des PV de chacun.</p>
<blockquote>
<p>Pour rappel : du moment qu’un code est écrit 2 fois : on le refactorise dans une fonction 😉</p>
</blockquote>
<h2 id="startgame">startGame()</h2>
<p>On va avoir une fonction <code>startGame</code> qui se charge d’appeler différentes fonctions afin que le jeu se déroule :</p>
<ul>
<li>l’initialisation du jeu</li>
<li>le déroulement du jeu</li>
<li>l’affichage du gagnant</li>
</ul>
<blockquote>
<p>Il faut bien penser à appeler la fonction <code>startGame</code> si on souhaite que le jeu soit lancé.</p>
</blockquote>
<h2 id="affichage-du-gagnant">Affichage du gagnant</h2>
<p>On crée une fonction <code>showGameWinner</code> qui affiche la photo du gagnant et met un message dans la console en indiquant qui est mort et combien de PV il restait au gagnant.</p>

