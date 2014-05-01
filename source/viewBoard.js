$(document).ready(function() {
   view = new viewBoard();
});

function viewBoard(piece) {
  this.column = column
  this.row = row
  this.player = player
}

viewBoard.prototype = {
  getCell: function(piece) {
    return piece.querySelector('.button-container')
  },

  updateCell: function(piece, player) {
    piece.querySelector(this.cellSelector)
    piece.css("background-color", "red")
  }
}

//add eventlistener on the board, to know which piece is added
// need html for this....

//query the dom to find right element

// get the right square, change the color based on the player
var clickASquare = $( square );
$( "square" ).on( "click", function( event ) {

});


//------------------------------------
//    Board.prototype.drawBoard = function() {
//      context.clearRect(0,0,canvas.width, canvas.height);
//      for (var col = 0; col < 7; col++) {
//        for (var row = 0; row < 6; row++) {
//          context.strokeRect( row *this.side, col *this.side, this.side,   this.side);
//        }
//      }
//      context.stroke();
//      Board.prototype.redrawSq = function (x,y, currentPlayer)
//    }

//      var x,y;
//      var side = 200;
//      var board = new Board(context, "#00FF00", "#FF0000", "#00FF00",side)





