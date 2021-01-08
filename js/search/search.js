$(document).ready(function () {

  $('#Search').keyup(function () {
    var s = $('#Search').val();
    var exp = new RegExp(s, "i");
    $('#result').html('');
    $.ajax({
      url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
      dataType: 'json',
      success: function (data) {
        $.each(data, function (key, value) {

          if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
            $('#result').append('<li class="list-group-item"><img src = "' + value.image + '" class= "img-thumbnail" height=50px width=50px>' + value.name + ' | <span class= "text-muted">' + value.company + '</span></li>');
          }
        });
      },
      statusCode: {
        404: function () {
          alert("json file not found");
        }
      }
    });
  });

  $('#Searcht').keyup(function () {
    var s = $('#Searcht').val();
    var exp = new RegExp(s, "i");
    $('#resultt').html('');
    $.ajax({
      url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
      dataType: 'json',
      success: function (data) {
        $.each(data, function (key, value) {

          if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
            $('#resultt').append('<li class="list-group-item"><img src = "' + value.image + '" class= "img-thumbnail" height=50px width=50px>' + value.name + ' | <span class= "text-muted">' + value.company + '</span></li>');

          }
        });
      },
      statusCode: {
        404: function () {
          alert("json file not found");
        }
      }
    });
  });

  $('#Searchm').keyup(function () {
    var s = $('#Searchm').val();
    var exp = new RegExp(s, "i");
    $('#resultm').html('');
    $.ajax({
      url: 'https://nishithpatel1511.github.io/Gadgetworld/js/search/mobile.json',
      dataType: 'json',
      success: function (data) {
        $.each(data, function (key, value) {

          if (value.name.search(exp) != -1 || value.company.search(exp) != -1) {
            $('#resultm').append('<li class="list-group-item"><img src = "' + value.image + '" class= "img-thumbnail" height=50px width=50px>' + value.name + ' | <span class= "text-muted">' + value.company + '</span></li>');

          }
        });
      },
      statusCode: {
        404: function () {
          alert("json file not found");
        }
      }
    });
  });

});