// Create Gameboard
const gameBoard = (function() {
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  const render = function() {
    for(let row in gameBoard) {
      console.log(gameBoard[row]);
    }
  }

  return {render}
})()

// Create Game Logic
const game = (function() {
  function start() {
    gameBoard.render();
  }

  return {start}
})()

// Program starts
game.start();
