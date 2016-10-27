$(document).ready(function(){

  //scroll to home when home is clicked
  $(".msg").click(function() {
    $('html, body').animate({
        scrollTop: $(".header").offset().top
    }, 1000);
  });
  //scroll to projects
  $(".mail").click(function() {
    $('html, body').animate({
        scrollTop: $("#second").offset().top
    }, 1000);
  });
  //scroll to contact
  $(".fb").click(function() {
    $('html, body').animate({
        scrollTop: $("#third").offset().top
    }, 1000);
  });
  //scroll to contact
  $(".dev").click(function() {
    $('html, body').animate({
        scrollTop: $("#fourth").offset().top
    }, 1000);
  });

  //Display menu on click
  $(".fa-bars").on("click", function(){
    document.getElementById("nav-menu").style.display = "flex";
    document.getElementById("logo-wrap").style.display = "none";
    document.getElementById("title").style.display = "none";
  });

  if ($(window).width() < 801){
    //Different /content for different drop dropdowns
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
  }
});
