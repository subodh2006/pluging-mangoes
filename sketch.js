
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var boy1;
var ground1;
var world,engine;
var tree1; 
var stone1;
var chain1;

function preload(){
}

function setup() {
createCanvas(800, 700);

engine = Engine.create();
world = engine.world;

Engine.run(engine);

stone1 = new Stone(120,600,50,20);
boy1 = new Boy(120,595,20,40);

ground1 = new Ground(400,650,800,20);

tree1 = new Tree(500,320,200,500);

mango1=new mango(230,50,30,30);
mango2=new mango(200,50,30,30);
mango3 = new mango(210,150,30,30);
mango4=new mango(300,120,30,30);
mango5=new mango(210,80,30,30);

chain1 = new Chain(stone1.body,{x:75,y:550});



}


function draw() {
   background("lightgreen");
  rectMode(CENTER);
 ground1.display();
  boy1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
 mango4.display();
 mango5.display();
 stone1.display();
 chain1.display();
  drawSprites();
 
}



function mouseDragged(){
 Matter.Body.setPosition(mango1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  chain1.fly();
// Matter.Body.setStatic(mango1.body,false);
}


