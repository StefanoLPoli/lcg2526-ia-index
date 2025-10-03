let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax * 0.6;

function setup() {
  createCanvas(xMax, yMax);
  frameRate();
}

function draw() {
  background("#090957ff");
  //mostrare un testo bianco che mi dice le coordinate del mouse
  //sul foglio da disegno
  fill(255); //bianco
  textSize(15);
  text("MouseX: " + mouseX + ", MouseY: " + mouseY ,20,20);

  //disegno delle stelle in modo 1
  //stelle1();

  //disegno delle stelle con il random
  stelleRandom();

  //inizio contesto di disegno
  push();

  //rettangolo
  fill(200);
  strokeWeight(1);
  stroke(40);
  rectMode(CENTER);
  rect(xRocket,yRocket+30,80,180,20);

  //cerchio
  fill(100, 149, 237);
  strokeWeight(3);
  stroke(255,255,255);
  circle(xRocket,yRocket+10,50);

  //ellipse(300,200,100,50);

  //triangolo superiore
  fill(220, 20, 60);
  strokeWeight(1); 
  stroke(0,0,0);
  triangle(xRocket-40,yRocket-60,xRocket+40,
            yRocket-60,xRocket,yRocket-120);

  triangle(xRocket+25,yRocket+80,xRocket+40,
            yRocket+80,xRocket+80,yRocket+150);

  triangle(xRocket-25,yRocket+80,xRocket-40,
            yRocket+80,xRocket-80,yRocket+150);
  

  //fine contesto di disegno
  pop();

  //xRocket = (xRocket + 1) % xMax;
  yRocket = yRocket - 1;
  //quando yRocket va oltre il canvas,
  //allora va resettata
  let soglia = - (yMax*0.6);
  if (yRocket < soglia){
    yRocket = yMax;
  }
}

function stelle1()
{
  //disegnare le stelle
  //120 stelle di 3 tipi diversi
  //le stelle sono elissoidi
  push();
  for(let i=0; i<120; i++)
  {
    let starX= (i*37) % width + (i%3) *5;
    let starY= (i*73) % height + (i%7);
    noStroke();
    
    if((i%3)==0)
    {
      //stella di tipo A
      fill(255,255,150);
      ellipse(starX,starY,1);
    } else if((i%3)==1){
      //stella di tipo B
      fill(200,100,255);
      ellipse(starX,starY,1.5);
    } else {
      //stella di tipo C
      fill(255,255,100);
      ellipse(starX,starY,2.8);
    }
  }
  pop();
}

function stelleRandom()
{
  //disegnare le stelle
  //120 stelle di 3 tipi diversi
  //le stelle sono elissoidi
  push();
  for(let i=0; i<120; i++)
  {
    let starX= random(0,xMax);
    let starY= random(0,yMax);
    let starTrasparency = random(150,255);
    let starSize = random(1, 2.8);
    noStroke();

    //stella di tipo A
    fill(255,255,starTrasparency);
    ellipse(starX,starY,starSize);
  }
  pop();
}