const player = (name = `Player ${player.marker}`, marker) => {
    return {name, marker}
}

const playerOne = player(prompt('Enter Name Player X'), 'X');
const playerTwo = player(prompt('Enter Name Player O'), 'O');

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
const restartBtn = document.querySelector('.restart');
restartBtn.addEventListener('click', restart);

function restart() {
    location.reload()
}

function checkWin() {
    const board = getCells();
    const gameInfo = document.querySelector('.gameInfo');
    const winnerInfo = document.querySelector('.winnerInfo');

    if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] == 'X' && board[3] == 'X' && board[6] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[6] == 'X' && board[7] == 'X' && board[8] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] == 'X' && board[4] == 'X' && board[8] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[3] == 'X' && board[4] == 'X' && board[5] == 'X') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player X Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] == 'O' && board[1] == 'O' && board[2] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] == 'O' && board[3] == 'O' && board[6] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[6] == 'O' && board[7] == 'O' && board[8] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[2] == 'O' && board[4] == 'O' && board[6] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[3] == 'O' && board[4] == 'O' && board[5] == 'O') {
        gameInfo.remove()
        winnerInfo.textContent = 'Player O Wins';
        restartBtn.style.display = 'flex';
    } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
        gameInfo.remove()
        winnerInfo.textContent = "It's A Draw";
        restartBtn.style.display = 'flex';
    }
}