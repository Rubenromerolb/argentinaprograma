const readlineSync= require("readline-sync");

var min = 0;
var max = 3;

//Math.floor((Math.random()*max-min)+min)

function obtenerJugadaUsuario(eleccion)
{
    switch(eleccion)
    {
        case "0":
            {
                return "piedra";
                break;
            }
        case "1":
            {
                return "papel";
                break;
            }
        case "2":
            {
                return "tijeras";
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
    if (usuario==="piedra")
    {
        if (computadora==="piedra")
        {return "Empate"}
        else if(computadora==="tijeras")
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }

    if (usuario==="papel")
    {
        if (computadora==="papel")
        {return "Empate"}
        else if(computadora==="piedra")
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }

    if (usuario==="tijeras")
    {
        if (computadora==="tijeras")
        {return "Empate"}
        else if(computadora==="papel")
        {return "Gana el usuario"}
        else{return "Gana la computadora"}
    }
}


console.log("read...")
let jugadaComputadora = obtenerJugadaComputadora()
console.log("read...2",jugadaComputadora)
let numeroUsuario= readlineSync.question("Piedra(0), Papel(1) o Tijeras(2)...\n")
console.log("read...3",numeroUsuario)
let jugadaUsuario= obtenerJugadaUsuario(numeroUsuario)
console.log("read...4",jugadaUsuario)

let resultado= determinarGanador(jugadaUsuario,jugadaComputadora)

console.log("La computadora eligio:",jugadaComputadora)
console.log("El usuario eligio:",jugadaUsuario)
console.log("El resultado fue:",resultado)


