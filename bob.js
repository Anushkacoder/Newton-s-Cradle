class Bob {
   constructor(x,y,radius){
       var options = {
         isStatic : false,
         restitution : 1,
         friction : 0,
         frictionAir : 0.0,
         slop : 1,
         inertia : Infinity,
         density : 0.3
       };
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       this.image = loadImage("pearl.png");
       Matter.World.add(world19, this.body);
   }
   display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y);
      rotate(angle);
      fill("blue");
      ellipse(0,0,this.radius);
      image(this.image,0,0,65,65);
      pop();
   }
}