const dado=document.getElementById("dados");
const resultadoDado=document.getElementById("resultadoDado");
const casillas=document.getElementsByClassName("cuadro")

function lanzarDado() {
    // numero random entre 1 y 20 
    // el +1 es para que me de el numero 20 sin el solo llegaria a 19
    // el floor para dar numeros cerrados
    const numero = Math.floor(Math.random()*20) + 1;


    dado.style.transition="transform 1s ease";// es para la animacion del dado 
    dado.style.transform=`rotateX(${360 + Math.random() * 360}deg) rotateY(${360 + Math.random() * 360}deg)`;

    setTimeout(() =>{
        dado.textContent = numero;
        resultadoDado.textContent="resultado:" + numero;
        dado.style.transform =  "rotateX(0deg) rotateY(0deg)"; // reinicia la posicion
    }, 1000);

    return numero
}

let jugador = true
for (let index = 0; index < casillas.length; index++) {
   
    casillas[index].addEventListener("click", function(){
        const numero=lanzarDado()
        if (numero>10) {
            casillas[index].textContent = "X"
        }else{
            resultadoDado.textContent= "Turno perdido"
        }
    })

    
}



