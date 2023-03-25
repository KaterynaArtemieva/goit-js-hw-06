const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const correctTxt = input.value.trim();
  if (correctTxt.length < 6) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
