var SquareSize = 100;
var BigStone = [];
var BigStoneR = 30;

var SmallStone = []
var SmallStonePerSq = 5;
var SmallStoneR = 15;

var NPlayer = 2;

function setup() {
  createCanvas(700, 200);
  var BigStoneColor = color(255,255,123,150);
  var SmallStoneColor = color(122,234,0,123);


  for (var i=0; i<NPlayer;i++){
    BigStone[i] = new Stone();
    BigStone[i].r = BigStoneR;
    BigStone[i].x = SquareSize*(i*6+1/2);
    BigStone[i].y = SquareSize;
    BigStone[i].color = BigStoneColor;
    
  }
  for (var i=0; i<NPlayer;i++){ //*SmallStonePerSq*5
    for (var j=0; j<5;j++){
      for (var k=0; k<SmallStonePerSq;k++){
        var index = i*SmallStonePerSq*5+j*SmallStonePerSq+k;
        SmallStone[index] = new Stone();
        SmallStone[index].r = SmallStoneR;
        SmallStone[index].color = SmallStoneColor;
        SmallStone[index].x = random(SquareSize*(j+1.15+k*0.1),SquareSize*(j+1.15+k*0.2));
        SmallStone[index].y = random(SquareSize*(i+1/7),SquareSize*(i+6/7));
      }  
    }
  }
}

function draw() {
  background(255);
  DrawTable();
  DrawStones();
  
  
}

function DrawTable(){
  fill(183);
  stroke(0);
  arc(SquareSize, SquareSize, SquareSize*2, SquareSize*2, 0, 2*PI, OPEN);
  arc(width-SquareSize, SquareSize, SquareSize*2, SquareSize*2, 0, 2*PI, OPEN);
  
  for (var i=1; i<=5;i++){
    rect(i*SquareSize,0,SquareSize,SquareSize);
    rect(i*SquareSize,SquareSize-1,SquareSize,SquareSize);
  }
}

function DrawStones(){
  for (var i=0; i<NPlayer;i++){
    BigStone[i].display();
  }
  for (var i=0; i<NPlayer*SmallStonePerSq*5;i++){
    SmallStone[i].display();
  }
}

function mousePressed() {
  var hlX = int(mouseX/SquareSize);
  var hlY = int(mouseY/SquareSize);
  var HLStoneColor = color(255,100,100,150);
  var BigStoneColor = color(255,255,123,150);
  var SmallStoneColor = color(122,234,0,123);
  for (var i=0; i<NPlayer;i++){
    
    if (int(BigStone[i].x/SquareSize) == hlX && int(BigStone[i].y/SquareSize) == hlY  ) {
      BigStone[i].color = HLStoneColor;
    } else {
      BigStone[i].color = BigStoneColor;
    }
  }
  for (var i=0; i<NPlayer*SmallStonePerSq*5;i++){
    if (int(SmallStone[i].x/SquareSize) == hlX && int(SmallStone[i].y/SquareSize) == hlY ) {
      SmallStone[i].color = HLStoneColor;
    } else {
      SmallStone[i].color = SmallStoneColor;
    }
  }
}

