function addNavbarToPage() {
    const navbar = document.createElement("nav");
    navbar.id = "myNavbar";
    navbar.innerHTML = `
    <div class="my-navbar" id="my-navbar">
    <div class="navbar-container container" id="nav-container">
        <div class="responsive-navbar" id="res-navbar">
            <div class="res-container">
                <div class="navbar-top">
                    <div class="res-logo">
                        <img src="../../texnoLogo.png" alt="logo">
                    </div>
                    <div class="xmark-icon" id="xmark-icon">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div class="navbar-bottom"> 
                    <div class="res-nav-links">
                        <a href="../../index.html">Ana Səhifə</a>
                        <a href="../../about-us.html">Haqqımızda</a>
                        <a href="#">fəaliyyətlər</a>
                        <a href="../../school/succes.html">Uğurlarımız</a>
                        <a href="../../school/teacher.html">Müəllimlər</a>
                        <a href="../../courses.html">Kurslarımız</a>
                        <a href="../../school/neticeler.html">Nəticələr</a>
                        <a href="../../school/exams.html">Sınaqlar</a>
                        <a href="../../school/tickets.html">Biletlər</a>
                        <a href="../../courses.html">Kurslar</a>
                        <a href="../../contact.html">Əlaqə</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="logo">
            <a href="../../index.html">
                <img src="../../texnoLogo.png" alt="logo">
            </a>
        </div>
        <div class="nav-links">
            <a href="../../index.html">Ana Səhifə</a>
            <a href="../../about-us.html">Haqqımızda</a>
            <a href="../../contact.html">Əlaqə</a>
            <ul class="drop-menu">
            <li>
                <a href="#">Kursumuz<i class="fa-solid fa-chevron-down"></i></a>
                <ul class="sub-menu">
                    <li><a href="../../courses.html">Kurslar</a></li>
                    <li><a href="../../school/succes.html">Uğurlarımız</a></li>
                    <li><a href="../../school/teachers.html">Müəllimlər</a></li>
                    <li><a href="#">Layihələr</a></li>
                    <li><a href="../../school/gallery.html">Qalereya</a></li>
                </ul>
            </li>
            <li><a href="#">İmtahanlar <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="sub-menu">
                    <li><a href="../../school/neticeler.html">Nəticələr</a></li>
                    <li><a href="../../school/exams.html">Sınaqlar</a></li>
                    <li><a href="../../school/tickets.html">Biletlər</a></li>
                </ul>
            </li>
        </ul>
        </div>
          <div class="navbar-btns">
        <a class="whatsapp-btn" href="#"><i class="fa-brands fa-whatsapp"></i></a>
        <a class="register-btn" href="../../register.html"><i class="fa-solid fa-right-to-bracket"></i><span>qeydiyyat</span></a>
        <div class="menu-icon" id="menu-icon">
        <i class="fa-solid fa-bars"></i>
    </div>
        </div>
    </div>
</div>
        `;
    const navbarContainer = document.querySelector("#my-navbar-container");
    navbarContainer.appendChild(navbar);
    addMyScrollClassOnScroll();
    const menuIcon = document.querySelector("#menu-icon");
    const xmarkIcon = document.querySelector("#xmark-icon");
    const responsiveNavbar = document.querySelector("#res-navbar");

    menuIcon.addEventListener("click", function () {
        responsiveNavbar.classList.add("transformX");
    });

    xmarkIcon.addEventListener("click", function () {
        responsiveNavbar.classList.remove('transformX')
    });
}

function addMyScrollClassOnScroll() {
    const navbar = document.querySelector("#my-navbar");
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 150) {
            navbar.classList.add("my-scroll");
        } else if (window.pageYOffset < 70) {
            navbar.classList.remove("my-scroll");
        }
    });
};

document.addEventListener("DOMContentLoaded", addNavbarToPage);

function addFooterToPage() {
    const footer = document.createElement("footer");
    footer.classList.add("my-footer");
    footer.innerHTML = `
    
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-6">
                    <div class="footer-logo">
                        <a href="#">
                            <img src="../../texnoLogo.png" alt="">
                        </a>
                    </div>
                    <p>bu sayt Mehdi Abasov tərəfindən Texno Tədris Mərkəzi üçün hazırlanmışdır.</p>
                    <div class="footer-icons">
                        <a class="f-facebook" href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a class="f-instagram" href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a class="f-whatsapp" href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <h3>Araştırın</h3>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../index.html">Ana Səhifə</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../about-us.html">Haqqımızda</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../courses.html">Kurslarımız</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="#">Qeydiyyat</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="#">Blog & News</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-md-6">
                    <h3>Faydalı Linklər</h3>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../contact.html">Bizimlə əlaqə</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../school/gallery.html">Qaleriya</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../school/neticeler.html">Nəticələr</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="#">Sınaqlar</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="../../school/teachers.html">Müəllimlər</a></li>
                    </ul>
                    <ul>
                        <li><i class="fa-solid fa-angles-right"></i><a href="#">Layihələr</a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-md-6">
                    <h3>Əlaqə</h3>
                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <h5>Cəlilabad merkez yolu</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i class="fa-solid fa-location-dot"></i>
                            <h5>Göytəpə parkın önü</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i class="fa-solid fa-phone"></i>
                            <a href="#">050 665 97 14</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>Copyright <span id="footerYear"></span> texnotm | <a href="#">created by Mehdi Abasov</a> | All rights reserved</p>
            </div>
        </div>
    </div>

    `;

    const footerContainer = document.querySelector('#footer_container')
    footerContainer.appendChild(footer)
}

document.addEventListener("DOMContentLoaded", addFooterToPage);


function getPageTitle(fileName) {
    return "TTM | " + fileName;
}

// Dosya adını al
var fileName = window.location.pathname.split('/').pop();
fileName = fileName.replace(/\.[^/.]+$/, "");

if (fileName === "index") {
    fileName = "Ana Sehife";
} else if (fileName === '') {
    fileName = "Ana Sehife"
}

fileName = fileName.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// Sayfa başlığına dinamik olarak ekle
document.title = getPageTitle(fileName);

$(document).ready(function () {
    $('#option-group, #comp-option').hide();

    $('#services-select').on('change', function () {
        if ($(this).val() === 'qrup-fenleri' || $(this).val() === 'ümumi-fenler') {
            $('#option-group').show();
            $('#comp-option').hide();
        } else if ($(this).val() === 'komputer-kurslari') {
            $('#comp-option').show();
            $('#option-group').hide();
        }
        else {
            $('#option-group, #comp-option').hide();
        }
    });
});
