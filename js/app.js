let amigosNaLista = [];

function adicionar() {

    //receber nome dos amigos através do Campo Nome do amigo
    let nomeDoAmigo = document.getElementById('nome-amigo');

    // VALIDANDO nome do amigo
    if (nomeDoAmigo.value == '') {
        alert('Insira o nome do amigo');
        return;
    }
    
    //VALIDANDO mesmo amigo já adicionado
    if (amigosNaLista.includes(nomeDoAmigo.value)) {
        alert('Amigo já adicionado, insira outro amigo');
        return;
    }


    //receber a lista dos amigos
    let listaDosAmigos = document.getElementById('lista-amigos');

    //Deixando nome em Maiúsculo antes de adicionar no array
    

    //colocar o nome dos amigos em uma lista
    // vai adicionar o nome dos amigos dentro do array []
     amigosNaLista.push(nomeDoAmigo.value);

    if (listaDosAmigos.textContent == '') {
        listaDosAmigos.textContent = nomeDoAmigo.value;
    } else {
        listaDosAmigos.textContent = listaDosAmigos.textContent + ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
    
}

function sortear() {
    //VALIDANDO número de participantes
    if (amigosNaLista.length < 4) {
        alert('Insira no mínimo 4 amigos!');
        return;
    }

    embaralha(amigosNaLista);

    let sorteio = document.getElementById('lista-sorteio');

   for (let i = 0; i < amigosNaLista.length; i++) {

    if (i == amigosNaLista.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML +  amigosNaLista[i] + ' --> ' + amigosNaLista[0] + '<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML +  amigosNaLista[i] + ' --> ' + amigosNaLista[i + 1] + '<br>';
    }

   }
}

function embaralha(amigosNaLista) { // este código de embaralhar array está disponivel na net(fisher-yeates) 

    for (let indice = amigosNaLista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [amigosNaLista[indice - 1], amigosNaLista[indiceAleatorio]] = 
            [amigosNaLista[indiceAleatorio], amigosNaLista[indice - 1]];
    }
}

function reiniciar() {
    amigosNaLista = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}