const inputUserName = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

inputUserName.addEventListener("input", handlerInput);

function handlerInput(evt) {
    const inputValue = evt.currentTarget.value.trim();
    span.textContent = inputValue ? inputValue : "Anonymous";
}