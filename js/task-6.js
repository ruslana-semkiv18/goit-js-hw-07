function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


buttonCreate.addEventListener("click", createBoxes);

function createBoxes() {
  const number = inputNumber.value;
  if (number >= 1 && number <= 100) {
    boxesContainer.innerHTML = "";
    let size = 30;
    for (let i = 0; i < number; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
    inputNumber.value = "";
  } 
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
   