jQuery(function(){
  $('#moreButton').bind('click',function(){
    // $('body').scrollTop( $('div.rabbit').offset().top )
    $('body')
      .animate({scrollTop:$('div.rabbit').offset().top}, 500, 'easeInOutQuart')
  });
});