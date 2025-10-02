//test
const floor01 = {
    name: "orintal",
    divisions: [
        "konafa",
        "basbosa",
        "boxes",
    ],
    color: "#f0f",
};

const floor02 = {
    name: "west",
    divisions: [
        "gatoh",
        "torat",
        "special",
    ],
    color: "#0f0",
};

// cons & vars
const container = document.querySelector(".container");
const floorId = document.getElementById("floorId");
const divisions = document.querySelector(".divisions");


floorId.textContent = floor01.name;
divisions.forEach((div, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = div[index];
    floor01.append(listItem);
});
console.log(container, floorId, divisions);
