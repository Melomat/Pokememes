//lance le dessin de lignes pour des coordonnées y différentes
function startDrawLine(y)
{
    canvas = document.getElementById("canvas");

     if(y < canvas.offsetHeight)
     {
        drawline(0, y);
        setTimeout("startDrawLine("+ (y+100) + ")", 100);
     }   
}


//Dessine un carré qui a pour origine x et y
function drawline(x, y)
{
    canvas = document.getElementById("canvas");
    var canvas_context = canvas.getContext("2d");
    canvas_context.fillStyle = "#000";
    canvas_context.fillRect(x, y, 50, 100);
    if(x < canvas.offsetWidth)
    {
        x+=49;
        setTimeout("drawline("+x+","+y+")", 20);
    }
    else 
    {
        //y+100 car on veut savoir si c'est la derneire ligne qui a disparu
        if(y+100 >= canvas.offsetHeight)
        {
            removeCharacterChoserDivs();
            addCombatDIvs();
        }
    }  
}

//permet le resimenssionnement du canvas (règle les bugs de height et width)
function resizeCanvas()
{
    var canvas = document.getElementById("canvas");
    canvas.height= window.innerHeight;
    canvas.width= window.innerWidth;
}


//lance le "nettoyage" du canvas pour des coordonnées y différentes
function startClearLine(y)
{
    canvas = document.getElementById("canvas");

     if(y < canvas.offsetHeight)
     {
        clearline(0, y);
        setTimeout("startClearLine("+ (y+100) + ")", 100);
     }   
}


//"néttoie le canvas pour un carré qui a pour origine x et y
function clearline(x, y)
{
    canvas = document.getElementById("canvas");
    var canvas_context = canvas.getContext("2d");
    canvas_context.fillStyle = "#000";
    canvas_context.clearRect(x, y, 50, 100);
    if(x < canvas.offsetWidth)
    {
        x+=49;
        setTimeout("clearline("+x+","+y+")", 20);
    }   
}