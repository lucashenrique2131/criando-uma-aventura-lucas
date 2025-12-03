/**
 * script.js
 * Lógica para o jogo "Rally da Cidade Perdida"
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de próxima etapa no documento
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    
    // 2. Adiciona um 'listener' de evento de clique a cada botão
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', (event) => {
            // Obtém o ID do próximo passo a partir do atributo 'data-proximo'
            const proximoPassoId = event.target.getAttribute('data-proximo');
            
            // Chama a função para mudar o cenário
            mudarPasso(proximoPassoId);
        });
    });

    /**
     * Função principal para gerenciar a exibição dos passos.
     * @param {string} proximoId - O ID do próximo passo a ser exibido (ex: '3', '11').
     */
    function mudarPasso(proximoId) {
        // Encontra o passo (div) que está ativo atualmente
        const passoAtual = document.querySelector('.passo.ativo');
        
        // Constrói o ID do novo passo (ex: 'passo-3')
        const novoPassoElemento = document.getElementById(`passo-${proximoId}`);

        // Verifica se o passo atual existe e o desativa
        if (passoAtual) {
            passoAtual.classList.remove('ativo');
        }

        // Verifica se o novo passo existe e o ativa
        if (novoPassoElemento) {
            novoPassoElemento.classList.add('ativo');
        } else {
            console.error(`Erro: Não foi possível encontrar o passo com o ID: passo-${proximoId}`);
        }
    }
});

// Nota: Você precisará garantir que seu arquivo CSS ('style.css')
// oculte todos os passos por padrão e apenas mostre aquele com a classe 'ativo'.
