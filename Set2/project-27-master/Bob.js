class Bob {
    constructor(x, y, diameter) {
        var options = {
            'density': 1.2,
            'friction': 0.5,
            'restitution': 0.3
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = 50;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        stroke('blue')
        fill('red')
        ellipseMode(CENTER);
        ellipse(0, 0, this.diameter);
        pop();
    }
}