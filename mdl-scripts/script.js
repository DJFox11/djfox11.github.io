document.addEventListener("DOMContentLoaded", function() {
    const target = 202;
    const duration = 5000; // total time for the animation in ms
    const startTime = Date.now();
    const counter = document.getElementById("counter");
    let pausedAt201 = false;
    let pauseStartTime;

    function updateCounter() {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progress = elapsedTime / duration;

        let currentNumber;
        if (pausedAt201) {
            // Check if 500ms has passed since pausing at 201
            if (currentTime - pauseStartTime >= 750) {
                currentNumber = 202;
            } else {
                currentNumber = 201;
            }
        } else {
            // Normal counting logic
            currentNumber = Math.min(Math.floor(target * (1 - Math.exp(-5 * progress))), target - 1);
            if (currentNumber === 201) {
                pausedAt201 = true;
                pauseStartTime = currentTime;
            }
        }
        
        counter.textContent = currentNumber;

        if (currentNumber < target) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target; // Ensure it ends at exactly 202
        }
    }

    requestAnimationFrame(updateCounter);
});
