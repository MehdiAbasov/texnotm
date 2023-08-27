const galleryContainer = document.getElementById('gallery_container')

window.onload = getGalleryData
async function getGalleryData() {
    const url = 'gallery.json'
    const stringData = await fetch(url)
    const JSONData = await stringData.json()
    try {
        for (let i = 0; i < JSONData.length; i++) {
            galleryContainer.innerHTML +=
                `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 gallery-item">
            <img src="${JSONData[i].Img}" alt="${JSONData[i].Name}">
        </div>
            `
        }
    }
    catch (e) { }
}