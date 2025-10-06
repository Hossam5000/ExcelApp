// imports
import cheese from "./libs/database/fundamentalNutritionIngridents.js";
import modal from "./components/modal.js";

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

console.log(modal);

// modal function
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function submitData() {
    const input = document.getElementById("userInput").value;
    console.log("User input:", input);
    closeModal();
}
