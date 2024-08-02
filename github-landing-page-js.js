const canvas = document.getElementById('static-background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStaticNoise() {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const gray = Math.floor(Math.random() * 256);
        data[i] = data[i + 1] = data[i + 2] = gray;
        data[i + 3] = 255;
    }
    
    ctx.putImageData(imageData, 0, 0);
}

function animateStatic() {
    createStaticNoise();
    requestAnimationFrame(animateStatic);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateStatic();

// Audio playback
const audio = new Audio('https://example.com/path/to/TM_Ezco44_BLIND.mp3');
audio.loop = true;

// Try to play audio immediately
audio.play().catch(e => {
    console.log("Autoplay was prevented. Click anywhere to play audio.");
    document.body.addEventListener('click', () => audio.play(), { once: true });
});
