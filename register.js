
function isValidPhoneNumber(input) {
    // Girilen değer sayısal bir değer olmalı ve 10 basamaklı olmalıdır.
    if (!/^\d{10}$/.test(input)) {
        return false;
    }

    var allowedPrefixes = ["010", "050", "051", "070", "099"];
    var prefix = input.substring(0, 3);

    // İlk üç basamak, desteklenen ön eklerden biriyle eşleşmelidir.
    if (!allowedPrefixes.includes(prefix)) {
        return false;
    }

    return true;
}

function kullaniciNumaraGirisi(event) {
    var girdi = document.getElementById("telefonNumarasi").value;
    var secim = document.getElementById("services-select").selectedIndex;

    // Girilen metni ve seçimi kontrol et
    if (girdi === "") {
        alert("Boş bir giriş yapıldı. Lütfen telefon numarasını giriniz.");
        event.preventDefault(); // Formu göndermeyi engeller
    } else if (secim === 0) {
        alert("Lütfen bir seçim yapın.");
        event.preventDefault(); // Formu göndermeyi engeller
    } else {
        alert("Geçersiz giriş. Telefon numaranız 10 basamaklı olmalı ve desteklenen bir ön ekle başlamalıdır.");
        event.preventDefault(); // Formu göndermeyi engeller
    }
}

var form = document.getElementById("numaraForm");
form.addEventListener("submit", kullaniciNumaraGirisi);

