
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

let indice = cita.indexOf(substring)
let citaRevisada = cita.substring(0,indice+substring.length);
console.log("El tamaño de la cita es:",cita.length);
console.log ("El indice del substring es:",indice);

console.log("Verificando citaRevisada: ",citaRevisada)

/*
Me di cuenta que no cumplia las consignas
let indice = cita.indexOf(substring)
let recorte = "Tres tristes tigres comen trigo"
let citaRevisada = cita.substring(0,recorte.length);
console.log("El tamaño de la cita es:",cita.length);
console.log ("El indice del substring es:",indice);

console.log("Verificando citaRevisada: ",citaRevisada)
//console.log("Verificando citaRevisada: ",cita.substring(0,"Tres tristes tigres comen trigo".length))
*/