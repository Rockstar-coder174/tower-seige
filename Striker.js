class Striker extends BaseClass{
    constructor(x,y){
        //'restitution':0.8,
        //'friction':1.0,
        //'density':1.0
        super(x,y,50,50);
        this.image = loadImage("polygon.png")
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}