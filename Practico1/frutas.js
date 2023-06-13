let frutas=[];

frutas=["manzana"];//Creo que no cuenta como agregar, pero para la practica esta sera mi primera fruta

frutas.push("pera");

frutas.unshift("sandia");

frutas.push("naranja","mandarina");

ultima= frutas[frutas.length-1]
primera= frutas[frutas.indexOf("manzana")]
//Si el trabajo era la primera fruta del array y no la primera en agregar entonces seria : primera= frutas[0]
console.log(frutas);
console.log("La primera fruta agregada fue:",primera)
console.log("la ultima fruta agregada fue:",ultima)
/*
let frutas=[];
console.log(frutas);

frutas=["manzana"];
console.log(frutas);

frutas.push("pera");

console.log(frutas);

frutas.unshift("sandia");

console.log(frutas);


//let frutasX= frutas.concat(["Naranja", "Mandarina"]);
console.log(frutas.concat(["Naranja", "Mandarina"]));

*/