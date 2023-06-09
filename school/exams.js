const examContainer = document.getElementById('exam-row')

window.onload = getExams

async function getExams() {

    try {
        var url = 'exams.json'
        const myExamData = await fetch(url)
        const myJSONData = await myExamData.json()
        for (let i = 0; i < myJSONData.length; i++) {
            examContainer.innerHTML +=
                `
                <div class="col-md-6 ">
                    <div class="exam-item"> 
                        <h4>${myJSONData[i].examName} imtahani</h4>
                        <p>${myJSONData[i].examInfo}</p>
                        <p>imtahan tarixi: ${myJSONData[i].examDate}</p>
                        <a href="./tickets.html">bilet al <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            `
        }
    }
    catch (e) { }
}
