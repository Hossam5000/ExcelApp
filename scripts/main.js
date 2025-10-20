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
// modalIngredient
const addIngredientBtn = document.querySelector(".add-Ingredient-Btn");
addIngredientBtn.addEventListener("click", addIngredient);


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
function addIngredient() {
    console.log("just for test")
}

// events
ModalCloseBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});












// codewars - challenge
// function generatePrimeNumbers(nums) {
//     let primeNums = [];
//     nums.forEach(num => {
//         if (getPrimeNumFactors(num)) {
//             primeNums.push(num);
//         }
//     });
//     console.log(primeNums.join(""));
// };

// generatePrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function getPrimeNumFactors(num) {
//     const store = [];
//     for (let i = 1; i <= num; i++) {
//         let newNum = num / i;
//         // console.log(newNum);
//         if (Number.isInteger(newNum)) {
//             store.push(newNum);
//         }
//     }
//     if (store.length === 2) {
//         return true;
//     }
//     // console.log(store);
// }

// // console.log(getPrimeNumFactors(3));