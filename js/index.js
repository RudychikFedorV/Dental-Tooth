$(document).ready(function () {
  $(".header-hamburger").on("click", function () {
    $(".header-mobile").addClass("is-active");
  });

  $(".header-menu__close").on("click", function () {
    $(".header-mobile").removeClass("is-active");
  });
});
