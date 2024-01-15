document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const emojiContainer = document.getElementById('emoji-container');

    // Função para gerar uma cor azul aleatória
    function getRandomBlueColor() {
        const blue = Math.floor(Math.random() * 150); // Ajustado para tons mais claros
        const color = `rgb(0, 0, ${150 + blue})`;
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
        title.style.color = getRandomBlueColor();
        emojiContainer.innerHTML = generateProgrammingEmoji();
    }

    // Loop para alterar a cor e os emojis mais lentamente (500 milissegundos)
    setInterval(updateTitleAndEmoji, 400);
});
