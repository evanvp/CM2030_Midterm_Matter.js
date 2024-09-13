class RedBall{
  constructor(x,y,r){
      var options = {
          isStatic: false,
          restitution: 0.95,
          friction: 0.02, 
      };

      this.body = Bodies.circle(x,y,r,options);
      

      this.draw = function(){
          fill(255,0,0);
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