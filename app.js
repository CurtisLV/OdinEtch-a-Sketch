const container = document.querySelector('.container');

let row = document.createElement('div');
row.classList.add('row');
let square = document.createElement('div');
square.classList.add('square');

for (items = 1; items <= 4; items++) {
    row.appendChild(square.cloneNode(true));
}

console.log(row);

for (rows = 1; rows <= 4; rows++) {
    container.appendChild(row.cloneNode(true));
}
