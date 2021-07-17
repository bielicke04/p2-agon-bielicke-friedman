// Pizza Pop-Up Ad - auto show after 2s of page load //

var pizzaad = document.querySelector('.pizzaad');
var close = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
      pizzaad.style.display = "block"
    }, 2000)
}

close.addEventListener('click', () => {
  pizzaad.style.display = "none";
})

// END