$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },

            768: {
                items: 3
            }
        }
    });
});


const resNav = document.getElementById('res-navbar')
const menuIcon = document.getElementById('menu-icon')
const xmarkIcon = document.getElementById('xmark-icon')

menuIcon.addEventListener('click', function () {
    resNav.classList.add('transformX')
})

xmarkIcon.addEventListener('click', function () {
    resNav.classList.remove('transformX')
})