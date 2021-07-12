// Sticky Header https://www.w3schools.com/howto/howto_js_sticky_header.asp

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// hamburger menu vanilla JS https://codepen.io/sitanotern1337/pen/xyQppZ

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

// ******************************* slider for images on homepage reviews section***************************

var slideshow = document.querySelector(".slide-wrap")
  if (slideshow !=null) {//prevents from running if slideshow is not present
  }

var slides = document.querySelectorAll('.slide-entry'), // grab all slides
  slideCount = slides.length, //count slides
  currentSlide = 0, // find a starting place for the current slide
  slideHeight = null, // we'll need this later for height calculation
  initialHeight = slides[0].clientHeight; // find the height of the first slide

slides[0].classList.add('active');
slideshow.style.height = initialHeight + 'px';

function moveToSlide(n) { // declare our slide navigation function
  slides[currentSlide].className = 'slide-entry'; // assign the slide HTML element
  currentSlide = (n + slideCount) % slideCount; // determine current slide (for prev/next functions)
  slides[currentSlide].className = 'slide-entry active'; //if it's the current slide, add active class
  slideHeight = slides[currentSlide].clientHeight; // get the height of the current slide
  slideshow.style.height = slideHeight + 'px'; // set the height of the slides
  window.addEventListener('resize', function () { // if the browser resizes
    resizedSlideHeight = slides[currentSlide].clientHeight; // get current slide height
    slideshow.style.height = resizedSlideHeight + 'px'; // update the height of the slideshow
  });
}

function nextSlide(e) {
  moveToSlide(currentSlide + 1); // add one to index, move to the next
};
function prevSlide(e) {
  moveToSlide(currentSlide + -1); //remove one from index, move to the last
};

var slideHandlers = {
  nextSlide: function (element) { // establish the method to accept any HTML element
    document.querySelector(element).addEventListener('click', nextSlide); // hook up the selector
  },
  prevSlide: function (element) {
    document.querySelector(element).addEventListener('click', prevSlide);
  }
}

/* Hook up the individual HTML elements to the functions */

slideHandlers.nextSlide('#next-slide');
slideHandlers.prevSlide('#prev-slide');

function nextSlide(e) {
  moveToSlide(currentSlide + 1);
  var code = e.keyCode;
  if (code == 39) { //right arrow key
    moveToSlide(currentSlide + 1);
  }
};

function prevSlide(e) {
  moveToSlide(currentSlide + -1);
  var code = e.keyCode;
  if (code == 37) { //left arrow key
    moveToSlide(currentSlide + -1);
  }
};

var slideHandlers = {
  nextSlide: function (element) {
    document.querySelector(element).addEventListener('click', nextSlide);
    document.body.addEventListener('keydown', nextSlide, false); // if a key is pressed, attach a listener to find out which one
  },
  prevSlide: function (element) {
    document.querySelector(element).addEventListener('click', prevSlide);
    document.body.addEventListener('keydown', prevSlide, false);
  }
}

// *************************** vanilla js for random quotes from heather's class**************************

var partnerQuotes = [
  "Well, um, actually a pretty nice little Saturday, we’re going to go to Home Depot.Yeah, buy some wallpaper, maybe get some flooring, stuff like that.Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time. - so and so from this and that school",
  "I'm Ron Burgundy?",
  "HEY MOM! CAN WE GET SOME MEATLOAF? What is she doing back there ? I never know what she’s doing.",
  "We elves try to stick to the four main food groups, candy, candy cane, candy corn, and syrup…"
];

var quote_article = document.getElementById("quotes");
var random_integer = Math.floor(Math.random() * partnerQuotes.length);
quote_article.textContent = partnerQuotes[random_integer]; //floor strips decimals off, multiply by length of the array, readbook! you can also use quotes.length instead of 4quote_article.innerHTML = quotes[random_integer];


// vanilla js hamburger menu https://javascript.plainenglish.io/animated-hamburger-menu-in-vanilla-javascript-79bd97da00b9

// var wrapper = document.getElementById("hamburger-wrapper")
// 
// wrapper.addEventListener("click", () => {
  // wrapper.classList.toggle("open")
// })