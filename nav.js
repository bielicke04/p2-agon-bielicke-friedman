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


// login/local storage JS from Lee's lecture

var form = document.querySelector('form')
var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var highSchoolInput = document.getElementById('highSchool')
var nameEl = document.getElementById('name')
var clear = document.querySelector('#clear')

var firstName = localStorage.getItem('first')
var lastName = localStorage.getItem('last')
var highSchool = localStorage.getItem('school')

if (firstName && lastName && highSchool) {
  nameEl.textContent = firstName + " " + lastName + " from " + highSchool
  firstNameInput.value = firstName
  lastNameInput.value = lastName
  highSchoolInput.value = highSchool
} else {
  nameEl.textContent = 'Already registered with Broadway Bridges? Please login below!'
}

form.onsubmit = function (e) {
  e.preventDefault()
  firstName = firstNameInput.value
  lastName = lastNameInput.value
  highSchool = highSchoolInput.value
  localStorage.setItem('first', firstName)
  localStorage.setItem('last', lastName)
  localStorage.setItem('school', highSchool)
  nameEl.textContent = "Welcome back, " + firstName + " " + lastName + " from " + highSchool
}

clear.onclick = function () {
  firstNameInput.value = ""
  lastNameInput.value = ""
  highSchoolInput.value = ""
  localStorage.setItem("first", "")
  localStorage.setItem("last", "")
  localStorage.setItem("school", "")
  nameEl.textContent = 'Already registered with Broadway Bridges? Please login below!'
}

//  Read more button https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more

function myFunction() {
  var dots = document.getElementById("dots")
  var moreText = document.getElementById("more")
  var btnText = document.getElementById("moreBtn")

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    btnText.textContent = "Read More"
    moreText.style.display = "none"
  } else {
    dots.style.display = "none"
    btnText.textContent = "Read Less"
    moreText.style.display = "inline"
  }
}

// hamburger menu vanilla JS https://codepen.io/sitanotern1337/pen/xyQppZ

// var hamburger = document.querySelector('.hamburger');
// var menu = document.querySelector('.navbar');
// var bod = document.querySelector('.container');

// hamburger.addEventListener('click', function () {
//   hamburger.classList.toggle('isactive');
//   menu.classList.toggle('active');

// });