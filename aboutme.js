const images = [
    "frame_2_0.jpg",
    "frame_2_1.jpg",
    "frame_2_2.jpg",
    "frame_2_3.jpg",
    "frame_2_4.jpg" 
];

const titles = [
    "Zipline",
    "Skydiving",
    "Parasailing",
    "Scuba diving" 
];

const descriptions = [
    "Zip through breathtaking landscapes with our exhilarating zipline tours. From towering forests to over river canyons, our ziplines offer a bird's-eye view of natures beauty. Suitable for all ages, it is an adventure you would not forget. Safety is our top priority. Our ziplines are built and maintained according to international safety standards, and our guides are trained to ensure a safe and enjoyable experience. We use the latest technology to provide smooth and secure rides",
    "Experience the ultimate thrill with our skydiving adventures! Whether you're a first-timer or a seasoned jumper, our expert instructors and state-of-the-art equipment ensure a safe and exhilarating dive. Imagine free-falling over majestic landscapes and experiencing a rush like no other. Our team of certified and experienced skydiving instructors is dedicated to your safety and exhilaration. With thousands of successful jumps under our belts, we're proud to have a spotless safety record and rave reviews from our adventurers.",
    "Sail through the sky with our parasailing adventures. Feel the breeze and soak in panoramic views of crystal-clear waters and picturesque coastlines. Our parasailing trips are perfect for families, couples, and solo thrill-seekers looking to add a gentle thrill to their vacation. We customize every parasailing experience to match your comfort and adventure level. From solo flights to tandem rides, our crew ensures a comfortable and secure experience, making it ideal for everyone from children to adventure-seeking adults.",
    "Dive into a world of underwater marvels with our scuba diving tours. Explore vibrant coral reefs, swim alongside exotic fish, and discover hidden shipwrecks. Our guided dives are suitable for beginners and experienced divers alike. All our dive masters are PADI certified, ensuring you receive expert guidance whether you are earning your first certification or advancing to more challenging dives. We're also committed to ocean conservation and educate our divers on sustainable practices" // New description
];

function changeContent(index) {
    document.getElementById('display-image').src = images[index];
    document.getElementById('info-title').textContent = titles[index];
    document.getElementById('info-description').textContent = descriptions[index];
}

let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex"; 
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
