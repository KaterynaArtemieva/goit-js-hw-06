const form = document.querySelector(".login-form");
const user = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Усі поля повинні бути заповнені!");
  }
  user.email = email.value;
  user.password = password.value;

  event.currentTarget.reset();
  console.log(user);
}
