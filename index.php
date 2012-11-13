
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<META http-equiv="Content-Type" content="text/html; charset=utf-8">
		<script src="variablesGlobales.js" type="text/javascript"></script>
    <script type="text/javascript", src="Personnage.class.js"></script>
    <script type="text/javascript" src="barreDeVie.class.js"></script>
		<script type="text/javascript" src="Socket.js"></script>
    <script type="text/javascript" src="combat.js"></script>
		<script type="text/javascript" src="affichagePersonnages.js"></script>
	<script type="text/javascript">
  	function movWidthCalcul() {
  		movEl = document.getElementById("mov");
  		movEl.style.width = (nbPersonnages * (largeurDivPersonnages + 10) + 10) + "px";
  	}

  	function leftShiftCalcul() {
  		leftShiftForCharactersContainer = document.getElementById("charactersContainer").offsetWidth - movEl.offsetWidth;
  	}

  	function sliderChange() {
  		var range = document.getElementById("myRange");
  		movEl.style.left = (leftShiftForCharactersContainer - range.value) + "px";
  	}

	
  	function addRangeSlider() {
  		var rangeDiv = document.getElementById("rangeDiv");

  		var range = document.createElement("input");
  		range.setAttribute("type", "range");
  		range.setAttribute("id", "myRange");
  		range.setAttribute("value", leftShiftForCharactersContainer + "");
  		range.setAttribute("min", leftShiftForCharactersContainer + "");
  		range.setAttribute("max", "0");
  		rangeDiv.appendChild(range);
  		range.addEventListener('change', function () { sliderChange() }, false);
  	}


  	function goToFight(characterID) {
  		try { socket.send("persoConfirme:" + characterID); } catch (ex) { }
  	}

  	

  	function initLoaderVar() {
  		loader = document.getElementById("loader");
  	}

  	function turnLoader() {
  		loader.style.WebkitTransform = 'rotate(' + degres + 'deg)';
  		degres = (degres + 2) % 360;
  	}

  	function turnOfLoader() {
  		if (opacity >= 0.0) {
  			loader.style.opacity = opacity;
  			opacity = opacity - 0.1;
  		}
  		else {
  			clearInterval(loaderInterval);
  			clearInterval(rotationInterval);
  			var rightCharacter = document.getElementById("rightCharacter");
  			rightCharaterDiv.removeChild(loader);
  			ennemyChosenCharacter();
  			loaderHidden = true;
  		}
  	}

  	function muteVolume() {
  		audioElm = document.getElementById('backgroundAudio');
  		if (audioElm.muted) {
  			document.getElementById("volume").style.backgroundImage = "url('mute-off.png')";
  		}
  		else {
  			document.getElementById("volume").style.backgroundImage = "url('mute.png')";
  		}

  		audioElm.muted = !audioElm.muted;
  	}
	</script>
  <script type="text/javascript" src="canvas.js"></script>
        <script type="text/javascript" src="getCharacters.js"></script>
		
        <link rel="stylesheet" type="text/css" href="Style.css" />
	</head>
	<body onload="init()" id="body">
		<div class="charactersChoserBackground">
			<div style="height: 400px" id="globalDiv">
				<div id="leftCharacter" class="characterSide"></div>
                <div id="charactersContainer">
                    <div id="mov"></div>
					<script>
                            load_chars();
                    </script>
                </div>
				<div id="rightCharacter" class="characterSide"></div>
				<script>
	 					var rightCharaterDiv = document.getElementById("rightCharacter");
	 					var loaderDiv = document.createElement("div");
	 					loaderDiv.setAttribute("id", "loader");
	 					rightCharaterDiv.appendChild(loaderDiv);
	 					initLoaderVar();
	 					rotationInterval = setInterval(turnLoader, 1);
					</script>
			</div>
			<div id="rangeContainer">
				<div id="rangeDiv"></div>
			</div>
		</div>
		<video width="320" height="240" controls="controls" src="phillipe-salop.webm">Ici la description alternative</video>
		<audio id="backgroundAudio" controls="controls" loop="loop" autoplay="autoplay" hidden="hidden">
		  <source src="horse.ogg" type="audio/ogg" />
		  <source src="Pokemon-Theme.mp3" type="audio/mpeg" />
		  Your browser does not support the audio element.
		</audio>
		<div id="footer">
			<script>
  				var divVolume = document.createElement("div");
				divVolume.setAttribute("id", "volume");
				divVolume.addEventListener('click', function () { muteVolume() }, false);
				document.getElementById("footer").appendChild(divVolume);
			</script>
		</div>
	</body>
</html>