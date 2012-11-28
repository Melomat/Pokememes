function Perso (id, image, nom)
{
	this.id = id;
	this.image = image;
	this.nom = nom;
	this.vie = 1000;
	this.barreDeVie;
	this.attaques = [];
	this.peutJouer = false;
}

Perso.prototype.perdreVie = function(viePerdue)
{
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

Perso.prototype.attaqueRecueWithID = function (attaqueID)
{
	
	var attaque;
	for (i = 0 ; i < persoEnnemi.attaques.length ; i++)
	{
		console.log(attaqueID);
		if(persoEnnemi.attaques[i].id == parseInt(attaqueID))
		{
			console.log("trouve !!!!");
			attaque = persoEnnemi.attaques[i];
		}
	}
	this.perdreVie(parseInt(attaque.degats));
	attaque.afficherAttaque();
}


Perso.prototype.getIndexOfAttaque = function (attaqueID)
{
	
	for (i = 0 ; i < persoEnnemi.attaques.length ; i++)
	{
		console.log(attaqueID);
		if(persoEnnemi.attaques[i].id == attaqueID)
		{
			return i;
		}
	}
}

Perso.prototype.afficherAttaque = function(attaqueID)
{
	for (i = 0 ; i < this.attaques.length ; i++)
	{
		if(this.attaques[i].id == attaqueID)
		{
			this.attaques[i].afficherAttaque();
		}
	}
}

Perso.prototype.persoEnnemiPerdVieWithAttaque = function(attaqueID)
{
	for (i = 0 ; i < this.attaques.length ; i++)
	{
		if(this.attaques[i].id == attaqueID)
		{
			persoEnnemi.perdreVie(this.attaques[i].degats);
		}
	}
}