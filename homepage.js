var slides = document.querySelectorAll('#slideContainer .slide');
var currentSlide = 0;
var ticker = document.getElementsByClassName("circle-1");
ticker[0].style.backgroundColor = "black";
var slideInterval = setInterval(nextSlide, 4000);



function nextSlide() {
  for (var i = 0; i < 4; i++){
    ticker[i].style.backgroundColor = "#FFF9E6";
  }
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide + 1)%slides.length;
  slides[currentSlide].className = 'slide showing';
  ticker[currentSlide].style.backgroundColor = "black";
}
