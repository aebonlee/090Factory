$(function(){
  var $btnTop = $('.top');
  var $slide = $('.slides li');

  var nowIdx = 0;
  var intervalKey = null;

  function nextIdx(){
    if(nowIdx<2){
      nowIdx++;
    }else{
      nowIdx = 0;
    }
  }

  function slideMove(){
    intervalKey = setInterval(function(){
      nextIdx();

      $slide.filter('.on').stop().fadeOut(1500).removeClass('on');
      $slide.eq(nowIdx).stop().fadeIn(1500).addClass('on');
    },2000);
  }

  slideMove();

  $('.slides').mouseenter(function(){
    clearInterval(intervalKey);
  });

  $('.slides').mouseleave(function(){
    slideMove();
  });//end of slide banner

  $btnTop.on('click',function(){
    var topVal = $('header').offset().top;

    $('html,body').stop().animate({
      scrollTop : topVal
    },1000,'easeInOutCubic');
  });//end of top button
});