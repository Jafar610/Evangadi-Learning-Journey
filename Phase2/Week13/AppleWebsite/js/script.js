let h3 = $(".footer-links-wrapper h3");
h3.on("click", function (e) {
    e.preventDefault();
  if ($(window).width() <= 760) {
    $(this).toggleClass("expanded");
    $(this).next("ul").slideToggle(1000);
  }

  $(window).on("resize", function () {
  if ($(window).width() > 760) {
    h3.removeClass("expanded");
    h3.next("ul").removeAttr("style");
  }
});
});
