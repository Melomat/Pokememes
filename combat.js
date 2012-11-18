function addCombatDIvs()
{
	var body = document.getElementById("body");
	var globalCharacterDiv = document.createElement("div");
	globalCharacterDiv.className = "globalCharacterDiv";
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


    addAttaquesDiv("selfDiv");

}

function addAttaquesDiv(nomParent)
{
	var parentDiv = document.getElementById(nomParent);

	var attaqueChoserDiv = document.createElement("div");
	attaqueChoserDiv.setAttribute("id", "attaqueChoserDiv");
	parentDiv.appendChild(attaqueChoserDiv);

	var attaqueDiv= document.createElement("div");
	attaqueDiv.setAttribute("id", "attaqueDiv");
	document.getElementById("body").appendChild(attaqueDiv);
	setTimeout("faireAttaque()", 2000);
}

function faireAttaque()
{	
	var video = document.createElement("video");
	video.setAttribute("id", "video");
	video.setAttribute("src","medias/phillipe-salop.webm");
	video.setAttribute("autoplay", "autoplay");
	document.getElementById("attaqueDiv").appendChild(video);
	document.getElementById("attaqueDiv").style.left = "200px";
	setTimeout(function(){persoSelf.perdreVie(300);}, 2000);
	setTimeout(function(){persoSelf.perdreVie(300);}, 3000);
	setTimeout(function(){persoSelf.perdreVie(300);}, 4000);
	video.addEventListener("ended", videoArretee, false);
}

function videoArretee()
{
	document.getElementById("attaqueDiv").style.left = "-500px";
}