function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const bodyColor = document.body;

changeColor.addEventListener("click", handlerClick);

function handlerClick() {
  const color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
}