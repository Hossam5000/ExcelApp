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


// cheese.ingredients.forEach(ingre => {
//     const li = document.createElement("li");

//     const span = document.createElement("span");
//     span.classList.add(`${ingre.name}:`);
//     span.textContent = `${ingre.value}`;

//     li.textContent = `${ingre.name}: `;

//     li.append(span);
//     ul.append(li);
//     console.log(li, span, span.innerHTML);
// });

// =========== modal
const overlay = document.querySelector(".overlay")
const ModalCloseBtn = document.querySelector(".modal-close-btn")

// func(s)


// events
ModalCloseBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

console.log("test");

// codewars - challenge
function generatePrimeNumbers(nums) {
    nums.forEach(num => {
        const factors = [];
        for (let index = 0; index < num; index++) {
            num[index];
            console.log(num);
        }
    });
};

generatePrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);