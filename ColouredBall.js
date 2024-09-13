class ColouredBall{
    constructor(x,y,r,colour){
        var options = {
            isStatic: false,
            restitution: 0.95,
            friction: 0.02, 
        };
  
        this.body = Bodies.circle(x,y,r,options);
        this.color = colour;
        
  
        this.draw = function(){
            fill(this.color);
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