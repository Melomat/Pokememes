function Formulaire()
{
	this.profile;
  this.dragin;
  this.draginText;
  this.pseudo;
  this.mail;
  this.pays;
  this.image;
}


//crée l'affichage du formulaire
Formulaire.prototype.showFormulaire = function()
{
	_this = this;
	var body = document.getElementById("body");
	var filterDiv = document.createElement("div");
	filterDiv.setAttribute("id","choserFilter");
	body.appendChild(filterDiv);

	setTimeout(function(){ document.getElementById("choserFilter").style.backgroundColor = "black";}, 100);
 
  var backgroundDiv = document.createElement("div");
  backgroundDiv.setAttribute("id", "formulaireBackground");
  body.appendChild(backgroundDiv);

  var titre = document.createElement("h2");
  var texte = document.createTextNode("C'est la première fois que vous vous connectez..");
  titre.appendChild(texte);
  backgroundDiv.appendChild(titre);

  var sousTitre = document.createElement("p");

  texte = document.createTextNode("Il faut vous créer un profil pour utiliser pokememe. Toutes les infotmations que vous entrerez ne seront sauvegardées qu'en local (webStorage ;) ).");
  sousTitre.appendChild(texte);
  backgroundDiv.appendChild(sousTitre);


  texte  = document.createTextNode("Pseudo : ");
  var pseudo = document.createElement("p");
  pseudo.appendChild(texte);
  backgroundDiv.appendChild(pseudo);

  var input = document.createElement("input");
  input.className = "formulaireintput";
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Pseudo");
  backgroundDiv.appendChild(input);
  this.pseudo = input;

  texte  = document.createTextNode("Mail : ");
  var mail = document.createElement("p");
  mail.appendChild(texte);
  backgroundDiv.appendChild(mail);

  input = document.createElement("input");
  input.className = "formulaireintput";
  input.setAttribute("type", "mail");
  input.setAttribute("placeholder", "xxx@email.com");
  input.setAttribute("pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*");
  backgroundDiv.appendChild(input);
  this.mail = input;

  texte  = document.createTextNode("Pays : ");
  var pays = document.createElement("p");
  pays.appendChild(texte);
  backgroundDiv.appendChild(pays);

  input = document.createElement("input");
  input.className = "formulaireintput";
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Pays");
  backgroundDiv.appendChild(input);
  this.pays = input;

  texte  = document.createTextNode("Photo : ");
  var photo = document.createElement("p");
  photo.appendChild(texte);
  backgroundDiv.appendChild(photo);


  var photoGlobalDiv = document.createElement("div");
  photoGlobalDiv.setAttribute("id", "photoChoserGlobalDiv");
  backgroundDiv.appendChild(photoGlobalDiv);

  var photoDiv = document.createElement("div");
  photoDiv.setAttribute("id", "photoDiv");
  photoGlobalDiv.appendChild(photoDiv);

  var photo = document.createElement("img");
  photo.setAttribute("id", "photo");
  photo.setAttribute("src", "images/no_avatar.jpg");
  photoDiv.appendChild(photo);


  var dragInDiv = document.createElement("div");  
  dragInDiv.setAttribute("id", "dragInDiv");
  photoGlobalDiv.appendChild(dragInDiv);

  this.dragin = dragInDiv;

  _this = this;

  texte  = document.createTextNode("Cliquez-déposez votre photo ici..");
  this.draginText = document.createElement("p");
  this.draginText.appendChild(texte);
  this.dragin.appendChild(this.draginText);

  document.getElementById("dragInDiv").addEventListener('drop', function(e) {
  e.preventDefault();
  _this.dragin.style.backgroundColor = "#E7FFE7";
  _this.fichierChoisi(e.dataTransfer.files);
  
  }, false);

  document.querySelector('#dragInDiv').addEventListener('dragover', function() {
  _this.changeDraginColor("#D0FFD4");
  }, false);

  document.querySelector('#dragInDiv').addEventListener('dragleave', function() {
  _this.changeDraginColor("#FFFFFF");
  }, false);

  texte  = document.createTextNode("..ou séléctionnez un fichier : ");
  var selectionTexte = document.createElement("p");
  selectionTexte.appendChild(texte);
  backgroundDiv.appendChild(selectionTexte);

	var inputChoser = document.createElement("input");
	inputChoser.setAttribute("type", "file");
	backgroundDiv.appendChild(inputChoser);
 	inputChoser.addEventListener('change', function(e) {
  e.preventDefault();
  _this.dragin.style.backgroundColor = "green";
  _this.fichierChoisi(e.target.files);
  this.textContent = "Dropé c'est pesé! "+e.dataTransfer.files[0].name;
  }, false);

  var div = document.createElement("div");
  div.setAttribute("id", "formulaireButtonDiv");
  backgroundDiv.appendChild(div);  

  var button = document.createElement("input");
  button.setAttribute("type", "input");
  button.setAttribute("id", "okButton");
  button.setAttribute("value", "Confirmer");
  button.addEventListener("click", function(){_this.verifierFormulaire()}, false);
  div.appendChild(button);


}

//prend en charge la selection du fichier (par draganddrop ou par fileselector)
Formulaire.prototype.fichierChoisi = function(files) {
    _this = this;

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          _this.image = e.target.result;

          document.getElementById("photo").setAttribute("src", _this.image);

          _this.profile = new ProfileObject("marcus", "toto", "france", e.target.result);
          _this.profile.saveToLocal();

        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
}

//change la couleur de la div qui permet le dragandDrop
Formulaire.prototype.changeDraginColor = function(color)
{
  this.dragin.style.backgroundColor = color;
}


//verifie les données entrées dans le formulaire
Formulaire.prototype.verifierFormulaire = function()
{
  mauvais = false;
  mauvaisGlobal = false;
  mauvais = this.verifierElement(this.pseudo);
  if(mauvais)
  {
    mauvaisGlobal = true;
  }
  mauvais = this.verifierElement(this.mail);
  if(mauvais)
  {
    mauvaisGlobal = true;
  }
    mauvais = this.verifierElement(this.pays);
  if(mauvais)
  {
    mauvaisGlobal = true;
  }

  if(!mauvaisGlobal)
  {
    this.verfierImage();
  }
}

//vérifie un élement donné en paramètre
Formulaire.prototype.verifierElement = function(element)
{
  if(element.value == "Pseudo" || element.value == "xxx@mail.com" || element.value == "Pays" || element.value == "")
  {
    element.style.backgroundColor = "#FFD8D8";
    return true;
  }
  else
  { 
    element.style.backgroundColor = "#FFFFFF";
    return false;
  }
}

//vérifie si une image a bien été attribuée
Formulaire.prototype.verfierImage = function()
{
  if (this.image == null)
  {
    texte  = document.createTextNode("Vous devez définir une photo de profil..(il faut bien utiliser les APIs !)");
    var attentionTexte = document.createElement("p");
    attentionTexte.style.marginTop = "20px";
    attentionTexte.style.color = "red";
    attentionTexte.appendChild(texte);
    document.getElementById("formulaireBackground").appendChild(attentionTexte);
  }
  else
  {
    this.profile = new ProfileObject(this.pseudo, this.mail, this.pays, this.image);
    this.profile.saveToLocal();
    document.getElementById("body").removeChild(document.getElementById("choserFilter"));
    document.getElementById("body").removeChild(document.getElementById("formulaireBackground"));
  }
}