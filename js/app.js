let amigosNaLista = [];

function adicionar() {
    //receber nome dos amigos através do Campo Nome do amigo
    let nomeDoAmigo = document.getElementById('nome-amigo');
    //receber a lista dos amigos
    let listaDosAmigos = document.getElementById('lista-amigos');
    //colocar o nome dos amigos em uma lista
    amigosNaLista.push(nomeDoAmigo.value); // vai adicionar o nome dos amigos dentro do array []

    if (listaDosAmigos.textContent == '') {
        listaDosAmigos.textContent = nomeDoAmigo.value;
    } else {
        listaDosAmigos.textContent = listaDosAmigos.textContent + ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
    
}

function sortear() {
    embaralha(amigosNaLista);
    
}

function reiniciar() {
    nomeDoAmigo.value = '';
    listaDosAmigos.value = '';
}

function embaralha(amigosNaLista) { // este código de embaralhar array está disponivel na net(fisher-yeates) 

    for (let indice = amigosNaLista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [amigosNaLista[indice - 1], amigosNaLista[indiceAleatorio]] = 
            [amigosNaLista[indiceAleatorio], amigosNaLista[indice - 1]];
    }
}