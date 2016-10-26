//MENU ON HOVER

$(document).ready(function(){
//SLIDESHOW
  var slides = ["faceszoom.jpg", "hollowshapeszoom.jpg", "abstractzoom.jpg",
                "lunarspacezoom.jpg", "degradation1.jpg",
                "degradation2.jpg", "degradation3.jpg"];
  var currentSlide = 0;
  var ticker = document.getElementsByClassName("circle");
  ticker[currentSlide].style.border = "inset 2px #C3C3C3";;
  var slideInterval = setInterval(nextSlide, 4000);
  //listen for button clicking

  console.log(slides);
  function nextSlide() {
      //If a button is pressed
      $(".circle").on("click", function(){
        ticker[currentSlide].style.border = "outset 2px #C3C3C3";
        clearInterval(slideInterval);
        var buttonId = this.id;
        if (buttonId == "c0"){
          currentSlide = 0;
        }
        else if (buttonId == "c1"){
          currentSlide = 1;
        }
        else if (buttonId == "c2"){
          currentSlide = 2;
        }
        else if (buttonId == "c3"){
          currentSlide = 3;
        }
        else if (buttonId == "c4"){
          currentSlide = 4;
        }
        else if (buttonId == "c5"){
          currentSlide = 5;
        }
        else if (buttonId == "c6"){
          currentSlide = 6;
        }
        ticker[currentSlide].style.border = "inset 2px #C3C3C3";
        document.getElementById("slideshow").style.backgroundImage =
        "url(" + slides[currentSlide] + ")";
        slideInterval = setInterval(nextSlide, 4000);
      });
    //If button is not pressed just cycle automatically
    ticker[currentSlide].style.border = "outset 2px #C3C3C3";
    if (currentSlide >= slides.length -1){
      currentSlide = -1;
    }
    currentSlide = (currentSlide + 1);
    //Change the current slide back to hidden and ticker back to white
    document.getElementById("slideshow").style.backgroundImage =
    "url(" + slides[currentSlide] + ")";
    //Increment slide

    //Reveal slide and change ticker to black
    slides[currentSlide].className = 'slide showing';
    ticker[currentSlide].style.border = "inset 2px #C3C3C3";
    console.log(currentSlide);
  }
});
