// preload
var preloadImgs = [];

// jquery stuff
$(function(){

  // img-svg
  $('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function(data) {
      var $svg = jQuery(data).find('svg');
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      $img.replaceWith($svg);
    }, 'xml');
  });

  // preload
  $('.intro-th a').each(function(){
    var img = new Image();
    img.src = $(this).data('src');
    preloadImgs.push(img);
  });

  // nav
  $('.overview-nav').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $('#overview').offset().top
    }, 500);
  });

  // img-border
  $('.img-border').each(function(){
    $(this).removeClass('img-border').wrap('<b class="img-border">');
  });

  // gallery
  $('.intro-th a').on('click', function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
      // thumbs
      $('.intro-th a').removeClass('active');
      $('.intro-th .ring').remove();
      $('.intro-th img').addClass('opacity-50');
      $(this).addClass('active').find('img').removeClass('opacity-50');
      $(this).append('<i class="ring -m-3px absolute pin rounded-sm shadow-ring transition"></i>');
      // swap
      var imgSrc = $(this).data('src');
      $('.intro-img').fadeOut('fast', function(){
        $(this).attr('src', imgSrc).fadeIn();
      });
    }
  });

  // controllers - explode
  $(window).on('load resize scroll', function() {
    $('.controls').each(function() {
      if($(this).inViewport('-400')) {
        $(this).addClass('explode');
        $('.controls-prefs').removeClass('opacity-0');
        $('.controls-intro').removeClass('opacity-0').find('h3').removeClass('pt-16');
      } else {
        $(this).removeClass('explode');
        $('.controls-prefs').addClass('opacity-0');
        $('.controls-intro').addClass('opacity-0').find('h3').addClass('pt-16');
      }
    });
  });

  // donate
  $('.donate-nav').click(function(e) {
    e.preventDefault();
    $(this).modal({
      fadeDuration: 250
    });
  });

});