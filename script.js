     // Script para os corações de fundo - CORRIGIDO
     document.addEventListener('DOMContentLoaded', function() {
        const heartsBackground = document.getElementById('heartsBackground');
        const maxHearts = 25; // Número de corações no fundo
        
        function createBackgroundHeart() {
            // Limitar número de corações
            if (heartsBackground.children.length >= maxHearts) return;
            
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.classList.add('heart-bg');
            
            // Posição aleatória
            const startPosition = Math.random() * window.innerWidth;
            heart.style.left = `${startPosition}px`;
            
            // Duração aleatória
            const duration = 10 + Math.random() * 8;
            heart.style.animationDuration = `${duration}s`;
            
            // Tamanho aleatório
            const size = 1 + Math.random() * 2;
            heart.style.fontSize = `${size}rem`;
            
            // Opacidade aleatória
            const opacity = 0.3 + Math.random() * 0.4;
            heart.style.opacity = opacity;
            
            heartsBackground.appendChild(heart);
            
            // Remover após a animação
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, duration * 1000);
        }
        
        // Criar corações de fundo continuamente
        const heartInterval = setInterval(createBackgroundHeart, 800);
        
        // Criar alguns corações inicialmente
        for (let i = 0; i < 10; i++) {
            setTimeout(createBackgroundHeart, i * 300);
        }
        
        // Limpar intervalo quando a página for fechada (boa prática)
        window.addEventListener('beforeunload', () => {
            clearInterval(heartInterval);
        });
    });
