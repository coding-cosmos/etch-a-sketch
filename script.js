let gridSize = 16;
let randomizeFill = false;

const grid = document.querySelector('.grid');
const gridHeight = grid.offsetHeight - 4;

let gridSizeBtn = document.querySelector('#grid-size');
console.log(gridSizeBtn);
gridSizeBtn.addEventListener("click", () => {
    console.log("clicked");
    gridSize = prompt("Enter size of grid(max. 100)", "");
    if (!(gridSize <= 100 && gridSize > 0)  ) {
        alert("enter a valid size");
        gridSize = 16;
    }
    console.log(gridSize);
    clearGrid(gridSize);
});

let clearGridBtn = document.querySelector('#clear-grid');
clearGridBtn.addEventListener("click",()=>{
    clearGrid(16);
});

let randomFillBtn = document.querySelector('#random-fill');
randomFillBtn.addEventListener("click",()=>{
    console.log("random clicked");
     if (randomizeFill) {
        randomizeFill = false;
        clearGrid(gridSize );
     } else {
        randomizeFill = true;
        clearGrid(gridSize);
     }
});

function createGrid(gridSize,randomizeFill) {
    for (let index = 0; index < gridSize * gridSize; index++) {
        const gridElement = document.createElement("div");
        const gridElementSize = gridHeight / gridSize;

        gridElement.setAttribute("class", "grid-element");
        gridElement.style.height = `${gridElementSize}px`;
        gridElement.style.width = `${gridElementSize}px`;

        gridElement.addEventListener("mouseover", () => {
            console.log("hovering");
            if(!randomizeFill){
                gridElement.classList.add("fill");
            }else{
                let red = random();
                let blue = random();
                let green = random();
                gridElement.style.backgroundColor = `rgb(${red},${green},${blue})`;
                console.log(gridElement.style.backgroundColor);
            }
           
        });

        grid.appendChild(gridElement);
    }
}

function random(){
    return Math.round(Math.random()*256);
}
function clearGrid(gridSize) {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach((element) => {
        element.remove();
    })
    createGrid(gridSize,randomizeFill);
}

createGrid(gridSize,false);