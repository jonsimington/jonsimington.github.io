// excanvas does not like radius ):
var isIE = ($.browser.msie && parseInt($.browser.version) < 9);

  // init on data-gracket
  $("[data-gracket]").eq(0).gracket({
    cornerRadius : (isIE ? 0 : 15),
    canvasLineGap : 15
  });
