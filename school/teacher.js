const teacherContainer = document.getElementById('teacher-row')

window.onload = getTeacherData

async function getTeacherData() {

    try {
        const url = 'teachers.json'
        const myStringData = await fetch(url)
        const myJSONData = await myStringData.json()
        for (let i = 0; i < myJSONData.length; i++) {
            teacherContainer.innerHTML +=
                `
            <div class="col-xl-3 col-md-6">
                    <div class="teacher _teachers-teacher">
                        <div class="teacher-img">
                            <img src="${myJSONData[i].teacherImg}" alt="">
                            <div class="teacher-media-links">
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="teacher-info">
                            <h3>${myJSONData[i].teacherName}</h3>
                            <span>${myJSONData[i].teacherInfo}</span>
                        </div>
                    </div>
                </div>
            `
        }
    }
    catch (e) {

    }

}