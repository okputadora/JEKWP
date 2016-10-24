//MENU ON HOVER


//SLIDESHOW
var slides = ["faceszoom.jpg", "abstractzoom.jpg", "hollowshapeszoom.jpg",
              "lunarspacezoom.jpg", "degradation1.jpg", "degradation1.jpg",
              "deagradation2.jpg", "degradation3.jpg"];
var currentSlide = 0;
var ticker = document.getElementsByClassName("circle-1");
ticker[0].style.backgroundColor = "white";
var slideInterval = setInterval(nextSlide, 4000);
console.log(slides);
function nextSlide() {
  //Change the current slide back to hidden and ticker back to white
  ticker[currentSlide].style.backgroundColor = "black";
  document.getElementById("slideshow").style.backgroundImage =
  "url(" + slides[currentSlide] + ")";
  //Increment slide
  currentSlide = (currentSlide + 1)%slides.length;
  //Reveal slide and change ticker to black
  slides[currentSlide].className = 'slide showing';
  ticker[currentSlide].style.backgroundColor = "white";
}
