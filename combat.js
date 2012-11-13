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

	var selfGlobalVarDiv = document.createElement("div");
	selfGlobalVarDiv.className = "globalCharacterDiv";
	body.appendChild(selfGlobalVarDiv);

	var selfDiv = document.createElement("div");
	selfDiv.className = "combatCharacterDiv";
	selfDiv.setAttribute("id", "combatSelfDiv");
	selfGlobalVarDiv.appendChild(selfDiv);

	var photo2 =  document.createElement("img");
	photo2.className = "characterImage";
	photo2	.setAttribute("src", persoSelf.image);
	selfDiv.appendChild(photo2);

	var ennemyBarreDeVie = document.createElement("div");
	ennemyBarreDeVie.setAttribute("id", "barreDeVieEnnemie")
	ennemyDiv.appendChild(ennemyBarreDeVie);
	persoEnnemi.barreDeVie = new barreDeVie("barreDeVieEnnemie");
	setTimeout(function(){persoEnnemi.perdreVie(300);}, 3000) ;

	setTimeout(function(){persoEnnemi.perdreVie(300);}, 5000) ;

	

}