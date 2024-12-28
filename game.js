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

  function convert(n) {
    const row = Math.floor((n - 1) / 3); // Compute the row
    const col = (n - 1) % 3;            // Compute the column
    return [row, col];
  }

  function checkWin(player) {
    const winConditions = {
      1: [[0, 1], [0, 1], [0, 2]],
      2: [[1, 0], [1, 1], [1, 2]],
      3: [[2, 0], [2, 1], [2, 2]],
      4: [[0, 0], [1, 0], [2, 0]],
      5: [[0, 1], [1, 1], [2, 1]],
      6: [[0, 2], [1, 2], [2, 2]],
      7: [[0, 0], [1, 1], [2, 2]],
      8: [[0, 2], [1, 1], [0 ,1]],
    }

    for(let condition in winConditions) {
      let positionCounter = 0
      for(let position in winConditions[condition]) {
        const posY = winConditions[condition][position].slice(0, 1);
        const posX = winConditions[condition][position].slice(1);
        if(gameBoard.gameBoard[posY][posX] == player.marker) {
          positionCounter++
        }
        console.log("position counter: ", positionCounter);
      }
      if(positionCounter == 3) {
        return player
      }
    }

 
    // WIN CONDITIONS
    // 10 11 12
    // 20 21 22
    // 00 10 20
    // 01 11 21
    // 02 12 22
    // 00 11 22
    // 02 11 01

    // 1 2 3
    // 4 5 6
    // 7 8 9
    // 1 4 7
    // 2 5 8
    // 3 6 9
    // 1 5 9
    // 3 5 7
  }

  function takeTurn(player) {
    console.log(`${player.name} turn:`);
    getInput(player);
    return player == player1 ? player2 : player1
  }

  function getInput(player) {
    const input = parseInt(prompt("choose position: 1-9: "));
    console.log(typeof input, input) // Testing
    const [inputY, inputX] = convert(input);
    gameBoard.gameBoard[inputY][inputX] = player.marker;
  }

  function start() {
    let counter = 0;
    gameBoard.render();
    do {
      currentPlayer = takeTurn(currentPlayer);
      gameBoard.render();
      if(checkWin(player1)) { //TURN THIS TO A LOOP OF PLAYER ARRAY
        alert(`${player1.name} wins!`);
        gameOver = true;
      };
      counter++;
    }
    while(!gameOver);
  }

  return {start}
})()

// Program starts
game.start();

