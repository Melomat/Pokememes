var socket;

function init() {
	var host = "ws://localhost:12345/websocket/server.php";
	try {
		socket = new WebSocket(host);
		socket.onopen = function (msg) { alert(msg)};
		socket.onmessage =
		//When client receive a message
		function (msg) {

			alert(msg)
			var msgData = msg.data.split(":");
			if (msgData[0] == "persoChoisi") {
				ennemyCharacter(msgData[1]);
			}
			else if (msgData[0] == "commencerCombat") {
				alert(msgData[1]);
			}
		};
		socket.onclose = function (msg) { };
	}
	catch (ex) { }
}

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

///fonction d'attaque
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
