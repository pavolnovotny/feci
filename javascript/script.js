// navbar color add class

// const activeNav = document.getElementsByTagName("nav");
const currentPage = document.location.pathname
console.log(currentPage)

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20 ) {
      $(".navbar").addClass("sticky");
      if (currentPage === '/index.html') {
        $(".navbar").addClass("blue");
      } else if (currentPage === '/woodworker.html') {
        $(".navbar").addClass("green");
      } else if (currentPage === '/developer.html') {
        $(".navbar").addClass("pink");
      }      
     
    } else {
      $(".navbar").removeClass("sticky");
      if (currentPage === '/index.html') {
        $(".navbar").removeClass("blue");
      } else if (currentPage === '/woodworker.html') {
        $(".navbar").removeClass("green");
      } else if (currentPage === '/developer.html') {
        $(".navbar").removeClass("pink");
      }    
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });





  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Design Engineer", "Developer", "Woodworker", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Design Engineer", "Developer", "Woodworker", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // owl carousel script
  // $(".carousel").owlCarousel({
  //   margin: 20,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeOut: 2000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: false,
  //     },
  //     600: {
  //       items: 2,
  //       nav: false,
  //     },
  //     1000: {
  //       items: 3,
  //       nav: false,
  //     },
  //   },
  // });
});




// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.popup');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}