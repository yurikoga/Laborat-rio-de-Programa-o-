const buyBtn = document.querySelector('.buy-btn');
const specsOverlay = document.querySelector('.specs-overlay');

buyBtn.addEventListener('click', (e) => {
    // Evita comportamentos padrão se necessário
    e.preventDefault(); 
    
    // Liga/Desliga a tela de informações
    specsOverlay.classList.toggle('active');
    
    // Opcional: Mudar o texto do botão para indicar o fechamento
    if (specsOverlay.classList.contains('active')) {
        buyBtn.innerHTML = "Close Specs";
    } else {
        buyBtn.innerHTML = "Buy Now <span>$1225</span>";
    }
});

// Opcional: Fechar ao clicar na própria tela preta
specsOverlay.addEventListener('click', () => {
    specsOverlay.classList.remove('active');
    buyBtn.innerHTML = "Buy Now <span>$1225</span>";
});
