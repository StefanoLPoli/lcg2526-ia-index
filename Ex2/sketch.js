let coloreMare1, coloreMare2; 
let coloreCielo1, coloreCielo2; 
let interpolazione = 0; // variabile per l'interpolazione
let ySole = 0;

function setup() {
  createCanvas(400, 600);

  coloreMare1 = color(135, 206, 235);// azzurro
  coloreMare2 = color(0, 0, 139);// blu scuro
  coloreCielo1 = color(135, 206, 235);// azzurro
  coloreCielo2 = color(148, 0, 211);// blu scuro

  frameRate(20);
}

function draw() {
  background(220);

  // calcolo il colore interpolato
  let coloreMare = lerpColor(coloreMare1, coloreMare2, interpolazione);
  let coloreCielo = lerpColor(coloreCielo1,coloreCielo2,interpolazione);

  noStroke();
  fill(coloreCielo);
  rect(0,0,400,300);

  fill("#cdec51ff");
  circle(200, ySole, 150);

  fill(coloreMare);
  rect(0,300,400,300);

  interpolazione += 0.01;
  if (interpolazione > 1) {
    interpolazione = 0; // ricomincia
    ySole=0;
  }

  ySole = ySole+  4;
}
