//Arrays

//Spread: Uma forma de lidar separadamente elementos.

function sum (x, y, z) {
    return x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

//O que era parte de um array se torna um elemento independente


//Rest: Combina os argumentos em um array

//O que era um elemento independente se torna parte de um array

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(3, 4, 5) //3

