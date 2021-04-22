class Stand {
    constructor(x,y,width,height){
        var options = {
          isStatic : true
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("stand.png");
        Matter.World.add(world19, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        image(this.image,pos.x,pos.y,this.width,this.height);
        rect(image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}