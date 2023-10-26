

let pantallaJuego = document.getElementById("pantalla-juego");
let btnB = document.getElementById("boton-dos");
let btnA = document.getElementById("boton-uno");
let texto = document.getElementById("texto")
let consola = document.getElementById("consola");
let audio1 = document.getElementById("musica");
let audio2 = document.getElementById("musica-juego");
let sonidoBtn1 = document.getElementById("tono-boton1");
let btnEncendido = document.getElementById("boton-encendido");
let btnApagado = document.getElementById("boton-apagado");
let btnSubirVolumen = document.getElementById("boton-subir-volumen");
let btnBajarVolumen = document.getElementById("boton-bajar-volumen");
let btnStart = document.getElementById("boton-start");
let Led = document.getElementById("led");
let texto2 = document.getElementById("texto2");
let btnUnoCambioColorUno = document.getElementById("color-uno");
let btnUnoCambioColorDos = document.getElementById("color-dos");
let btnUnoCambioColorTres = document.getElementById("color-tres");
let btnUnoCambioColorCuatro = document.getElementById("color-cuatro");
let btnReset = document.getElementById("boton-reset");
let contador = 0;
let retroceder = 0;
let encendida = 0;



btnEncendido.onclick = function () {  //enciende la consola
    audio1.play();
    //pantallaJuego.src = "../img/img1.png";
    pantallaJuego.style.display = "block";
    Led.style.backgroundColor = "red";
    encendida = 1
}

btnApagado.onclick = function () { //apaga la consola
    audio2.load();
    pantallaJuego.src = "img/img0.png";
    texto.textContent = "";
    Led.style.backgroundColor = "black";
    window.location.reload();
}
btnSubirVolumen.onclick = function () { // sube el volumen

    audio2.volume += .1;
}
btnBajarVolumen.onclick = function () { // baja el volumen
    audio2.volume -= .1;
}

btnStart.onclick = function () {  //arranca el juego
    if( encendida ==1){
    console.log("estoy aqui")
    audio2.play();
    pantallaJuego.src = "img/img1.png";
    texto.textContent = ""
    texto2.style.display = "block"
    Led.style.backgroundColor = "red";
    }

}

btnA.onclick = function () {
    sonidoBtn1.play();
    texto2.style.display = "none"
    if (contador == 0) {
        pantallaJuego.src = "img/img3.png";
        contador ++;
    } else if ( contador == 1) {
        pantallaJuego.src = "img/img2.png";
        contador ++
    } else if (contador == 2) {
        pantallaJuego.src = "img/img6.png";
        contador = 0

    }

};
btnB.onclick = function () {
    sonidoBtn1.play();
    // pantallaJuego.src = "img/img3.png";
    if (contador == 1) {
        pantallaJuego.src = "img/img1.png";
        contador --;
    } else if (contador == 2) {
        pantallaJuego.src = "img/img3.png";
        contador --
    } else {
        pantallaJuego.src = "img/img2.png";
        contador = 0

    }


}
btnUnoCambioColorUno.onclick = function () {
    
    consola.style.background = "blue";


}
btnUnoCambioColorDos.onclick = function () {
    
    consola.style.background = "red";


}
btnUnoCambioColorTres.onclick = function () {
    
    consola.style.background = "green";


}
btnUnoCambioColorCuatro.onclick = function () {
    
    consola.style.background = "rgb(253, 0, 241)";


}
btnReset.onclick = function () {
    pantallaJuego.src = "img/img1.png";
    texto2.style.display = "block"
}





