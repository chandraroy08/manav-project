//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
//var engine,world;

var Timer=5
var sleepingbutton
var PLAY=1
var END=0
var gameState=PLAY

function preload(){
standingimg=loadImage("standing.png")
sittingimg=loadImage("sitting.png")
sleepingimg=loadImage("sleeping.png")
coinimg=loadImage("coin.png")
roomimg=loadImage("living_room.JPG")
sleepingbuttonimg=loadImage("sleep button.png")
playbuttonimg=loadImage("playbuttton.png")
}

function setup() {
  createCanvas(800,400);
  
  standing=createSprite(600,280)
  standing.addImage(standingimg)
  standing.scale=0.2
  standing.visible=false
  
  playbutton= createSprite(500,280)
  playbutton.addImage(playbuttonimg)
  playbutton.scale=0.05

  sitting=createSprite(500,280)
  sitting.addImage(sittingimg)
  sitting.scale=0.2
  sitting.visible= false
  
  sleepingbutton=createSprite(320,260,20,30)
  sleepingbutton.addImage(sleepingbuttonimg)
  sleepingbutton.scale=0.05


  coin=createSprite(500,280)
  coin.addImage(coinimg)
  coin.scale=0.3
  coin.visible= false


  coingroup= new Group();

}

function draw() {
  background(roomimg);
  
 
  if(mousePressedOver(playbutton)){
    
    playbutton.visible= false
  
    Timer--
  
    
  
}
  
if(Timer===0){ 
  coin.velocityY=0
  //standing=createSprite(400,280)
  //standing.addImage(standingimg) 
  //standing.scale=0.2 
  standing.visible=true
  sitting.visible=false
  coin.visible=false
  //sleepingbutton= true
  }

  if(mousePressedOver(sleepingbutton)&& Timer===0){
    sleeping=createSprite(320,260)
    sleeping.addImage(sleepingimg)
    sleeping.scale=0.2
    standing.destroy()
    sitting.visible=false
    standing.visible=false
    
  }

  

  drawSprites();
  fill("black")
  textSize(80)
  text(Timer,600,80)
}
function timey(){
  if(frameCount% 20===0 && Timer>0){
    Timer--  
    }
}
function coiny(){
  if(frameCount%60===0){
    coin=createSprite(500,280)
    coin.addImage(coinimg)
    coin.scale=0.3
    coin.velocityY=-5 
    coingroup.add(coin)
    }
}