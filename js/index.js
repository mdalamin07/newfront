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




})