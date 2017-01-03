var SquareSize = 100;
var BigStoneR = 30;
var BigStoneColor;

var SmallStonePerSq = 5;
var SmallStoneR = 15;
var SmallStoneColor;

var NPlayer = 2;
var PlayerTurn = 0;

var TheBlock = [];
var BlockColor;
var HlBlockColor;

function setup() {
  createCanvas(700, 201);

  BigStoneColor = color(255,255,123,150);
  SmallStoneColor = color(122,234,0,123);
  BlockColor = color(200,200,200);
  HlBlockColor = color(200,0,0);

  for (var i=0; i<NPlayer; i++){
    TheBlock[i] = [];
    for (var j=0; j<6;j++){
      TheBlock[i][j] = new Block();
      TheBlock[i][j].player = i;
      TheBlock[i][j].pos = j;
      if (j==0) {
        TheBlock[i][j].quan =true;
        TheBlock[i][j].BigStone = 1;
        TheBlock[i][j].SmallStone = 0;
        TheBlock[i][j].y = 0;
        if (i==0) {
          TheBlock[i][j].x = 0; 
        } else {
          TheBlock[i][j].x = 6*SquareSize;
        }
      } else {
        TheBlock[i][j].y = i*SquareSize;
        TheBlock[i][j].x = j*SquareSize;
        TheBlock[i][j].BigStone = 0;
        TheBlock[i][j].SmallStone = SmallStonePerSq;
      }
    }
  }


}

function draw() {
  background(255);
  DrawTable();
  
  
}

function DrawTable(){
  for (var i=0; i<NPlayer; i++){
    TheBlock[i][0].display();
  }
  for (var i=0; i<NPlayer; i++){
    for (var j=1; j<6;j++){
      TheBlock[i][j].display();
    }
  } 

}


function mousePressed() {
  var hlX = int(mouseX);
  var hlY = int(mouseY);
  var hlPlayer = 0;
  var hlBlock = 0;
  for (var i=0; i<NPlayer; i++){
    for (var j=0; j<6; j++){
      if (mouseX >= TheBlock[i][j].x && mouseX < TheBlock[i][j].x+SquareSize) {
        if (mouseY >= TheBlock[i][j].y && mouseY < TheBlock[i][j].y+SquareSize && j != 0) {
          //TheBlock[i][j].selected == true;
          hlPlayer = i;
          hlBlock = j;
        }
        if (mouseY >= TheBlock[i][j].y && mouseY < TheBlock[i][j].y+2*SquareSize && j == 0) {
          //TheBlock[i][j].selected == true;
          hlPlayer = i;
          hlBlock = j;   
        } 
      }
    }
    

  }
    print("hlPlayer = "+str(hlPlayer)+", hlBlock="+str(hlBlock));
    for (var i=0; i<NPlayer; i++){
    for (var j=0; j<6; j++){ 
      if (hlPlayer == i && hlBlock == j) {
        TheBlock[i][j].selected = !TheBlock[i][j].selected;
      } else{ 
        TheBlock[i][j].selected = false;
      }
    }
    } 
}

