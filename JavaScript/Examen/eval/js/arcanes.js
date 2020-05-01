let arcanes = new Set([
    {
        num: "∞",
        nom: "Le mat",
        signification: `J’avance vers l’inconnu. Je suis en route vers mon destin. Je poursuis ma voie personnelle.
        Je prends le risque d’aller de l’avant vers un chemin nouveau. Je voyage.
        Je me libère des contraintes et des exigences sociales. Je vais à ma façon originale.
        Je pars vers des aventures nouvelles. J’avance avec mon intuition et mon expérience.`
    },
    {
        num: "I",
        nom: "Le Bateleur",
        signification: `C’est le début de tout. Je montre mes capacités. J’existe. Je m’affirme. Je fais des projets. 
        J’ose entreprendre et je teste des choses nouvelles. Je suis d’un tempérament actif.
        J’ai un esprit jeune et dynamique. J’ai une joie de vivre. J’aime bien m’amuser.
        C’est une situation nouvelle qui commence et tout est encore possible.`
    },
    {
        num: "II",
        nom: "La papesse",
        signification: `Je prends le temps de bien préparer mon projet. Je suis un soutien pour autrui.
        J’ai une autorité naturelle. Je prends ma place et me fais respecter. J’agis avec sagesse.
        J’ai les connaissances pour réussir. Je me prépare bien. J’inspire la confiance.
        Je sais bien recevoir. Je m’installe dans un lieu. J’attends un enfant.`
    },
    {
        num: "III",
        nom: "L'impératrice",
        signification: `Je m’exprime. Je communique. J’entre en relation avec autrui.
        Je suis créative. J’ai des idées nouvelles et je les mets en œuvre. Je développe un projet.
        Je parle avec aisance et je sais bien écrire. J’ai une réflexion personnelle.
        Je prends des responsabilités. J’ai une belle place sociale. Je vis bien ma vie de femme.`
    },
    {
        num: "IV",
        nom: "L'empereur",
        signification: `J’agis. Je réalise. Je dirige. Je suis responsable d’une entreprise, d’une équipe.
        J’ai une place de pouvoir. Mes capacités et mon autorité sont reconnues.
        J’ai le sens de l’organisation. Je suis un bâtisseur. J’ai une situation stable.
        Je peux profiter de résultats concrets. Je m’appuie sur mon esprit logique.`
    },
    {
        num: "V",
        nom: "Le pape",
        signification: `Je sais conseiller et orienter autrui. Je suis de bons conseils. Je tire les leçons des choses.
        Je transmets mes connaissances et je continue d’apprendre. Je suis un bon enseignant.
        Je développe mes propres conceptions, ma philosophie. J’ai le sens de ce qui est bien et bon.
        Je suis un parent impliqué, juste et bienveillant. J’ai le sens des valeurs importantes.`
    },
    {
        num: "VI",
        nom: "L'amoureux",
        signification: `Je montre mes sentiments. J’entre en contact avec autrui. J’accepte l’aide des autres.
        Je suis amoureuse. Je suis aimé. Je fais un choix selon mon cœur. C’est le bon choix.
        Je suis bien entourée. J’échange, je donne et je reçois. Je suis à égalité avec autrui.
        Je développe mes relations. Je vis une situation intime et agréable.`
    },
    {
        num: "VII",
        nom: "Le chariot",
        signification: `Je réalise mes projets. J’agis en toute indépendance. Je réussis ce que j’entreprends.
        Je m’affirme. Je prends mon autonomie. J’ai un esprit d’entreprise. J’avance rapidement.
        Je sais ce que je veux et ce que je ne veux pas. J’affirme ma façon d’être personnelle.
        J’ai confiance en moi et en ma dynamique. J’avance sur mon chemin de façon autonome.`
    },
    {
        num: "VIII",
        nom: "La justice",
        signification: `Je pèse le pour et le contre et je fais un choix. Je me positionne de façon juste.
        Je suis rigoureuse. Je recherche l’attitude la plus équitable. Je prends une décision.
        Je légalise une situation. Je me mets en accord avec la loi et avec mes règles de vie.
        Je cherche l’harmonie et l’équilibre. Je prends le temps de me poser et d’être en paix.`
    },
    {
        num: "IX",
        nom: "L'hermite",
        signification: `Je réfléchis. Je prends le temps de comprendre. Je vais au-delà des apparences.
        Je sais ce qui se cache derrière une situation. J’éclaircis les choses avec mon intelligence.
        Je fais preuve de patience. Je prends le temps nécessaire à la situation. J’agis avec prudence.
        Je suis capable de guider autrui et d’être une bonne thérapeute.`
    },
    {
        num: "X",
        nom: "La roue de fortune",
        signification: `Je m’interroge et je suis capable de répondre à mes questions. Je définis ce que je veux.
        Je sais ce qui me convient. J’attire la chance et les bonnes relations. Je saisis les opportunités.
        Je m’adapte aux événements en restant stable et en gardant une continuité.
        Je prends en main ma destinée. Je fais ce qu’il faut pour acquérir une prospérité.`
    },
    {
        num: "XI",
        nom: "La force",
        signification: `J’ai de l’énergie et une grande force vitale. Je vais au bout de mon projet pour sa réussite.
        Je me donne un objectif et je l’atteins. Je maitrise une situation. Je suis déterminée.
        J’unis des forces opposées ou différentes. J’obtiens une alliance et je réconcilie les parties.
        Je me marie. J’obtiens ce que je veux. Je suis l’axe d’une situation. Je fais preuve de logique.`
    },
    {
        num: "XII",
        nom: "Le pendu",
        signification: `Je suis dans une attitude de lâcher-prise. Je n’interviens pas et j’’attends le bon moment.
        J’accepte le cours des choses. Je vois les choses autrement. J’assume ma voie originale.
        Je retourne une situation à l’avantage de chacun. J’écoute et je transmets mes intuitions.
        Je suis non conformiste, avec une vision différente et inspirée des choses.`
    },
    {
        num: "XIII",
        nom: "L'arcane sans nom",
        signification: `Je me transforme en profondeur. Je nettoie mes vieilles idées. Je balaie mes clichés.
        Je change mes habitudes. Je passe à autre chose. Je tire un trait sur le passé.
        Je me structure et j’avance. Je me tourne vers l’avenir. J’agis rapidement.
        Je vis ma libido et je déblaie ce qui n’est plus utile. Je vais à l’essentiel.`
    },
    {
        num: "XIV",
        nom: "La tempérance",
        signification: `Je crée des liens. Je développe mes relations sociales.  Je vis bien avec mes amis.
        J’échange des informations, des choses. Je suis une bonne médiatrice. Je suis diplomate.
        Je sais modérer mes pulsions. Je guéris. Je soigne. Je suis conciliante et sociable.
        Je crée une continuité. Je participe à un mouvement collectif positif. Je me sens protégée.`
    },
    {
        num: "XV",
        nom: "Le diable",
        signification: `J’exprime et je vis mes désirs. J’écoute mon ressenti pour agir en accord avec lui.
        J’éclaire les choses cachées. Je révèle un secret. Je me délivre de certaines contraintes.
        Je tranche un conflit et me libère de ce qui m’entrave. Je comprends ce qui est souterrain.
        Je prends du plaisir et vis librement ma sexualité. Je m’élève au-dessus des conventions.`
    },
    {
        num: "XVI",
        nom: "La maison dieu",
        signification: `Je suis réaliste. Je cherche la meilleure solution. J’étudie la matière. Je suis scientifique.
        J’expérimente. Je suis dans une quête du vrai. Je ne crois pas aux idées reçues.
        J’aime le changement. Je sors des chemins battus. J’apporte un souffle d’air frais.
        Je vis un coup de foudre amoureux. J’ai une idée lumineuse et novatrice.`
    },
    {
        num: "XVII",
        nom: "L'étoile",
        signification: `Je donne avec naturel. Je profite de la vie. Je me repose. Je prends des vacances.
        Je suis tranquille et en paix. Je suis en bonne santé. Je sais soigner et apaiser autrui.
        Je suis douée pour les domaines artistiques. J’ai de la sensibilité et de l’intuition.
        Je crois en ma bonne étoile qui me guide et je la suis. Je me montre tel que je suis.`
    },
    {
        num: "XVIII",
        nom: "La lune",
        signification: `J’imagine. Je crée. J’écoute mes rêves pour les réaliser. Je suis très intuitive.
        Je sais bien accueillir et écouter autrui. J’ai le sens de la famille et je suis bien entourée.
        Je suis une bonne financière. Je sais y faire avec l’argent. J’aime le changement.
        Je m’installe et je décore avec goût mes intérieurs. J’ai un sens créatif inné.`
    },
    {
        num: "XIX",
        nom: "Le soleil",
        signification: `J’ai une belle place sociale et je suis reconnue pour mes capacités. Ma position est stable.
        Je partage. Je donne et je reçois. Je suis heureux en couple. Je fais une bonne association.
        J’ai une position de pouvoir et j’assume mes responsabilités. J’ai de l’ambition.
        J’ai un esprit clair et rationnel qui sait fixer les limites. J’inspire le respect et la confiance.`
    },
    {
        num: "XX",
        nom: "Le jugement",
        signification: `J’ai une idée nouvelle. Je me transforme et vis un renouveau. Mes vœux sont exaucés.
        Je m’élève. J’ai une promotion. Je vois les choses autrement et je pardonne.
        J’ai une intuition forte et rapide qui me guide vers une voie nouvelle. Je suis reçue.
        Je reçois une bonne nouvelle. J’ai une reconnaissance publique.`
    },
    {
        num: "XXI",
        nom: "Le monde",
        signification: `Je trouve ma place dans le monde. Je suis heureux. Je finalise mon projet. Je gère un groupe.
        Je crée un centre. Je suis entouré de gens valables. J’ai réussi ce que je voulais.
        Je reçois les lauriers de mes efforts. J’ai une position harmonieuse et reconnue.
        J’ai une vision globale et un esprit de synthèse.  Je suis à la maturité de ma vie.`
    },
]);
