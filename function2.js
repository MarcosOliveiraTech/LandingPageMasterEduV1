function SendMessager() {
    // Seleciona os elementos das caixas de texto
    var caixaTexto1 = document.querySelector('#contato .form-group:nth-child(2) .texto');
    var caixaTexto2 = document.querySelector('#contato .form-group:nth-child(3) .texto');
    var caixaTexto3 = document.querySelector('#contato .form-group:nth-child(5) .texto');

    // Verifica se a primeira caixa de texto está vazia
    if (caixaTexto1.value.trim() === '') {
        alert('Campo de nome em branco!');
        return;
    }

    // Verifica se a segunda caixa de texto está vazia
    if (caixaTexto2.value.trim() === '') {
        alert('Campo de contato em branco!');
        return;
    }

    // Verifica se a terceira caixa de texto está vazia
    if (caixaTexto3.value.trim() === '') {
        alert('Ops! Parece que esqueceu de preencher sua mensagem!');
        return;
    }

    // Se todas as caixas de texto estiverem preenchidas
    alert('Mensagem Enviada!');
}
