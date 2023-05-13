const DesignContainer = document.getElementById('design-row')
const FrontEndContainer = document.getElementById('front-end-row')
const officeContainer = document.getElementById('office-row')
const buraxilisContainer = document.getElementById('buraxilis-fennleri')
const qrupContainer = document.getElementById('qrup-fennleri')
const allCourses = document.getElementById('all-courses')

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
                    <a href="../../courses/course-details/office365.html">Word</a>
                    <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                    <a href="../../courses/course-details/front-end.html">Javascript</a>
                    <a href="../../courses/course-details/front-end.html">Front-end</a>
                    <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                    <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
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

    catch (e) { }

    try {
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
                    <a href="../../courses/course-details/office365.html">Word</a>
                    <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                    <a href="../../courses/course-details/front-end.html">Javascript</a>
                    <a href="../../courses/course-details/front-end.html">Front-end</a>
                    <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                    <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
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
    catch (e) { }

    try {
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
                    <a href="../../courses/course-details/office365.html">Word</a>
                    <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                    <a href="../../courses/course-details/front-end.html">Javascript</a>
                    <a href="../../courses/course-details/front-end.html">Front-end</a>
                    <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                    <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
                </div>
            </div>
            <div class="ads instagram">
                <div class="ads-img instagram">
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <h3>bizi instagramdan izləyin</h3>
                <a target="_blank" href="#">İnstagram</a>
            </div>
        </div>
            `
    }
    catch (e) { }

    try {
        buraxilisContainer.innerHTML =
            `
    <div class="col-xl-8 course-details_left-side">
                    <div class="course-details_img">
                        <img src="${JSONData[3].courseImg}" alt="">
                    </div>
                    <div class="course-details_info">
                        <div class="creator">
                            <div class="creator-img">
                                <img src="../../images/mahirM.jpg" alt="">
                            </div>
                            <h4>${JSONData[3].courseTeacher}</h4>
                        </div>
                        <div class="course-time">
                            <span>kurs müddəti : ${JSONData[3].courseTime} ay</span>
                        </div>
                        <div class="course-start">
                            <span>Yeni qrup: ${JSONData[3].newLesson}</span>
                        </div>
                    </div>
                    <h3>${JSONData[3].courseName} Kursu</h3>
                    <p>${JSONData[3].courseAbout}</p>
                    <h3>Nələr tədris olunacaq :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[3].courseDetail1}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[3].courseDetail2}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[3].courseDetail3}</li>
                    </ul>
                    <h3>Kursa qatıldıqdan sonra əldə edəcəksiniz :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-plus"></i>Yeni dostlar</li>
                        <li><i class="fa-solid fa-circle-plus"></i>İmtahan ərəfələrində əlavə dərs saatları</li>
                        <li><i class="fa-solid fa-circle-plus"></i>buraxılışdan yüksək nəticə</li>
                    </ul>
                    <h3>Müəllimlər</h3>
                    <div class="row">
                        <div class="col-xl-4 col-md-4">
                            <div class="course-teacher-img">
                               <img src="${JSONData[3].courseTeacherImg1}" alt="">
                            </div>
                            <h3>${JSONData[3].courseTeacherName1}</h3>
                            <p>${JSONData[3].courseTeacherInfo1}</p>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="course-teacher-img">
                                <img src="${JSONData[3].courseTeacherImg2}" alt="">
                            </div>
                            <h3>${JSONData[3].courseTeacherName2}</h3>
                            <p>${JSONData[3].courseTeacherInfo2}</p>
                        </div>
                        <div class="col-xl-4 col-md-4">
                            <div class="course-teacher-img">
                                <img src="${JSONData[3].courseTeacherImg3}" alt="">
                            </div>
                            <h3>${JSONData[3].courseTeacherName3}</h3>
                            <p>${JSONData[3].courseTeacherInfo3}</p>
                        </div>
                    </div>
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
                            <a href="../../courses/course-details/office365.html">Word</a>
                            <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                            <a href="../../courses/course-details/front-end.html">Javascript</a>
                            <a href="../../courses/course-details/front-end.html">Front-end</a>
                            <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                            <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
                        </div>
                    </div>
                    <div class="ads facebook">
                        <div class="ads-img facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <h3>bizi Facebookdan izləyin</h3>
                        <a target="_blank" href="#">Facebook</a>
                    </div>
                </div>
    `
    }
    catch (e) { }

    try {
        qrupContainer.innerHTML =
            `
                <div class="col-xl-8 course-details_left-side">
                    <div class="course-details_img">
                        <img src="${JSONData[4].courseImg}" alt="">
                    </div>
                    <div class="course-details_info">
                        <div class="creator">
                            <div class="creator-img">
                                <img src="../../images/mahirM.jpg" alt="">
                            </div>
                            <h4>${JSONData[4].courseTeacher}</h4>
                        </div>
                        <div class="course-time">
                            <span>kurs müddəti : ${JSONData[4].courseTime} ay</span>
                        </div>
                        <div class="course-start">
                            <span>Yeni qrup: ${JSONData[4].newLesson}</span>
                        </div>
                    </div>
                    <h3>${JSONData[4].courseName} Kursu</h3>
                    <p>${JSONData[4].courseAbout}</p>
                    <h3>Nələr tədris olunacaq :</h3>
                    <div class="row">
                        <div class="col-xl-4">
                            <h3>1 ci qruplar:</h3>
                            <ul class="course-detail">
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail1}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail2}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail3}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>2 ci qruplar:</h3>
                            <ul class="course-detail">
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail4}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail5}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail6}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>3 ci qruplar:</h3>
                            <ul class="course-detail">
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail7}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail8}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail9}</li>
                            </ul>
                        </div>
                    </div>
                    <h3>4 ci qruplar:</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail10}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail11}</li>
                        <li><i class="fa-solid fa-circle-check"></i>${JSONData[4].courseDetail12}</li>
                    </ul>
                    <h3>Kursa qatıldıqdan sonra əldə edəcəksiniz :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-plus"></i>Yeni dostlar</li>
                        <li><i class="fa-solid fa-circle-plus"></i>İmtahan ərəfələrində əlavə dərs saatları</li>
                        <li><i class="fa-solid fa-circle-plus"></i>blokdan yüksək nəticə</li>
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
                            <a href="../../courses/course-details/office365.html">Word</a>
                            <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                            <a href="../../courses/course-details/front-end.html">Javascript</a>
                            <a href="../../courses/course-details/front-end.html">Front-end</a>
                            <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                            <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
                        </div>
                    </div>
                    <div class="ads facebook">
                        <div class="ads-img facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <h3>bizi Facebookdan izləyin</h3>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100008478197393">Facebook</a>
                    </div>
                </div>
    `
    }
    catch (e) { }
    try {
        allCourses.innerHTML =
            `
                <div class="col-xl-8 course-details_left-side">
                    <div class="course-details_img">
                        <img src="${JSONData[5].courseImg}" alt="">
                    </div>
                    <div class="course-details_info">
                        <div class="creator">
                            <div class="creator-img">
                                <img src="../../images/mahirM.jpg" alt="">
                            </div>
                            <h4>${JSONData[5].courseTeacher}</h4>
                        </div>
                        <div class="course-time">
                            <span>kurs müddəti : ${JSONData[5].courseTime} ay</span>
                        </div>
                        <div class="course-start">
                            <span>Yeni qrup: ${JSONData[5].newLesson}</span>
                        </div>
                    </div>
                    <h3>${JSONData[5].courseName} Kursu</h3>
                    <p>${JSONData[5].courseAbout}</p>
                    <h3>Nələr tədris olunacaq :</h3>
                    <div class="row">
                        <div class="col-xl-4">
                            <h3>buraxılış fənnləri:</h3>
                            <ul class="course-detail">
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail1}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail2}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail3}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>1 ci qruplar:</h3>
                            <ul class="course-detail">
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail4}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail5}</li>
                                    <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail6}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>2 ci qruplar:</h3>
                            <ul class="course-detail">
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail7}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail8}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail9}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>3 ci qruplar:</h3>
                            <ul class="course-detail">
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail10}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail11}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail12}</li>
                            </ul>
                        </div>
                        <div class="col-xl-4">
                            <h3>4 ci qruplar:</h3>
                            <ul class="course-detail">
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail13}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail14}</li>
                                <li><i class="fa-solid fa-circle-check"></i>${JSONData[5].courseDetail15}</li>
                            </ul>
                        </div>
                    </div>
                    <h3>Kursa qatıldıqdan sonra əldə edəcəksiniz :</h3>
                    <ul class="course-detail">
                        <li><i class="fa-solid fa-circle-plus"></i>Yeni dostlar</li>
                        <li><i class="fa-solid fa-circle-plus"></i>İmtahan ərəfələrində əlavə dərs saatları</li>
                        <li><i class="fa-solid fa-circle-plus"></i>blok və buraxılışdan yüksək nəticə</li>
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
                            <a href="../../courses/course-details/office365.html">Word</a>
                            <a href="../../courses/course-details/dizayn.html">Qrafik dizayn</a>
                            <a href="../../courses/course-details/front-end.html">Javascript</a>
                            <a href="../../courses/course-details/front-end.html">Front-end</a>
                            <a href="../../courses/buraxilis-fenleri.html">Buraxılış fənləri</a>
                            <a href="../../courses/grup-fenleri.html">2-ci qrup fenleri</a>
                        </div>
                    </div>
                    <div class="ads facebook">
                        <div class="ads-img facebook">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <h3>bizi Facebookdan izləyin</h3>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100008478197393">Facebook</a>
                    </div>
                </div>
    `
    }
    catch (e) { }


}

