
const container = document.getElementById("container"); 
const button = document.getElementById("reset");

let colored = []; // colored squares 

button.addEventListener('click', () => {
    for (const cell of colored) {
        cell.style.backgroundColor = "white";
    }
    let input = prompt("Enter new grid: ");
    if (input > 100) {
        input = 100; 
        alert("Can only generate a 100x100 grid");
    }
    console.log(input);

    clearContainer(container);
    makeGrid(input, input);
});

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";

        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "black";
            colored.push(cell);
        });
    }
}

function clearContainer(container) {
    container.innerText = "";
}

makeGrid(16,16);
