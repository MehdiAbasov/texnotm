const serviceId = "service_guf9pte"
const templateId = "template_cillpyl"

const myRegisterForm = document.getElementById('register_form')
const btn = document.getElementById('register-btn')


myRegisterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    emailjs.sendForm(serviceId, templateId, this).then(
        () => {
            alert("sent");
        },
        (err) => {
            alert(JSON.stringify(err));
        }
    );
});