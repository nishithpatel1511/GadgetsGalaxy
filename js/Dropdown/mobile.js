// r = 1;
// l = 1;
// n = 0;
// $(function () {
//   $.ajax({
//     url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/mobile.json",
//     dataType: 'JSON',
//     success: function (data) {

//       $.each(data, function (keys, value) {
//         $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
//         $.each(value, function (key, val) {
//           n++;
//         });

//         $.each(value, function (key, val) {
//           row = '#mrow-' + r;
//           if (n == 1) {
//             $(row).append('<div class="col-12 megamenu-col" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
//             col = '#' + r + '-mcol-' + l;
//             $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
//             list = '#' + r + '-list-' + l;
//             $.each(val, function (k, v) {
//               $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
//             });
//             l++;
//           }
//           else if (n == 2) {
//             if (l == 1) {
//               $(row).append('<div class="col-3 megamenu-col" id="' + r + '-mcol-0"></div>');
//               l++;
//               $(row).append('<div class="col-3 megamenu-col" id="' + r + '-mcol-' + (l-1) + '" style="text-align: center;"></div>');
//               col = '#' + r + '-mcol-' + (l-1);
//               $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l-1) + '"></ul>');
//               list = '#' + r + '-list-' + (l-1);
//               $.each(val, function (k, v) {
//                 $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
//               });
//               l++;
//             }
//             else if(l==4)
//             {
//               $(row).append('<div class="col-3 megamenu-col" id="' + r + '-mcol-0"></div>');
//               l++;
//             }
//             else {
//               $(row).append('<div class="col-3 megamenu-col" id="' + r + '-mcol-' + (l-1) + '" style="text-align: center;"></div>');
//               col = '#' + r + '-mcol-' + (l-1);
//               $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l-1) + '"></ul>');
//               list = '#' + r + '-list-' + (l-1);
//               $.each(val, function (k, v) {
//                 $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
//               });
//               l++;
//             }

//           }
//           else {

//             $(row).append('<div class="col-3 megamenu-col" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
//             col = '#' + r + '-mcol-' + l;
//             $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
//             list = '#' + r + '-list-' + l;
//             $.each(val, function (k, v) {
//               $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
//             });
//             l++;
//           }
//         });
//         r++;
//         n = 0;
//         l = 1;
//       });
//     }
//   });
// });




r = 0;
l = 1;
n = 0;
$(function () {
  $.ajax({
    url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/temp_D-mobile.json",
    dataType: 'JSON',
    success: function (data) {

      $.each(data, function (key, value) {



        if (window.innerWidth < 992) {
          if ((l % 4) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }
          row = '#mrow-' + r;
          $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
          col = '#' + r + '-mcol-' + l;
          $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
          list = '#' + r + '-list-' + l;
          $.each(value, function (k, v) {
            $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
          });
        }
        else if (window.innerWidth < 1200 & window.innerWidth >= 992) {
          if ((l % 5) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }
          row = '#mrow-' + r;
          $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
          col = '#' + r + '-mcol-' + l;
          $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
          list = '#' + r + '-list-' + l;
          $.each(value, function (k, v) {
            $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
          });
        }
        else if (window.innerWidth >= 1200) {
          if ((l % 6) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }
          row = '#mrow-' + r;
          $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
          col = '#' + r + '-mcol-' + l;
          $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
          list = '#' + r + '-list-' + l;
          $.each(value, function (k, v) {
            $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
          });
        }

        l++;
        
      });
    }
  });
});




