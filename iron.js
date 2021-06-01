class Iron{
    constructor(){
        var options={
            'density':12,
            'friction': 0.9,
            'restitution':0.8
        }
        this.body=Bodies.rectangle(600,450,100,100,options);
        this.w=100;
        this.h=100;
        World.add(world, this.body);

    }
    display(){
        fill("black");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
    }
}