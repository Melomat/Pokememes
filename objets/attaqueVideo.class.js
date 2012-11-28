function attaqueVideo(id, nom, degats, source)
{
	Attaque.call(this, id, nom, degats);
	this.source = source;
	this.video;
}
attaqueVideo.prototype = new Attaque();

attaqueVideo.prototype.afficherAttaque = function()
{
	var _this = this;
	attaqueDiv = document.getElementById("attaqueDiv");
	while (attaqueDiv.hasChildNodes()) 
	{
		attaqueDiv.removeChild(attaqueDiv.lastChild);
	}
	attaque.style.left = "200px";
	this.video = document.createElement("video");
	this.video.setAttribute("id", "video");
	this.video.setAttribute("src",this.source[0]);
	this.video.setAttribute("autoplay", "autoplay");
	document.getElementById("attaqueDiv").appendChild(this.video);
	document.getElementById("attaqueDiv").style.left = "200px";
	this.video.addEventListener("ended", function(){_this.attaqueArrete()}, false);

}

