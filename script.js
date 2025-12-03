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
            // O target.dataset.proximo é uma forma mais limpa de ler data-attributes
            const proximoPassoId = event.target.dataset.proximo;
            
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
        
        // Constrói o ID do novo passo (ex: 'passo-3') e o busca no DOM
        const novoPassoElemento = document.getElementById(`passo-${proximoId}`);

        // 3. Lógica de Transição
        
        // Desativa o passo atual
        if (passoAtual) {
            passoAtual.classList.remove('ativo');
        }

        // Ativa o novo passo
        if (novoPassoElemento) {
            novoPassoElemento.classList.add('ativo');
            // Opcional: Rolagem suave para o topo do novo passo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            console.error(`Erro de Navegação: Não foi possível encontrar o passo com o ID: passo-${proximoId}. Verifique os atributos data-proximo no HTML.`);
        }
    }
});
