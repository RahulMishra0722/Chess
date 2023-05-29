
const chessboard = document.getElementById('chessboard');

// Chessboard initialization
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
    cell.dataset.row = row;
    cell.dataset.col = col;
    chessboard.appendChild(cell);
  }
}

const cells = document.querySelectorAll('.cell');
let selectedCell = null;

// Cell click event handler
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (selectedCell) {
      if (selectedCell === cell) {
        selectedCell.classList.remove('selected');
        selectedCell = null;
      } else {
        // you can write your logic here
        // For simplicity, let's just highlight the selected cell
        selectedCell.classList.remove('selected');
        cell.classList.add('selected');
        selectedCell = cell;
      }
    } else {
      cell.classList.add('selected');
      selectedCell = cell;
    }
  });
});
