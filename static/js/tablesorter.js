var setup_sorter = function(identifier) {
      $(identifier).tablesorter();
      $(identifier).bind("sortEnd", function() {
        var icons = $(identifier + " > thead th i");
        icons.removeClass().toggleClass("fa fa-arrows-v");

        var asc_icons = $(identifier + " .tablesorter-headerAsc i");
        asc_icons.removeClass().toggleClass("fa fa-long-arrow-up");

        var desc_icons = $(identifier + " .tablesorter-headerDesc i");
        desc_icons.removeClass().toggleClass("fa fa-long-arrow-down");
      });
    }

$(function() {
  setup_sorter("#tourney_stats");
});
