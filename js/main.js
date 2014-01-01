$(document).ready(function(){

  // Image Thumbs
  $('img.img').wrap('<span class="img-overlay" />');

  // Modal
  $('.lean-modal').leanModal({top: '50%', overlay: 0.6});
  $('#lean-overlay').click(function(){
    $('#controls-video iframe').attr('src', $('#controls-video iframe').attr('src'));
  });

});