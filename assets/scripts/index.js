
// clearing and reloading the console
console.clear();
console.log('JS Relaoded')
fetch("https://api.openweathermap.org/data")
.then(response => response.json())
.then(function(data){

    console.log(data);
     //this will unhide the main element after hard reset
    document.getElementById('main-container').hidden= false

    //remove the loading after the main element is unhidden
    document.getElementById('loading').hidden= true

})


// Auto Slider One
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 6500); // Change image every 5 seconds
}


// Auto Slider Two
var slideIndex1 = 0;
carousel1();

function carousel1() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel1, 5500); // Change image every 2 seconds
} 



// Auto Slider Three
var slideIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel2, 5000); // Change image every 2 seconds
} 


// Auto Slider Four
var slideIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > x.length) {slideIndex3 = 1}
  x[slideIndex3-1].style.display = "block";
  setTimeout(carousel3, 4500); // Change image every 2 seconds
} 


// getFullYear
const year = new Date();
let currentYear = year.getFullYear();
document.querySelector('.y').innerHTML = currentYear
console.log(currentYear)