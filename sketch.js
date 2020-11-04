const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Bodies = Matter.Bodies;
var particles=[];
var pinlkos=[];
var divisons=[];
var dh=300

function setup() {
  createCanvas(800,800);
  
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20)

}


function draw() {
  background("black");
  for(var k=0;k<=width;k=k+80){
    divisons.push(new Divisions(k,height-dh/2,10,dh));
  }
  for(var j =40;j<=width;j=j+50){
    pinlkos.push(new Plinko(j,75))
  }
  for(var j =15; j <=width-10; j=j+50){
    pinlkos.push(new Plinko(j,175))
  }

  drawSprites();
}