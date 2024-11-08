document.getElementById('adicionarNota').addEventListener('click', adicionarNota);
document.getElementById('notaInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarNota();
    }
});

function adicionarNota() {
    const notaInput = document.getElementById('notaInput');
    const notaTexto = notaInput.value.trim();
    const importancia = document.getElementById('importancia').value;

    if (notaTexto === '') {
        alert('Por favor, digite uma nota.');
        return;
    }

    const listaDeNotas = document.getElementById('listaDeNotas');
    const novaNota = document.createElement('li');
    novaNota.textContent = notaTexto;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', function() {
        listaDeNotas.removeChild(novaNota);
    });

    const bolinhaImportancia = document.createElement('span');
    bolinhaImportancia.classList.add('importancia', importancia);

    novaNota.prepend(bolinhaImportancia);
    novaNota.appendChild(botaoExcluir);
    listaDeNotas.appendChild(novaNota);

    notaInput.value = '';
    notaInput.focus();
}

