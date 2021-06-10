//ator
let posicaoXAtor = 100;
let posicaoYAtor = 366;
let sizeXAtor = 30;
let sizeYAtor = 30;
let colisao = false;
let meuspontos= 0;

function showactor(){
  image(imagemDoAtor, posicaoXAtor, posicaoYAtor,           sizeXAtor, sizeYAtor);
}

function moveactor(){
   if(keyIsDown(UP_ARROW)){
    posicaoYAtor -=3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(canmove()){
    posicaoYAtor +=3;

    }
  }
}

function collide(){
  for(let i=0;i<imagemCarros.length;i+=1){
    crash = collideRectCircle(xCarros[i], yCarros[i], sizeX, sizeY, posicaoXAtor, posicaoYAtor, 15);
  
    if(crash){
      crashed();
      somDaColisao.play();
      if(biggerZero()){
        meuspontos -=1;
      }
    }
  }
  
}

function crashed(){
 posicaoYAtor =366;
}

function score(){
  fill(color(255, 255, 0));
  textAlign(CENTER);
  textSize(25);
  text(meuspontos, width/2, 27);
}

function pinscore(){
  if(posicaoYAtor < 15){
    meuspontos +=1;
    somDosPontos.play();
    crashed();
  }
}

function biggerZero(){
  return meuspontos > 0;
  
}

function canmove(){
  return posicaoYAtor < 366;
}


