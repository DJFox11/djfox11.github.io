document.addEventListener("DOMContentLoaded", function() {
    const target = 203;
    const duration = 3000; // total time for the animation in ms
    const startTime = Date.now();
    const counter = document.getElementById("counter");

    function updateCounter() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = elapsedTime / duration;
        const currentNumber = Math.min(Math.floor(target * (1 - Math.exp(-5 * progress))), target);
        counter.textContent = currentNumber;

        if (currentNumber < target) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
});
