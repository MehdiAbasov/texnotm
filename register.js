
function isValidPhoneNumber(input) {
    // Girilen değer sayısal bir değer olmalı ve 10 basamaklı olmalıdır.
    if (!/^\d{10}$/.test(input)) {
        return false;
    }

    var allowedPrefixes = ["010", "050", "051", "070", "099"];
    var prefix = input.substring(0, 3);

    if (!allowedPrefixes.includes(prefix)) {
        return false;
    }

    return true;
}

function kullaniciNumaraGirisi(event) {
    var secim = document.getElementById("services-select").selectedIndex;
    // Girilen metni ve seçimi kontrol et
    if (secim === 0) {
        alert("xaiş edirik bir seçim edin.");
        event.preventDefault(); // Formu göndermeyi engeller
    }
    else {
        alert("telefon nömrəniz düzgün deyil, xaiş edirik düzgün nömrə qeyd edəsiniz");
        event.preventDefault(); // Formu göndermeyi engeller
    }
}

var form = document.getElementById("numaraForm");
form.addEventListener("submit", kullaniciNumaraGirisi);

