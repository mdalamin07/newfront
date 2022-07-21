$ = jQuery;
$( document ).ready(function() {
  $v_slider_options = {
      gallery: true,
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 3,
      vThumbWidth:300,
      galleryMargin: 10,
      thumbMargin: 10,
      vertical: true
  };
  v_slider = $('#lightSliderVertical').lightSlider($v_slider_options);

  /* Fancybox & lightSlider Sync - Bug Fix */
  $selector = '#lightSlider li:not(".clone") a';
  $selector += ',#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    selector : $selector,
    backFocus : false, //The most important options for sync bug fix
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'thumbs',
      'download',
      'close'
    ]
  });
});


$( window ).resize(function() {
		slider.destroy();
		h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
});