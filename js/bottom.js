$(document).ready(function () {
  positionFooter();
});

$(window).resize(function () {
  positionFooter();
});

function positionFooter() {
  var windowHeight = $(window).height();
  var headerHeight = $(".header-top").outerHeight();
  var mainHeight = $(".content-wrap").outerHeight();
  var footerHeight = $(".bottom-footer").outerHeight();

  if (windowHeight > headerHeight + mainHeight + footerHeight) {
    $(".bottom-footer").css({
      position: "fixed",
      bottom: 0,
    });
  } else {
    $(".bottom-footer").css({
      position: "static",
    });
  }
}
