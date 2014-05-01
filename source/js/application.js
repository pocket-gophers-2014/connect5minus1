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
  this.view = new view
  this.board = new board
  this.initiate()
}

gameController.prototype = {
  initiate: function() {
    var buttonId = this.display
    var buttonClass = '.buttons'
    setListeners() 
    setCurrentPlayer('player1')
    Display.updateCell(row,colum,player)
  }

  setCurrentPlayer: function() {
    Display.updatePlayer(player)
  }

  setListeners: function(buttonId,buttonClass) {
    $(buttonId).on('click', buttonClass, placePiece)
  }

   placePiece: function(event) {
    var columnElement = event
    var column = columnElement.id
    board.updateCell(column, currentPlayer)
    var pieceData = board.lastPieceAdded()
    view.updateCell(pieceData)
  }

}