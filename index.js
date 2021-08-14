function createGrid(size) {
  const container = document.querySelector(".game");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", onSquareHover);
      container.appendChild(square);
    }
  }

  const clearButton = document.querySelector(".clearButton");
  clearButton.addEventListener("click", onGameClear);
}

function onSquareHover(e) {
  this.classList.add("filled");
}

function onGameClear(e) {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.remove();
  });

  let size;
  do {
    size = prompt(
      "Enter Etch-a-Sketch size (Default size: 16, Max size: 100):",
      16
    );
  } while (size > 100);
  if (!size) size = 16;
  createGrid(size);
}

createGrid(16);
