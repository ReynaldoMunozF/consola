

let puntero= document.getElementById("puntero");
let velocidad= 10;
let movtop = 0;
let movleft = 0;

document.addEventListener("keydown", function(e){
    console.log("paso por aqui")
   // console.log(e.keycode)
    console.log(e)
    if (e.keyCode == "38"){
        moverArriba();
    }
})
function moverArriba(){
    // console.log("me muevo")
    // console.log(movtop)
    // console.log(velocidad)
    // console.log(puntero)

    movtop +=velocidad;
    puntero.style.marginTop = movtop +"px"
}
function moverArriba(){
    // console.log("me muevo")
    // console.log(movtop)
    // console.log(velocidad)
    // console.log(puntero)

    movtop +=velocidad;
    puntero.style.marginTop = movtop +"px"
}