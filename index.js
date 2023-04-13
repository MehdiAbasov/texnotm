const resNavbar = document.getElementById('res-navbar');
const menuIcon = document.getElementById('menu-icon');
const xmarkIcon = document.getElementById('xmark-icon');

if (menuIcon) {
    menuIcon.addEventListener('click', function () {
        resNavbar.classList.add('transformX')
    });
}
if (xmarkIcon) {
    xmarkIcon.addEventListener('click', function () {
        resNavbar.classList.remove('transformX')
    });
}



const myDiv = document.getElementById('myNavbar')

window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        myDiv.classList.add('my-scroll')
    }
    else if (window.scrollY < 70) {
        myDiv.classList.remove('my-scroll')
    }
})