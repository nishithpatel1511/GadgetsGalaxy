$(function () {
  var r = 0; var l = 1; var n = 0;
  $.getJSON("https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/json/laptop.json",
    function (data) {
      $.each(data, function (key, value) {
        n++;
      });
      var temp = n;
      $.each(data, function (key, value) {

        //four cols
        if (window.innerWidth < 992) {
          if ((l % 4) == 1) {
            r++;
            $('#megamenu-laptop').append('<div class="row megamenu-row" id="laptop-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 4 == 2) & (n == 2)) {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-laptop-col-0 "></div>');
            $(row).append('<div class="megamenu-col-4" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
        }

        //five cols
        else if (window.innerWidth < 1200 & window.innerWidth >= 992) {
          if (l % 5 == 1) {
            r++;
            $('#megamenu-laptop').append('<div class="row megamenu-row" id="laptop-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 5 == 2) & (n == 2)) {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-0"></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-00"></div>');
            n--;
          }
          else if ((temp % 5 == 3) & (n == 3)) {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-0 "></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
        }

        //six cols
        else if (window.innerWidth >= 1200) {
          if ((l % 6) == 1) {
            r++;
            $('#megamenu-laptop').append('<div class="row megamenu-row" id="laptop-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 6 == 2) & (n == 2)) {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-3" id="' + r + '-laptop-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else if ((temp % 6 == 4) & (n == 4)) {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-laptop-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#laptop-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-laptop-col-' + l + '"></div>');
            col = '#' + r + '-laptop-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-laptop-list-' + l + '"></ul>');
            list = '#' + r + '-laptop-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
        }

        l++;
      });
    });
});