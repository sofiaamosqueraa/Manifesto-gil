document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('color-changing-title');
    const emojiContainer = document.getElementById('emoji-container');

    
    function getRandomDarkPinkPurpleColor() {
        const pink = Math.floor(Math.random() * 50); 
        const purple = Math.floor(Math.random() * 50);
        const color = `rgb(${150 + pink}, 0, ${150 + purple})`;
        return color;
    }

    
    function generateProgrammingEmoji() {
        const emojis = ["💻", "🖥️", "📱", "👩‍💻", "👨‍💻", "🚀", "🔧"];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        return randomEmoji;
    }

    
    function updateTitleAndEmoji() {
        title.style.color = getRandomDarkPinkPurpleColor();
        emojiContainer.innerHTML = generateProgrammingEmoji();
    }

    
    setInterval(updateTitleAndEmoji, 400);
});

document.addEventListener('DOMContentLoaded', function () {
    
    function getRandomBlueColor() {
        const blue = Math.floor(Math.random() * 150);
        const color = `rgb(0, 0, ${150 + blue})`;
        return color;
    }

   
    function aplicarCorBorda() {
        const videoContainer = document.getElementById('video-container');
        const novaCor = getRandomBlueColor();
        videoContainer.style.borderColor = novaCor;
    }


    setInterval(aplicarCorBorda, 500);
});


document.addEventListener('DOMContentLoaded', function () {
   
    const mostrarContenidoBtn = document.getElementById('mostrarContenidoBtn');
    const contenidoOculto = document.getElementById('contenidoOculto');

   
    mostrarContenidoBtn.addEventListener('click', function () {
        
        if (contenidoOculto.style.display === 'none' || contenidoOculto.style.display === '') {
            contenidoOculto.style.display = 'block';
        } else {
            contenidoOculto.style.display = 'none';
        }
    });
});