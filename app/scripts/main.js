/* jshint devel:true */
'use strict';

$(function () {

  $('.speaker-card-cover, .speaker-card-content').hover(function () {
    $(this).addClass('card-hover');
  }, function () {
    $(this).removeClass('card-hover');
  });

});

/*
$(document).ready(function(){
  $('.menu a').click(function(){
    var id = $(this).prop('hash');

    if(id === '#home'){
      $('html, body').animate({
          scrollTop : 0
      },500);
    }else{
      $('html, body').animate({
          scrollTop : $('section'+id+'').offset().top
      },500);
    }
  });
});
*/

//$(function() {
//
//  var loadFullHeight = function() {
//    var screenHeight = $(window).height();
//    if (screenHeight > 768) { return; }
//    $('.event-cover, #event-about, #event-partner').each(function(index, item) {
//      var $content = $(item);
//      var contentHeight = $content.height();
//
//      if (contentHeight < screenHeight) {
//        $content.height(screenHeight);
//      }
//    });
//  };
//
//  $(window).bind('orientationchange resize pageshow', loadFullHeight);
//});
