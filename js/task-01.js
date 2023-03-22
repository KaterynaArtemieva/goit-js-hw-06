const categories = document.querySelectorAll(".item");
const numbers = categories.length;
console.log("Number of categories: ", numbers);

categories.forEach((categorie) => {
  const title = categorie.querySelector("h2");
  console.log("Category: ", title.textContent);
  const numbersEl = categorie.querySelectorAll("ul > li").length;
  console.log("Elements: ", numbersEl);
});
