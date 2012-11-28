function turnLoader() {
  		loader.style.WebkitTransform = 'rotate(' + degres + 'deg)';
  		degres = (degres + 2) % 360;
  	}

  	function turnOfLoader() {
  		if (opacity >= 0.0) {
  			loader.style.opacity = opacity;
        texteLoader.style.opacity = opacity;
  			opacity = opacity - 0.2;
  		}
  		else {
  			clearInterval(loaderInterval);
  			clearInterval(rotationInterval);
  			var rightCharacter = document.getElementById("rightCharacter");
  			while (rightCharacter.hasChildNodes()) {
          rightCharacter.removeChild(rightCharacter.lastChild);
        }
  			ennemyChosenCharacter();
  			loaderHidden = true;
  		}
  	}