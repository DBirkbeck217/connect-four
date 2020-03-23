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
        - display who won the game
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

const displayMessage = function (message) {
    // TODO: Erase the content of the message div
    //       Display the new message into the message div
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

const determineGameWinner = function (board) {
    // return 1, 2, or null (tie or game isn't isn't over)
    return null
}
const gameIsATie = function (board) {
    // board is completely filled (numberOfDiscsPlayed is 42)
    // return true or false
}
const switchToNextPlayer = function () {
    // currentPlayer 1 change to 2
    // currentPlayer 2 change to 1
}

const columnClickHandler = function (event) {
    const columnThatWasClicked = event.currentTarget
    dropDiskIntoColumn(columnThatWasClicked)
    // see if the game has been won or tied
    const winner = determineGameWinner(boardModel)
    if (winner !== null) {
        displayWhoWon(winner)
    } else if (gameIsATie(boardModel)) {
        displayTieMessage()
    } else {
        // switch to the next player
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
    displayBoard(baordModel)
    createColumnClickHandlers()
    displayCurrentPlayer(currentPlayer)
}

initializeGame()