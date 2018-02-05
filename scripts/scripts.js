
var image = document.getElementById("image");

var imageArray = ["images/defaultWatch.jpg", "images/watch1.jpg", "images/watch2.jpg", "images/watch3.jpg"];

var imageIndex = 0;

function changeImage() {
   image.setAttribute("src",imageArray[imageIndex]);
   imageIndex++;
   if (imageIndex >= imageArray.length) {
      imageIndex = 0;
   }
}

window.onload = function() {

   setInterval(changeImage,2000);

}
