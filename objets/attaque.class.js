function Attaque (id, nom, degats)
{
	this.id 		= parseInt(id);
	this.nom        = nom;
	this.degats     = parseInt(degats);
	this.attaqueDiv = document.getElementById("attaqueDiv");
}

Attaque.prototype.attaqueArrete = function()
{
	document.getElementById("attaqueDiv").style.left = "-500px";
	persoSelf.peutJouer = !persoSelf.peutJouer;
	if(persoSelf.peutJouer == true)
	{
		if(document.getElementById("attaqueChoserDiv").style.display == "none")
		{
			document.getElementById("attaqueChoserDiv").style.display = "inline-block";
			document.getElementById("attenteText").style.display = "none";
		}
	}
	else
	{
		document.getElementById("attenteText").style.display = "inline-block";
	}
}