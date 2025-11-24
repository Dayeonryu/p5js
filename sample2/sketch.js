function setup() {
  createCanvas(600, 400);
}

function draw() {

  noStroke();
  fill(0);
  ellipse(300, 190, 170, 200);
  quad(215, 190, 205, 400, 395, 400, 385, 190);

  // 얼굴
  fill("#FAEEE3");
  ellipse(300, 200, 135, 150);
  
  // 눈

  stroke(0);
  strokeWeight(3);
  arc(330, 190, 30, 15, PI, 0);
    
  noStroke();
  fill(255);
  ellipse(330, 190, 30, 15);
    
  fill(0);
  ellipse(330, 190, 15, 15);
    
  fill(255);
  circle(327, 188, 3);

  stroke(0);
  strokeWeight(3);
  arc(270, 190, 30, 15, PI, 0);
    
  noStroke();
  fill(255);
  ellipse(270, 190, 30, 15);
    
  fill(0);
  ellipse(270, 190, 15, 15);
    
  fill(255);
  circle(267, 188, 3);
  
  // 코
  stroke(30);
  strokeWeight(1);
  line(300, 200, 310, 220);
  line(310, 220, 300, 220);
  
  // 입
  noStroke();
  fill(200, 50, 50);
  ellipse(300, 240, 30, 10);
  
  // 눈썹
  noFill();
  stroke(50);
  strokeWeight(1);
  arc(270, 175, 30, 12, PI, 0);
  arc(330, 175, 30, 12, PI, 0);
  
  // 앞머리
  noStroke();
  fill(0);
  arc(240, 125, 150, 80, 0, PI-HALF_PI);
  
  // 귀
  fill("#FAEEE3");
  ellipse(235, 200, 30, 40);
  ellipse(365, 200, 30, 40);

  // 상체
  fill("#EFEBF8");
  circle(240, 310, 30);
  circle(360, 310, 30);
  rect(225, 310, 150, 90);
  rect(240, 295, 120, 20);
  
  fill(255);
  rect(265, 295, 70, 105);
    
  // 목
  fill("#FAEEE3");
  rect(280, 250, 40, 45);
  ellipse(300, 295, 40, 40);
  
  // 귀걸이
  stroke("#C0C0C0");
  strokeWeight(3);
  line(230, 215, 230, 220);
  line(370, 215, 370, 220);
  line(375, 215, 375, 220);
  
}