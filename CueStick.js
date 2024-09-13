class CueStick{
    constructor(cueBall){
        this.length = width/10;
        this.width = width/150;
        this.colour = "brown";

        this.cueBall = cueBall;

        this.position = createVector(0, 0);
        this.angle = 0;

        this.update = function(){
            this.position = createVector(mouseX, mouseY);
            this.angle = atan2(mouseY - this.cueBall.body.position.y, mouseX - this.cueBall.body.position.x);
        }

        this.draw = function(){
            push();
            translate(this.position.x, this.position.y);
            rotate(this.angle);

            fill(this.colour);
            rect(0, -this.width/2, this.length, this.width);
            pop();
        }

    }


}