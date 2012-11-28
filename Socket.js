var socket;

function init() {


	//vérifie si un pseudo a déjà été rentré, si non cela veut dire que c'est une premiere connexion
	if (localStorage.getItem("keyPseudo") === null) 
	{
		var formulaire = new Formulaire();
		formulaire.showFormulaire();
	}
	else
	{	
		alert("ok");
	}


	var host = "ws://localhost:12345/websocket/server.php";
	try {
		//creation du WebSocket
		socket = new WebSocket(host);
		socket.onopen = function (msg) {};
		socket.onmessage =
		//On reçoit un message
		function (msg) {
			var msgData = msg.data.split(":");
			typeMessage = msgData[0];
			//message de selection des personnages
			if (typeMessage == "persoChoisi") 
			{
				ennemyCharacter(msgData[1]);
			}
			//commencerCombat:<numJoueur>:idPerso
			else if (typeMessage == "commencerCombat") 
			{

				commencerCombat(msgData[1]);
				idEnemy = msgData[2];
				for(i = 0 ; i < listePersos.length ; i++)
				{
					if (listePersos[i].id == idEnemy)
					{
						persoEnnemi = listePersos[i];
						console.log(persoEnnemi.nom);
					}
				}
			}
			//message d'attaque
			else if (typeMessage == "Attaque")
			{
				recevoirAttaque(msgData[1]);
				console.log("attaque !!");
			}
			else if (typeMessage == "abandon")
			{
				alert("votre adversaire a abandonné");
				window.history.replaceState(null, null, "index.html");
				window.location.reload();
			}
		};
		socket.onclose = function (msg) { };
	}
	catch (ex){ }
}


//fait en sorte d'afficher le perso ennemi
function ennemyCharacter(idPerso)
{
	idEnemyCharacter = idPerso;
	if (loaderHidden)
	{
		ennemyChosenCharacter();
	}
	else
	{
		loaderInterval = setInterval(turnOfLoader, 100);
	}
	
}

//sert à envoyer un message depuis la zone de texte
function send(message){
  var txt,msg;

  msg = txt.value;
  if(!msg){ alert("Message can not be empty"); return; }
  txt.value="";

  try{ socket.send(msg);  } catch(ex){ }
}


//envoi un message qui dit qu'on a choisi le perso
function persoChoisi(persoId)
{
	try{ socket.send("persoChoisi:" + persoId); } catch(ex){ }
	for(i = 0 ; i < listePersos.length ; i++)
	{
		if (listePersos[i].id == persoId)
		{
			persoSelf = listePersos[i];
		}
	}
}

//on peut commencer le combat
function commencerCombat(numeroJoueur)
{
	numJoueur = numeroJoueur;
	if (parseInt(numJoueur) == 1)
	{
		persoSelf.peutJouer = true;
	}
	else
	{
		persoSelf.peutJouer = false;
	}
	canvas = document.createElement("canvas");
	canvas.setAttribute("id", "canvas");
	document.getElementById("body").appendChild(canvas);
	resizeCanvas();
	startDrawLine(0);
	setTimeout("startClearLine(0)", 2000);
}


//fonction d'attaque
function attack(){
	
	try{ 
		socket.send("atk;130");
		
	} catch(ex){ 
		
		
	}
}

//fermet le socket
function quit(){

  socket.close();
  socket=null;
}
