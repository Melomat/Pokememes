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
            persoSelf.attaques = creerAttaque(json);
            for(i = 0 ; i < persoSelf.attaques.length ; i++)
            {
                console.log(persoSelf.attaques[i].nom);
                console.log("degats" + persoSelf.attaques[i].degats);
            }
            
        }

        function remplirAttaquesEnnemy(json)
        {
            persoEnnemi.attaques = creerAttaque(json);
            addAttaquesDiv();
        }

        function creerAttaque(json)
        {

            var attaques = [];
            var lesSources;
            for (i in json)
            {
                var attaque;
                lesSources = [];
                sourcesJSon = json[i].sources;
                if(json[i].type == "1")
                {
                    lesSources.push("http://louwii.fr"+sourcesJSon[0]);
                    console.log(sourcesJSon[0]);
                    attaque = new attaqueVideo(json[i].id, json[i].name, json[i].damages, lesSources);
                    console.log(attaque);
                }
                else
                {
                    lesSources.push("http://louwii.fr"+sourcesJSon[1]);
                    lesSources.push("http://louwii.fr"+sourcesJSon[2]);
                    attaque = new attaqueAudio(json[i].id, json[i].name, json[i].damages, lesSources);
                    console.log(attaque);
                }
                 

                attaques.push(attaque);
            }
            return attaques;
        }