







let puntero = document.getElementById("puntero");
let velocidad = 40;
let movtop = 0;
let movleft = 0;
let pantallaJuego = document.getElementById("pantalla-juego");
let btnB = document.getElementById("boton-dos");
let btnA = document.getElementById("boton-uno");
let texto = document.getElementById("texto");
let senal = document.getElementById("senal");
let audio = document.getElementById("musica");
let btnEncendido = document.getElementById("boton-encendido");
let btnApagado = document.getElementById("boton-apagado");

// document.addEventListener("keydown", function (e) {
//  console.log(e.keycode)
//      console.log(e)
//      if (e.keyCode == "38") {
//         moverArriba();
//     }
//  })
//  function moverArriba() {
//      movtop -= velocidad;
//      puntero.style.marginTop = movtop + "px";
//  };
//  function moverAbajo() {
//      movtop += velocidad;
//      puntero.style.marginTop = movtop + "px";
//  };

btnEncendido.onclick = function () {
    audio.play();
    pantallaJuego.src = "../img/img1.png";
    texto.textContent = "";

}

btnApagado.onclick = function () {
    audio.load();
    pantallaJuego.src = "../img/img0.png";
    texto.textContent = "OFF";
}


btnB.onclick = function () {

    console.log(senal)
    console.log(window.getComputedStyle(senal).getPropertyValue("display"))
    if (senal.style.display == "none") {

        pantallaJuego.src = "https://art.pixilart.com/sr2d5bde751f5aws3.gif";
        texto.textContent = "1 PLAYER (A) 2 PLAYER (B)";
        senal.style.display = "block";

    } else {
        pantallaJuego.src = "../img/logo-gameboy.png";
    }
};
btnA.onclick = function () {

    pantallaJuego.src = "../img/descarga.png";
    texto.textContent = "1 PLAYER (A) 2 PLAYER (B)";
};





