let slideIndex = 0;
slider();

function slider() {
  let i;
  let x = document.getElementsByClassName("tm-slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slider, 10000); // Change image every 2 seconds
}
