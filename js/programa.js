

let pantallaJuego = document.getElementById("pantalla-juego");
let btnB = document.getElementById("boton-dos");
let btnA = document.getElementById("boton-uno");
let texto = document.getElementById("texto")
let senal = document.getElementById("senal");
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
let adelantar = 0;
let retroceder = 0;

        
        btnEncendido.onclick = function () {  //enciende la consola
            audio1.play();
            //pantallaJuego.src = "../img/img1.png";
            pantallaJuego.style.display = "block";
            Led.style.backgroundColor = "red";
            
        }

        btnApagado.onclick = function () { //apaga la consola
            audio2.load();
            pantallaJuego.src = "../img/img0.png";
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
            console.log("estoy aqui")
            audio2.play();
            pantallaJuego.src = "../img/img1.png";
            texto.textContent = ""
            texto2.style.display = "block"
            Led.style.backgroundColor = "red";
            
        }
        
       
        btnA.onclick = function () {
            sonidoBtn1.play();
            texto2.style.display = "none"
            if (adelantar == 0) {
                pantallaJuego.src = "../img/img3.png";
                //texto.textContent = "1 PLAYER (A) 2 PLAYER (B)";
                adelantar = 1;
                retroceder = 1;
            } else if (adelantar == 1) {
                pantallaJuego.src = "../img/img2.png";
                adelantar = 2
                retroceder = 2
            } else {
                pantallaJuego.src = "../img/img6.png";
                adelantar = 1;
                
            }
            
        };
btnB.onclick = function () {
    sonidoBtn1.play();
    pantallaJuego.src = "../img/img3.png";
    
    
}





