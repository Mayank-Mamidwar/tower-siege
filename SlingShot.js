class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);

        World.add(userWorld, this.sling);
    }

    //function definition to attach a body to constraint (this.sling.bodyA)
     attach(body){
         this.sling.bodyA = body;
     }

     //function definition to detach(release) a body from constraint (this.sling.bodyA)
    fly(){
        this.sling.bodyA = null;
    }

    display(){


        //if the sling has a body attached to it as this.sling.bodyA = body
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
           
            
            pop();
        }
    }
    
}