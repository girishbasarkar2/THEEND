
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,200) 
child()
  ground = createSprite(300,185,700,10)
  ground.velocityX = -10
  obstacleGroup= new Group()
  FoodGroup= new Group()
}


function draw() {
background("peachPuff")
  if (ground.x<300){
    ground.x = ground.width/2
  }
  food()
  rocks()
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  if(keyDown("space")&&monkey.isTouching(ground)){
    monkey.velocityY = -12
  }
   if (obstacleGroup.isTouching(monkey)){
    monkey.velocityY = 0
    ground.velocityX = 0
     obstacleGroup.setVelocityXEach(0)
     FoodGroup.setVelocityXEach(0)
  }
  stroke("black")
  textSize(20)
  fill("black")
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+score,200,50)
  drawSprites()
}
function rocks(){
  if (frameCount % 300 === 0) {
  obstacle= createSprite(600,165,10,10)
  obstacle.addImage("a",obstacleImage)
  obstacle.scale = 0.125
  obstacle.velocityX = -3
  obstacle.lifetim = 150
  obstacleGroup.add(obstacle)
  }
}
function child(){
  monkey = createSprite(50,150,10,10)
  monkey.addAnimation("yo",monkey_running)
  monkey.scale = 0.1
}
function food(){
   if (frameCount % 100 === 0) {
  banana = createSprite(600,120,40,10)
  banana.y = Math.round(random(60,70))
  banana.addImage("a",bananaImage)
  banana.scale = 0.1
  banana.velocityX = -3
  banana.lifetim = 150
  FoodGroup.add(banana)
 }
}