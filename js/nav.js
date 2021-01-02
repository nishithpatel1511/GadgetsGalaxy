var clk = 0;
      $(function () 
      {
          //click on toggler
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
           var a = ($('#mySidepanel').hasclass('sidepanel'));
            alert(a);
          }
        });
        
        //click on the close btn
        $('.closebtn').click(function () {
          clk++;
          $('#tg').toggleClass('fa-times');
           $('div:not(#mySidepanel)').css("filter", "blur(0px)");
            document.body.style.backgroundColor = "white"; 
            $('#mySidepanel').toggleClass('opensidepanel');
          
         });

        //click outside automatic close
        $(document).click(function(e)
        {
          if(($(e.target).closest('#mySidepanel').length == 0)&($('#mySidepanel').width() == 250))
          {
            clk++;
            $('#tg').toggleClass('fa-times');
            $('div:not(#mySidepanel)').css("filter", "blur(0px)");
             document.body.style.backgroundColor = "white"; 
            $('#mySidepanel').toggleClass('opensidepanel');
          }
        });

      });
