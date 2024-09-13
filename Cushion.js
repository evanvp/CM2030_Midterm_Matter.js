class Cushion{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            restitution: 1,
        };

        this.body = Bodies.rectangle(x,y,w,h, options);
        

        this.draw = function(){
            noStroke();
            fill(100,0,0,70);
            drawVertices(this.body.vertices);
        }

    }
}

function drawVertices(vertices) {
    beginShape();
    for (var i = 0; i < vertices.length; i++) {
      vertex(vertices[i].x, vertices[i].y);
    }
    endShape(CLOSE);
  }