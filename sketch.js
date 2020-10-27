/*var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;*/
var zooImg;
var zoo;
var form;
var backgroundImg;
var backgroundImg2;
var tigerImg,elephantImg,lionImg,rabbitImg,giraffeImg,monkeyImg,squirrelImg;
var tiger,elephant,lion,rait,giraffe,monkey,squirrel;
var player;
var gameState = 0;

function preload(){
zooImg = loadImage("animalspics/zoo.png");
backgroundImg = loadImage("animalspics/background.jpg");
backgroundImg2 = loadImage("animalspics/preview.jpg");
tigerImg = loadImage("animalspics/tiger.png");
elephantImg = loadImage("animalspics/elephant.png");
lionImg = loadImage("animalspics/lion.png");
rabbitImg = loadImage("animalspics/rabbit.png");
giraffeImg = loadImage("animalspics/giraffe.png");
monkeyImg = loadImage("animalspics/monkey.png");
squirrelImg = loadImage("animalspics/squirrel.png")
}
function setup() {
  createCanvas(displayWidth-150,displayHeight-100);

zoo = createSprite(displayWidth/2 - 320, displayHeight/2 - 450);
zoo.addImage("zoo",zooImg);
zoo.scale = 2;

tiger = createSprite(displayWidth/2 + 420, displayHeight/2 +320);
tiger.addImage("tiger",tigerImg);
tiger.scale = 1;

monkey = createSprite(displayWidth/2 + 360, displayHeight/2 - 190);
monkey.scale = 1.5;
monkey.addImage("monkey",monkeyImg);

squirrel = createSprite(displayWidth/2 - 780, displayHeight/2 +160);
squirrel.scale = 0.3;
squirrel.addImage("squirrel",squirrelImg);

  player = new Player();
form = new Form();
}

function draw() {
background(backgroundImg);
form.display();

if (gameState === 1) {
 background(backgroundImg2);
form.title.style('color', 'brown');
form.title.html("Virtual Zoo");
form.title.position(displayWidth/2 - 520, displayHeight/2 - 570);
form.title.style('font-size', '170px');
form.title.visible = true;
tiger.visible = false;
monkey.visible = false;
squirrel.visible = false;
zoo.visible = false;
zoo2.visible = true;
}

if (gameState === 2) {
  background(backgroundImg2); 
}

drawSprites();

}