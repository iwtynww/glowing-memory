
function setup() {
  createCanvas(400, 400);
  somDatrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  showactor();
  showcar();
  moveactor();
  movecar();
  carback();
  collide();
  score();
  pinscore();
  biggerZero();
  canmove();
}


