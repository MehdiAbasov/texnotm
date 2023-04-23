const serviceId = "service_yabhvtz"
const templateId = "template_yts5ajy"

const myForm = document.getElementById('contactForm')
const btn = document.getElementById('submit')


myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailField = document.getElementById('contact-email')

    // E-posta adresi kontrolü
    if (emailField.value.trim() === '') {
        alert("Please fill out all fields.");
    } else {
        btn.value = "sending...";
        btn.disabled = true; // butonu pasif hale getir
        emailjs.sendForm(serviceId, templateId, this).then(
            () => {
                btn.value = "send";
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
