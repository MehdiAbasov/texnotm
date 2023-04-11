const navbar = `

<div class="container navbar-container">
<div class="responsive-navbar" id="res-navbar">
    <div class="res-container">
        <div class="navbar-top">
            <div class="res-logo">
                <img src="./texnoLogo.png" alt="">
            </div>
            <div class="xmark-icon" id="xmark-icon">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div class="navbar-bottom">
            <div class="res-nav-links">
                <a href="#">Ana Səhifə</a>
                <a href="./about-us.html">Haqqımızda</a>
                <a href="#">fəaliyyətlər</a>
                <a href="#">Uğurlarımız</a>
                <a href="#">Nəticələr</a>
                <a href="#">Sınaqlar</a>
                <a href="#">Biletlər</a>
                <a href="№">Kurslar</a>
            </div>
        </div>
    </div>
</div>
<div class="logo">
    <a href="#">
        <img src="./texnoLogo.png" alt="logo">
    </a>
</div>
<div class="nav-links">
    <a href="#">Ana Səhifə</a>
    <a href="about-us.html">Haqqımızda</a>
    <a href="#">Əlaqə</a>
    <div class="dropdown">
        <div class="drop-btn">
            <a href="#">Kursumuz <i class="fa-solid fa-angle-down"></i></a>
        </div>
        <div class="drop-elements">
            <a href="#">kurslar</a>
            <a href="#">Uğurlarımız</a>
            <a href="#">fəaliyyətlər</a>
        </div>
    </div>
    <div class="dropdown">
        <div class="drop-btn">
            <a href="#">İmtahanlar <i class="fa-solid fa-angle-down"></i></a>
        </div>
        <div class="drop-elements">
            <a href="#">Sınaqlar</a>
            <a href="#">Biletlər</a>
            <a href="#">Nəticələr</a>
        </div>
    </div>
</div>
<div class="menu-icon" id="menu-icon">
    <i class="fa-solid fa-bars"></i>
</div>
<div class="social-media-icons">
    <a href="#"><i class="fa-brands fa-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
</div>
</div>
`

document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.getElementById('myNavbar');
    navbarContainer.innerHTML = navbar;
});
