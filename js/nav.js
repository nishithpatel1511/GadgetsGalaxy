var clk = 0;
$(function () {
  $('#tg').click(function togglebtn() {
    clk++;
    $('#tg').toggleClass('fa-times');
    if (clk % 2 == 0) {
      $('div:not(#mySidepanel)').css("filter", "blur(0px)");
      document.body.style.backgroundColor = "white";
      //$('#mySidepanel').css({ 'width': 0 });
      $('#mySidepanel').toggleClass('opensidepanel');
      $('.closebtn').removeClass('closebtnopen');
      $('.nav-link').removeClass('nav-link-open');
      $('.brand').removeClass('brand-open');
      $('.closebtn').toggleClass('closebtnclose');
      $('.brand').toggleClass('brand-close');
      
    }
    else {
      $('#mySidepanel').toggleClass('opensidepanel');
      $('div:not(#mySidepanel)').css("filter", "blur(4px)");
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      $('.closebtn').removeClass('closebtnclose');
      $('.nav-link').removeClass('nav-link-close');
      $('.brand').removeClass('brand-close');
      $('.closebtn').toggleClass('closebtnopen');
      $('.brand').toggleClass('brand-open');
    }
  });

  $('.closebtn').click(function () {
    clk++;
    $('#tg').toggleClass('fa-times');
    $('div:not(#mySidepanel)').css("filter", "blur(0px)");
    document.body.style.backgroundColor = "white";
    $('#mySidepanel').toggleClass('opensidepanel');
    $('.closebtn').removeClass('closebtnopen');
    $('.nav-link').removeClass('nav-link-open');
    $('.brand').removeClass('brand-open');
    $('.closebtn').toggleClass('closebtnclose');
    $('.brand').toggleClass('brand-close');
  });

  $(document).click(function (e) {
    if (($(e.target).closest('#mySidepanel').length == 0) & ($('#mySidepanel').width() == 250)) {
      if ($(e.target).closest('#tg').length != 0) {
        togglebtn();
      }
      else {
        clk++;
        $('#tg').toggleClass('fa-times');
        $('div:not(#mySidepanel)').css("filter", "blur(0px)");
        document.body.style.backgroundColor = "white";
        $('#mySidepanel').toggleClass('opensidepanel');
        $('.closebtn').removeClass('closebtnopen');
        $('.nav-link').removeClass('nav-link-open');
        $('.brand').removeClass('brand-open');
        $('.closebtn').toggleClass('closebtnclose');
        $('.brand').toggleClass('brand-close');
      }
    }
  });
  
});
