function viewBoard() {

}

viewBoard.prototype = {
  getCell: function(piece) {
    //find the specific cell
    var currentCell = document.querySelectorAll('.column')[piece.column-1].querySelector('.row'+(piece.row+1));
    return currentCell;
  },

  updateCell: function(piece) {
    var currentCell = this.getCell(piece)
    // console.log(currentCell)
    // var height = $(currentCell).css("height")
    var bottom_value = (6- piece.row) * 82
    // console.log(bottom_value)
    // console.log(height)

    $(currentCell).css("bottom", bottom_value + "px")

    $(currentCell).animate({
      bottom: "0px"
    }, 3000)

    if (piece.player.id === 1) {
      currentCell.style.backgroundColor= "red";
    }
    else {
      currentCell.style.backgroundColor= "blue";
    }
  }

  // updateCell: function(piece) {
  //   var currentCell = this.getCell(piece)
  //   // console.log(currentCell)
  //   if (piece.player.id === 1) {
  //     currentCell.style.backgroundColor= "red";
  //   }
  //   else {
  //     currentCell.style.backgroundColor= "black";
  //   }
  // }

}


board = new Board()
view = new viewBoard()
board.addPieceToColumn(2)
piece = board.lastPieceAdded()
// view.getCell(piece)
// view.updateCell(piece)
