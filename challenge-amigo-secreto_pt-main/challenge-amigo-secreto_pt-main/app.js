let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNome = amigoInput.value.trim();

    if (amigoNome === '') {
        alert('Por favor, informe o nome do amigo!');
        return;
    }

    if (amigos.includes(amigoNome)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(amigoNome);

    let listaAmigos = document.getElementById('listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = amigoNome;
    listaAmigos.appendChild(novoItem);

    amigoInput.value = '';
}

function sortearAmigo() {
    if (amigos.length < 4) {
        alert('É necessário adicionar pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpar resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        let sorteado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        let sorteioItem = document.createElement('li');
        sorteioItem.textContent = `${amigos[i]} → ${sorteado}`;
        resultado.appendChild(sorteioItem);
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}
