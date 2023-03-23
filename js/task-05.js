const input = document.querySelector("#name-input");
const nameTxt = document.querySelector("#name-output");

input.addEventListener("input", onInputName);

function onInputName(event) {
  nameTxt.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameTxt.textContent = "Anonymous";
  }
}
