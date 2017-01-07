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
          ellipse(this.x+SquareSize/2, this.y+SquareSize*1/2, BigStoneR, BigStoneR);
        }  

        if (this.SmallStone < 20) {
          for (var i = 0; i < this.SmallStone; i++) {
            stroke(0);
            fill(SmallStoneColor);
            var rowstone = floor(i/5);
            var colstone = int(i%5);
            var xstone = this.x+SmallStoneR*(colstone*1.2+1);
            var ystone = this.y+SquareSize*1.8/3+SmallStoneR*(rowstone*1.2+1);
            ellipse(xstone, ystone, SmallStoneR, SmallStoneR);
            textSize(SmallStoneR/1.5);
            noStroke();
            fill(0);
            textAlign(CENTER,CENTER);
            text(str(i),xstone,ystone)   
          }    
        } else { 
          stroke(0);
          fill(SmallStoneColor);
          var xstone = this.x+SmallStoneR;
          var ystone = this.y+SquareSize*1.8/3+SmallStoneR;
          for (var z=3; z>=0; z--) {
            ellipse(xstone+2*z, ystone+z, SmallStoneR, SmallStoneR);
          }
          textSize(SmallStoneR/1.5);
          noStroke();
          fill(0);
          textAlign(CENTER,CENTER);
          text(str(this.SmallStone),xstone,ystone)    
        }
      } else {
        fill(BigStoneColor);
        for (var i = 0; i < this.BigStone; i++) {
          ellipse(this.x+SquareSize/2, this.y+SquareSize*3/2, BigStoneR, BigStoneR);
        }  
        
        if (this.SmallStone < 20) {
          for (var i = 0; i < this.SmallStone; i++) {
            stroke(0);
            fill(SmallStoneColor);
            var rowstone = floor(i/5);
            var colstone = int(i%5);
            var xstone = this.x+SmallStoneR*(colstone*1.2+1);
            var ystone = this.y+SquareSize*1.8/3+SmallStoneR*(rowstone*1.2+1);
            ellipse(xstone, ystone, SmallStoneR, SmallStoneR);
            textSize(SmallStoneR/1.5);
            noStroke();
            fill(0);
            textAlign(CENTER,CENTER);
            text(str(i),xstone,ystone)   
          }    
        } else { 
          stroke(0);
          fill(SmallStoneColor);
          var xstone = this.x+SmallStoneR;
          var ystone = this.y+SquareSize*1.8/3+SmallStoneR;
          for (var z=3; z>=0; z--) {
            ellipse(xstone+2*z, ystone+z, SmallStoneR, SmallStoneR);
          }
          textSize(SmallStoneR/1.5);
          noStroke();
          fill(0);
          textAlign(CENTER,CENTER);
          text(str(this.SmallStone),xstone,ystone)    
        }                              
      }
    } else {

      for (var i = 0; i < this.SmallStone; i++) {
        stroke(0);
        fill(SmallStoneColor);
        var rowstone = floor(i/5);
        var colstone = int(i%5);
        var xstone = this.x+SmallStoneR*(colstone*1.2+1);
        var ystone = this.y +SmallStoneR*(rowstone*1.2+1);
        ellipse(xstone, ystone, SmallStoneR, SmallStoneR);
        textSize(SmallStoneR/1.5);
        noStroke();
        fill(0);
        textAlign(CENTER,CENTER);
        text(str(i),xstone,ystone)
      }    
    }                  
    fill (100);
    noStroke();
    textSize(10);
    text(str(this.player)+"/"+str(this.pos)+"/",this.x+0.1*SquareSize,this.y+SquareSize/2); 
  }

}
