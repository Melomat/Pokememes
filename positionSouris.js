function position(ev)
	    {  
		    var Xfen, Xdoc, Yfen, Ydoc, el;

		    Xfen = ev.clientX;
		    Xdoc = Xfen + document.body.scrollLeft;

		    Yfen = ev.clientY;
		    Ydoc = Yfen + document.body.scrollTop;

		    el = document.getElementById("rangeOutput");
		    el.innerHTML = " Xdoc= "+Xdoc+" px ; Ydoc= "+Ydoc+" px<br>";
		    el.innerHTML+= " Xfen= "+Xfen+" px ; Yfen= "+Yfen+" px";
	    }