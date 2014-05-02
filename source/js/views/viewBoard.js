
function viewBoard() {
  this.board = document.querySelector('.board_table')
}

viewBoard.prototype = {
  getCell: function(piece) {
    var currentCell = document.querySelectorAll('.column')[piece.column-1].querySelector('.row'+(piece.row+1));
    return currentCell;
  },

  updateCell: function(piece) {
    var currentCell = this.getCell(piece)
    var audio = document.getElementById("strike");
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
  },

  resetBoard: function() {
    this.clearBoard()
    this.appendColumns(7)
    this.applyAlphaOmegaToColumns()
  },

  appendColumns: function(numColumns) {
    boardTable = this.board
    for (var i = numColumns; i > 0; i--) {
      newCol = document.createElement("div")
      newCol.classList.add("column")
      newCol.classList.add("grid_2")

      this.appendRows(newCol, 6)
      boardTable.appendChild(newCol)
    }
  },

  applyAlphaOmegaToColumns: function() {
    columns = this.board.querySelectorAll('.column')
    firstColumn = columns[0]
    lastColumn = columns[columns.length-1]
    firstColumn.classList.add('alpha')
    lastColumn.classList.add('omega')
  },

  appendRows: function(columnElement, numRows) {
    var class_div = document.createElement("div")
    class_div.classList.add("column")
    for (var i = numRows; i > 0; i--) {
      var newRow = document.createElement("div")
      newRow.classList.add("row")
      newRow.classList.add("row"+i)
      columnElement.appendChild(newRow)
    }

    return class_div
  },

  clearBoard: function() {
    this.board.innerHTML = null
  }
}
