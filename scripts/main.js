// imports
import cheese from "./database/fundamentalNutritionIngridents.js";

// DOM references
const container = document.querySelector(".container");
const ul = document.querySelector(".ingredients");
// ingredients
const protein = document.querySelector(".container .ingredients .protein");
const fiber = document.querySelector(".container .ingredients .fiber");
const carbohydrates = document.querySelector(".container .ingredients .carbohydrates");
const fats = document.querySelector(".container .ingredients .fats");
const sugars = document.querySelector(".container .ingredients .sugars");


cheese.ingredients.forEach(ingre => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add(`${ingre.name}:`);
    span.textContent = `${ingre.value}`;

    li.textContent = `${ingre.name}: `;

    li.append(span);
    ul.append(li);
    console.log(li, span, span.innerHTML);
});

// modal
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector(".close-bstn")

console.log(closeBtn)