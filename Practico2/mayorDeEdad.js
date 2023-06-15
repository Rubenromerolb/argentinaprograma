const readlineSync = require('readline-sync');

let  edad = readlineSync.question("Cuantos años tienes?\n");

    if (edad >= 18)
    {
        console.log ("Eres mayor de edad")
    }
    else if (edad>=0)
    {
        console.log("Eres menor de edad")
    }

    //Nose si tenia que hacerlo en un bucle por si escribe un dato incorrecto