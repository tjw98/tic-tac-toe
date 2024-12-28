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

// Create Player constructor
const Player = function(name, marker) {
  this.name = name;
  this.marker = marker;
};

// Create Players
const player1 = new Player("Tom", "X");
const player2 = new Player("Mel", "O");

// Create Game Logic
const game = (function() {
  function start() {
    gameBoard.render();
  }

  return {start}
})()

// Program starts
game.start();
