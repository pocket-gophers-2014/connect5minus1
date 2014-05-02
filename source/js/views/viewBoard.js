function viewBoard() {
}

viewBoard.prototype = {
  getCell: function(piece) {
    //need location of the cell
    return piece.$("div .column")
  },

  updateCell: function(piece) {
    //needlocation of cell based on new html
    var currentCell = $("piece.column piece.row")
    if (piece.player.id === 1) {
      piece.css("background-color", "red")
    }
    else {
      piece.css("background-color", "black")
    }
  }
}

button = $("#button-row #button-row")


//what is shipped to me.
//// piece obj has properties row, column, player.id
///
// when u get the piece obj, update the row and column id and return color

//add eventlistener on the board, to know which piece is added
// need html for this....
