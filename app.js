const container = document.querySelector('.container');

let row = document.createElement('div');
row.classList.add('row');
let square = document.createElement('div');
square.classList.add('square');

const createSquares = (size) => {
    //
    for (items = 1; items <= size; items++) {
        row.appendChild(square.cloneNode(true));
    }

    for (rows = 1; rows <= size; rows++) {
        container.appendChild(row.cloneNode(true));
    }
};

createSquares(4);

container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.classList.add('active');
    }
});

const promptSquareSize = () => {
    let gridSize;
    do {
        gridSize = prompt('Enter a number please?', 0);
    } while (!isFinite(gridSize));

    if (gridSize > 100) {
        gridSize = 100;
    }

    container.innerHTML = '';
    row.innerHTML = '';

    createSquares(gridSize);
};

const button = document.querySelector('.button-85');

button.addEventListener('mouseup', promptSquareSize);
