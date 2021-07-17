// hamburger menu vanilla JS https://codepen.io/sitanotern1337/pen/xyQppZ

var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.navbar');
var bod = document.querySelector('.container');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});