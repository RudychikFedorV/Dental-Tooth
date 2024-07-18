$(document).ready(function () {
  $(".header-hamburger").on("click", function () {
    $(".header-mobile").addClass("is-active");
  });

  $(".header-menu__close").on("click", function () {
    $(".header-mobile").removeClass("is-active");
  });

  // Swiper start
  const reviewsSwiper = new Swiper(".reviews-swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews-swiper .arrow-next",
      prevEl: ".reviews-swiper .arrow-prev",
    },
  });
  // Swiper end
});
