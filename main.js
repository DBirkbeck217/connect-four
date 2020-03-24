/*

1. Initialize the game
    a. players
    b. board display
    c. board model
    d. current player tracker
    e. set up click handlers
2. Take player input
    a. click handlers on each column
        - know which player is currently dropping a disc
        - only allow a drop if the column isn't full
        - drop a disk into the column
        - toggle the player
3. Check for game ending conditions
    a. has the game been won?
        - 4 in a row horizontally
        - 4 in a row vertically
        - 4 in a row diagonally (down-right)
        - 4 in a row diagonally (up-right)
    b. has the game ended in a tie?
        - display a tie message

*/

let boardModel = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]
let currentPlayer = 1
let numberOfDiscsPlayed = 0

const displayMessage = function (message) { // stub
    // TODO: Erase the content of the message div
    //       Display the new message into the message div
    console.log(message)
}
const displayCurrentPlayer = function (currPlayer) {
    displayMessage("Current player is " + currPlayer)
}
const displayWhoWon = function (winner) {
    displayMessage("Winner is " + winner)
}
const displayTieMessage = function () {
    displayMessage("Tie game!")
}

const dropDiskIntoColumn = function (columnEl) {
    // if the column is not full...
    // update the boardModel
    // update the HTML
    numberOfDiscsPlayed++
}

const winnerHorizontal = function (board) {
    // return 1, 2, or null
    return null
}
const winnerVertical = function (board) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < board[row].length; col++) {
            // console.log(`${board[row][col]} ${board[row + 1][col]} ${board[row + 2][col]} ${board[row + 3][col]} `)
            if ((board[row][col] === board[row + 1][col]) &&
                (board[row][col] === board[row + 2][col]) &&
                (board[row][col] === board[row + 3][col]) &&
                (board[row][col] !== null)) {
                return board[row][col]
            }
        }
    }
    // return 1, 2, or null
    return null
}
const winnerDiagonalDownRight = function (board) {
    // return 1, 2, or null
    return null
}
const winnerDiagonalUpRight = function (board) {
    // return 1, 2, or null
    return null
}

const determineGameWinner = function (board) { // pure function
    const horz = winnerHorizontal(board)
    const vert = winnerVertical(board)
    const dnrt = winnerDiagonalDownRight(board)
    const uprt = winnerDiagonalUpRight(board)
    let winner

    if (horz !== null) {
        winner = horz
    } else if (vert !== null) {
        winner = vert
    } else if (dnrt !== null) {
        winner = dnrt
    } else if (uprt !== null) {
        winner = uprt
    } else {
        winner = null
    }

    // return 1, 2, or null (tie or game isn't isn't over)
    return winner
}

const gameIsATie = function (board) {
    // board is completely filled (numberOfDiscsPlayed is 42)
    // return true or false
    return false
}
const switchToNextPlayer = function () {
    // currentPlayer 1 change to 2
    // currentPlayer 2 change to 1
}

const columnClickHandler = function (event) {
    console.log('click!')
    const columnThatWasClicked = event.currentTarget
    dropDiskIntoColumn(columnThatWasClicked)
    // see if the game has been won or tied
    const winner = determineGameWinner(boardModel)
    if (winner !== null) {
        displayWhoWon(winner)
    } else if (gameIsATie(boardModel)) {
        displayTieMessage()
    } else {
        switchToNextPlayer()
    }

    displayCurrentPlayer(currentPlayer)
}

const createColumnEventListeners = function () {
    document.querySelector('#col0').addEventListener('click', columnClickHandler)
    document.querySelector('#col1').addEventListener('click', columnClickHandler)
    document.querySelector('#col2').addEventListener('click', columnClickHandler)
    document.querySelector('#col3').addEventListener('click', columnClickHandler)
    document.querySelector('#col4').addEventListener('click', columnClickHandler)
    document.querySelector('#col5').addEventListener('click', columnClickHandler)
    document.querySelector('#col6').addEventListener('click', columnClickHandler)
}

const displayBoard = function (boardModel) {

}

const initializeGame = function () {
    displayBoard(boardModel)
    createColumnEventListeners()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()




const testWinnerVertical = function () {
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]) === null), "Winner Vertical fails on empty board")
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null],
        [   1, null, null, null, null, null, null]
    ]) === 1), "Winner Vertical fails on col 0 player 1 win")
    console.assert((winnerVertical([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null],
        [2, null, null, null, null, null, null]
    ]) === 2), "Winner Vertical fails on col 0 player 2 win")
    console.assert((winnerVertical([
        [null, null, 2, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [   2, null, 1, null, null, null, 1],
        [   1, null, 1, null, null, null, 1],
        [   2, null, 2, null, null, null, 1],
        [   2, null, 2, null, null, null, 1]
    ]) === 1), "Winner Vertical fails on col 6 player 1 win")
}
// testWinnerVertical()