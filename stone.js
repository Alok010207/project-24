class Stone {
    constructor() {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(300,500, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){ 
      push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
      pop();
    };
  };
  