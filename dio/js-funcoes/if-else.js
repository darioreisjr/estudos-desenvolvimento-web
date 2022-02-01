//IF e ELSE 

function numeroPositivo(num) {
    let resultado;

    if(num<0) { //condição
        resultado = false; //Declaração 1: (dentro do IF): Ocorre caso a condição seja verdadeira
    } else {
        resultado = true; //Declaração 2: (dentro do ELSE): ocorre caso a condição seja falsa.
    }

    return resultado;
}

numeroPositivo(2)
//true
numeroPositivo(-9)
//false


// * JavaScript não tem ELSEIF, as palavras sempre estão separadas!