
var imgArray = ["lunarspacezoom.jpg", "oldbirdzoom.jpg",
                "resinmanzoom.jpg", "healthcarezoom.jpg"];

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
  //
  var tickerArray = document.getElementsByClassName("circle-1");

  //Debugging can be removed later
  console.log(imgArray[arrayIndex]);
  console.log(arrayIndex);
  //Putting the timeout function inside the function that is passed
  //to it (i.e. carousel) creates a loop...as it continually calls itself
  setTimeout(carousel, 4000);
}

console.log("Hello");
console.log(imgArray);
