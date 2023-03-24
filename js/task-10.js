const controlsEl = document.querySelector("#controls > input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let inputValue = 0;

controlsEl.addEventListener("blur", onControlsElBlur);
createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onControlsElBlur() {
  inputValue = Number(controlsEl.value);
}

function onCreateBtnClick() {
  for (let i = 1, j = 30; i <= inputValue; i += 1, j += 10) {
    const boxItem = document.createElement("div");
    boxItem.style.width = j + "px";
    boxItem.style.height = j + "px";
    boxItem.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxItem);
  }
}

function onDestroyBtnClick() {
  const clearBox = "";
  boxesEl.innerHTML = clearBox;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
