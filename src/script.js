// paralax top banner 

h_flag = $(window).height()*.150;
h_footer = $(window).height()*.20;

$('.flag').css({
  'height' : h_flag +'px'
});
$('.footer').css({
  'height' : h_footer +'px'
});

$(window).scroll(function(){
   
  let wScroll = $(this).scrollTop();
  
  
  // ---------img paralax-------
  $('.logo_txt').css({
     'transform' : 'translate(0px, '+wScroll/5+'%)'  
   });



// --------shaw block skils---------
if(wScroll > $('.content_section .block_skils').offset().top - ($(window).height() / 1.2)) {
    $('.block_skils').each(function(i){

      setTimeout(function(){
        $('.block_skils').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }





// ------------------footer parala--------------
  let wih = $('.flag').offset().top - ($(window).height());


  if(wScroll>wih) { 

    $('.parallax__layer__5').css({
      'transform' : 'translate(0px, '+(wScroll-wih)*-.15+'%)'
    });

    $('.parallax__layer__6').css({
      'transform' : 'translate(0px, '+(wScroll-wih)*-0.6+'%)'
    });

    $('.cover_paralax').css({
      'height' : (10+((wScroll-wih)*2.8))+'px'
    });

    $('.pre_paralax').css({
      'transform' : 'translate(0px, '+(wScroll -wih)*0.7+'%)'
    });

 
  
}

let wih2 = $('.cover_paralax').offset().top - ($(window).height());

console.log('wscroll   '+wScroll);
console.log(wih2);




if(wScroll>wih2){
  $('.nav').addClass('hiden_nav');
}


if(wScroll<wih2){
  $('.nav').removeClass('hiden_nav');
}

});  
