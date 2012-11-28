
//permet de retirer les éléments de choix de personnage
function removeCharacterChoserDivs()
{
	var body = document.getElementById("body");
	var nodes = body.childNodes;
	for(i = nodes.length-1 ; i > 0 ; i--) 
	{
		var child = nodes[i];
		if(child.nodeName != "CANVAS")
		{
			body.removeChild(body.childNodes[i]);
		}
	}
}

//change l'url
function pushEtat()
{
	if(window.history && history.pushState)
	{
		history.pushState("1", "combat", location.pathname+"#combat");
	}
}

//permet d'abandonner le combat si jamais l'utilisateur veut revenir au choix des personnages
function addBackListener()
{
	window.addEventListener('popstate', function(event)
	{
		abandon();
	});
}

//construit l'affichage de la zone de combat
function addCombatDIvs()
{	
	var body = document.getElementById("body");
	var globalCharacterDiv = document.createElement("div");
	globalCharacterDiv.className = "globalCharacterDiv";
	globalCharacterDiv.setAttribute("id", "ennemyGlobalCharacterDiv");
	body.appendChild(globalCharacterDiv);

	var ennemyDiv = document.createElement("div");
	ennemyDiv.className = "combatCharacterDiv";
	ennemyDiv.setAttribute("id", "combatEnnemyDiv");
	globalCharacterDiv.appendChild(ennemyDiv);

	var photo = document.createElement("img");
	photo.className = "characterImage";
	photo.setAttribute("src", persoEnnemi.image);
	ennemyDiv.appendChild(photo);

	var ennemyBarreDeVie = document.createElement("div");
	ennemyBarreDeVie.setAttribute("id", "barreDeVieEnnemie")
	ennemyDiv.appendChild(ennemyBarreDeVie);
	persoEnnemi.barreDeVie = new barreDeVie("barreDeVieEnnemie");

	var nomChar = document.createElement("h2");
	var characterName = document.createTextNode(persoEnnemi.nom);
	nomChar.appendChild(characterName);
    ennemyDiv.appendChild(nomChar);


	var selfGlobalDiv = document.createElement("div");
	selfGlobalDiv.className = "globalCharacterDiv";
	selfGlobalDiv.setAttribute("id", "selfDiv");
	body.appendChild(selfGlobalDiv);

	var selfDiv = document.createElement("div");
	selfDiv.className = "combatCharacterDiv";
	selfDiv.setAttribute("id", "combatSelfDiv");
	selfGlobalDiv.appendChild(selfDiv);

	var photo2 =  document.createElement("img");
	photo2.className = "characterImage";
	photo2	.setAttribute("src", persoSelf.image);
	selfDiv.appendChild(photo2);

	var ennemyBarreDeVie = document.createElement("div");
	ennemyBarreDeVie.setAttribute("id", "barreDeVieSelf");
	selfDiv.appendChild(ennemyBarreDeVie);
	persoSelf.barreDeVie = new barreDeVie("barreDeVieSelf");

	nomChar = document.createElement("h2");
	characterName = document.createTextNode(persoSelf.nom);
	nomChar.appendChild(characterName);
    selfDiv.appendChild(nomChar);

    var button = document.createElement("input");
	button.setAttribute("type", "button");
	button.setAttribute("id", "abandonButton");
	button.setAttribute("value", "ABANDON..");
	button.addEventListener('click', function () { abandon() }, false);
	document.getElementById("body").appendChild(button);


    getAttaques();
    pushEtat();
    addBackListener();
}


//charge les attaques des personages
function getAttaques()
{
	load_attaques(persoSelf.id, 1);
	load_attaques(persoEnnemi.id, 2);
}


//ajoute la div contenant les attaques
function addAttaquesDiv()
{
	var y = 0;
	var parentDiv = document.getElementById("selfDiv");

	var attaqueChoserDiv = document.createElement("div");
	attaqueChoserDiv.setAttribute("id", "attaqueChoserDiv");
	parentDiv.appendChild(attaqueChoserDiv);


	var attendreTour = document.createElement("h2");
	attendreTour.setAttribute("id", "attenteText");
    var attenteText = document.createTextNode("C'est au tour de " + persoEnnemi.nom + " de jouer !");
	attendreTour.appendChild(attenteText);
    parentDiv.appendChild(attendreTour);
	
	for(i = 0 ; i < persoSelf.attaques.length ; i++)
	{
		creerAttaqueDiv(i, y);
		y+=63;
	}

	var attaqueDiv= document.createElement("div");
	attaqueDiv.setAttribute("id", "attaqueDiv");
	document.getElementById("body").appendChild(attaqueDiv);

}

//cree une div permettant de choisir les attaques
function creerAttaqueDiv(i, y)
{
	var chosingAttaqueDiv = document.createElement("div");
	chosingAttaqueDiv.className ="chosingAttaqueDiv";

	chosingAttaqueDiv.setAttribute("data-idattaque", persoSelf.attaques[i].id + "");
	document.getElementById("attaqueChoserDiv").appendChild(chosingAttaqueDiv);
	chosingAttaqueDiv.style.top=y;
	attaque = document.createElement("h2");
	AttaqueName = document.createTextNode(persoSelf.attaques[i].nom);
	attaque.appendChild(AttaqueName);
    chosingAttaqueDiv.appendChild(attaque);
    if(persoSelf.peutJouer == false)
    {
    	document.getElementById("attaqueChoserDiv").style.display = "none";
    }
    else
    {
    	 document.getElementById("attenteText").style.display = "none";
    }
    chosingAttaqueDiv.addEventListener("click", function (){faireAttaque(this.dataset.idattaque)}, false);

}
	
//lance une attaque
function faireAttaque(attaqueID)
{	
	if(persoSelf.peutJouer == true)
	{
		try { socket.send("Attaque:" + attaqueID); } catch (ex) { }
		persoSelf.persoEnnemiPerdVieWithAttaque(attaqueID);
		persoSelf.afficherAttaque(attaqueID);
		document.getElementById("attaqueChoserDiv").style.display = "none";
		document.getElementById("attenteText").style.display = "none";
	}
}

//gère le fait de recevoir une attaque
function recevoirAttaque(attaqueID)
{
	persoSelf.attaqueRecueWithID(attaqueID);
}

function abandon()
{
	var answer = confirm ("Etes-vous sûr ? Le retour à la selection des personnages terminera la partie");
		if (answer)
		{
			try { socket.send("abandon"); } catch (ex) { };
  			window.location.reload();
		}
		else
		{
			history.pushState("1", "combat", location.pathname+"#combat");
			window.ignorehashchange = true;
		}
}