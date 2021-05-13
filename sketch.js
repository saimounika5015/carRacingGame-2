var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var cars;
var car1;
var car2;
var car3;
var car4;
var rank1Img,rank2Img,rank3Img,rank4Img;
var car1Img,car2Img,car3Img,car4Img,bg
function preload(){
  car1Img= loadImage("images/car1.png");
  car2Img= loadImage("images/car2.png");
  car3Img= loadImage("images/car3.png");
  car4Img= loadImage("images/car4.png");
  bg= loadImage("images/track.jpg");
  rank1Img =loadImage("images/rank1.jpg");
  rank2Img =loadImage("images/rank2.jpg")
  rank3Img =loadImage("images/rank3.jpg")

}


function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4&& gameState==0) {
    game.update(1);

  }
  if (gameState === 1) {
    game.play();
  }
  if(player.getCarsAtEnd()===4){
    game.update(2)
  }
 
  console.log(gameState)
  if(gameState===2){
    clear();
    game.end()
  }
}
