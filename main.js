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

const boardModel = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
];

let currentPlayer = 1; // 1 or 2
let numberOfDiscsPlayed = 0;

const columnClickHandler = function (event) {
  const columnThatWasClicked = event.currentTarget;
  const columnNum = columnThatWasClicked.id.slice(-1);
  dropDiskIntoColumn(columnThatWasClicked, boardModel, currentPlayer);
  // see if the game has been won or tied
  const winner = determineGameWinner(boardModel);
  if (winner !== null) {
    displayWhoWon(winner);
  } else if (gameIsATie(boardModel)) {
    displayTieMessage();
  } else {
    switchToNextPlayer();
  }
  displayCurrentPlayer(currentPlayer);
};

const createColumnEventListeners = function () {
  document.querySelector("#col0").addEventListener("click", columnClickHandler);
  document.querySelector("#col1").addEventListener("click", columnClickHandler);
  document.querySelector("#col2").addEventListener("click", columnClickHandler);
  document.querySelector("#col3").addEventListener("click", columnClickHandler);
  document.querySelector("#col4").addEventListener("click", columnClickHandler);
  document.querySelector("#col5").addEventListener("click", columnClickHandler);
  document.querySelector("#col6").addEventListener("click", columnClickHandler);
};

const displayBoard = function (boardModel) {};

const displayCurrentPlayer = function (currPlayer) {
  displayMessage("Current player : " + currPlayer);
};

const displayMessage = function (message) {
  document.getElementById("message").innerHTML = message;
};

const initializeGame = function () {
  displayBoard(boardModel);
  createColumnEventListeners();
  displayCurrentPlayer(currentPlayer);
};

initializeGame();

const displayWhoWon = function (winner) {
  document.getElementById("win_message").innerHTML =
    "Player " + winner + " wins!";
  confetti.start();
  document.getElementById("replay").style.display = "block";
};

const displayTieMessage = function () {
  document.getElementById("win_message").innerHTML = "Tie game!";
  document.getElementById("replay").style.display = "block";
};

const columnIsFull = function (board, index) {
  return board[0][index] !== null;
};

const dropDiskIntoColumn = function (columnEl, board, playerNum) {
  const columnIndex = Number(columnEl.id.slice(-1));
  // if the column is not full...
  if (columnIsFull(board, columnIndex)) {
    alert("column is full!");
    console.log("column is full");
    return;
  }
  // update the boardModel
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][columnIndex] === null) {
      board[row][columnIndex] = playerNum;
      break;
    }
  }
  // update the HTML
  let newDisc = document.createElement("div");
  newDisc.className = playerNum === 1 ? "disc pl1" : "disc pl2";
  columnEl.appendChild(newDisc);

  numberOfDiscsPlayed++;
};

const winnerHorizontal = function (board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  // return 1, 2, or null
  return null;
};
const winnerVertical = function (board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  // return 1, 2, or null
  return null;
};
const winnerDiagonalDownRight = function (board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 1] &&
        board[row][col] === board[row + 3][col + 1] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  // return 1, 2, or null
  return null;
};
const winnerDiagonalUpRight = function (board) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] === board[row + 1][col - 1] &&
        board[row][col] === board[row + 2][col - 2] &&
        board[row][col] === board[row + 3][col - 3] &&
        board[row][col] !== null
      ) {
        return board[row][col];
      }
    }
  }
  // return 1, 2, or null
  return null;
};

const determineGameWinner = function (board) {
  // pure function
  const horz = winnerHorizontal(board);
  const vert = winnerVertical(board);
  const dnrt = winnerDiagonalDownRight(board);
  const uprt = winnerDiagonalUpRight(board);
  let winner;

  if (horz !== null) {
    winner = horz;
  } else if (vert !== null) {
    winner = vert;
  } else if (dnrt !== null) {
    winner = dnrt;
  } else if (uprt !== null) {
    winner = uprt;
  } else {
    winner = null;
  }
  // return 1, 2, or null (tie or game isn't isn't over)
  return winner;
};

const gameIsATie = function () {
  // board is completely filled (numberOfDiscsPlayed is 42)
  return numberOfDiscsPlayed === 42 ? true : false;
};
const switchToNextPlayer = function () {
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else if (currentPlayer === 2) {
    currentPlayer = 1;
  }
};

document.getElementById("replay").onclick = function () {
  location.reload();
  return false;
};

const test = function () {
  console.log(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]) === null,
    "Winner Vertical fails on empty board"
  );
  console.log(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
      [1, null, null, null, null, null, null],
    ]) === 1,
    "Winner Vertical fails on col 0 player 1 win"
  );
  console.log(
    winnerVertical([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      ["batman", null, null, null, null, null, null],
      ["batman", null, null, null, null, null, null],
      ["batman", null, null, null, null, null, null],
      ["batman", null, null, null, null, null, null],
    ]) === "batman",
    "Winner Vertical fails on col 0 batman win"
  );
  console.log(
    winnerVertical([
      [null, null, 2, null, null, null, null],
      [null, null, 1, null, null, null, null],
      [2, null, 1, null, null, null, 1],
      [1, null, 1, null, null, null, 1],
      [2, null, 2, null, null, null, 1],
      [2, null, 2, null, null, null, 1],
    ]) === 1,
    "Winner Vertical fails on col 6 player 1 win"
  );
  console.log(
    winnerVertical([
      [null, null, 1, null, null, null, null],
      [null, null, 1, null, null, null, null],
      [2, null, 1, null, null, null, 1],
      [1, null, 1, null, null, null, 2],
      [2, null, 2, null, null, null, 1],
      [2, null, 2, null, null, null, 1],
    ]) === 1,
    "Winner Vertical fails on col 2 player 1 win"
  );
  console.log(
    columnIsFull(
      [
        [null, null, 1, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [2, null, 1, null, null, null, 1],
        [1, null, 1, null, null, null, 2],
        [2, null, 2, null, null, null, 1],
        [2, null, 2, null, null, null, 1],
      ],
      0
    ) === false,
    "columnIsFull fails checking a partially filled col 0"
  );
  console.log(
    columnIsFull(
      [
        [null, null, 1, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [2, null, 1, null, null, null, 1],
        [1, null, 1, null, null, null, 2],
        [2, null, 2, null, null, null, 1],
        [2, null, 2, null, null, null, 1],
      ],
      1
    ) === false,
    "columnIsFull fails checking an empty col1"
  );
  console.log(
    columnIsFull(
      [
        [null, null, 1, null, null, null, null],
        [null, null, 1, null, null, null, null],
        [2, null, 1, null, null, null, 1],
        [1, null, 1, null, null, null, 2],
        [2, null, 2, null, null, null, 1],
        [2, null, 2, null, null, null, 1],
      ],
      2
    ) === true,
    "columnIsFull fails checking a full col2"
  );
};
test();
