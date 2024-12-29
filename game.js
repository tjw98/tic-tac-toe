// Create Gameboard
const gameBoard = (function() {
  const cell1 = document.querySelector("[data-id1]");
  const cell2 = document.querySelector("[data-id2]");
  const cell3 = document.querySelector("[data-id3]");
  const cell4 = document.querySelector("[data-id4]");
  const cell5 = document.querySelector("[data-id5]");
  const cell6 = document.querySelector("[data-id6]");
  const cell7 = document.querySelector("[data-id7]");
  const cell8 = document.querySelector("[data-id8]");
  const cell9 = document.querySelector("[data-id9]");

  const gameBoardVisual = [
    cell1, cell2, cell3,
    cell4, cell5, cell6,
    cell7, cell8, cell9,
  ];

  const render = function() {
    for(let pos in gameBoardVisual) {
      console.log(gameBoardVisual[pos]);
      gameBoardVisual[pos].textContent = gameBoardVisual[pos];
    }
  }

  return {render, gameBoardVisual}
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
  let currentPlayer = player1;

  function checkWin(player) {
    const winConditions = {
      1: [1, 2, 3], // Horizontal top
      2: [4, 5, 6], // Horizontal middle
      3: [7, 8, 9], // Horizontal bottom
      4: [1, 4, 7], // Vertical left
      5: [2, 5, 8], // Vertical middle
      6: [3, 6, 9], // Vertical right
      7: [1, 5, 9], // Diagonal left 
      8: [3, 5, 7], // Diagonal right
    }

    // Returns winning player if any of the win conditions are met 
    // Loop through each gameboard cell and record the number of player markers into an array
    let markerArray = [];

    for(let cell in gameBoard.gameBoardVisual) {
      if(gameBoard.gameBoardVisual[cell].textContent == player.marker) {
        markerArray.push(Number(cell) + 1);
      }
    }
    console.log(markerArray) // Testing

    // Compare those array indexes to the win conditions
    for(let condition in winConditions) {
      let markerCounter = 0;
      for(let position in winConditions[condition]) {
        for(let index in markerArray) {
          if(markerArray[index] == winConditions[condition][position]) {
            markerCounter++;
          }
        }
      }
      if(markerCounter > 2) {
        return player
      }
    }
  }
    

  function switchPlayer(player) {
    return player == player1 ? player2 : player1
  }

  function takeTurn(e) {
    e.target.textContent = currentPlayer.marker;
    currentPlayer = switchPlayer(currentPlayer);
    console.log(`${currentPlayer.name}'s turn:`);
    e.target.disabled = true;
  }

  return {takeTurn, checkWin}
})()

// Program starts

// Event listeners
for(let cell in gameBoard.gameBoardVisual) {
  const listener = gameBoard.gameBoardVisual[cell].addEventListener("click", (e) => {
    game.takeTurn(e)
    for(let player of players) {
      if(game.checkWin(player)) {
        alert(`${player.name} wins!`);
      }; // TODO: implement logic for ties i.e. if no nulls in gameBoard then it's a tie AND GAMEOVER
    }
  })
};

