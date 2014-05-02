function viewBoard() {}

viewBoard.prototype = {
  getCell: function(piece) {
    //find the specific cell
    var currentCell = document.querySelectorAll('.column')[piece.column].querySelectorAll('.row'+(piece.row+1));
    return currentCell;
  },

  updateCell: function(piece) {
    var currentCell = this.getCell(piece)
    if (piece.player.id === 1) {
      currentCell.css("background-color", "red");
    }
    else {
      currentCell.css("background-color", "black");
    }
  }
}
