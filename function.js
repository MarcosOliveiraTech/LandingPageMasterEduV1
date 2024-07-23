
function abriralerta () {
    alert("seja bem-vindo")
    }
    // Funções de Avaliação

    
    let posicaoTrilha = 0;

    function moverTrilha(direcao) {
        const trilha = document.querySelector('.imagens-miniaturas');
        const larguraImagem = 70; // Largura da imagem + gap
        const totalImagens = 17;
        const maxPosicao = -(larguraImagem * (totalImagens - 6));

        posicaoTrilha += direcao * larguraImagem;
        if (posicaoTrilha > 0) posicaoTrilha = 0;
        if (posicaoTrilha < maxPosicao) posicaoTrilha = maxPosicao;

        trilha.style.transform = `translateX(${posicaoTrilha}px)`;
    }

    function exibirImagemCentral(elemento) {
        const imagemCentral = document.getElementById('imagem-central');
        imagemCentral.src = elemento.src;
    }

    // Barra de rolagem - seção Avaliações
    /* Função para mover a trilha de imagens */
    function moverTrilha(direcao) {
        const container = document.querySelector('.imagens-miniaturas');
        const scrollAmount = 5 * 100; /* Deslocar 5 imagens */
        container.scrollLeft += direcao * scrollAmount;
    }

        //Seção Contato
        document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (validateForm(name, email, message)) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    });

    function validateForm(name, email, message) {
        if (name === "" || email === "" || message === "") {
            return false;
        }
        return true;
    }
}); 


