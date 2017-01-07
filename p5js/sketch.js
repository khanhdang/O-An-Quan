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


var DirectionShow = 0;
var ToMove = false;

function setup() {
  createCanvas(700, 221);

  BigStoneColor = color(255,255,123);
  SmallStoneColor = color(122,234,0);
  BlockColor = color(200,200,200);
  HlBlockColor = color(200,200,0);

  for (var i=0; i<NPlayer; i++){
    TheBlock[i] = [];
    for (var j=0; j<6;j++){
      TheBlock[i][j] = new Block();
      TheBlock[i][j].player = i;
      TheBlock[i][j].pos = j;
      if (j==0) {
        TheBlock[i][j].quan =true;
        TheBlock[i][j].BigStone = 1;
        TheBlock[i][j].SmallStone = 10;
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
  DrawDirection();
  DrawInformation();
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
  //
  if (ToMove){
    for (var i=0; i<NPlayer; i++){
      for (var j=0; j<6; j++){ 
        // check if the mouse click to the triangle
        if (TheBlock[i][j].selected && hlPlayer == i && hlBlock == j-1){
          print("LEFT");
          MoveStones("LEFT",i,j);
          TheBlock[i][j].selected = false;
          ToMove = false; 
        } else if (TheBlock[i][j].selected && hlPlayer == i && hlBlock == j+1){
          print("RIGHT");
          MoveStones("RIGHT",i,j);
          TheBlock[i][j].selected = false;
          ToMove = false; 
        } else if  (TheBlock[i][j].selected && hlPlayer == i && hlBlock == j){
          TheBlock[i][j].selected = false;
          ToMove = false;
          print ("NO MOVE");
        } else  if  (TheBlock[i][j].selected) {
          if (i==1 && j==1 && hlPlayer == 0 && hlBlock == 0) {
            print("LEFT");
            MoveStones("LEFT",i,j);
            TheBlock[i][j].selected = false;
            ToMove = false;  
          }
          if (i==0 && j==5 && hlPlayer == 1 && hlBlock == 0) {
            print("RIGHT");
            MoveStones("RIGHT",i,j);
            TheBlock[i][j].selected = false;
            ToMove = false;  
          } 
          if (i==1 && j==5 && hlPlayer == 1 && hlBlock == 0) {
            print("RIGHT");
            MoveStones("RIGHT",i,j);
            TheBlock[i][j].selected = false;
            ToMove = false;  
          }  
          print("Curr "+str(i)+"/"+str(j));
          print("HL "+str(hlPlayer)+"/"+str(hlBlock));
        }
      }
    }
  } else {

    //print("hlPlayer = "+str(hlPlayer)+", hlBlock="+str(hlBlock));
    for (var i=0; i<NPlayer; i++){
      for (var j=1; j<6; j++){ 
        if (hlPlayer == i && hlBlock == j) {
          TheBlock[i][j].selected = !TheBlock[i][j].selected;
          ToMove = !ToMove;
          print("MOVE");
        } else{ 
          TheBlock[i][j].selected = false;
        }
      }
    } 
  }
}

function DrawDirection() {
  for (var i=0; i<NPlayer; i++){
    for (var j=0; j<6; j++){ 
      if (TheBlock[i][j].selected) {
        DirectionShow++;
        if (DirectionShow < 60) {
          DirectionShow++;
          fill(HlBlockColor);
          stroke(0);
          triangle(TheBlock[i][j].x-0.1*SquareSize, TheBlock[i][j].y+0.1*SquareSize, TheBlock[i][j].x-0.1*SquareSize, TheBlock[i][j].y+0.9*SquareSize,  TheBlock[i][j].x-SquareSize/3, TheBlock[i][j].y+SquareSize/2);
          triangle(TheBlock[i][j].x+1.1*SquareSize, TheBlock[i][j].y+0.1*SquareSize, TheBlock[i][j].x+1.1*SquareSize, TheBlock[i][j].y+0.9*SquareSize,  TheBlock[i][j].x+SquareSize*4/3, TheBlock[i][j].y+SquareSize/2);
        } else {
          DirectionShow++;
          if (DirectionShow == 120 )
          DirectionShow=0;
        }

      }
    }
  }      
}

function DrawInformation() {
  fill(0);
  textSize(10);
  text("PLAYER: "+str(PlayerTurn)+"/"+str(NPlayer)+" || MOVE? "+str(ToMove),SquareSize, 215)
}

function MoveStones(Direction, Player, Block){
  var BSmallStones = TheBlock[Player][Block].SmallStone;
  var BLargeStones = TheBlock[Player][Block].LargeStone;
  TheBlock[Player][Block].SmallStone = 0;
  TheBlock[Player][Block].LargeStone = 0;
  if (Direction == "LEFT") {
    while (BSmallStones > 0) {
      for (var i = Block-1; i > 0; i--){
        TheBlock[Player][i].SmallStone++;
        BSmallStones--;
        if (BSmallStones == 0) break;
      }
      TheBlock[1-Player][0].SmallStone++;
      BSmallStones--;
      if (BSmallStones == 0) break;
      for (var i = 1; i < 6; i++){
        TheBlock[1-Player][i].SmallStone++;
        BSmallStones--;
        if (BSmallStones == 0) break;
      }
      BSmallStones = 0;
    }
  } else {
    // "RIGHT"
    while (BSmallStones > 0) {
      for (var i = Block+1; i < 6; i++){
        TheBlock[Player][i].SmallStone++;
        BSmallStones--;
        if (BSmallStones == 0) break;
      }

      TheBlock[1-Player][0].SmallStone++;
      BSmallStones--;
      if (BSmallStones == 0) break;
      for (var i = 5; i > 0; i--){
        TheBlock[1-Player][i].SmallStone++;
        BSmallStones--;
        if (BSmallStones == 0) break;
      }
      BSmallStones = 0;
    }  
  }
}
