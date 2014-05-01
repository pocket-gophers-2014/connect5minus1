// connect5minus1 Game Controller

// On load initation
$(document).ready(function() {
  var view = new View
  var board = new Board
  controller = new gameController(view,board)
  controller.Initiate()
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
    var buttonId = '#button-row'
    var buttonClass = '.buttons'
    setListeners() 
    setCurrentPlayer('player1')
    Display.updateCell(row,colum,player)
  }

  setCurrentPlayer: function(player) {
    currentPlayer = player
    Display.updatePlayer(player)
  }

  setListeners: function(buttonId,buttonClass) {
    $(buttonId).on('click', buttonClass, placePiece)
  }

   placePiece: function(event) {
    var columnElement = event
    var column = columnElement.id
    board.updateCell(column, currentPlayer)
  }



}