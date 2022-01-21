var menuBtn = document.getElementById('menu-btn')
var openMenuMobile = document.getElementById('header-nav__list-mobile')


// Open/Close nav on mobile
menuBtn.addEventListener('click', function(){
    openMenuMobile.classList.toggle('open')
    openMenuMobile.classList.toggle('close')
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// scroll behaviour on iphone

const requestAnimationFrame = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;

const step = (timestamp) => {
  window.scrollBy(
    0,
    1, // or whatever INTEGER you want (this controls the speed)
  );

  requestAnimationFrame(step);
};


requestAnimationFrame(step);