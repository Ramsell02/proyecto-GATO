const dado = document.getElementById("dados");
const resultadoDado = document.getElementById("resultadoDado");
const casillas = document.getElementsByClassName("cuadro");
const estado = document.getElementById("estado");
const reiniciar = document.getElementById("reiniciar");
const botonModo = document.getElementById("botonModo");

let empate = true;
let contador = 0;

function lanzarDado() {
    // numero random entre 1 y 20 
    // el +1 es para que me de el numero 20 sin el solo llegaria a 19
    // el floor para dar numeros cerrados
    const numero = Math.floor(Math.random() * 20) + 1;


    dado.style.transition = "transform 1s ease";// es para la animacion del dado 
    dado.style.transform = `rotateX(${360 + Math.random() * 360}deg) rotateY(${360 + Math.random() * 360}deg)`;

    setTimeout(() => {
        dado.textContent = numero;
        resultadoDado.textContent = "resultado:" + numero;
        dado.style.transform = "rotateX(0deg) rotateY(0deg)"; // reinicia la posicion

    }, 1000);

    return numero;

}

let jugador = true
for (let index = 0; index < casillas.length; index++) {

    casillas[index].addEventListener("click", function () {
        const numero = lanzarDado()


        if (numero > 10 && casillas[index].textContent === "") {

            if (jugador) {
                setTimeout(function () {
                    casillas[index].textContent = "X"
                    ganador()
                }, 2000)
                jugador = false
                estado.textContent = "turno de O"
                setTimeout(() => {
                    estado.textContent = " "
                    setTimeout(() => {
                        turnoSkynet()
                    }, 2000)

                    jugador = true
                }, 1000);

            }




        } else {
            setTimeout(function () {
                estado.textContent = "Turno perdido"
                setTimeout(() => {
                    estado.textContent = " "
                }, 2000);
            }, 3000)

            if (jugador) {
                jugador = false
                setTimeout(() => {
                    estado.textContent = "Turno perdido X"
                    setTimeout(() => {
                        turnoSkynet()
                    }, 2000)
                    jugador = true
                }, 2000);

            }
        }

    })

}


function turnoSkynet() {
    let verificador = true

    while (verificador === true) {

        const numero = lanzarDado()
        const random = Math.floor(Math.random() * 9) + 1

        if (casillas[random].textContent === "" && numero > 10) {
            setTimeout(() => {
                casillas[random].textContent = "O"
                verificador = false
            }, 2000)

        } else {
            setTimeout(function () {
                estado.textContent = "Turno perdido de O"
                setTimeout(() => {
                    estado.textContent = " "
                }, 2000);
            }, 3000)

        }
        verificador = false
    }
}

function ganador() {
    let posicionesGanadoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]

    for (let index = 0; index < posicionesGanadoras.length; index++) {
        const element = posicionesGanadoras[index];
        if (casillas[element[0]].textContent === "X" && casillas[element[1]].textContent === "X" && casillas[element[2]].textContent === "X") {
            setTimeout(function () {
                alert("gano X")
                history.go(0)
            }, 500)
            empate = false


        }
        if (casillas[element[0]].textContent === "O" && casillas[element[1]].textContent === "O" && casillas[element[2]].textContent === "O") {
            setTimeout(function () {
                alert("gano O")
                history.go(0)
            }, 500)
            empate = false


        }


    }
    contador++

    if (contador == 9 && empate == true) {
        setTimeout(() => {
            alert("Empate")
            history.go(0)
        }, 1000);
    }


}



