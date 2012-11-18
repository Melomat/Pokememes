function callExternalScript(url)
        {
                var n = document.createElement("script");
                n.setAttribute("type", "text/javascript");
                n.setAttribute("src", url);
                document.getElementsByTagName("head")[0].appendChild(n);
        }

        function load_chars()
        {
                callExternalScript("http://louwii.fr/pkmm/get-chars.php?callbackFunction=goSuccess");
        }

        function goSuccess(json)
        {
            nbPersonnages = json.length;
                window["tableau"] = json;
                var chars_div = document.getElementById('mov');
                for (i in json)
                {
                    var personnage = new Perso(i, "http://louwii.fr" + json[i].pic, json[i].name);
                        listePersos.push(personnage);
                        var chardiv = document.createElement("div");
                        chardiv.className = "characterDiv";

                        chardiv.setAttribute("data-character", personnage.id + "");
                        chardiv.style.width = largeurDivPersonnages + "px";
                        chardiv.addEventListener('click', function () { chosenCharacter(this); }, false);
                       
						var cont = document.createElement("h2");
						cont.className="characterName";
                        var characterName = document.createTextNode(personnage.nom);
						cont.appendChild(characterName);
                        chardiv.appendChild(cont);

					    var imageDiv = document.createElement("div");
					    imageDiv.className = "characterImageDiv";
						var pic = document.createElement("img");
                        pic.setAttribute("class", "characterImage");
                        pic.setAttribute("src", personnage.image);
                        pic.setAttribute("alt", json[i].name + " avatar");
                        imageDiv.appendChild(pic)
						chardiv.appendChild(imageDiv);

                        var charactersLife = document.createElement("div");
						charactersLife.className = "charactersLife";

                        var heartDiv = document.createElement("div");
                        heartDiv.className = "heartDiv";
                        charactersLife.appendChild(heartDiv);


						var charactersLifeText = document.createElement("p");
                        var text = document.createTextNode(personnage.vie);
						charactersLifeText.appendChild(text);
                        charactersLife.appendChild(charactersLifeText);
						chardiv.appendChild(charactersLife);
                        
						chars_div.appendChild(chardiv);
                }
                
				movWidthCalcul();
                leftShiftCalcul();
                addRangeSlider();
            
        }