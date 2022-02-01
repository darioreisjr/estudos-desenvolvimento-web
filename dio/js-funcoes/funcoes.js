//Estruturas e funções anônimas 

//Estruturas

//Definição comum de uma função

function nome (parametros) {
    //instruções
}

// Variáveis criadas dentro de uma função apenas podem ser ultilizadas dentro dela.

function nome (parametros) {
    //instruções
    return; //valor
}

// Quando invocamos o "return" a função para de ser executada.

// Função anônima

//Funções que representam expressões

const soma = function (a, b) {
    return a + b;
}

soma (1,2) //3
soma (5,4) //9

//Uma variável pode armazenar uma função.

//Função autoinvocável

//IIFE (Immediately Invoked Function Expression)

(
    function(){
        let nome = "Digital Innovation One";
        return nome;
    }
) ();
//Digital Innovation One

//Uma função anônima entre parênteses, sequida por outro par de parênteses que representa sua chamada.

(
    function (a,b) {
        return a+b;
    }
) (1,2);
//3

const soma3 = (
    function () {
        return a+b;
    }
) (1,2);

console.log(soma3) //3

//Tambem pode ser utilizada com parâmetros ou armazenada em uma variável

//Callbacks

//Umafunção passada como argumento para outra.

const calc = function(operacao, num1, num2){
    return operacao (num1, num2);
}

const soma = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1,2);

console.log(resultSub); // -1
console.log(resultSoma); // 3

//Ultilizando callbacks você tem maior controle da ordem de chamadas.
