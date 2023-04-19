const courseContainer = document.getElementById('course_container')

window.onload = getCourseData
async function getCourseData() {
    const url = 'coursedata.json'
    const stringData = await fetch(url)
    const myJSONData = await stringData.json()

    try {
        for (let i = 0; i < myJSONData.length; i++) {
            courseContainer.innerHTML +=
                `
            <div class="courses_course-item">
                <div class="row">
                    <div class="col-xl-6 col-md-12">
                        <img src="${myJSONData[i].courseImg}" alt="">
                    </div>
                    <div class="col-xl-6 col-md-12 courses_course-info">
                        <h1>${myJSONData[i].courseName}</h1>
                        <p>${myJSONData[i].courseInfo}</p>
                        <p>${myJSONData[i].courseInfo2}</p>
                        <div class="course-register-btn">
                            <a href="${myJSONData[i].courseLink}">Dərslərə Bax</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
    catch (e) { }
}