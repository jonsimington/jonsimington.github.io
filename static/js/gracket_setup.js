
      // excanvas does not like radius ):
      var isIE = ($.browser.msie && parseInt($.browser.version) < 9);

      // init on data-gracket
      $("[data-gracket]").eq(0).gracket({
        cornerRadius : (isIE ? 0 : 15),
        canvasLineGap : 15
      });

      // init on data-gracket
      $("[data-gracket]").eq(1).gracket({
        cornerRadius : (isIE ? 0 : 15),
        canvasLineGap : 15
      });

      // init on data-gracket
      $("[data-gracket]").eq(2).gracket({
        cornerRadius : (isIE ? 0 : 50),
        canvasLineGap : 0,
        teamClass : "g_team_custom",
        gameClass : "g_game_custom",
        currentClass : "g_current_custom",
        canvasLineColor : "#444",
        winnerClass : "g_winner_custom"
      });

      // init on data-gracket
      $("[data-gracket]").eq(3).gracket({
        cornerRadius : (isIE ? 0 : 15),
        canvasLineGap : 15
      });

      // init on data-gracket
      $("[data-gracket]").eq(4).gracket({
        cornerRadius : (isIE ? 0 : 15),
        canvasLineGap : 15
      });

      // init on data-gracket
      $("[data-gracket]").eq(5).gracket({
        cornerRadius : (isIE ? 0 : 15),
        roundLabels : ["SPORTS : 1st Round", "SPORTS : 2nd Round", "SPORTS : WINNER!!!!"]
      });

      // add some labels
      $(".container-secondary .secondary-bracket .g_winner")
        .parent()
        .css("position", "relative")
        .prepend("<h4>3rd Place</h4>")

      $(".container-secondary > div").eq(0).find(".g_winner")
        .parent()
        .css("position", "relative")
        .prepend("<h4>Winner</h4>")
