function proximaFase(fase) {
    // Esconde todas as fases
    const fases = document.querySelectorAll('.fase');
    fases.forEach(fase => {
        fase.classList.remove('ativa');
    });

    // Mostra a fase selecionada
    const faseSelecionada = document.getElementById(`fase-${fase}`);
    faseSelecionada.classList.add('ativa');
}

// Inicializa a exploração começando pela primeira fase
window.onload = () => {
    proximaFase(1);
}
