r = 1;
l = 1;
$(function () {
  $.ajax({
    url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/D-mobile.json",
    dataType: 'JSON',
    success: function (data) {

      $.each(data, function (keys, value) {

        $('#megamenu-temp').html('<div class="row" id="megamenu-row-' + r + '"></div>');

        $.each(value, function (key, val) {
        
           row = '#megamenu-row-' + r;
           $(row).append('<div class="col-3" id="megamenu-col-' + l + '" style="text-align: center;"></div>');
          col = '#megamenu-col-' + l;
          $(col).html('<h3 id="megamenu-title">' + key + '</h3><ul class="list-unstyled" id="megamenu-list-' + l + '"></ul>');
           list = '#megamenu-list-' + l;
          $.each(val, function (k, v) {
            $(list).append('<li><a href="' + v.link + '">' + v.name +'</a></li>');
           });
          l++;
        });
      });
    }
  });
});