//Carter Lambo
// A4Q1
// creating a firework

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  //firework(40, 40 , .2, 5);
  //firework(110, 40, .3, 10);
  //firework(180, 40, .2, 20);
  firework2(200, 200, .3, 20)
  
}

function firework(x, y, s, w){

  for(var deg = 0; deg < 2*PI; deg += PI/10){
  push();
  translate(x, y)
  rotate(deg);
  strokeWeight(w);
  stroke(random(255),random(255), random(255));
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
  stroke(random(255),random(255), random(255));
  scale(s);
  firework(x, y, s, w)
  pop();
    
  }
  
 
  
  }
