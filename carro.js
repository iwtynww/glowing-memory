let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [45, 96, 150, 210, 270, 318];
let speedCar = [2, 2.5, 3.2, 5, 3.3, 2.3];

//tamanho dos carros
let sizeX = 50;
let sizeY = 30;

//velocidade final
let finalSpeed = -50;


function showcar(){
  for(let i=0; i<imagemCarros.length; i+=1){
    image(imagemCarros[i], xCarros[i], yCarros[i], sizeX, sizeY);
  }
}

function movecar(){
  for(let i=0; i<imagemCarros.length; i +=1){
  xCarros[i] -= speedCar[i];
  }
}

function carback(){
  for(let i=0; i< imagemCarros.length ; i+=1){
    if(moreThan(xCarros[i])){
      xCarros[i] = 500; 
    }
  }
}

function moreThan(xCarro){
  return xCarro < finalSpeed;
}