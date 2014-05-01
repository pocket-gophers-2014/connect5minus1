
function Board() {
  this.board = []
}

Board.prototype = {
  addPieceToColumn: function(column, player) {
    this.board.push(new Piece(player, this.countPiecesInColumn(column), column))
  },

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
    console.log(this.board)
    return this.board[this.board.length-1]
  }


}

function Piece(player, row, column) {
  this.player = player
  this.row = row
  this.column = column
}




