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
    let bar = document.querySelectorAll('.bar');
    let navigation = document.querySelector('.navigation');
    bar.forEach(function (b) {
        b.onclick = function () {
            b.previousElementSibling.classList.toggle('active');
            // console.log(b.closest('.navigation'));
        }
    })


    //bar script end



    // colored box ara start 
    const borderLink = document.querySelectorAll('.bordered-links a')
    borderLink.forEach(function (a) {
        a.onclick = function (e) {
            e.preventDefault()
            a.classList.toggle('active')
        }
    })
    // colored box ara end 



    // skeleton animation area start 
    const animationWrappper = document.querySelector('.skeleton-animation-wrapper')
    const tabsWrapper = document.querySelector('#banner-area .tabs-wrapper')

    if (tabsWrapper.clientWidth > 0) {
        animationWrappper.classList.add('d-none')
    }
    //skeleton  animation area end 



    // sticky header script start 
    const html = document.querySelector('html');
    const stickyHeader = document.querySelector('.stickyHeader');
    window.onscroll = function () {
        // console.log(html.scrollTop);
        if (html.scrollTop >= 300) {
            stickyHeader.classList.add('active')
        } else {
            stickyHeader.classList.remove('active')
        }
    }
    // sticky header script end 


    //loading animation area start 
    const loadingWrpr = document.querySelector('.loading-animation-wrapper');
    const RechercherBtn = document.querySelector('.Rechercher-btn ');
    RechercherBtn.onclick = function () {
        loadingWrpr.classList.remove('d-none')
    }
    //loading animation area end




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
      vertical: true,
      responsive : [
        {
          breakpoint:992,
          settings: {
            thumbItem: 4,
            vThumbWidth:160,
    
          }
        },
        {
          breakpoint:576,
          settings: {
            thumbItem: 6,
            vThumbWidth:100,
          }
        }
      ]
  };
  v_slider = $('#lightSliderVertical').lightSlider($v_slider_options);
//   responsive


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


// $( window ).resize(function() {
// 		slider.destroy();
// 		h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
// });
 

// Light Slider End Here
