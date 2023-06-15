const readlineSync = require("readline-sync")

let meses = ["enero", "febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let dias = [31,28,31,30,31,30,31,31,30,31,30,31]
let mesUsuario= readlineSync.question("Ingrese un mes(Numeros del 1 al 12)\n")

if (mesUsuario>0 && mesUsuario<=12)
{
    console.log ("La cantidad de dias del mes %s es %s",meses[mesUsuario-1],dias[mesUsuario-1])
}
else
{
    console.log("Ingrese un mes correcto(numero)")
}
