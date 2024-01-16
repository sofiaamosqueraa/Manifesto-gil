document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const emojiContainer = document.getElementById('emoji-container');

    // Função para gerar uma cor rosa ou roxa aleatória mais escura
    function getRandomDarkPinkPurpleColor() {
        const pink = Math.floor(Math.random() * 50); // Ajustado para tons mais escuros
        const purple = Math.floor(Math.random() * 50); // Ajustado para tons mais escuros
        const color = `rgb(${150 + pink}, 0, ${150 + purple})`;
        return color;
    }

    // Função para gerar emojis de programação
    function generateProgrammingEmoji() {
        const emojis = ["💻", "🖥️", "📱", "👩‍💻", "👨‍💻", "🚀", "🔧"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        return randomEmoji;
    }

    // Função para alterar a cor do título e adicionar emojis
    function updateTitleAndEmoji() {
        title.style.color = getRandomDarkPinkPurpleColor();
        emojiContainer.innerHTML = generateProgrammingEmoji();
    }

    // Loop para alterar a cor e os emojis mais lentamente (500 milissegundos)
    setInterval(updateTitleAndEmoji, 400);
});

document.addEventListener('DOMContentLoaded', function () {
    // Função para gerar uma cor azul aleatória
    function getRandomBlueColor() {
        const blue = Math.floor(Math.random() * 150); // Ajustado para tons mais claros
        const color = `rgb(0, 0, ${150 + blue})`;
        return color;
    }

    // Função para aplicar a cor da borda ao vídeo
    function aplicarCorBorda() {
        const videoContainer = document.getElementById('video-container');
        const novaCor = getRandomBlueColor();
        videoContainer.style.borderColor = novaCor;
    }

    // Chamar a função para aplicar a cor da borda a cada 500 milissegundos (0.5 segundos)
    setInterval(aplicarCorBorda, 500);
});
