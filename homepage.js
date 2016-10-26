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

  //Mobile features
  var galDropdown = {
    line1: "<a href='#'>Annie's Art Show</a>",
    line2: "<a href='#'>Bedlam Cups</a>",
    line3: "<a href='#'>Pipe Dreams</a>",
  };

  var shopDropdown = {
    line1: "<a href='#'>Art</a>",
    line2: "<a href='#'>Prints</a>",
    line3: "<a href='#'>More</a>",
  };

  var eventsDropdown = {
    line1: "<a href='#'>Upcoming</a>",
    line2: "<a href='#'>Past</a>"
  };

  var contactDropdown = {
    line1: "<a href='https://www.facebook.com/joseph.krause.986'> \
    <i class='fa fa-facebook-square' aria-hidden='true'></i></a>",
    line2: "<a href='#'><i class='fa fa-envelope-o' aria-hidden='true'></i>"
  };
  var currentDropdown = "";
  //Display menu on click
  $(".fa-bars").on("click", function(){
    document.getElementById("nav-menu").style.display = "flex";
    document.getElementById("logo-wrap").style.display = "none";
    document.getElementById("title").style.display = "none";
  });
  //Different content for different drop dropdowns
  //Display dropdowns in center of screen
  $(".container").on("click", function(){
    document.getElementById("menu-container").style.display = "flex";
  });
  $("#gal").on("click", function(){
    currentDropdown = galDropdown;
    buildDropdown(currentDropdown);
  });

  $("#shop").on("click", function(){
    currentDropdown = shopDropdown;
    buildDropdown(currentDropdown);
  });
  $("#events").on("click", function(){
    currentDropdown = eventsDropdown;
    buildDropdown(currentDropdown);
  });
  $("#contact").on("click", function(){
    currentDropdown = contactDropdown;
    buildDropdown(currentDropdown);
  });

  function buildDropdown(dropdown){
    //If object has the line insert the text
    if (dropdown.hasOwnProperty("line1")){
      document.getElementById("line1").innerHTML = dropdown.line1;
      document.getElementById("line1").style.display = "flex";
      document.getElementById("line1").style.border = "1px solid white";
    }
    else{
      // Remove this line from the conatiner
      document.getElementById("line1").style.display = "none";
    }
    if (dropdown.hasOwnProperty("line2")){
      document.getElementById("line2").innerHTML = dropdown.line2;
      document.getElementById("line2").style.display = "flex";
      document.getElementById("line2").style.border = "1px solid white";
    }
    else{
      document.getElementById("line2").style.display = "none";
    }
    if (dropdown.hasOwnProperty("line3")){
      document.getElementById("line3").innerHTML = dropdown.line3;
      document.getElementById("line3").style.display = "flex";
      document.getElementById("line3").style.border = "1px solid white";
    }
    else{
      document.getElementById("line3").style.display = "none";
    }
    if (dropdown.hasOwnProperty("line4")){
      document.getElementById("line4").innerHTML = dropdown.line4;
      document.getElementById("line4").style.display = "flex";
      document.getElementById("line4").style.border = "1px solid white";
    }
    else{
      document.getElementById("line4").style.display = "none";
      console.log("ELEMENT REMOVED");
    }
    if (dropdown.hasOwnProperty("line5")){
      document.getElementById("line5").innerHTML = dropdown.line5;
      document.getElementById("line5").style.display = "flex";
      document.getElementById("line5").style.border = "1px solid white";
    }
    else{
      document.getElementById("line5").style.display = "none";
    }
  }
});
