$(document).ready(function () {

    //carousel init start
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1199: {
                items: 4
            }
        }
    });

    $('.owl-carousel.gallery-wrapper').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        items: 2
    })
    //carousel init end


    //bar script start
    let bar = document.querySelector('.bar');
    let navigation = document.querySelector('.navigation');

    bar.onclick = function () {
        navigation.classList.toggle('active')
    }
   
    //bar script end



    // colored box ara start 
    const borderLink = document.querySelectorAll('.bordered-links a')
    borderLink.forEach(function(a){
        a.onclick= function(e){
            e.preventDefault()
            a.classList.toggle('active')
        }
    })

    // colored box ara end 




})

// Light Slider Start Here

$ = jQuery;
$( document ).ready(function() {
  $v_slider_options = {
      gallery: true,
      item: 1,
      loop:true,
      slideMargin: 0,
      thumbItem: 3,
      vThumbWidth:260,
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
 

// Light Slider End Here
