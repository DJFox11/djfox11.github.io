const counterElement = document.getElementById('counter');
let count = 0;
const targetCount = 168;
let intervalId;

function updateCounter() {
    count++;
    if (count <= targetCount) {
        counterElement.textContent = `${count} Models and Counting!`;
    } else {
        clearInterval(intervalId);
    }
}

// Start updating the counter every 100 milliseconds
intervalId = setInterval(updateCounter, 10);

