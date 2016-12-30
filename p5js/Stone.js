function Stone(){
  this.x = random(width);
  this.y = random(height);
  this.r = 10;
  this.eaten = false;
  this.color =  color(10, 206, 15)   

  this.move = function(newX, newY) {
      this.x = newX;
      this.y = newY;
  };

  this.display = function() {
    fill(this.color);
    stroke(0);
    //ellipse(100,100,30,30);
    ellipse(this.x, this.y, this.r, this.r);

  }  
}
