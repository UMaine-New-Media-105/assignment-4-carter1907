//Carter Lambo
// A4Q4
// creating a firework

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  for(var row = 1; row < 7; row ++){
    for(var column = 1; column < 7; column ++){
      if (row%2 == 0) {
        firework(row * width/7 , column * height/7, .2, 5)
      } else if (row%2 == 1) {
        firework2(row * width/7, column * height/7, .1, 20)
      }
    }
  }
  
//   firework(40, 40 , .2, 5);
//   firework(110, 40, .3, 10);
//   firework(180, 40, .2, 20);
//   firework2(200, 200, .3, 20)
  
}

function firework(x, y, s, w){
  

    
  for(var deg = 0; deg < 2*PI; deg += PI/10){
  push();
  translate(x, y)
  rotate(deg);
  strokeWeight(w);
  stroke(random(155),random(155), random(255));
  scale(s);
  
  line(0, 0, 0, 100)
  pop();
  
  }
}
  function firework2(x, y, s, w){
    
  for(var deg = 0; deg < 2*PI; deg += PI/10){
  push();
  translate(x, y)
  rotate(deg);
  strokeWeight(w);
  stroke(random(155),random(255), random(155));
  scale(s);
  
  line(0, 0, 0, 100)
  pop();
    
    // for(var deg = 0; deg < 2*PI; deg += PI/10){
    //   push();
    //   translate(x, y)
    //   rotate(deg);
    //   strokeWeight(w);
    //   stroke(random(255),random(255), random(255));
    //   scale(s);
    //   firework(x, y, s, w)
    //   pop();
  }
  }
