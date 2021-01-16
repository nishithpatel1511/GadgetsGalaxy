r = 1;
l = 1;
n=0;
$(function () {
  $.ajax({
    url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/D-mobile.json",
    dataType: 'JSON',
    success: function (data) {

      $.each(data, function (keys, value) {


        $('#megamenu-temp').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
        $.each(value, function (key, val) {
          n++;
        });
        n=12/n;
        $.each(value, function (key, val) {
        
          row = '#mrow-' + r;
          $(row).append('<div class="col-'+n+' megamenu-col" id="'+r+'-mcol-' + l + '" style="text-align: center;"></div>');
          col = '#'+r+'-mcol-' + l;
          $(col).append('<h3 id="megamenu-title">' + key + '</h3><ul class="list-unstyled megamenu-list" id="'+r+'-list-' + l + '"></ul>');
          list = '#'+r+'-list-' + l;
          $.each(val, function (k, v) {
             $(list).append('<li><a href="' + v.link + '">' + v.name +'</a></li>');
            });
           l++;
        });
         r++;
         n=0;
         l=1;
      });
    }
  });
});