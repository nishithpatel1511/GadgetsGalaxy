$(document).ready(function () {

  //large screen
  $('#Search').keyup(function () {
    var s = $('#Search').val();
    var exp = new RegExp(s, "i");
    $('#result').html('');
    if (s != "") {
      $.ajax({
        url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {
            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#resultm').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=50px width=50px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');
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
        url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {

            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#resultm').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=50px width=50px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');

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

  $('#Searchm').keyup(function () {
    var s = $('#Searchm').val();
    var exp = new RegExp(s, "i");
    $('#resultm').html('');
    if (s != "") {
      $.ajax({
        url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
        dataType: 'json',
        success: function (data) {
          $.each(data, function (key, value) {
            if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
              $('#resultm').append('<li class="list-group-item search-li"><img src = "' + value.image + '" height=50px width=50px><div><span>' + value.name + '</span><span>' + value.company + '</span></div></li>');
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