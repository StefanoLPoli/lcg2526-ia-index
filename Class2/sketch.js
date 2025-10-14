let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax * 0.6;

let star_img;
let table;
let rocket_img;

//scalatura e rotazione
let scalaDiBase = 1;
let tempo = 1;
let ruota2 = 1;

function preload(){
  table=loadTable("stars.csv","csv","header");
  star_img = loadImage("star.png");
  rocket_img = loadImage("rocket.png");
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(10);
}

function draw() {
  background("#9595caff");
  //mostrare un testo bianco che mi dice le coordinate del mouse
  //sul foglio da disegno
  fill(255); //bianco
  textSize(15);
  text("MouseX: " + mouseX + ", MouseY: " + mouseY ,20,20);

  //disegno delle stelle in modo 1
  //stelle1(80);

  //disegno delle stelle con il random
  //stelleRandom(80);

  //disegno delle stelle dal file
  disegnaStelleDaFile();

  //disegno il razzo
  let variazioneScala = scalaDiBase * Math.abs(sin(tempo));
  disegnaRazzo(xRocket, yRocket,1,ruota2);
  //disegnaRazzoDaFile(xRocket,yRocket);
  tempo += 1;
  ruota2 += 1;
  yRocket = muoviRazzo(1, yRocket);
}

function stelleRandom(numeroStelle=120) //se non viene passato nessun parametro, disegnerà 120 stelle
{
  //disegnare le stelle
  //120 stelle di 3 tipi diversi
  //le stelle sono elissoidi
  push();
  for(let i=0; i<numeroStelle; i++)
  {
    let starX= random(0,xMax);
    let starY= random(0,yMax);
    let Trasparency = random(150,255);
    let Size = random(5,10);
    noStroke();

    //stella di tipo A
    fill(255,255,Trasparency);
    ellipse(starX,starY,Size);
  }
  pop();
}

function disegnaRazzo(xRocket, yRocket, scalaB=1, ruota=30)
{
  //inizio contesto di disegno
  push();

  //scalare
  scale(scalaB);

  //ruotare
  //prendere il pivot dal centro del foglio al centro del razzo
  translate(xRocket/2, yRocket/2);
  rotate(ruota);

  //rettangolo
  fill(200);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(40);
  rect(0,0+30,80,180,20);

  //cerchio
  fill(100, 149, 237);
  strokeWeight(3);
  stroke(255,255,255);
  circle(0,0+10,50);

  //ellipse(300,200,100,50);

  //triangolo superiore
  fill(220, 20, 60);
  strokeWeight(1); 
  stroke(0,0,0);
  triangle(0-40,0-60,0+40,
            0-60,0,0-120);

  triangle(0+25,0+80,0+40,
            0+80,0+80,0+150);

  triangle(0-25,0+80,0-40,
            0+80,0-80,0+150);

  //fine contesto di disegno
  pop();
}

function muoviRazzo(numeroPixel=1, yRocket)
{
  //xRocket = (xRocket + 1) % xMax;
  yRocket = yRocket - numeroPixel;
  //quando yRocket va oltre il canvas,
  //allora la yRocket va resettata
  let soglia = - (yMax*0.6);
  if (yRocket < soglia){
    yRocket = yMax;
  }

  return(yRocket); //ritorniamo il valore di yRocket
}

function stelle1(numeroStelle=120)
{
  //disegnare le stelle
  //120 stelle di 3 tipi diversi
  //le stelle sono elissoidi
  push();
  for(let i=0; i<numeroStelle; i++)
  {
    let starX= (i*37) % width + (i%3) *5;
    let starY= (i*73) % height + (i%7);
    noStroke();

    let Trasparency = random(150,255);
    let Size = random(5,10);
    noStroke();
    
    if((i%3)==0)
    {
      //stella di tipo A
      fill(255,255,Trasparency);
      ellipse(starX,starY,Size);
    } else if((i%3)==1){
      //stella di tipo B
      fill(200,100,Trasparency);
      ellipse(starX,starY,Size);
    } else {
      //stella di tipo C
      fill(255,255,Trasparency);
      ellipse(starX,starY,Size);
    }
  }
  pop();
}

function disegnaStelleDaFile()
{
  for(let k=0; k<table.getRowCount(); k++)
  {
    let starX= (k*37) % width + (k%3) *5;
    let starY= (k*73) % height + (k%7);
    disegnaSignolaStellaDaFile(k, starX, starY);
  }
}

function disegnaSignolaStellaDaFile(index, posX, posY)
{
  let starSize = table.getNum(index, "starSize");
  image(star_img, posX, posY, starSize, starSize);
}

function disegnaRazzoDaFile(rocketX, rocketY)
{
  image(rocket_img,rocketX-50,rocketY,100,100);
}