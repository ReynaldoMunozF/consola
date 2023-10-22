







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
let btnSubirVolumen = document.getElementById("boton-subir-volumen");
let btnBajarVolumen = document.getElementById("boton-bajar-volumen");
let Led = document.getElementById("led");


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

btnEncendido.onclick = function () {  //enciende la consola
    audio.play();
    pantallaJuego.src = "../img/img1.png";
    texto.textContent = "";
    Led.style.backgroundColor = "red";

}

btnApagado.onclick = function () { //apaga la consola
    audio.load();
    pantallaJuego.src = "../img/img0.png";
    texto.textContent = "OFF";
    Led.style.backgroundColor = "black";
}
btnSubirVolumen.onclick = function () { // sube el volumen
    audio.volume += .2;
}
btnBajarVolumen.onclick = function () { // baja el volumen
    audio.volume -= .2;
  
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





