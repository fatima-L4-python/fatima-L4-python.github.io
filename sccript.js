let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

function addArrows() {
  const imageslides = document.querySelector('.imageslides');
  
  const prevArrow = document.createElement('a');
  prevArrow.classList.add('prev');
  prevArrow.innerHTML = '&#10094;';
  prevArrow.onclick = function() { plusSlides(-1); };
  
  const nextArrow = document.createElement('a');
  nextArrow.classList.add('next');
  nextArrow.innerHTML = '&#10095;';
  nextArrow.onclick = function() { plusSlides(1); };
  
  imageslides.appendChild(prevArrow);
  imageslides.appendChild(nextArrow);
}

showSlides(slideIndex);
addArrows();

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
