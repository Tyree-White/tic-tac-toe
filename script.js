const player =  (name, marker) => {
    return {name, marker}
}

const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

const gameBoard = (function() {
    const boardCells = document.querySelectorAll('.cell');
    let cells = [];
    boardCells.forEach(cell => {cells.push(cell)});
    return cells
})();

const gameCells = document.querySelectorAll('.cell');
let marker;
gameCells.forEach(cell => cell.addEventListener('click', function placeMarker() {
    cell.removeEventListener('click', placeMarker);
    if (marker === undefined) {
        marker = playerOne.marker;
    } else if (marker === playerOne.marker) {
        marker = playerTwo.marker;
    } else if (marker === playerTwo.marker) {
        marker = playerOne.marker;
    }
    cell.textContent = marker;
}))