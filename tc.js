const images = [
    'url(image1.jpg)',
    'url(image2.jpg)',
    'url(image3.jpg)',
    // Add more image URLs
];

let currentIndex = 0;
const container = document.querySelector('.background-container');

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    container.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackground, 2000); // Change image every 2 seconds

// Initialize with the first image
container.style.backgroundImage = images[0];
