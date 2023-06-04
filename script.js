const player =  (name, marker) => {
    return {name, marker}
}

const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

const gameBoard = (function() {
    const boardCells = document.querySelectorAll('.cell');
    let cells = [];
    boardCells.forEach(cell => {cells.push(cell)});
    return {cells}
})();

const gameCells = document.querySelectorAll('.cell');
gameCells.forEach(cell => cell.addEventListener('click', function placeMarker() {
    
}))