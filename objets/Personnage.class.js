function Perso (id, image, nom)
{
	this.id = id;
	this.image = image;
	this.nom = nom;
	this.vie = 1000;
	this.barreDeVie;
	this.attaques = [];
}

Perso.prototype.perdreVie = function(viePerdue)
{
	alert("allo");
	this.vie -= viePerdue;
	this.barreDeVie.Dessiner(this.vie);
}

Perso.prototype.addAttaque = function(attaqueID)
{
	this.attaques.push(attaque);
}

Perso.prototype.attaque = function(attaqueID)
{
	var attaqueRecue = listeAttaques[attaqueID];
	attaqueRecue.afficherAttaque();
}