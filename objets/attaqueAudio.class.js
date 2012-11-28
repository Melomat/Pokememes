function attaqueAudio(id, nom, degats, sources)
{
	Attaque.call(this, id, nom, degats);
	this.sources = sources;
	this.image;
	this.audio;
}

attaqueAudio.prototype = new Attaque();


attaqueAudio.prototype.afficherAttaque = function()
{
	var _this = this;
	attaqueDiv = document.getElementById("attaqueDiv");
	while (attaqueDiv.hasChildNodes()) 
	{
		attaqueDiv.removeChild(attaqueDiv.lastChild);
	}
	attaqueDiv.style.left = "200px";
	
	
	
	this.image = document.createElement("img");
	this.image.setAttribute("id", "imageAttaque");
	this.image.setAttribute("src", this.sources[0]);
	this.audio = document.createElement("audio")
	this.audio.setAttribute("id", "audio");
	this.audio.setAttribute("src", this.sources[1]);
	this.audio.setAttribute("hidden", "hidden");
	setTimeout(function()
	{
		_this.audio.play();
	}, 1000);
	document.getElementById("attaqueDiv").appendChild(this.image);
	document.getElementById("attaqueDiv").appendChild(this.audio);
	document.getElementById("attaqueDiv").style.left = "200px";
	this.audio.addEventListener("ended", function(){_this.attaqueArrete()}, false);

}
