







let puntero= document.getElementById("puntero");
let velocidad= 40;
let movtop = 0;
let movleft = 0;
let pantallaJuego = document.getElementById("pantalla-juego");
let btnB = document.getElementById("boton-dos");
let btnA = document.getElementById("boton-uno");
let texto = document.getElementById("texto");
document.addEventListener("keydown", function(e){
   // console.log(e.keycode)
    console.log(e)
    if (e.keyCode == "38"){
        moverArriba();
    }
})
function moverArriba(){    
    movtop -=velocidad;
    puntero.style.marginTop = movtop +"px"
};
function moverAbajo(){  
    movtop +=velocidad;
    puntero.style.marginTop = movtop +"px"
};

btnB.onclick = function(){
    
    pantallaJuego.src = "https://art.pixilart.com/sr2d5bde751f5aws3.gif";
    texto.textContent = "1 PLAYER (A) 2 PLAYER (B)";
    
};


