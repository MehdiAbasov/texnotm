const DesignContainer = document.getElementById('design-row')
const FrontEndContainer = document.getElementById('front-end-row')
const officeContainer = document.getElementById('office-row')

window.onload = getCourseInfo
async function getCourseInfo() {
    const url = "../../course-details.json"
    const stringData = await fetch(url)
    const JSONData = await stringData.json()
    try {
            DesignContainer.innerHTML =
            `
            <div class="col-xl-8 course-details_left-side">
                    <div class="course-details_img">
                        <img src="../../images/course-img/design.jpg" alt="">
                    </div>
                    <div class="course-details_info">
                        <div class="creator">
                            <div class="creator-img">
                                <img src="../../images/mahirM.jpg" alt="">
                            </div>
                            <h4>${JSONData[0].courseTeacher}</h4>
                        </div>
                        <div class="course-time">
                            <span>kurs müddəti : ${JSONData[0].courseTime} ay</span>
                        </div>
                        <div class="course-start">
                            <span>Yeni qrup: ${JSONData[0].newLesson}</span>
                        </div>
                    </div>
                    <h3>${JSONData[0].courseName} Kursu</h3>
                    <p>${JSONData[0].courseAbout}</p>
                    <h3>Nələr tədris olunacaq :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[0].courseDetail1}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[0].courseDetail2}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[0].courseDetail3}</li>
                    </ul>
                    <h3>Kursu bitirdikdən sonra əldə edəcəksiniz :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-plus"></i> İmtahan nəticənizə əsasən <b>Diplom</b> və
                            <b>Sertifikat</b> ;</li>
                        <li><i class="fa-solid fa-circle-plus"></i> programlarda profisionalca işləmək ;</li>
                        <li><i class="fa-solid fa-circle-plus"></i> Aldığınız kursdakı dəyişiklikləri ödənişsiz əldə
                            etmək ;</li>
                    </ul>
                </div>
                <div class="col-xl-4 course-details_right-side">
                    <div class="search-input">
                        <h3>Axtar</h3>
                        <form class="">
                            <input type="text" placeholder="Axtar..." name="search">
                        </form>
                    </div>
                    <div class="categories">
                        <h3>Kateqoriyalar</h3>
                        <div class="category-links">
                            <a href="#">Word</a>
                            <a href="#">Dim</a>
                            <a href="#">Javascript</a>
                            <a href="#">Front-end</a>
                            <a href="#">Buraxılış fənləri</a>
                            <a href="#">2-ci qrup fenleri</a>
                        </div>
                    </div>
                    <div class="ads instagram">
                        <div class="ads-img">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <h3>bizi instagramdan izləyin</h3>
                        <a target="_blank" href="#">İnstagram</a>
                    </div>
                </div>
            `
    }
   
    catch (e) {}

    try{
        FrontEndContainer.innerHTML =
            `
            <div class="col-xl-8 course-details_left-side">
            <div class="course-details_img">
                <img src="${JSONData[1].courseImg}" alt="">
            </div>
            <div class="course-details_info">
                <div class="creator">
                    <div class="creator-img">
                        <img src="../../images/mahirM.jpg" alt="">
                    </div>
                    <h4>${JSONData[1].courseTeacher}</h4>
                </div>
                <div class="course-time">
                    <span>kurs müddəti : ${JSONData[1].courseTime} ay</span>
                </div>
                <div class="course-start">
                    <span>Yeni qrup: ${JSONData[1].newLesson}</span>
                </div>
            </div>
            <h3>${JSONData[1].courseName} Kursu</h3>
            <p>${JSONData[1].courseAbout}</p>
            <h3>Nələr tədris olunacaq :</h3>
            <ul class="course-detail">
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail1}</li>
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail2}</li>
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail3}</li>
                <ul class="course-detail">
                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail4}</li>
                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail5}</li>
                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[1].courseDetail6}</li>
                </ul>
            </ul>
            <h3>Kursu bitirdikdən sonra əldə edəcəksiniz :</h3>
            <ul class="course-detail">
                <li><i class="fa-solid fa-circle-plus"></i> İmtahan nəticənizə əsasən <b>Diplom</b> və
                    <b>Sertifikat</b> ;</li>
                <li><i class="fa-solid fa-circle-plus"></i> programlarda profisionalca işləmək ;</li>
                <li><i class="fa-solid fa-circle-plus"></i> Aldığınız kursdakı dəyişiklikləri ödənişsiz əldə
                    etmək ;</li>
            </ul>
        </div>
        <div class="col-xl-4 course-details_right-side">
            <div class="search-input">
                <h3>Axtar</h3>
                <form class="">
                    <input type="text" placeholder="Axtar..." name="search">
                </form>
            </div>
            <div class="categories">
                <h3>Kateqoriyalar</h3>
                <div class="category-links">
                    <a href="#">Word</a>
                    <a href="#">Dim</a>
                    <a href="#">Javascript</a>
                    <a href="#">Front-end</a>
                    <a href="#">Buraxılış fənləri</a>
                    <a href="#">2-ci qrup fenleri</a>
                </div>
            </div>
            <div class="ads instagram">
                <div class="ads-img">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <h3>bizi instagramdan izləyin</h3>
                <a target="_blank" href="#">İnstagram</a>
            </div>
        </div>
            `
    }
    catch(e){}

    try{
        officeContainer.innerHTML =
        `
            <div class="col-xl-8 course-details_left-side">
            <div class="course-details_img">
                <img src="${JSONData[2].courseImg}" alt="">
            </div>
            <div class="course-details_info">
                <div class="creator">
                    <div class="creator-img">
                        <img src="../../images/mahirM.jpg" alt="">
                    </div>
                    <h4>${JSONData[2].courseTeacher}</h4>
                </div>
                <div class="course-time">
                    <span>kurs müddəti : ${JSONData[2].courseTime} ay</span>
                </div>
                <div class="course-start">
                    <span>Yeni qrup: ${JSONData[2].newLesson}</span>
                </div>
            </div>
            <h3>${JSONData[2].courseName} Kursu</h3>
            <p>${JSONData[2].courseAbout}</p>
            <h3>Nələr tədris olunacaq :</h3>
            <ul class="course-detail">
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[2].courseDetail1}</li>
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[2].courseDetail2}</li>
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[2].courseDetail3}</li>
                <li><i class="fa-solid fa-circle-check"></i>${JSONData[2].courseDetail4}</li>
            </ul>
            <h3>Kursu bitirdikdən sonra əldə edəcəksiniz :</h3>
            <ul class="course-detail">
                <li><i class="fa-solid fa-circle-plus"></i> İmtahan nəticənizə əsasən <b>Diplom</b> və
                    <b>Sertifikat</b> ;</li>
                <li><i class="fa-solid fa-circle-plus"></i> programlarda profisionalca işləmək ;</li>
                <li><i class="fa-solid fa-circle-plus"></i> Aldığınız kursdakı dəyişiklikləri ödənişsiz əldə
                    etmək ;</li>
            </ul>
        </div>
        <div class="col-xl-4 course-details_right-side">
            <div class="search-input">
                <h3>Axtar</h3>
                <form class="">
                    <input type="text" placeholder="Axtar..." name="search">
                </form>
            </div>
            <div class="categories">
                <h3>Kateqoriyalar</h3>
                <div class="category-links">
                    <a href="#">Word</a>
                    <a href="#">Dim</a>
                    <a href="#">Javascript</a>
                    <a href="#">Front-end</a>
                    <a href="#">Buraxılış fənləri</a>
                    <a href="#">2-ci qrup fenleri</a>
                </div>
            </div>
            <div class="ads instagram">
                <div class="ads-img">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <h3>bizi instagramdan izləyin</h3>
                <a target="_blank" href="#">İnstagram</a>
            </div>
        </div>
            `
    }
    catch(e){}
}

