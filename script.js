document.addEventListener('DOMContentLoaded', function() {
    // Audio playback
    const audio = document.getElementById('background-music');
    audio.loop = true;

    const clickMeButton = document.getElementById('click-me-button');
    const nowPlayingContainer = document.getElementById('now-playing-container');
    const clickMeContainer = document.getElementById('click-me-container');

    clickMeButton.addEventListener('click', function() {
        audio.play().then(() => {
            clickMeContainer.style.display = 'none';
            nowPlayingContainer.style.display = 'block';
        }).catch(e => {
            console.log("Audio play was prevented.");
        });
    });
});
