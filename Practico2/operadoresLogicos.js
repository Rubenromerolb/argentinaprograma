const readlineSync= require("readline-sync")

let numeroUsuario= readlineSync.question("Ingrese un numero Entero: ")

if (numeroUsuario>0 && numeroUsuario%2===0)
{
    console.log ("El numero es positivo y par")
}
else if (numeroUsuario>0 && numeroUsuario%2!==0)
{
    console.log ("El numero es positivo y impar")
}
else if(numeroUsuario<0){
    console.log ("El numero es Negativo")
}
else if(numeroUsuario==0){
    console.log ("El numero es 0")
}
