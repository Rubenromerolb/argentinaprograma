const readlineSync= require("readline-sync");

let numeroUsuario= readlineSync.question("Ingrese un numero: ")

if (numeroUsuario==0)
{
    console.log ("El numero es cero")
}
else if(numeroUsuario>0)
{
    console.log ("El numero es positivo")
}
else if (numeroUsuario<0)
{
    console.log ("El numero es negativo")
}
else 
{
    console.log ("No es un numero")
}