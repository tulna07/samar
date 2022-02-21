// Activate Owl carousel
$(".brands-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

$(".blogs-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// Activate Counter Up
$(".counter").countUp();

// Activate Slick carousel
$(document).ready(function () {
  $(".testimonials-boxes").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".testimonials-clients",
    dots: true,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    speed: 2000,
  });

  $(".testimonials-clients").slick({
    variableWidth: true,
    asNavFor: ".testimonials-boxes",
    focusOnSelect: true,
    arrows: false,
    speed: 800,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
  });
});

// Activate wow.js
new WOW().init();

// Activate lightGallery
lightGallery(document.getElementById("light-gallery"), {
  plugins: [lgZoom, lgThumbnail],
  selector: ".portfolio-item__show-btn",
  exThumbImage: "data-exthumbimage",
});
