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
  },

  setListeners: function(buttonId,buttonClass) {
    // Sets listeners with event delegation
    // $(buttonId).on('click', buttonClass, this.placePiece)
    console.log("in set listeners")
    $("#button-row").on('click', "button", this.placePiece.bind(this))
    // $("#button-row").on('click', "button", this.assignPiece())


  },

  // applyPieceToBoard: function() {
  //   var column = assignColumn()
  //   placePiece(column)
  // },

  // assignColumn: function() {
  //   return this.id
  // },

  setPlayerDisplay: function() {
    // Gets current player of game
    // Invokes view to update current player DOM display
    var currentPlayer = this.board.currentPlayer()
    // this.view.updatePlayer(currentPlayer)
  },

  currentPlayer: function() {
    // Fetches current player data from model
    return this.board.currentPlayer()
  },

  placePiece: function(event) {

    console.log(event.toElement.id)
    // Calls board to update grid with piece location passing it column number
    // Calls view to update DOM display passing it piece data (coordinates, player)
    // Calls function to invoke adjusting of player DOM Display

    var column = event.toElement.id
    this.board.addPieceToColumn(column)
    var pieceData = this.board.lastPieceAdded()
    this.view.updateCell(pieceData)
    // this.setPlayerDisplay()
  }

}