
function viewBoard() {
  this.board = document.querySelector('.board_table')
  this.player1 = document.querySelector('#player1')
  this.player2 = document.querySelector('#player2')
}

viewBoard.prototype = {
  getCell: function(piece) {
    var currentCell = document.querySelectorAll('.column')[piece.column-1].querySelector('.row'+(piece.row));
    return currentCell;
  },

  updateCell: function(piece) {
    var currentCell = this.getCell(piece)
    var audio = document.getElementById("strike");
    audio.play();
    // #CR careful of magic numbers here: why 6 and 82?
    var bottom_value = (6- piece.row) * 82

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
    // #CR 7 should be a board size variable
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
// #CR jQuery has a .first() and .last() you can use here.
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
  },

  highlightCurrentPlayer: function(currentPlayer) {
    // #CR with jQuery you can use .toggleClass

    if (currentPlayer.id === 1)
    {
      this.player1.classList.add("current_player1")
      this.player2.classList.remove("current_player2")
    }
    else
    {
      this.player2.classList.add("current_player2")
      this.player1.classList.remove("current_player1")
    }
  },

  displayWinner: function(player_id) {
    var winner = $(document.createElement('div'))
  if (player_id == 2){
    // #CR set winning text with a player so it is easier to modify
    winner.text("j e d i wins!")
  } else {
    winner.text("s i t h wins!")
    winner.css("color", "green")
  }
  winner.attr("class", "winner")
  $(".board_table").append(winner)

  }
}

