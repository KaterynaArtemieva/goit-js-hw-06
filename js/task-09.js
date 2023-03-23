const bodyEl = document.querySelector("body");
const colorValueEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", onClickBtn);

function onClickBtn() {
  colorValueEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValueEl.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
