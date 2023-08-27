const sucGaleryContainer = document.getElementById('sucGallery_container')

window.onload = getSuccesData
async function getSuccesData() {
    const url = 'succes.json'
    const stringData = await fetch(url)
    const JSONData = await stringData.json()
    try {
        for (let i = 0; i < JSONData.length; i++) {
            sucGaleryContainer.innerHTML +=
                `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-item">
            <img src="${JSONData[i].Img}" alt="${JSONData[i].Name}">
        </div>
            `
        }
    }
    catch (e) { }
}