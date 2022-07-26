$(document).ready(function () {


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


    // result button script for small screen start 
    const arrowBtn = document.querySelector('.aside-wrapper .arrow-btn');
    const closeBtn = document.querySelector('.aside-wrapper .left-aside .close-btn');
    const leftAside = document.querySelector('.aside-wrapper .left-aside');

    arrowBtn.onclick = function () {
        leftAside.classList.toggle('active')
    }
    closeBtn.onclick = function () {
        leftAside.classList.toggle('active')
    }
    // result button script for small screen end 




})