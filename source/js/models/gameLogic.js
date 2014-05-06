// game LogiC dat shieet
//#CR use CamelCase to indicate constructor functions: GameLogic

function gameLogic(board, piece) {
  this.board = board
  this.pieceData = piece
}

gameLogic.prototype = {
  // Base win function
  won: function() {
    var checks=[this.pieceRow(),
                this.pieceCol(),
                this.pieceDiagonals().diagonal1,
                this.pieceDiagonals().diagonal2]
    // var rowCheck = this.pieceRow()
    // var colCheck = this.pieceCol()
    // var diagonal1Check = this.pieceDiagonals().diagonal1
    // var diagonal2Check = this.pieceDiagonals().diagonal2
    var result = false
    for(i=0; i < checks.length; ++i){
      if (checkIfFour(checks[i]) === true){
        result = true
      }
    }
    return result
    // if (this.checkIfFour(rowCheck)) {
    //   return true
    // }
    // else if (this.checkIfFour(colCheck)) {
    //   return true
    // }
    // else if (this.checkIfFour(diagonal1Check)) {
    //   return true
    // }
    // else if (this.checkIfFour(diagonal2Check)) {
    //   return true
    // }
    // else {
    //   return false
    // }
  },

  checkIfFour: function(test) {
    var player_id=test[0].player.id
    for (var i = 1; i < test.length; i++) {
      if (test[i].player.id !== player_id){
        return false
      }
    }
    return true

    // var matchCount = 0
    // for (var i = 1; i < test.length; i++) {
    //   if (test[i - 1].player.id === test[i].player.id ) {
    //     matchCount++
    //   }
    //   else {
    //     matchCount = 0
    //   }
    // }

    // if (matchCount >= 3) {
    //   return true
    // }
    // else {
    //   return false
    // }
  },
// #CR with a two dimensional array you can skip the if statement
//in pieceRow and pieceCol

  pieceRow: function() {

    //Function to return array of row coordinates
   var testRow = []
    for(var i = 0; i < (this.board.length); i++) {
      if (this.board[i].row === this.pieceData.row) {
        testRow.push(this.board[i])
      }
    }
    return testRow
  },

  pieceCol: function() {
    // Function to return array of column coordinates
    var testCol = []
    for(var i = 0; i < this.board.length; i++) {
      if (this.board[i].column === this.pieceData.column) {
        testCol.push(this.board[i])
      }
    }
    return testCol
  },
  // #CR with a two dimensional array, diagonals become much easier
  // if row>3 and col < max-4
   // for(var i = row, i<row+4; ++i){
  //  diag1coords.push({row: i, col: col+(i-row)}) }

  pieceDiagonals: function() {
    var args = { row: this.pieceData.row, col: this.pieceData.column, minRow: 1, minCol: 1, maxRow: 6, maxCol: 7}
    var sDiags1 = this.diag1sp(args)
    var sDiags2 = this.diag2sp(args)
    var diag1coords = []
    var diag2coords = []
    var diagonal1 = []
    var diagonal2 = []
    //diag1
    for ( var r = sDiags1.row, c = sDiags1.col; ; r--, c++) {
      if (r < args.minRow || c > args.maxCol) {
        break
      }
      else {
        diag1coords.push({row: r, col: c})
      }
    }

   diagonal1 = this.fetchPieces(diag1coords)
    //diag2
    for ( var r = sDiags2.row, c = sDiags2.col; ; r++, c++) {
      if (r > args.maxRow || c > args.maxCol) {
        break
      }
      else {
        diag2coords.push({row: r, col: c})
      }
    }
    diagonal2 = this.fetchPieces(diag2coords)
    return {diagonal1: diagonal1, diagonal2: diagonal2}
  },
// #CR the double nested array here should be an indicator of the value of a two dimensional array
  fetchPieces: function(args) {
    var pieces = []
    for (var i = 0; i < this.board.length; i++) {
      for (var k = 0; k < args.length; k++) {
        if (this.board[i].row === args[k].row && this.board[i].column === args[k].col) {
          pieces.push(this.board[i])
        }
      }
    }
    return pieces
  },
// #CR lots of repeated logic below - will condense a lot with a 2 d array, but even
// without I would look here to refactor.

  diag1sp: function(args) {
    var sRow = 0
    var sCol = 0

    if (args.row > args.col) {
      sRow = args.row + (args.col - args.minCol)
      sCol = args.minCol
    }
    else if (args.row === args.col) {
      if (args.row>3) {
        sRow = args.row + (args.maxRow - args.row)
        sCol = args.col - (args.maxRow - args.row)
      }
      else if (args.row <= 3) {
        sRow = args.row + (args.col - args.minCol)
        sCol = args.col - (args.col - args.minCol)
      }
    }
    else if (args.row < args.col) {
      sRow = args.maxRow
      sCol = args.col - (args.maxRow - args.row)
    }
    return {row: sRow, col: sCol}
  },

  diag2sp: function(args) {
    var sRow = 0
    var sCol = 0
    var diffRow = args.row - args.minRow
    var diffCol = args.col - args.minCol

    if (diffRow > diffCol) {
      sRow = args.row - diffCol
      sCol = args.col - diffCol
    }
    else if (diffRow < diffCol) {
      sRow = args.row - diffRow
      sCol = args.col - diffRow
    }
    else if (diffRow == 0 || diffCol == 0) {
      sRow = args.col
      sCol = args.col
    }
    else if (diffRow == diffCol) {
      sRow = args.minRow
      sCol = args.minCol
    }

    return {row: sRow, col: sCol}
  }
}

