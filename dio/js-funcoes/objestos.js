//Objetos
//Objet Destructuring 

// Entre chaves {} podemos filtrar apenas os dados que nos interressam em um objeto

const user = {
    id = 42,
    displayName: 'Jdoe',
    fullName:{
        fisrtName:'John',
        lastName: 'Doe'
    }
}

function userId({id}) {
    return id;
}

function getFullName({fullName:{fisrtName: first, lastName:last }}) {
    return '${first} ${last}';
}

userId (user)
//42

getFullName(user)
//John Doe