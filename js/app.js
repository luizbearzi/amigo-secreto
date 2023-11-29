function adicionar() {
    //receber nome dos amigos através do Campo Nome do amigo
    let nomeDoAmigo = document.getElementById('nome-amigo');
    
    //colocar o nome dos amigos em uma lista
    let listaDosAmigos = document.getElementById('lista-amigos');
    if (listaDosAmigos.textContent == '') {
        listaDosAmigos.textContent = nomeDoAmigo.value;
    } else {
        listaDosAmigos.textContent = listaDosAmigos.textContent + ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
    
}

function sortear() {
    let sorteioAmigos = document.getElementById('lista-sorteio');
    //sorteio dos amigos
    nomeDoAmigo = sorteioAmigos[Math.floor(Math.random() * sorteioAmigos.length)];
    alert(nomeDoAmigo);
}

function reiniciar() {
    nomeDoAmigo = '';
    listaDosAmigos = '';
}