class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
var Anchor1X=point.x
var Anchor1Y=point.y

var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY

line(pointA.x, pointA.y, pointB.x, pointB.y);
}
    
}