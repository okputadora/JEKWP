var slides = document.querySelectorAll('#slideContainer .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}
