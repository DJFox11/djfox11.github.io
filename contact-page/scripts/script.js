document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('mario-img');
    const audio = document.getElementById('mario-aud');

    image.addEventListener('click', () => {
        audio.volume = 0.5;
        audio.play();
    });
});
