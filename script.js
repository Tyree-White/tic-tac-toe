const player =  (name, marker) => {
    return {name, marker}
}

const playerOne = player('Player One', 'X');
const playerTwo = player('Player Two', 'O');

const getCells = function() {
    const boardCells = document.querySelectorAll('.cell');
    let cells = [];
    boardCells.forEach(cell => {cells.push(cell.textContent)});
    return cells
};

const gameCells = document.querySelectorAll('.cell');
let marker;
gameCells.forEach(cell => cell.addEventListener('click', function placeMarker() {
    cell.removeEventListener('click', placeMarker);
    const gameInfo = document.querySelector('.gameInfo');
    if (marker === undefined) {
        marker = playerOne.marker;
    } else if (marker === playerOne.marker) {
        marker = playerTwo.marker;
    } else if (marker === playerTwo.marker) {
        marker = playerOne.marker;
    }

    if (gameInfo.textContent === 'X Goes First') {
        gameInfo.textContent = "Player O's Turn";
    } else if (gameInfo.textContent === "Player O's Turn") {
        gameInfo.textContent = "Player X's Turn"
    } else if  (gameInfo.textContent === "Player X's Turn") {
        gameInfo.textContent = "Player O's Turn"
    }
    cell.textContent = marker;
}))

const gameBoard = document.querySelector('.gameBoard');
gameBoard.addEventListener('click', checkWin);

function checkWin() {
    const board = getCells();
    const gameInfo = document.querySelector('.gameInfo');
    const winnerInfo = document.querySelector('winnerInfo');
    
    if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
        gameInfo.remove()


    }
}