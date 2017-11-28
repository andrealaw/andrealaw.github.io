// Navbar
var last_known_scroll_position = 0;
var ticking = false;

function showAndHideNavbar(scroll_pos) {
  // get the screen width
  var screen_width = window.innerWidth;

  // do something with the scroll position
  if (screen_width < 768){
    if (scroll_pos > 60){
      document.getElementById("a-navbar").classList.add("hide");
      document.getElementById("mobileMenu").classList.add("shift");
    } else {
      document.getElementById("a-navbar").classList.remove("hide");
      document.getElementById("mobileMenu").classList.remove("shift");
    }
  } else {
    if (scroll_pos > 60){
      document.getElementById("a-navbar").classList.add("shift");
    } else {
      document.getElementById("a-navbar").classList.remove("shift");
    }
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      showAndHideNavbar(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});