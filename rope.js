class Rope{
    constructor(bodyA,pointB)
     {
        var options= {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10  
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.pointB;
        stroke("blue");
        strokeWeight(4);

        line(pos1.x,pos1.y,pos2.x,pos2.y);

    }
}