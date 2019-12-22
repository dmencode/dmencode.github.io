// paralax top banner 

$(window).scroll(function(){

    let wScroll = $(this).scrollTop();

   $('.logo_txt').css({
     //    'transform' : 'translate(0px, '+wScroll/2+'%)'
   });
});


