function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();

  background('#CCFFFF');
    
  fill(255);
    
  ellipse(50, 150, 50, 30);
  ellipse(70, 150, 50, 50);
  ellipse(90, 140, 40, 50);
  ellipse(100, 160, 40, 50);
  ellipse(120, 150, 50, 50);
    
  ellipse(480, 150, 50, 30);
  ellipse(510, 150, 50, 50);
  ellipse(530, 140, 40, 50);
  ellipse(540, 160, 40, 50);
  ellipse(560, 150, 50, 50);

  fill('#C0E0C0');
  quad(0, 330, 30, 350, 30, 400, 0, 400);
  quad(30, 330, 60, 350, 60, 400, 30, 400);
  quad(60, 330, 90, 350, 90, 400, 60, 400);
  quad(90, 330, 120, 350, 120, 400, 90, 400);
  quad(120, 330, 150, 350, 150, 400, 120, 400);
  quad(450, 330, 480, 350, 480, 400, 450, 400);
  quad(480, 330, 510, 350, 510, 400, 480, 400);
  quad(510, 330, 540, 350, 540, 400, 510, 400);
  quad(540, 330, 570, 350, 570, 400, 540, 400);
  quad(570, 330, 600, 350, 600, 400, 570, 400);

  fill('#C0C0FF');
  arc(300, 125, 300, 200, radians(180), radians(360));
  rect(150, 125, 300, 300);
  
  fill('#FFFFE0');
  arc(300, 150, 250, 200, radians(180), radians(360));
  rect(175, 150, 250, 300);
  
  fill('#6666B2');
  arc(300, 200, 200, 200, radians(180), radians(360));
  rect(200, 200, 200, 300);
  
  fill('#FFFF80');
  triangle(320, 330, 340, 330, 330, 315);
  triangle(320, 320, 340, 320, 330, 335);
  triangle(250, 200, 270, 200, 260, 185);
  triangle(250, 190, 270, 190, 260, 205);
  
  stroke('#FFFF80');
  strokeWeight(5);
  point(270, 350);
  point(340, 180);
  point(350, 240);
  point(240, 270);
  point(250, 160);

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