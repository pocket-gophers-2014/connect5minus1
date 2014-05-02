function viewBoard() {}

viewBoard.prototype = {
  getCell: function(piece) {
    //find the specific cell
    currentCell = document.querySelectorAll('.column')[piece.column].querySelectorAll('div')[piece.row];
    return currentCell;
  },

  updateCell: function(piece) {
    if (piece.player.id === 1) {
      currentCell.css("background-color", "red");
    }
    else {
      currentCell.css("background-color", "black");
    }
  }
}
