
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var boxBottom,boxLeft,boxRight;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper (100,200,10,10);
	ground=new Ground (400,570,800,20);
	boxBottom=new BoxBottom(650,550,200,20)
	boxLeft=new BoxSides(560,490,20,100)
	boxRight=new BoxSides(740,490,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  paper.display();
  ground.display();
  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-20});
	}
}



