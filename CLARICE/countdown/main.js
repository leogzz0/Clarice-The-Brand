function changeBackground() {
  var images = ["64-SAM_0397.jpg", "88-SAM_0359.jpg", "138-SAM_0271.jpg"];
  var randomizer = Math.floor(Math.random() * images.length);
  var selectedImage = "assets/" + images[randomizer];
  document.querySelector('header').style.backgroundImage = "url('" + selectedImage + "')";
}

document.addEventListener("DOMContentLoaded", changeBackground);
