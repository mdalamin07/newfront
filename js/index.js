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
    borderLink.forEach(function (a) {
        a.onclick = function (e) {
            e.preventDefault()
            a.classList.toggle('active')
        }
    })
    // colored box ara end 



    // animation area start 
    const animationWrappper = document.querySelector('.loading-animation-wrapper')
    const tabsWrapper = document.querySelector('#banner-area .tabs-wrapper')

    if (tabsWrapper.clientWidth > 0) {
        animationWrappper.classList.add('d-none')
    }
    // animation area end 



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




})