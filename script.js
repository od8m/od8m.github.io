document.addEventListener('DOMContentLoaded', function() {
    // Audio playback
    const audio = new Audio('https://example.com/path/to/TM_Ezco44_BLIND.mp3');
    audio.loop = true;

    // Try to play audio immediately
    audio.play().catch(e => {
        console.log("Autoplay was prevented. Click anywhere to play audio.");
        document.body.addEventListener('click', () => audio.play(), { once: true });
    });
});
