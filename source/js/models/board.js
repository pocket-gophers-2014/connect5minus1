
function Board() {
  this.board = []
  player1 = new Player(1, "Player 1", "Red")
  player2 = new Player(2, "Player 2", "Black")
  this.players = [player1, player2]

}

Board.prototype = {
  addPieceToColumn: function(column) {
    this.board.push(new Piece(this.currentPlayer(), this.countPiecesInColumn(column), column))
    this.toggleCurrentPlayer()
  },
// #CR if you make your board a two dimensional array of rows and columns, this method and
//others become much simpler because you can rely on array methods.
  countPiecesInColumn: function(columnNum) {
    var count = 0
    for(var i = 0; i <= this.board.length-1; i++) {
      if(this.board[i].column == columnNum)
      {
        count ++
      }
    }
    return count
  },

  lastPieceAdded: function() {
    return this.board[this.board.length-1]
  },

  currentPlayer: function() {
    return this.players[0]
  },

  toggleCurrentPlayer: function() {
    this.players.unshift(this.players.pop())
  }

}

function Piece(player, row, column) {
  this.player = player
  this.row = row + 1 //#CR why not just use 0 based counting?
  this.column = column
}

function Player(id, name, color) {
  this.id = id
  this.name = name
  this.color = color
}




