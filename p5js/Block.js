function Block(){
  this.x = 0;
  this.y = 0;
  this.pos = 0;
  this.player = 0;
  this.quan = false; // ?
  this.SmallStone = 0;
  this.BigStone = 0;
  this.selected = false;

  this.display = function() {
    if (this.selected){
      fill(HlBlockColor);
    } else {
      fill(BlockColor);
    }

    stroke(0);
    if (this.quan) {
      if (this.player==0){
        arc(SquareSize, SquareSize, SquareSize*2, SquareSize*2, PI/2, -PI/2, OPEN);
      } else {
        arc(6*SquareSize, SquareSize, SquareSize*2, SquareSize*2, -PI/2, PI/2, OPEN); 
      }
    } else {
      rect(this.pos*SquareSize,this.player*SquareSize,SquareSize,SquareSize);
    }

    // draw stones
   if (this.quan) {
      if (this.player==0){
        fill(BigStoneColor);
        for (var i = 0; i < this.BigStone; i++) {
          ellipse(this.x+SquareSize/2, this.y+SquareSize, BigStoneR, BigStoneR);
        }  

        fill(SmallStoneColor);
        for (var i = 0; i < this.SmallStone; i++) {
          ellipse(this.x, this.y, SmallStoneR, SmallStoneR);
        }    
      } else {
        fill(BigStoneColor);
        for (var i = 0; i < this.BigStone; i++) {
          ellipse(this.x+SquareSize/2, this.y+SquareSize, BigStoneR, BigStoneR);
        }   
      }
    } else {

      fill(SmallStoneColor);
      for (var i = 0; i < this.SmallStone; i++) {
        var rowstone = floor(i/5);
        var colstone = int(i%5);
        var xstone = this.x+SmallStoneR*(colstone*1.2+1);
        var ystone = this.y +SmallStoneR*(rowstone*1.2+1);
        ellipse(xstone, ystone, SmallStoneR, SmallStoneR);
      }    
    }                  
  }

}
