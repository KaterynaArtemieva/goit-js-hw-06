const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", onFontSizeInput);

function onFontSizeInput() {
  text.style.fontSize = fontSize.value + "px";
}
