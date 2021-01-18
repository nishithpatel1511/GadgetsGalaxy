r = 0;
l = 1;
n = 0;
temp = 0;
count = 0;
$(function () {
  $.ajax({
    url: "https://nishithpatel1511.github.io/GadgetsGalaxy/js/Dropdown/camera.json",
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
          if (temp % 4 == 1) {
            if (n == 1) {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
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
              $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
          }

          else if (temp % 4 == 2) {
            if (n <= 2) {
              if (l == 1) {
                $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-0"></div>');
                l++;
                $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(val, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });

              }
              else {
                row = '#mrow-' + r;
                $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(value, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
                n--;
              }
            }
            else {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
          }

          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-4" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
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
          if ((l % 5) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }

          if (temp % 5 == 1) {
            if (n == 1) {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
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
              $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
          }
          else if (temp % 5 == 2) {
            if (n <= 2) {
              count++;
              $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0"></div>');
              l++;
              $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + count + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + count;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + count + '"></ul>');
              list = '#' + r + '-list-' + count;
              $.each(val, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
            else {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
          }
          else if (temp % 5 == 3) {
            if (n <= 3) {
              if (l == 1) {
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0"></div>');
                l++;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(val, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
              }
              else {
                row = '#mrow-' + r;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(value, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
                n--;
              }
            }
            else {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
              n--;
            }
          }
          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
          }
        }

        //six cols
        else if (window.innerWidth >= 1200) {
          if ((l % 6) == 1) {
            r++;
            $('#megamenu-mobile').append('<div class="row megamenu-row" id="mrow-' + r + '"></div>');
            l = 1;
          }
          if (temp % 6 == 1) {
            if (n == 1) {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-1" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
            }
            else {
              row = '#mrow-' + r;
              $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
              col = '#' + r + '-mcol-' + l;
              $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
              list = '#' + r + '-list-' + l;
              $.each(value, function (k, v) {
                $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
              });
            }
          }
          else if(temp%6 == 2){
            if(n<=2)
            {
              if (l == 1) {
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0"></div>');
                l++;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0"></div>');
                l++;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 2) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 2);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 2) + '"></ul>');
                list = '#' + r + '-list-' + (l - 2);
                $.each(val, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
              }
              else {
                row = '#mrow-' + r;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 2) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 2);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 2);
                $.each(value, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
                n--;
              }
            }
          }
          else if(temp%6==4)
          {
            if(n<=4)
            {
              if (l == 1) {
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-0"></div>');
                l++;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(val, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
              }
              else {
                row = '#mrow-' + r;
                $(row).append('<div class="megamenu-col-5" id="' + r + '-mcol-' + (l - 1) + '" style="text-align: center;"></div>');
                col = '#' + r + '-mcol-' + (l - 1);
                $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + (l - 1) + '"></ul>');
                list = '#' + r + '-list-' + (l - 1);
                $.each(value, function (k, v) {
                  $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
                });
                n--;
              }
            }
          }
          else {
            row = '#mrow-' + r;
            $(row).append('<div class="megamenu-col-6" id="' + r + '-mcol-' + l + '" style="text-align: center;"></div>');
            col = '#' + r + '-mcol-' + l;
            $(col).append('<h5 id="megamenu-title">' + key + '</h5><ul class="list-unstyled megamenu-list" id="' + r + '-list-' + l + '"></ul>');
            list = '#' + r + '-list-' + l;
            $.each(value, function (k, v) {
              $(list).append('<li><a href="' + v.link + '">' + v.name + '</a></li>');
            });
          }
        }

        l++;

      });
    }
  });
});




