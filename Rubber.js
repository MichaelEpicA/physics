class Rubber {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("cyan");
      ellipse(0, 0,this.radius*2);
      pop();
    }
  };
  