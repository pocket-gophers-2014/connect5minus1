// connect5minus1 Game Controller

// set Listeners
$(document).ready(function() {
  $('#buttons').on('click', '.button', placePiece)
})

// GameController base
function gameController(view,board) {
  view = new view
  board = new board
  var currentPlayer = ''
  Initiate()
}

gameController.prototype = {
  Initiate: function() {
    setListeners() 
    setCurrentPlayer('player1')
    Display.updateCell(row,colum,player)
  }

  setCurrentPlayer: function(player) {
    currentPlayer = player
    Display.updatePlayer(player)
  }

  placePiece: function(event) {
    var columnElement = event
    
  }



}