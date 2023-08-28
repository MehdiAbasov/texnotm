const serviceId = "service_plhdte1"
const templateId = "template_iw3y4nq"

const myForm = document.getElementById('contactForm')
const btn = document.getElementById('submit')


myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailField = document.getElementById('contact-email')

    // E-posta adresi kontrolü
    if (emailField.value.trim() === '') {
        alert("Please fill out all fields.");
    } else {
        btn.value = "göndərilir...";
        btn.disabled = true; // butonu pasif hale getir
        emailjs.sendForm(serviceId, templateId, this).then(
            () => {
                btn.value = "göndərildi";
                btn.disabled = false; // butonu tekrar aktif hale getir
                alert("sent");
            },
            (err) => {
                btn.disabled = false; // butonu tekrar aktif hale getir
                alert(JSON.stringify(err));
            }
        );
    }
});
