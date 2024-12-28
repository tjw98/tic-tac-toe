// Create Gameboard
const gameBoard = (function() {
  const gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const render = function() {
    for(let row in gameBoard) {
      console.log(gameBoard[row]);
    }
  }

  return {render, gameBoard}
})()

// Create Player constructor
const Player = function(name, marker) {
  this.name = name;
  this.marker = marker;
};

// Create Players
const player1 = new Player("Tom", "X");
const player2 = new Player("Mel", "O");
const players = [player1, player2];

// Create Game Logic
const game = (function() {
  let gameOver = false;
  let currentPlayer = player1;

  // Converts player input into gameBoard coordinates
  function convert(n) {
    const row = Math.floor((n - 1) / 3); // Compute the row
    const col = (n - 1) % 3;            // Compute the column
    return [row, col];
  }

  function checkWin(player) {
    const winConditions = {
      1: [[0, 0], [0, 1], [0, 2]], // Horizontal top
      2: [[1, 0], [1, 1], [1, 2]], // Horizontal middle
      3: [[2, 0], [2, 1], [2, 2]], // Horizontal bottom
      4: [[0, 0], [1, 0], [2, 0]], // Vertical left
      5: [[0, 1], [1, 1], [2, 1]], // Vertical middle
      6: [[0, 2], [1, 2], [2, 2]], // Vertical right
      7: [[0, 0], [1, 1], [2, 2]], // Diagonal left 
      8: [[0, 2], [1, 1], [2, 0]], // Diagonal right
    }

    // Returns winning player if any of the win conditions are met
    for(let condition in winConditions) {
      let positionCounter = 0
      for(let position in winConditions[condition]) {
        const posY = winConditions[condition][position].slice(0, 1);
        const posX = winConditions[condition][position].slice(1);
        if(gameBoard.gameBoard[posY][posX] == player.marker) {
          positionCounter++
        }
      }
      if(positionCounter == 3) {
        return player
      }
    }
  }

  function takeTurn(player) {
    getInput(player);
    return player == player1 ? player2 : player1
  }

  function getInput(player) {
    do {
      const input = parseInt(prompt("choose position: 1-9: "))
      const [inputY, inputX] = convert(input);
      
      if(gameBoard.gameBoard[inputY][inputX] == null) {
        gameBoard.gameBoard[inputY][inputX] = player.marker;
        gameBoard.render();
        break;
      }
    }
    while (true)
  }

  function start() {
    gameBoard.render();
    do {
      currentPlayer = takeTurn(currentPlayer);
      console.log(`${currentPlayer.name}'s turn:`);
      for(let player of players) {
        if(checkWin(player)) {
          alert(`${player.name} wins!`);
          gameOver = true;
        }; // TODO: implement logic for ties i.e. if no nulls in gameBoard then it's a tie
      }
    }
    while(!gameOver);
  }

  return {start}
})()

// Program starts
game.start();

