var socket;

function init() {
	var host = "ws://localhost:12345/websocket/server.php";
	try {
		//Websocket creation
		socket = new WebSocket(host);
		socket.onopen = function (msg) {};
		socket.onmessage =
		//When client receive a message
		function (msg) {
			var msgData = msg.data.split(":");
			if (msgData[0] == "persoChoisi") {
				ennemyCharacter(msgData[1]);
			}
			else if (msgData[0] == "commencerCombat") {
				commencerCombat()
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

function persoChoisi(persoId)
{
	try{ socket.send("persoChoisi:" + persoId); } catch(ex){ }
}


function commencerCombat()
{
	canvas = document.createElement("canvas");
	canvas.setAttribute("id", "canvas");
	document.getElementById("body").appendChild(canvas);
	resizeCanvas();
	startDrawLine(0);

	
	

	setTimeout("startClearLine(0)", 2000);
}

//permet de retirer les éléments de choix de personnage
function removeCharacterChoserDivs()
{
	var body = document.getElementById("body");
	var nodes = body.childNodes;
	for(i = nodes.length-1 ; i > 0 ; i--) 
	{
		var child = nodes[i];
		if(child.nodeName != "CANVAS")
		{
			body.removeChild(body.childNodes[i]);
		}
	}
	
}

//fonction d'attaque
function attack(){
	
	try{ 
		socket.send("atk;130");
		
	} catch(ex){ 
		
		
	}
}

function quit(){

  socket.close();
  socket=null;
}
