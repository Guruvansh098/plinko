class Plinko{
    constructor(x, y ) {
        var opitions = {
restitution:1,friction:0,
            isStatic: true
        }
       this.r=10
        this.body = bodies.rectangle(x,y,this.r,options);
      
        World.add(world,this.body);
        
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.r,this.r)
        pop()
      
    }
};