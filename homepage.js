
var imgArray = ["lunarspacezoom.jpg", "oldbirdzoom.jpg",
                "resinmanzoom.jpg", "healthcarezoom.jpg"];

var arrayIndex = -1;
carousel();

function carousel(){
  arrayIndex += 1;
  if (arrayIndex > 3) {
    arrayIndex = 0;
    console.log("if statement active");
  };
  document.getElementById("currentSlide").src = imgArray[arrayIndex];
  console.log(imgArray[arrayIndex]);
  console.log(arrayIndex);
  setTimeout(carousel, 4000);
}

console.log("Hello");
console.log(imgArray);
