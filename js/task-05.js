const input = document.querySelector("#name-input");
const nameTxt = document.querySelector("#name-output");

input.addEventListener("input", onInputName);

function onInputName(event) {
  nameTxt.textContent = event.currentTarget.value.trim();
  if (nameTxt.textContent === "") {
    nameTxt.textContent = "Anonymous";
  }
}
