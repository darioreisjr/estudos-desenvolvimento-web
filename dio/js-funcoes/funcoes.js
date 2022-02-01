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
