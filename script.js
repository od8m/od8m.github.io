document.addEventListener('DOMContentLoaded', function() {
    // Audio playback
    const audio = document.getElementById('background-music');
    audio.loop = true;

    // Try to play audio immediately
    audio.play().catch(e => {
        console.log("Autoplay was prevented. Click anywhere to play audio.");
        document.body.addEventListener('click', function() {
            audio.play();
        }, { once: true });
    });
});
