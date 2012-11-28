/**
 * Objet Profile qui contient le profil du joueur
 * ProfileObject fonctionne comme un constructeur, on construit l'objet avec les valeurs.
 * Ex : var profile = new ProfileObject("", "", "");
 * EX : var profile = new ProfileObject("monPseudo", "monMail", "monpays");
 **/
function ProfileObject(paramPseudo, paramMail, paramCountry, photo)
  	{

  		this.pseudo = paramPseudo;
  		this.email = paramMail;
  		this.country = paramCountry;
  		this.victory = 0;
  		this.defeat = 0;
      this.photo = photo;

		//Nom des clés dans le localStorage
  		this.KeyForPseudo = "keyPseudo";
  		this.KeyForEmail = "keyEmail";
  		this.KeyForCountry = "keyCountry";
  		this.KeyForVictory = "keyVictory";
  		this.KeyForDefeat = "keyDefeat";
      this.KeyForPhoto = "keyPhoto";

		// Affiche les détails du profil dans une popup JS
  		this.popupDetails = function ()
  		{
  			alert("Profile: " + this.pseudo + ", " + this.email + ", " + this.country + ". Victory : " + this.victory + ", defeat : " + this.defeat);
  		}

		// Ajoute une victoire au compteur des victoires
  		this.addVictory = function ()
  		{
  			this.victory += 1;
  		}

		// Ajoute une défaite au compteur des défaites
  		this.addDefeat = function ()
  		{
  			this.defeat += 1;
  		}

		// Enregistre le profil dans le navigateurs (afin de le retrouver plus tard)
  		this.saveToLocal = function ()
  		{
  			localStorage.setItem(this.KeyForPseudo, this.pseudo);
  			localStorage.setItem(this.KeyForEmail, this.email);
  			localStorage.setItem(this.KeyForCountry, this.country);
  			localStorage.setItem(this.KeyForVictory, this.victory);
  			localStorage.setItem(this.KeyForDefeat, this.defeat);
        localStorage.setItem(this.KeyForPhoto, this.photo);
  		}

		// Charge le profil depuis le navigateur
		// Ex d'utilisation :
		// var profile = new ProfileObject("", "", "");
  		// profile.loadFromLocal();
		this.loadFromLocal = function ()
		{
			this.pseudo = localStorage.getItem(this.KeyForPseudo);
			this.email = localStorage.getItem(this.KeyForEmail);
			this.country = localStorage.getItem(this.KeyForCountry);
			this.victory = localStorage.getItem(this.KeyForVictory);
			this.defeat = localStorage.getItem(this.KeyForDefeat);
      this.photo = localStorage.getItem(this.KeyForPhoto)
		}

  	}