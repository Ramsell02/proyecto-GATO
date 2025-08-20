const dado=document.getElementById("dados");
const resultadoDado=document.getElementById("resultadoDado");
const casillas=document.getElementsByClassName("cuadro")
const estado=document.getElementById("estado")
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

    return numero;
    
}

let jugador = true                                          //esta funcion es para que gire el dado y se marquen las casillas por el resultado
for (let index = 0; index < casillas.length; index++) {
   
    casillas[index].addEventListener("click", function(){
        const numero=lanzarDado()
        console.log(numero);
        
        if (numero>10 && casillas[index].textContent === "") {

            if (jugador) {
                setTimeout(function() {
                    casillas[index].textContent = "X"
                     ganador()
                }, 2000)
                jugador = false
                estado.textContent="turno de O"
            } else{
                setTimeout(function() {
                    casillas[index].textContent = "O"
                     ganador()
                }, 2000)
                jugador = true
                estado.textContent="turno de X"
            }
            
            
        }else{
            setTimeout(function() {
                estado.textContent= "Turno perdido"
            }, 2000)
            if (jugador) {
                jugador = false
            } else{
                jugador = true
            }
            
        }
       
    })  

}



function ganador() {
    let posicionesGanadoras=[ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    for (let index = 0; index < posicionesGanadoras.length; index++) {
        const element = posicionesGanadoras[index];
        if (casillas[element[0]].textContent === "X" && casillas[element[1]].textContent === "X" && casillas[element[2]].textContent === "X" ) {
           setTimeout(function() {
                alert("gano X")
            }, 500)
           
        }
        if (casillas[element[0]].textContent === "O" && casillas[element[1]].textContent === "O" && casillas[element[2]].textContent === "O" ) {
         setTimeout(function() {
                alert("gano O")
            }, 500)
            
        }
        
           
       
       
    }


}


