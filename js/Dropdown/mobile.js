r = 0; l = 1; n = 0; temp = 0;
$(function () {
  $.ajax({
    url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/mobile.json",
    dataType: 'JSON',
    success: function (data) {

      $.each(data, function (key, value) {
        n++;
      });
      temp = n;

      $.each(data, function (key, value) {

        //four cols
        if (window.innerWidth < 992) {
          if ((l % 4) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 4 == 1) & (n == 1)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else if ((temp % 4 == 2) & (n == 2)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-0 "></div>');
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        //five cols
        else if (window.innerWidth < 1200 & window.innerWidth >= 992) {
          if (l % 5 == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 5 == 1) & (n == 1)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else if((temp%5==2)&(n==2)){
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0 "></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0 "></div>');
            n--;
          }
          else if ((temp % 5 == 3) & (n == 3)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0 "></div>');
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        //six cols
        else if (window.innerWidth >= 1200) {
          if ((l % 6) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }

          if ((temp % 6 == 1) & (n == 1)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
          }
          else if ((temp % 6 == 2) & (n == 2)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-3" id="' + r + '-mcol-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else if ((temp % 6 == 4) & (n == 4)) {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-0 "></div>');
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
            n--;
          }
        }

        l++;
      });
    }
  });
});