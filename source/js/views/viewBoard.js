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
    console.log(currentCell)
    if (piece.player.id === 1) {
      currentCell.style.backgroundColor= "red";
    }
    else {
      currentCell.style.backgroundColor= "black";
    }
  }
}


board = new Board()
view = new viewBoard()
board.addPieceToColumn(2)
piece = board.lastPieceAdded()
// view.getCell(piece)
// view.updateCell(piece)
