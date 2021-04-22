class Rope {
    constructor(x,y){
        var options = {
            pointB : x,
            bodyA : y
        }
        this.rope = Matter.Constraint.create(options);
        Matter.World.add(world19, this.rope);
    }
    display(){
        var pos1 = this.rope.pointB;
        var pos2 = this.rope.bodyA.position;
        push();
        strokeWeight(5);
        stroke("black");
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        pop();
    }
}