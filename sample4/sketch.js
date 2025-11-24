let startTime_night;
let j = 0;
let k = 0;
let amt = 0;

function setup() {
  createCanvas(600, 400);
  startTime = millis();
  
  c1 = color('#C0C0FF');
  c2 = color('#6666FF');
  c3 = color('#6666B2');
  c4 = color('#00004C');
  
}

function draw() {
  noStroke();
  
  let current = millis() - startTime;

  background('#CCFFFF');
    
  fill(255);
  j = current / 20;
    
  ellipse(-140+j, 160, 50, 30);
  ellipse(-120+j, 160, 50, 50);
  ellipse(-100+j, 150, 40, 50);
  ellipse(-90+j, 170, 40, 50);
  ellipse(-70+j, 160, 50, 50);
    
  ellipse(120+j, 180, 50, 30);
  ellipse(140+j, 180, 50, 50);
  ellipse(160+j, 170, 40, 50);
  ellipse(170+j, 190, 40, 50);
  ellipse(190+j, 180, 50, 50);
    
  ellipse(370+j, 150, 50, 30);
  ellipse(390+j, 150, 50, 50);
  ellipse(410+j, 140, 40, 50);
  ellipse(420+j, 160, 40, 50);
  ellipse(440+j, 150, 50, 50);

  
  k = current / 100;
  fill('#C0E0C0');
  quad(0, 330-k, 30, 350-k, 30, 400, 0, 400);
  quad(30, 330-k, 60, 350-k, 60, 400, 30, 400);
  quad(60, 330-k, 90, 350-k, 90, 400, 60, 400);
  quad(90, 330-k, 120, 350-k, 120, 400, 90, 400);
  quad(120, 330-k, 150, 350-k, 150, 400, 120, 400);
  quad(450, 330-k, 480, 350-k, 480, 400, 450, 400);
  quad(480, 330-k, 510, 350-k, 510, 400, 480, 400);
  quad(510, 330-k, 540, 350-k, 540, 400, 510, 400);
  quad(540, 330-k, 570, 350-k, 570, 400, 540, 400);
  quad(570, 330-k, 600, 350-k, 600, 400, 570, 400);

  amt = current / 8000;
  amt = constrain(amt, 0, 1);
  
  let door_color = lerpColor(c1, c2, amt);
  fill(door_color);
  arc(300, 125, 300, 200, radians(180), radians(360));
  rect(150, 125, 300, 300);
  
  fill('#FFFFE0');
  arc(300, 150, 250, 200, radians(180), radians(360));
  rect(175, 150, 250, 300);
  
  let night_color = lerpColor(c3, c4, amt);
  fill(night_color);
  arc(300, 200, 200, 200, radians(180), radians(360));
  rect(200, 200, 200, 300);
  
  fill('#FFFF80');
  triangle(320, 330, 340, 330, 330, 315);
  triangle(320, 320, 340, 320, 330, 335);
  triangle(250, 200, 270, 200, 260, 185);
  triangle(250, 190, 270, 190, 260, 205);
  
  stroke(255, random(150, 255));
  strokeWeight(5);
  point(270+random(-0.5, 0.5), 350+random(-0.5, 0.5));
  point(340+random(-0.5, 0.5), 180+random(-0.5, 0.5));
  point(350+random(-0.5, 0.5), 240+random(-0.5, 0.5));
  point(240+random(-0.5, 0.5), 270+random(-0.5, 0.5));
  point(250+random(-0.5, 0.5), 160+random(-0.5, 0.5));

  strokeWeight(3);
  point(270, 140);
  point(310, 135);
  point(350, 145);
  point(370, 160);

  point(230, 170);
  point(260, 180);
  point(300, 175);
  point(340, 185);
  point(360, 200);

  point(240, 210);
  point(280, 220);
  point(320, 210);
  point(360, 230);
  point(260, 240);
  point(300, 250);
  point(340, 240);
  
  point(230, 260);
  point(270, 270);
  point(310, 265);
  point(350, 280);
  point(370, 290);

  point(240, 350);
  point(280, 310);
  point(320, 305);
  point(360, 350);
  point(230, 320);
  point(270, 375);
  point(290, 325);
  point(310, 330);
  point(330, 365);
  point(350, 325);
  point(370, 370);
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}