const readlineSync= require("readline-sync");
let eleccion = ["piedra","papel","tijeras"]

var min = 0;
var max = 3;

//Math.floor((Math.random()*max-min)+min)

function obtenerJugadaUsuario(jugada)
{
    switch(jugada)
    {
        case "0":
            {
                return eleccion[0];
                break;
            }
        case "1":
            {
                return eleccion[1];
                break;
            }
        case "2":
            {
                return eleccion[2];
                break;
            }
    }
}

function obtenerJugadaComputadora()
{
   return obtenerJugadaUsuario(Math.floor((Math.random()*max-min)+min)+"")
}

function determinarGanador(usuario,computadora)
{
    if (usuario===eleccion[0])
    {
        if (computadora===eleccion[0])
        {return "Empate"}
        else if(computadora===eleccion[2])
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }

    if (usuario===eleccion[1])
    {
        if (computadora===eleccion[1])
        {return "Empate"}
        else if(computadora===eleccion[0])
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }

    if (usuario===eleccion[2])
    {
        if (computadora===eleccion[2])
        {return "Empate"}
        else if(computadora===eleccion[1])
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }
}


let jugadaComputadora = obtenerJugadaComputadora()
let numeroUsuario= readlineSync.question("Piedra(0), Papel(1) o Tijeras(2)...\n")
let jugadaUsuario= obtenerJugadaUsuario(numeroUsuario)

let resultado= determinarGanador(jugadaUsuario,jugadaComputadora)

console.log("La computadora eligio:",jugadaComputadora)
console.log("El usuario eligio:",jugadaUsuario)
console.log("El resultado fue:",resultado)