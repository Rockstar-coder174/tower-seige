const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(400,275,220,15)

    target1 = new Targets(330,235,30,40);
    target9 = new Targets(360,235,30,40)
    target2 = new Targets(390,235,30,40);
    target3 = new Targets(420,235,30,40);
    target4 = new Targets(450,235,30,40);
    target5 = new Targets(360,195,30,40);
    target6 = new Targets(390,195,30,40);
    target7 = new Targets(420,195,30,40);
    target8 = new Targets(390,155,30,40);
    
    striker = new Striker()
}
function draw(){
    background(0)
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    target1.display();
    target2.display();
    target3.display();
    target4.display();
    target5.display();
    target6.display();
    target7.display();
    target8.display();
    target9.display();
    striker.display();
    ground1.display();
}