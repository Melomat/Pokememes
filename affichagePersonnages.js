
function chosenCharacter(character) {
  		var div = character.cloneNode(true);
  		div.setAttribute("id", "chosenCharacter");
  		div.removeAttribute("class");

  		var leftCharacterDiv = document.getElementById("leftCharacter");
  		if (leftCharacterDiv.childNodes.length) {
  			leftCharacterDiv.removeChild(leftCharacterDiv.firstChild);
  		}
  		else {
  			var button = document.createElement("input");
  			button.setAttribute("type", "button");
  			button.setAttribute("value", "FIGHT !!!!");
  			button.addEventListener('click', function () { goToFight(character.dataset.character) }, false);
  			document.getElementById("rangeContainer").appendChild(button);
  		}

  		leftCharacterDiv.appendChild(div);
  		//          document.getElementById("leftCharacter").innerHTML = character.innerHTML;

  		persoChoisi(character.dataset.character);
  	}

	function ennemyChosenCharacter() {
  		var nodes = document.getElementById("mov").childNodes;
  		for (var i = 0; i < nodes.length; i++) {
  			var character = nodes[i];
  			if (character.dataset.character == idEnemyCharacter) {
  				var div = character.cloneNode(true);
  				div.setAttribute("id", "chosenCharacter");
  				div.removeAttribute("class");
  				var rightCharacter = document.getElementById("rightCharacter");

  				if (rightCharacter.childNodes.length) {
  					rightCharacter.removeChild(rightCharacter.firstChild);
  				}

  				rightCharacter.appendChild(div);
  			}
  		}
  	}