class Rubber{
    constructor(){
        var options = {
            'density':30,
            'friction': 3,
            'restitution':0.9
          };
        this.body=Bodies.circle(900,550,20,options);
        this.r=20;
        this.r=20;
        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("darkblue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}