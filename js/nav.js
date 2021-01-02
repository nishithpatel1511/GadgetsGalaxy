var clk = 0;
      $(function () 
      {
          $('#tg').click(function () {
          clk++;
          $('#tg').toggleClass('fa-times');
          if (clk % 2 == 0) {
           $('div:not(#mySidepanel)').css("filter", "blur(0px)");
           document.body.style.backgroundColor = "white"; 
            $('#mySidepanel').css({ 'width': 0 });
          }
          else {
            $('#mySidepanel').css({ 'width': 250 });
           $('div:not(#mySidepanel)').css("filter", "blur(4px)");
           document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          }
        });

        $('.closebtn').click(function () {
          clk++;
          $('#tg').toggleClass('fa-times');
          if (clk % 2 == 0) {
            
           $('div:not(#mySidepanel)').css("filter", "blur(0px)");
            document.body.style.backgroundColor = "white"; 
            $('#mySidepanel').css({ 'width': 0 });
          }
          else {
            $('#mySidepanel').css({ 'width': 250 });
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            
           $('div:not(#mySidepanel)').css("filter", "blur(4px)");
          }
        });

        // $('div:not(#mySidepanel)').click(function () {
        // //  if (($('#mySidepanel').width()) == 250) {
        // //     clk++;
        // //     //  $('#tg').toggleClass('fa-times');
        // //     $('div:not(#mySidepanel)').css("filter", "blur(0px)");
        // //     document.body.style.backgroundColor = "white"; 
        // //     $('#mySidepanel').css({ 'width': 0 });
        // //   }
        // clk++;
        //   $('#tg').toggleClass('fa-times');
        // });


      });
