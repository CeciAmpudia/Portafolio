$(document).ready(function(){ 

   var scroll_start = 0;
   var startchange = $('#top');
   var offset = startchange.offset();

    if (startchange.length){
      $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#F89D0E');
       }
   });
    }

});

