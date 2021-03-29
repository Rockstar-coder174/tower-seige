class Targets extends BaseClass{
    constructor(x,y,width,height){
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        super(x,y,width,height);
        this.image=loadImage("Target.png");
        
    }
}