class Paper
{
    constructor(x,y,radius)
    {
        var options= {
            'isStatic':false,
            'restition':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
       display ()
       {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y,this.radius)
        ellipse(pos.x,pos.y,this.radius,this.radius);
        stroke("green")
        strokeWeight(0.5)
        fill("purple");
        ellipseMode(RADIUS);
        
        pop();
        
       }
};  
