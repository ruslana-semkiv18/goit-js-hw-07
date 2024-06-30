const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();

    const {email, password} = evt.currentTarget.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        alert("All form fields must be filled in");
        return;
    }
    
    const data = {
        email: emailValue,
        password: passwordValue,
    }

    console.log(data);
    form.reset();
}