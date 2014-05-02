// connect5minus1 Game Controller

// On load initation
$(document).ready(function() {
  var view = new viewBoard()
  var board = new Board()
  controller = new gameController(view,board)
  controller.initiate()
})

// GameController base
function gameController(view,board) {
  this.view = view
  this.board = board
}

gameController.prototype = {
  // Initiates game...
  // Adds listeners to DOM
  // Sets current player on DOM
  initiate: function() {
    var buttonId = this.view.buttonId
    var buttonClass = this.view.buttonClass
    this.setListeners(buttonId,buttonClass)
    this.setPlayerDisplay()
    this.view.resetBoard()
  },

  resetGame: function() {
    this.board = new Board()
    this.view.resetBoard()
  },

  setListeners: function(buttonId,buttonClass) {
    console.log("in set listeners")
    $("#button-row").on('click', "button", this.placePiece.bind(this))
    $(".reset_button").on('click', this.resetGame.bind(this))
  },


  setPlayerDisplay: function() {
    var currentPlayer = this.board.currentPlayer()
  },

  currentPlayer: function() {
    return this.board.currentPlayer()
  },

  placePiece: function(event) {
    var column = parseInt(event.toElement.id)
    this.board.addPieceToColumn(column)
    var pieceData = this.board.lastPieceAdded()
    this.view.updateCell(pieceData)
    // this.setPlayerDisplay()
  }

}