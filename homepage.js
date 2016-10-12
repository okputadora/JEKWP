
var imgArray = ["lunarspacezoom.jpg", "oldbirdzoom.jpg",
                "resinmanzoom.jpg", "healthcarezoom.jpg"];
var tickerArray = document.getElementsByClassName("circle-1");
var arrayIndex = -1;
carousel();

function carousel(){
  arrayIndex += 1;
  //If we're outside of the array go back to the beginning
  if (arrayIndex > 3) {
    arrayIndex = 0;
  };
  //change current slide to the next image in the array
  document.getElementById("currentSlide").src = imgArray[arrayIndex];
  //Reset all of the other tickers back to orihinal color
  for (var i = 0; i < 4; i++){
    tickerArray[i].style.backgroundColor = "white";
  };
  //change the color of the ticker to match image
  tickerArray[arrayIndex].style.backgroundColor = "grey";
  //Debugging can be removed later
  console.log(imgArray[arrayIndex]);
  //Putting the timeout function inside the function that is passed
  //to it (i.e. carousel) creates a loop...as it continually calls itself
  setTimeout(carousel, 4000);
}

console.log("Hello");
console.log(imgArray);
