        function load_attaques(idPerso, perso)
        {
            if(perso == 1)
            {
                callExternalScript("http://louwii.fr/pkmm/getAttack?char=" + idPerso + "&callbackFunction=remplirAttaquesSelf");
            }
            else
            {
                callExternalScript("http://louwii.fr/pkmm/getAttack?char=" + idPerso + "&callbackFunction=remplirAttaquesEnnemy");
            }
        }

        function remplirAttaquesSelf(json)
        {
            persoSelf.attaques = creerAttaquesjson,
            for(j = 0 ; j < listeAttaques.length ; j++)
            {
                var attaque = listeAttaques[j];
            }
        }

        function remplirAttaquesEnnemy(json)
        {
            persoEnnemi.attaques = creerAttaquesjson,
            for(j = 0 ; j < listeAttaques.length ; j++)
            {
                var attaque = listeAttaques[j];
            }
        }

        function creerAttaque(json)
        {

            var attaques = [];

            for (i in json)
            {
                lesSources = [];
                sourcesJSon = json[i].sources;
                if(json[i].type == "1")
                {
                    lesSources = [sourcesJSon[0]];
                }
                else
                {
                    lesSources = [sourcesJSon[0], sourcesJSon[1]];
                }

                var attaque = new Attaque(json[i].name, json[i].damages, json[i].type, lesSources);

                attaques.push(attaque);
            }
            return attaques;
        }