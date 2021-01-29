$(function mobile () {
  var r = 0; var l = 1; var n = 0;
  $.getJSON("https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/json/laptop.json",
     
    function (data) {
      $.each(data, function (key, value) {
        n++;
      });
      temp = n;

      $.each(data, function (key, value) {

        //four cols
        if (window.innerWidth < 992) {
          if ((l % 4) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mobile-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 4 == 2) & (n == 2)) {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mobile-col-0 "></div>');
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
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
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mobile-row-' + r + '"></div>');
            l = 1;
          }

          if((temp%5==2)&(n==2)){
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-0"></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-00"></div>');
            n--;
          }
          else if ((temp % 5 == 3) & (n == 3)) {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-0 "></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
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
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mobile-row-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 6 == 2) & (n == 2)) {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-3" id="' + r + '-mobile-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else if ((temp % 6 == 4) & (n == 4)) {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mobile-col-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(list).append('<li><a href="https://nishithpatel1511.github.io/GadgetsGalaxy/mobile/' + key.toLowerCase() + '.html" style="font-size : 0.7rem">...view more...</a></li>');
            n--;
          }
          else {
            row = '#mobile-row-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mobile-col-' + l + '"></div>');
            col = '#' + r + '-mobile-col-' + l;
            $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
            list = '#' + r + '-mobile-list-' + l;
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

//for 1 temp
// if ((temp % 4 == 1) & (n == 1)) {
          //   row = '#mobile-row-' + r;
          //   $(row).append('<div class="megamenu-col-1" id="' + r + '-mobile-col-' + l + '"></div>');
          //   col = '#' + r + '-mobile-col-' + l;
          //   $(col).append('<h6 id="megamenu-title">' + key + '</h6><ul class="list-unstyled megamenu-list" id="' + r + '-mobile-list-' + l + '"></ul>');
          //   list = '#' + r + '-mobile-list-' + l;
          //   $.each(value, function (k, v) {
          //     $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
          //   });
          //   n--;
          // }