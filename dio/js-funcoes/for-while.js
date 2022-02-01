//FOR 

//Lopp dentro de elementos interavéis ( arrays, strings)

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i=0; i< arr.length; i++) {
        multiplicados.push(arr[i] *2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];

multiplicaPorDois(meusNumeros);
//[4, 66, 912, 712, 80]

// WHILE 

//Executa instrução até qua a condição se torne falsa.

function exemploWhile() {
    let num = 0;

    while(num<=5) {
        console.log(num);
        num++
    }
}

exemploWhile()
//0
//1
//2
//3
//4
//5