$(document).ready(function () {

  //large screen
  $('#Search').keyup(function () {
    var s = $('#Search').val();
    var exp = new RegExp(s, "i");
    $('#result').html('');
    if (s != "") {
      $.ajax({
        url: 'https://nishithpatel1511.github.io/GadgetsGalaxy/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {
            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#result').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=55px width=55px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');
            }
          });
        },
        statusCode: {
          404: function () {
            alert("json file not found");
          }
        }
      });
    }
  });
//tablet
  $('#Searcht').keyup(function () {
    var s = $('#Searcht').val();
    var exp = new RegExp(s, "i");
    $('#resultt').html('');
    if (s != "") {
      $.ajax({
        url: 'https://nishithpatel1511.github.io/GadgetsGalaxy/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {
            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#resultt').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=55px width=55px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');
            }
          });
        },
        statusCode: {
          404: function () {
            alert("json file not found");
          }
        }
      });
    }
  });

//mobile
  $('#Searchm').keyup(function () {
    var s = $('#Searchm').val();
    var exp = new RegExp(s, "i");
    $('#resultm').html('');
    if (s != "") {
      $.ajax({
        url: 'https://nishithpatel1511.github.io/GadgetsGalaxy/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {
            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#resultm').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=55px width=55px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');
              $('.carousel').css("z-index","-1");
            }
          });
        },
        statusCode: {
          404: function () {
            alert("json file not found");
          }
        }
      });
    }
  });

});