function Attaque (nom, degats, type, sources)
{
	this.nom = nom;
	this.degats = degats;
	this.sources = [];
	this.attaqueDiv = document.getElementById("attaqueDiv");
}

Attaque.prototype.afficherAttaque = function()
{
	document.getElementById("attaqueDiv").style.left = "200px";
}