function getRandomPosition() {
    const width = window.innerWidth - 100; // Subtract image width
    const height = window.innerHeight - 100; // Subtract image height
    const x = Math.random() * width;
    const y = Math.random() * height;
    return { x, y };
}

function getRandomImage() {
    const images = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        // Add more image URLs as needed
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function createImage() {
    const image = document.createElement('img');
    const position = getRandomPosition();
    image.src = getRandomImage();
    image.classList.add('image');
    image.style.left = position.x + 'px';
    image.style.top = position.y + 'px';
    document.getElementById('container').appendChild(image);

    // Fade in
    setTimeout(() => {
        image.style.opacity = '1';
    }, 50); // Delay the fadeIn animation for 50 milliseconds
}

// Create images at random intervals
setInterval(createImage, Math.random() * 3000 + 1000); // Random interval between 1 and 4 seconds
