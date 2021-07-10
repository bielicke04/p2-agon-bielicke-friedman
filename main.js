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



// vanilla js hamburger menu https://javascript.plainenglish.io/animated-hamburger-menu-in-vanilla-javascript-79bd97da00b9

var wrapper = document.getElementById("hamburger-wrapper")

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open")
})

