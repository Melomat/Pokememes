function Perso (id, image, nom)
{
	this.id = id;
	this.image = image;
	this.nom = nom;
	this.vie = 1000;
	this.barreDeVie;
}

Perso.prototype.perdreVie = function(viePerdue)
{
	this.vie -= viePerdue;
	this.barreDeVie.Dessiner(this.vie);
}