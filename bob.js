class Bob{
    constructor(x,y,r) {
        var options = {
            isStatic : false,
            restitution : 1.0,
            friction : 0.0,
            density : 0.8
        }

        this.body= Bodies.circle(x,y,r/2,options);
        this.x = x;
        this.y = y;
        this.r = r/2;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("purple");
        stroke("yellow");
        strokeWeight(2);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}