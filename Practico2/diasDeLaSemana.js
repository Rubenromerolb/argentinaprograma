const readlineSync= require("readline-sync");

let  numeroUsuario= readlineSync.question("Ingrese un numero entero del 1 al 7: ")

switch(numeroUsuario){

        case "1":
        {
            console.log("Hoy es Lunes")
            break;
        }
        case "2":
        {
            console.log("Hoy es Martes")
            break;
        }
        case "3":
        {
            console.log("Hoy es Miércoles")
            break;
        }
        case "4":
        {
            console.log("Hoy es Jueves")
            break;
        }
        case "5":
        {
            console.log("Hoy es Viernes")
            break;
        }
        case "6":
        {
            console.log("Hoy es Sabado")
            break;
        }
        case "7":
        {
            console.log("Hoy es Domingo")
            break;
        }
        default:
        {
            console.log("Número inválido")
            break;
        }
}

