(function(){
  'use strict';

    $(function(){
      $('#btn').on('click',function(){
        $('#nav').toggleClass('active');
        if($('#nav').hasClass('active')){
           $('#btn').text('×');
         }else{
          $('#btn').text('menu');
         }
      });
    });

})();
