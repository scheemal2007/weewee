
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1
var ground1

var dustbin1, dustbin2, dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(150,650,20)
	ground1=new ground(400,680,800,20)
	dustbin1 = createSprite(650,620,10,100) 
	dustbin2 = createSprite(750,620,10,100)
	dustbin3 = createSprite(700,660,100,10)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  ground1.display()
  drawSprites();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-40})
   }
}



