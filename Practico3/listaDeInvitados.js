let personas= ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro","Emilia"]
let rechazados = []
let admitidos= []
for (let i = 0; i<= personas.length-1; i++)
{
    if (personas[i]=== "Jose" || personas[i]=== "Maria" ){
        rechazados.push(personas[i])
    }
    else
    {
       admitidos.push(personas[i])
    }
console.log (i+1,personas[i])

}

console.log ("\nLa lista de invitados admitidos es:")
for (let i = 0; i<= admitidos.length-1; i++)
{
    console.log(admitidos[i])
}

console.log ("\nLa lista de invitados rechazados es:")
for (let i = 0; i<= rechazados.length-1; i++)
{
    console.log(rechazados[i])
}
