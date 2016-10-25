//MENU ON HOVER


//SLIDESHOW
var slides = ["faceszoom.jpg", "hollowshapeszoom.jpg", "abstractzoom.jpg",
              "lunarspacezoom.jpg", "degradation1.jpg",
              "degradation2.jpg", "degradation3.jpg"];
var currentSlide = 0;
var ticker = document.getElementsByClassName("circle-1");
ticker[0].style.backgroundColor = "white";
var slideInterval = setInterval(nextSlide, 4000);
console.log(slides);
function nextSlide() {
  ticker[currentSlide].style.backgroundColor = "black";
  if (currentSlide >= slides.length -1){
    currentSlide = -1;
  }
  currentSlide = (currentSlide + 1%slides.length);
  //Change the current slide back to hidden and ticker back to white
  document.getElementById("slideshow").style.backgroundImage =
  "url(" + slides[currentSlide] + ")";
  //Increment slide

  //Reveal slide and change ticker to black
  slides[currentSlide].className = 'slide showing';
  ticker[currentSlide].style.backgroundColor = "white";
  console.log(currentSlide);

}
