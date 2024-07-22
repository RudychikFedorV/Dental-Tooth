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
    speed: 1000,
  });
  // Swiper end

  // modal window
  $(".header-button").magnificPopup({
    type: "inline",
    showCloseBtn: false,
  });
  $(".header-button").magnificPopup({
    type: "inline",
    showCloseBtn: false,
    removalDelay: 700,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });

  document.getElementById("copyright").textContent = new Date().getFullYear();
});
