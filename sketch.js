const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane,hammer,stone,iron,ball;


function setup(){
    canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone();
    iron = new Iron();
    ball = new Rubber();
}

function draw(){
    background("lightBlue");

    Engine.update(engine);
    
    ball.display();  
    plane.display();
    hammer.display();
    stone.display();
    iron.display();
  
}