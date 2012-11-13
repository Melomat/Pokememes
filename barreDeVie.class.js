function barreDeVie(id)
{
	this.barre = document.getElementById(id);
	this.barre.className = "barreDeVie"

}



barreDeVie.prototype.Dessiner = function(vie)
{
	this.barre.style.width=Math.round( vie*300/1000 );+"px";
	if(vie > 800)
	{
		this.barre.style.backgroundColor = "green";
	}
	else if(vie >600)
	{
		this.barre.style.backgroundColor = "yellow";
	}
	else if (vie > 400)
	{
		this.barre.style.backgroundColor = "orange";
	}
	else
	{
		this.barre.style.backgroundColor = "red";
	}
}

