const controlsEl = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

let inputValue = 0;

controlsEl.addEventListener('blur', onControlsElBlur);
createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

function onControlsElBlur () {
  inputValue = controlsEl.value;
}


function onCreateBtnClick () {
do {
  const boxItem = document.createElement('div');
  boxItem.style.width = 30 + 'px';
  boxItem.style.height = 30 + 'px';
  boxItem.style.backgroundColor = getRandomHexColor();
} while (inputValue >= boxesEl)
}


function onDestroyBtnClick () {

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
