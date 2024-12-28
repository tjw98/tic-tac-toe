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

gameBoard.render();