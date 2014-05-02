function viewBoard() {}

viewBoard.prototype = {
  getCell: function(piece) {
    var currentCell = document.querySelectorAll('.column')[piece.column-1].querySelector('.row'+(piece.row+1));
    return currentCell;
  },

  updateCell: function(piece) {
    var currentCell = this.getCell(piece)
    var audio=document.getElementById("strike");
    audio.play();
    var bottom_value = (5- piece.row) * 82

    $(currentCell).css("bottom", bottom_value + "px")
    $(currentCell).animate({
      bottom: "0px"
    }, 2500)

    if (piece.player.id === 1) {
      currentCell.classList.add("player1");
    }
    else {
      currentCell.classList.add("player2");
    }
  }
}
