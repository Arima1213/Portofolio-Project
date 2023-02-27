// paralax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 6 + "%)",
  });

  $(".jumbotron .container h1").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  $(".jumbotron .container h4").css({
    transform: "translate(0px, " + wScroll / 0.9 + "%)",
  });

  //pendidikan
  if (wScroll > $(".pendidikan").offset().top) {
    $(".pendidikan .container").each(function (i) {
      setTimeout(function () {
        $(".pendidikan .container").eq(i).addClass("show");
      }, 300 * (i + 1));
    });
  }
});
