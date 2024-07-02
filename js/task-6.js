function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");


buttonCreate.addEventListener("click", () => {
  const number = Number(inputNumber.value);
  if (number < 1 || number > 100) {
    return;
  }
  destroyBoxes();
  createBoxes(number);
  inputNumber.value = "";
});


function createBoxes(amount) {
  const elements = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }  
boxesContainer.append(...elements);
};


buttonDestroy.addEventListener("click", destroyBoxes);


function destroyBoxes() {
  boxesContainer.innerHTML = "";
};
