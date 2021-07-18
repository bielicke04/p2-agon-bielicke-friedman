// ************** slider for images on homepage reviews section ************************

var slideshow = document.querySelector('.slide-wrap');

if (slideshow != null) { //make sure we don't run this script if the slideshow is not present

  var slides = document.querySelectorAll('.slide-entry')
    slideCount = slides.length
    currentSlide = 0
    slideHeight = null
    initialHeight = slides[0].clientHeight

  slides[0].classList.add('active'); //on load, activate the first slide
  slideshow.style.height = initialHeight + 'px';

  function moveToSlide(n) { // set up our slide navigation functionality
    slides[currentSlide].className = 'slide-entry';
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].className = 'slide-entry active';
    slideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = slideHeight + 'px';
    window.addEventListener('resize', function () {
      resizedSlideHeight = slides[currentSlide].clientHeight;
      slideshow.style.height = resizedSlideHeight + 'px';
    });
  }

  function nextSlide(e) {
    moveToSlide(currentSlide + 1);
    var code = e.keyCode;
    if (code == 39) {
      moveToSlide(currentSlide + 1);
    }
  };

  function prevSlide(e) {
    moveToSlide(currentSlide + -1);
    var code = e.keyCode;
    if (code == 37) {
      moveToSlide(currentSlide + -1);
    }
  };

  var slideHandlers = {
    nextSlide: function (element) {
      document.querySelector(element).addEventListener('click', nextSlide);
      document.body.addEventListener('keydown', nextSlide, false);
    },
    
    prevSlide: function (element) {
      document.querySelector(element).addEventListener('click', prevSlide);
      document.body.addEventListener('keydown', prevSlide, false);
    }
  }

  slideHandlers.nextSlide('#next-slide');
  slideHandlers.prevSlide('#prev-slide');

  // Dynamic slideshow height

  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

  window.addEventListener('resize', function () { // adjust the height of the slidehow as the browser is resized
    var resizedHeight = slides[0].clientHeight;
    slideshow.style.height = resizedHeight + 'px';
  });

  // Detect swipe events for touch devices, credit to Kirupa @ https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
  // var initialX = null;
  // var initialY = null;
  // function startTouch(e) {
    // initialX = e.touches[0].clientX;
    // initialY = e.touches[0].clientY;
  // };
  // function moveTouch(e) {
    // if (initialX === null) {
      // return;
    // }
    // if (initialY === null) {
      // return;
    // }
    // var currentX = e.touches[0].clientX;
    // var currentY = e.touches[0].clientY;
    // var diffX = initialX - currentX;
    // var diffY = initialY - currentY;
    // if (Math.abs(diffX) > Math.abs(diffY)) {
      // if (diffX > 0) {
        // swiped left
        // moveToSlide(currentSlide + 1);
      // } else {
        // swiped right
        // moveToSlide(currentSlide + -1);
      // }
    // }
    // initialX = null;
    // initialY = null;
    // e.preventDefault();
  // };

  // slideshow.addEventListener("touchstart", startTouch, false);
  // slideshow.addEventListener("touchmove", moveTouch, false);

  // optional autoplay function  
  // setInterval(function () {
    // nextSlide();
  // }, 8000);

} //end slideshow


// *************************** vanilla js for random quotes from heather's class**************************

// var partnerQuotes = [
//   "Well, um, actually a pretty nice little Saturday, we’re going to go to Home Depot.Yeah, buy some wallpaper, maybe get some flooring, stuff like that.Maybe Bed, Bath, & Beyond, I don’t know, I 
// don’t know if we’ll have enough time. - so and so from this and that school",
//   "I'm Ron Burgundy?",
//   "HEY MOM! CAN WE GET SOME MEATLOAF? What is she doing back there ? I never know what she’s doing.",
//   "We elves try to stick to the four main food groups, candy, candy cane, candy corn, and syrup…"
// ];
// 
// var quote_article = document.getElementById("quotes");
// var random_integer = Math.floor(Math.random() * partnerQuotes.length);
// quote_article.textContent = partnerQuotes[random_integer]; //floor strips decimals off, multiply by length of the array, readbook! you can also use quotes.length instead of 4quote_article.innerHTML 
// = quotes[random_integer];
// 
// RANDOM IMAGES
// var r_image = [
//   "images/wf.jpg",
//   "images/buddy.jpg",
//   "images/ronburgundy.jpg",
//   "images/wf_weddingcrashers.jpeg"
// ];
// 
// var random_image = document.getElementById("my_image"); //number was set earlier for quotes, so does not need to be repeated
// random_image.src = r_image[random_integer];
// 