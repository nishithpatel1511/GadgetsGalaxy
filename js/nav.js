var clk = 0;
      $(function () 
      {
          $('#tg').click(function () {
          clk++;
          $('#tg').toggleClass('fa-times');
          if (clk % 2 == 0) {
           $('div:not(#mySidepanel)').css("filter", "blur(0px)");
           document.body.style.backgroundColor = "white"; 
            //$('#mySidepanel').css({ 'width': 0 });
            $('#mySidepanel').toggleClass('opensidepanel');
          }
          else {
            $('#mySidepanel').toggleClass('opensidepanel');
           $('div:not(#mySidepanel)').css("filter", "blur(4px)");
           document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          }
        });

        $('.closebtn').click(function () {
          clk++;
          $('#tg').toggleClass('fa-times');
           $('div:not(#mySidepanel)').css("filter", "blur(0px)");
            document.body.style.backgroundColor = "white"; 
            $('#mySidepanel').toggleClass('opensidepanel');
          
         });
        // $(document).click(function(e)
        // {
        //   if($(e.target).closest('#mySidepanel').length == 0)
        //   {
        //     clk++;
        //     $('#tg').toggleClass('fa-times');
        //     $('div:not(#mySidepanel)').css("filter", "blur(0px)");
        //      document.body.style.backgroundColor = "white"; 
        //     $('#mySidepanel').toggleClass('opensidepanel');
        //   }
        // });

      });
