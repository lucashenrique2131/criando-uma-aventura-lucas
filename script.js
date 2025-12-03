/**
 * script.js
 * Lógica para o jogo "Rally da Cidade Perdida"
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões que possuem o atributo 'data-proximo'
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    
    // 2. Anexa o evento de clique a todos os botões
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', (event) => {
            const proximoPassoId = event.target.dataset.proximo;
            
            // Chama a função para mudar a tela
            mudarPasso(proximoPassoId);
        });
    });

    /**
     * Função principal para gerenciar a exibição dos passos.
     * @param {string} proximoId - O ID do próximo passo a ser exibido.
     */
    function mudarPasso(proximoId) {
        // Encontra o passo (div) que está ativo atualmente
        const passoAtual = document.querySelector('.passo.ativo');
        
        // Constrói o ID do novo passo (ex: 'passo-3')
        const novoPassoElemento = document.getElementById(`passo-${proximoId}`);

        // Desativa o passo atual com um delay para permitir que o CSS finalize a animação de saída
        if (passoAtual) {
            passoAtual.classList.remove('ativo');
        }

        // Ativa o novo passo após um pequeno intervalo, se ele existir
        if (novoPassoElemento) {
             // O setTimeout é crucial aqui. Ele garante que a classe 'ativo' seja removida e a transição de saída seja iniciada antes que a próxima tela apareça.
            setTimeout(() => {
                novoPassoElemento.classList.add('ativo');
                
                // Rola suavemente para o topo do novo passo (Melhora UX)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 50); // Um pequeno delay de 50ms é suficiente
        } else {
            console.error(`Erro de Navegação: Não foi possível encontrar o passo com o ID: passo-${proximoId}.`);
        }
    }
});
