class Box {
    constructor(x, y, width, height) {
        var options = {
            // JSON (javascript object notation) format  
            'restitution': 0.8,
            'friction': 1.0,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(userWorld, this.body);
    }
    display() {


        // console.log(this.body.speed);

        if (this.body.speed <= 7) {
            var pos = this.body.position; 
            rectMode(CENTER);
            fill(this.color);
            rect(pos.x, pos.y, this.width, this.height);


        }
        else {

            World.remove(userWorld, this.body);
            push();
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();

        }
    }


    score() {
        if (this.visibility < 0 && this.visibility > -1005) {
          score++;
        }
      }
    

}


